# Webinar demo kit

Everything to have staged in Claude before going live. All names and companies are fictional (built to match the WingRep ICP: mid-market B2B, MEDDIC shop, security vertical, buying committee). Never demo on a real customer call.

## What's in here
- `transcripts/call-1-discovery-cobalt.md`: the WEAK call. Deliberate gaps: Jordan monologues and over-demos, deflects Priya's pricing question, accepts "the CISO is busy" with no plan, ignores the competitor mention. Pain and metrics evidence are real, so the scorecard shows a mix of STRONG / PARTIAL / MISSING, not all red.
- `transcripts/call-2-trial-checkin-cobalt.md`: the follow-up, 2 weeks later. Jordan executes the focus from the coaching log (path to Marcus, competitor question), so the memory demo has a payoff.
- `jordan-coaching-log.md`: the rep memory file, pre-loaded with 2 entries so continuity shows instantly.
- `cobalt-deal-scorecard.md`: the deal memory file, MEDDIC state after call 1.
- `prompts.md`: the copy-paste prompt library (also the attendee handout).

## Claude setup (do this the day before)
1. Create a Project called **"Sales Coach"**. Upload the two transcripts, the coaching log, and the scorecard as project files. Keep `prompts.md` open somewhere you can copy from (Notes, a pinned doc).
2. **Pre-run both demos** in two conversations and leave them in the sidebar, named clearly (e.g. "MEDDIC scorecard ✓", "Coaching loop ✓"). If live generation is slow or weird, scroll the pre-run one instead; nobody can tell.
3. Fresh window with only Claude in it. Notifications off (macOS Focus mode), bookmarks bar hidden, sidebar showing only the demo conversations. Browser zoom ~125–150% so it projects legibly.
4. ⌘-Tab hygiene: only the deck window and the Claude window open, so alt-tab is deterministic.
5. Screenshot each ideal output as a last-resort fallback.
6. One full timed dress rehearsal.

## Live run order (mirrors the deck)
1. **Bad prompt** (during "Garbage in, garbage out"): paste call 1, type `Summarize this call.` Let the bland blob land.
2. **Good prompt:** paste prompt #1 (MEDDIC scorecard) on the same transcript. The quoted-evidence scorecard with MISSING letters is the money shot. Point at the E and the C.
3. **Memory:** new message with the coaching log + call 2, run prompt #4. Claude notices last call's focus (path to Marcus) showed up, and quotes the one-pager moment.
4. Bridge line: "and everything I just did by hand, the pasting, the files, the re-running, is the plumbing" → back to the deck → WingRep reveal.

Each demo is ~90 seconds because nothing is written live except the bad prompt.
