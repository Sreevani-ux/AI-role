# IMPORTNOW — China → India Import Website

A complete Flask website for IMPORTNOW: product sourcing, factory inspection, shipping,
customs clearance and doorstep delivery from China to India, with a scroll-driven 3D
shipment journey, blog, FAQ and WhatsApp-powered quote form backed by SQLite.

## Features

- Light editorial design matching the ImportNow concept reference (Sora + Inter, red accent)
- 3D globe hero with animated China → India trade routes (three.js)
- Seamless infinite route ticker (Foshan → Hyderabad, Yiwu → Adilabad, …)
- **Scroll-driven, fully reversible 35-day shipment journey** — Shanghai → Hyderabad:
  cranes load containers at the Chinese port, the ship sails, unloads in India;
  progress bar, day counter and 8 milestones are driven purely by scroll position
- Services, product hubs, Shanghai company licence, China business trips,
  recent shipments, testimonials, blog, FAQ
- Working quote form: validates, saves the inquiry to SQLite (with duplicate-submit
  protection), then opens WhatsApp `https://wa.me/919989724320` with the message pre-filled
- Blog listing with category filter, search and pagination; individual article pages
- Custom 404 page, floating WhatsApp button, responsive down to phones,
  reduced-motion support

## Run on Windows

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Then open:

- http://127.0.0.1:5000
- http://192.168.1.6:5000 (from any device on the same Wi-Fi — phones included)

The app binds to `0.0.0.0:5000`. If a phone cannot reach `http://192.168.1.6:5000`,
allow Python through Windows Firewall:

1. Windows Security → Firewall & network protection → Allow an app through firewall
2. Find **Python** (or add `venv\Scripts\python.exe`) and tick **Private** networks

Note: `192.168.1.6` is your current local IP. If your router assigns a different one
later (`ipconfig` → IPv4 Address), use that instead.

## Project structure

```text
importnow/
├── app.py               Flask app, routes, SQLite storage
├── requirements.txt
├── README.md
├── data/
│   └── posts.py         Blog articles
├── templates/
│   ├── base.html        Header, footer, WhatsApp button, sprite
│   ├── index.html       Homepage (all sections)
│   ├── blog.html        Blog listing
│   ├── blog_detail.html Article page
│   └── 404.html
├── static/
│   ├── css/style.css
│   └── js/
│       ├── main.js      Nav, ticker, reveal, tilt, quote form → WhatsApp
│       ├── globe.js     3D globe hero
│       └── voyage.js    Scroll-driven shipment journey
└── instance/
    └── importnow.db     Created automatically on first run
```

## Routes

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/blog` | Blog listing (filter, search, pagination) |
| `/blog/<slug>` | Individual article |
| `/quote` | POST — validate + save inquiry, returns WhatsApp URL |
| anything else | Custom 404 page |

## Notes

- Shipment cards and testimonials are labelled illustrative demo content.
- The WhatsApp number **+91 99897 24320** is used consistently everywhere.
- The blog content is sample content; review facts, duty rates and dates before going live.
