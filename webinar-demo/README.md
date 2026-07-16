# Webinar demo kit

All names and companies are fictional (built to match the WingRep ICP: mid-market B2B, MEDDIC shop, security vertical, buying committee). Never demo on a real customer call.

**Setup, rehearsal, the live script, and failure modes all live in one place: [RUNBOOK.md](RUNBOOK.md). Follow it top to bottom.** This README only describes the files.

## What's in here
- `RUNBOOK.md`: the single source of truth for the webinar. Day-before setup, exact pastes, live script in show order, failure modes.
- `transcripts/call-1-discovery-cobalt.md`: the WEAK call, used in demo 1. Deliberate gaps: Jordan monologues and over-demos, deflects Priya's pricing question, accepts "the CISO is busy" with no plan, ignores the competitor mention. Pain and metrics evidence are real, so the MEDDIC scorecard shows a mix of STRONG / PARTIAL / MISSING, not all red.
- `transcripts/call-2-trial-checkin-cobalt.md`: the follow-up two weeks later, used in demo 2. Jordan executes the focus from the coaching log (path to Marcus, competitor question), so the memory demo has a payoff.
- `jordan-coaching-log.md`: the rep memory file, pre-loaded with 2 entries so continuity shows instantly.
- `cobalt-deal-scorecard.md`: the deal memory file, MEDDIC state after call 1. WARNING: this file is effectively demo 1's answer key, which is why the runbook keeps demo 1 outside the Claude project.
- `prompts.md`: the prompt library (source text for the attendee handout).
- `prompt-library.pdf` / `prompt-library.html`: the designed attendee handout and its editable HTML source (re-print via headless browser).
