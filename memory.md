# Project memory

## Product intent & audience

- **IMPORTNOW** — a marketing + lead-gen website for a China→India import/logistics business.
- Audience: Indian businesses sourcing goods from China; emphasis on low MOQ (1 piece), Shanghai operations, and end-to-end shipment visibility.
- Key conversion path: quote form → saved to local DB → WhatsApp handoff to +91 99897 24320.

## Brand personality & voice

- Professional, trustworthy, trade-focused editorial tone.
- Content mixes promotional sections with practical logistics info (routes, Canton Fair dates, FAQs).

## Visual design & UX direction

- Light editorial style with red accent; fonts Sora + Inter.
- Sticky header, smooth scroll-reveal animations, hover-tilt cards, word-by-word headline animation.
- Hero: live 3D globe with China→India trade routes; four stats (500+, 83K+, 1 pc MOQ, Shanghai).
- Infinite scrolling route ticker with 10 exact routes.
- Scroll-controlled cinematic 3D shipment-journey scene (Shanghai→India, cranes, ship, day counter to Day 35, 8 milestones); reverses on scroll up.
- Sections: services, six product hubs, Shanghai licence as styled business-licence card, China trips with Canton Fair dates, recent shipments, testimonials, blog, FAQ accordion, contact.
- Demo content (shipment cards, testimonials) explicitly labelled as demo.
- Floating WhatsApp button on every page; footer blog list on every page (posts injected globally to templates).
- Responsive (phone/tablet/desktop); reduced-motion support.
- Cards currently use gradient-plus-icon style (stock-photo service was unavailable); real photos are a future option.

## Decisions, constraints & rationale

- Framework: Flask 3.1.3, Python, directly runnable (`python app.py`).
- Data: local SQLite DB persists quote inquiries; duplicate submissions blocked.
- Blog: real Flask routes with individual article pages; custom 404 page.
- Forms: server-side validation before DB save and WhatsApp redirect.
- Server: runs on port 5000, also accessible over LAN (e.g. http://192.168.1.6:5000); README documents Windows venv/activate/pip flow and firewall steps; notes LAN IP may change.
- Faithfully rebuilt design from a user-provided reference site (animations, sections, layout).

## Open questions & assumptions

- Whether real photographs should replace gradient+icon card styling later.
- Exact persistence of the reference site's content vs. demo placeholders over time.
- Deployment target beyond local/LAN (none specified yet).