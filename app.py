"""IMPORTNOW — Flask application (China → India sourcing & import management)."""
import hashlib
import os
import sqlite3
import time
from datetime import datetime

from flask import Flask, g, jsonify, render_template, request

from posts import POSTS

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "instance", "importnow.db")

WHATSAPP_NUMBER = "919989724320"

app = Flask(__name__, template_folder=".")

@app.context_processor
def inject_posts():
    return {"posts": POSTS}


# ---------- database ----------

def get_db():
    if "db" not in g:
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        g.db = sqlite3.connect(DB_PATH)
        g.db.row_factory = sqlite3.Row
        g.db.execute(
            """CREATE TABLE IF NOT EXISTS inquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                city TEXT NOT NULL DEFAULT 'Hyderabad',
                category TEXT NOT NULL,
                quantity TEXT,
                budget TEXT,
                details TEXT,
                email TEXT,
                phone TEXT,
                dedupe_key TEXT,
                created_at TEXT NOT NULL
            )"""
        )
    return g.db


@app.teardown_appcontext
def close_db(_exc):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    with app.app_context():
        get_db().commit()


# ---------- helpers ----------

def is_duplicate(db, dedupe_key):
    row = db.execute(
        "SELECT created_at FROM inquiries WHERE dedupe_key = ? ORDER BY id DESC LIMIT 1",
        (dedupe_key,),
    ).fetchone()
    if not row:
        return False
    try:
        last = datetime.fromisoformat(row["created_at"]).timestamp()
    except ValueError:
        return False
    return (time.time() - last) < 180  # same payload within 3 minutes


def build_whatsapp_message(f):
    lines = [
        "Hi ImportNow, I'd like a sourcing quote.",
        "",
        f"Name: {f['name']}",
        f"City: {f['city']}",
        f"Category: {f['category']}",
    ]
    if f["quantity"]:
        lines.append(f"Quantity: {f['quantity']}")
    if f["budget"]:
        lines.append(f"Budget: {f['budget']}")
    if f["details"]:
        lines.append(f"Details: {f['details']}")
    if f["email"]:
        lines.append(f"Email: {f['email']}")
    if f["phone"]:
        lines.append(f"Phone: {f['phone']}")
    return "\n".join(lines)


REQUIRED_FIELDS = ("name", "city", "category")
OPTIONAL_FIELDS = ("quantity", "budget", "details", "email", "phone")


# ---------- routes ----------

@app.route("/")
def home():
    return render_template("index.html", posts=POSTS[:3])


@app.route("/blog")
def blog():
    return render_template("blog.html", posts=POSTS, posts_json=POSTS)


@app.route("/blog/<slug>")
def blog_detail(slug):
    post = next((p for p in POSTS if p["slug"] == slug), None)
    if post is None:
        return render_template("404.html"), 404
    others = [p for p in POSTS if p["slug"] != slug]
    related = (
        [p for p in others if p["cat"] == post["cat"]]
        + [p for p in others if p["cat"] != post["cat"]]
    )[:3]
    popular = others[:5]
    return render_template("blog_detail.html", post=post, related=related, popular=popular)


@app.route("/quote", methods=["POST"])
def quote():
    data = request.get_json(silent=True) or {}
    form = {}
    for key in REQUIRED_FIELDS + OPTIONAL_FIELDS:
        value = str(data.get(key) or "").strip()
        form[key] = value[:2000]  # basic length cap

    missing = [k for k in REQUIRED_FIELDS if not form[k]]
    if missing:
        return jsonify(ok=False, error=f"Please fill in: {', '.join(missing)}"), 400

    dedupe_key = hashlib.sha256(
        "|".join(form[k] for k in REQUIRED_FIELDS + OPTIONAL_FIELDS).encode("utf-8")
    ).hexdigest()

    db = get_db()
    if is_duplicate(db, dedupe_key):
        message = build_whatsapp_message(form)
        url = f"https://wa.me/{WHATSAPP_NUMBER}?text={__import__('urllib.parse', fromlist=['quote']).quote(message)}"
        return jsonify(ok=True, duplicate=True, whatsapp_url=url,
                       message="This inquiry was already received a moment ago.")

    db.execute(
        """INSERT INTO inquiries (name, city, category, quantity, budget, details, email, phone, dedupe_key, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (form["name"], form["city"], form["category"], form["quantity"], form["budget"],
         form["details"], form["email"], form["phone"], dedupe_key,
         datetime.now().isoformat(timespec="seconds")),
    )
    db.commit()

    from urllib.parse import quote
    message = build_whatsapp_message(form)
    url = f"https://wa.me/{WHATSAPP_NUMBER}?text={quote(message)}"
    return jsonify(ok=True, duplicate=False, whatsapp_url=url,
                   message="Inquiry received. Opening WhatsApp…")


@app.errorhandler(404)
def not_found(_e):
    return render_template("404.html"), 404


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=True)
