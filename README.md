# WingRep webinar deck

**"Build your own AI sales assistant with Claude"** — a single self-contained, interactive HTML presentation (21 slides) for WingRep, modeled on the workplace.io style: real imagery, surgical humor, and live interactions, all in one file.

## View it

- **Live:** see the GitHub Pages URL in the repo's **Settings → Pages** (enabled for this repo).
- **Local:** open `wingrep-webinar.html` directly in a browser (it works straight from `file://`), or serve the folder and visit the root:
  ```bash
  python3 -m http.server 8758
  # then open http://localhost:8758/
  ```

## Edit it

Everything lives in **`wingrep-webinar.html`** — one file, with all CSS, JS, fonts (one Google Fonts link), and images (base64) inline. No build step.

Navigation while presenting: **← / → / Space** to move, **F** for fullscreen, **S** for the slide index.

## House rules (keep these)

- Single self-contained file; must keep working from `file://`.
- All images embedded as base64 (no external image URLs).
- **No em dashes** anywhere in the copy.
- Scoped CSS per set-piece; reduced-motion fallbacks for every animation.

> `index.html` is just a redirect to `wingrep-webinar.html` so the site root opens the deck.
