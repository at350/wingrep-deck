# WingRep webinar deck

**"Build your own AI sales assistant with Claude"** is a 19-slide interactive HTML presentation for WingRep, modeled on the workplace.io style: real imagery, surgical humor, and live interactions. The deck teaches the coaching-loop framework, four prompting moves, and four core prompts before moving through product proof, differentiation, the manual cost, a three-week trial, and a free attendee-only setup session with Alan. Markup, CSS and JS live in `wingrep-webinar.html`; base64 imagery lives in `wingrep-assets.js` and `alan-linkedin-asset.js`, and the fictional Sales OS starter files live in `wingrep-demo-data.js`. All four files load locally with no network dependency.

## View it

- **Live:** see the GitHub Pages URL in the repo's **Settings → Pages** (enabled for this repo).
- **Local:** open `wingrep-webinar.html` directly in a browser — it works straight from `file://`, as long as `wingrep-assets.js`, `wingrep-demo-data.js`, and `alan-linkedin-asset.js` sit next to it. Or serve the folder and visit the root:
  ```bash
  python3 -m http.server 8758
  # then open http://localhost:8758/
  ```

## Edit it

The deck markup, CSS and JS all live in **`wingrep-webinar.html`** (one Google Fonts link, no build step). Most images are base64 in **`wingrep-assets.js`** as `window.IMG` / `window.EMBED` / `window.CLIENTS` / `window.ASSETS`; Alan's current profile photo is embedded in **`alan-linkedin-asset.js`**. The copyable fictional transcripts, scorecard, and coaching log are embedded in **`wingrep-demo-data.js`**. Keep all four files together.

Slide 5 ("Hi, I'm Alan") deliberately uses an opaque paper background so the global ambient gradient cannot show through. Its LEGO shelf, photo wall, and bouncing-headshot animation remain self-contained.

Slide 7 ("AI, minus the jargon") shows the Fable 5 butterfly numeral from `window.ASSETS.slide9_fable`. The transparent cutout and drifting butterflies self-hide below 820px and stop moving under `prefers-reduced-motion`.

Slide 8 includes a one-click presenter control for copying the attendee prompt-pack link into Zoom chat. Slide 10 is the audience follow-along build and presenter cockpit. Its setup creates a reusable `deals/`, `reps/`, and `game-plans/` workspace, then seeds Cobalt Freight as the first fictional deal. The filled prompts and built-in file browser keep the live example copy-ready without framing the whole workspace around one company. A sixth Recap tab reviews what the room just built; **See the missing piece** then advances into the clearer Sales OS blue screen on slide 11. Slide 12 is presenter-controlled: Forward moves Before → During → After → slide 13, Previous reverses those states, and the stage pills jump directly. Nothing advances on a timer.

Slides 13 through 19 follow one closing arc: product proof, differentiation, the manual-admin game, the audience recap, the standard trial, hands-on setup help with Alan, and a final Calendly CTA. Expanded email reading mode exits cleanly with Escape, Close, or the backdrop; Left and Right also close the reading view before navigating so presenter input cannot get trapped.

Navigation while presenting: **← / → / Space** to move, **F** for fullscreen, **S** for the slide index, and **N** to toggle page numbers. Page numbers are hidden by default. On slide 12, the normal navigation controls move through the three product states before leaving the slide.

## House rules (keep these)

- Must keep working from `file://` with `wingrep-assets.js`, `wingrep-demo-data.js`, and `alan-linkedin-asset.js` alongside (no network/CDN image fetches).
- All images embedded as base64 in `wingrep-assets.js` or `alan-linkedin-asset.js` (no external image URLs).
- **No em dashes** anywhere in the copy.
- Scoped CSS per set-piece; reduced-motion fallbacks for every animation.

> `index.html` is just a redirect to `wingrep-webinar.html` so the site root opens the deck.
