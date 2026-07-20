# WingRep webinar deck

**"Build your own AI sales assistant with Claude"** is a 19-slide interactive HTML presentation for WingRep, modeled on the workplace.io style: real imagery, surgical humor, and live interactions. The deck teaches the coaching-loop framework, four prompting moves, and five reusable prompts before moving through product proof, differentiation, the manual cost, a three-week trial, and a webinar-only founder-onboarding offer. Markup, CSS and JS live in `wingrep-webinar.html`; the base64 images are split into a sibling `wingrep-assets.js` (loaded locally, no network) so the deck stays small and editable.

## View it

- **Live:** see the GitHub Pages URL in the repo's **Settings → Pages** (enabled for this repo).
- **Local:** open `wingrep-webinar.html` directly in a browser — it works straight from `file://`, as long as `wingrep-assets.js` sits next to it. Or serve the folder and visit the root:
  ```bash
  python3 -m http.server 8758
  # then open http://localhost:8758/
  ```

## Edit it

The deck markup, CSS and JS all live in **`wingrep-webinar.html`** (one Google Fonts link, no build step). The images are base64 in **`wingrep-assets.js`** as `window.IMG` / `window.EMBED` / `window.CLIENTS` / `window.ASSETS` — edit copy/layout in the HTML, swap imagery in the JS. Keep the two files together.

Slide 5 ("Hi, I'm Alan") deliberately uses an opaque paper background so the global ambient gradient cannot show through. Its LEGO shelf, photo wall, and bouncing-headshot animation remain self-contained.

Slide 7 ("AI, minus the jargon") shows the Fable 5 butterfly numeral from `window.ASSETS.slide9_fable`. The transparent cutout and drifting butterflies self-hide below 820px and stop moving under `prefers-reduced-motion`.

Slide 10 is the audience follow-along build. Its visible prompts and copy buttons use bracketed templates; the fictional Cobalt values live only in the presenter runbook. Slide 12 is presenter-controlled: Forward moves Before → During → After → slide 13, Previous reverses those states, the stage pills jump directly, and Replay resets to Before. Nothing advances on a timer.

Slides 13 through 19 follow one closing arc: product proof, differentiation, the manual-admin game, the audience recap, the standard trial, the first founder-onboarding reveal, and a final `wingrep.ai/webinar` CTA.

Navigation while presenting: **← / → / Space** to move, **F** for fullscreen, **S** for the slide index. On slide 12, the normal navigation controls move through the three product states before leaving the slide.

## House rules (keep these)

- Must keep working from `file://` with `wingrep-assets.js` alongside (no network/CDN image fetches).
- All images embedded as base64 in `wingrep-assets.js` (no external image URLs).
- **No em dashes** anywhere in the copy.
- Scoped CSS per set-piece; reduced-motion fallbacks for every animation.

> `index.html` is just a redirect to `wingrep-webinar.html` so the site root opens the deck.
