# WingRep webinar deck

**"Build your own AI sales assistant with Claude"** — an interactive HTML presentation (17 slides) for WingRep, modeled on the workplace.io style: real imagery, surgical humor, and live interactions. The deck is built to teach first (roughly 80% hands-on content, 20% product): it walks through the coaching-loop framework, the four prompting moves, and five copy-paste prompts before a short, honest WingRep section near the end. Markup, CSS and JS live in `wingrep-webinar.html`; the base64 images are split into a sibling `wingrep-assets.js` (loaded locally, no network) so the deck stays small and editable.

## View it

- **Live:** see the GitHub Pages URL in the repo's **Settings → Pages** (enabled for this repo).
- **Local:** open `wingrep-webinar.html` directly in a browser — it works straight from `file://`, as long as `wingrep-assets.js` sits next to it. Or serve the folder and visit the root:
  ```bash
  python3 -m http.server 8758
  # then open http://localhost:8758/
  ```

## Edit it

The deck markup, CSS and JS all live in **`wingrep-webinar.html`** (one Google Fonts link, no build step). The images are base64 in **`wingrep-assets.js`** as `window.IMG` / `window.EMBED` / `window.CLIENTS` / `window.ASSETS` — edit copy/layout in the HTML, swap imagery in the JS. Keep the two files together.

Slide 9 ("AI, minus the jargon") has an optional Fable 5 image slot next to the intro line. It stays hidden until the asset exists, so add a base64 entry `"slide9_fable"` to `window.ASSETS` in `wingrep-assets.js` and the badge (plus its two-up layout) lights up automatically. Any aspect ratio is fine; it renders as a rounded square via `object-fit:cover`.

Navigation while presenting: **← / → / Space** to move, **F** for fullscreen, **S** for the slide index.

## House rules (keep these)

- Must keep working from `file://` with `wingrep-assets.js` alongside (no network/CDN image fetches).
- All images embedded as base64 in `wingrep-assets.js` (no external image URLs).
- **No em dashes** anywhere in the copy.
- Scoped CSS per set-piece; reduced-motion fallbacks for every animation.

> `index.html` is just a redirect to `wingrep-webinar.html` so the site root opens the deck.
