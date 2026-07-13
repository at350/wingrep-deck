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

Slide 9 ("AI, minus the jargon") shows an oversized Fable 5 numeral (a "5" formed from vintage butterflies) anchored large on the right, loaded from the `"slide9_fable"` entry in `window.ASSETS` (`wingrep-assets.js`). It's a transparent WebP cutout, so it floats straight on the cream slide with no box, and the slide splits into a two-zone hero layout (teaching content left, numeral right). A few individual butterflies (`s9_bf1`–`s9_bf5`, also transparent cutouts from the same plate) flutter around the numeral with a gentle CSS wing-flap and drift. Below 820px the numeral and its butterflies drop and the slide collapses to one column to keep the teaching content tight; the flutter is also removed entirely under `prefers-reduced-motion` (still slide). The slot self-hides if the `slide9_fable` key is ever removed (no broken layout), so to swap the numeral just replace that one base64 entry.

Navigation while presenting: **← / → / Space** to move, **F** for fullscreen, **S** for the slide index.

## House rules (keep these)

- Must keep working from `file://` with `wingrep-assets.js` alongside (no network/CDN image fetches).
- All images embedded as base64 in `wingrep-assets.js` (no external image URLs).
- **No em dashes** anywhere in the copy.
- Scoped CSS per set-piece; reduced-motion fallbacks for every animation.

> `index.html` is just a redirect to `wingrep-webinar.html` so the site root opens the deck.
