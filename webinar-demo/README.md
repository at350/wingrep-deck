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

**Demo 1, on slide 7 "Garbage in, garbage out" (~90 sec):**
1. Alt-tab to Claude, paste call 1, type `Summarize this call.` Let the bland blob land.
2. Paste the deal-scorecard prompt on the same transcript. The quoted-evidence MEDDIC scorecard with MISSING letters is the money shot. Point at the E and the C. Back to the deck.

**Demo 2, on slide 8 "Five prompts to steal" (~5-6 min, ALL FIVE live, one conversation):**
Talk the list on the slide for 30 seconds, then alt-tab and run the loop in order. One Claude conversation, call 2 as "today's call":
1. **Capture**: paste call 2 + the capture prompt. The deal file gets its entry.
2. **Coaching ledger**: paste the coaching log + the ledger prompt. Claude checks last call's focus ("get a path to Marcus"), quotes the one-pager moment from call 2, and logs a new focus. This is the memory payoff; give it a beat.
3. **Deal scorecard**: paste the MEDDIC scorecard + the update prompt. E moves from MISSING toward PARTIAL, on quoted evidence.
4. **Game plan**: run the game-plan prompt. Claude drafts the 60-second brief for the Marcus meeting.
5. **Drill**: run the drill prompt ("play Marcus, push back on price"). Answer its first objection out loud, live. Biggest laugh + most memorable beat of the webinar; keep it to 2 exchanges.

Then the bridge line: "and everything I just did by hand, the pasting, the files, the re-running, is the plumbing" → back to the deck → slide 9 → WingRep reveal.

Every prompt is pasted, never typed (except the bad one). Steps 1-4 are each ~45 seconds because the files are pre-staged; the drill is the only improvised part, and the pre-run fallback conversation covers you if it goes sideways.
