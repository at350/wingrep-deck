# Webinar runbook: exact steps and exact pastes

Everything below is literal. Messages to paste into Claude are in code blocks; paste them character-for-character. The only thing you ever improvise is the drill at the end.

---

## Part A · Setup, the day before (~30 min)

**A1. Create the Project.**
1. Go to claude.ai, sidebar → Projects → New project.
2. Name: `Sales Coach`. Leave instructions empty.
3. In the project's knowledge panel, upload these 3 files from `webinar-demo/`:
   - `transcripts/call-2-trial-checkin-cobalt.md`
   - `jordan-coaching-log.md`
   - `cobalt-deal-scorecard.md`

**Two contamination rules (they matter):**
- **Demo 1 runs OUTSIDE the project**, in a plain new chat, with call 1 pasted in. If the scorecard file is in reach during demo 1, Claude may crib from it (it contains the full MEDDIC answer) and could even cite it as a source on stage, which would look rigged.
- **Never run the demos anywhere Claude can browse the `webinar-demo/` folder** (Claude Code, desktop with folder access). The README describes the transcript's deliberate gaps; if Claude reads it, you get suspiciously perfect answers.

**A2. Record the backups.** Run BOTH demo scripts below exactly as written and where they'll run live: Part C (demo 1) in a plain chat OUTSIDE the project with call 1 pasted in, Part D (demo 2) in a fresh conversation INSIDE the project. When done, rename them in the sidebar:
- `BACKUP · demo 1 scorecard`
- `BACKUP · demo 2 five steps`

These are your parachutes. If live generation stalls or a response comes back weird, say "let me show you one I ran on this exact call," open the backup, and scroll. Nobody can tell the difference and you control the pacing.

**A3. Stage the paste sheet.** You need the prompts one ⌘V away. Open this RUNBOOK (or the GitHub page for it) as a SECOND TAB in the same browser window as Claude. Live flow is: Claude tab → paste-sheet tab (copy next prompt) → Claude tab (paste, Enter). Never type a prompt live except the four-word bad one.

**A4. Window hygiene.**
- Exactly two apps open: the deck (fullscreen) and the browser (Claude tab + paste-sheet tab). ⌘-Tab now always lands on the other one.
- macOS Focus mode ON (no notification can appear on stage).
- Browser: bookmarks bar hidden, sidebar collapsed if you want, zoom to 150% (⌘+ three times). Claude's default text is unreadable on a projector.
- Do one full timed dress rehearsal, out loud, including the alt-tabs.

## Part B · Day of, 10 minutes before doors

1. Open the `Sales Coach` project. Confirm the 3 files are still in knowledge.
2. Confirm the two BACKUP conversations are in the sidebar.
3. In the paste-sheet tab, have the raw text of `call-1-discovery-cobalt.md` one click away (you'll copy-paste it at the start of demo 1). Demo 1 = plain new chat outside the project; demo 2 = new chat inside the project.
4. Check zoom is still 150%. Check Focus mode. ⌘-Tab once to confirm it flips deck ↔ browser.

---

## Part C · DEMO 1, on slide 7 "Garbage in, garbage out" (~2 min)

**When to switch:** land on slide 7, read the ✕ and ✓ boxes aloud, then say "let me prove it on a real call" → ⌘-Tab to Claude.

**C1.** Open a plain NEW CHAT (not in the project). From the paste-sheet tab, copy the FULL TEXT of `call-1-discovery-cobalt.md` and paste it into the message box (it collapses into a paste chip). Then TYPE above/after it, by hand, the four words from the slide:
```
Summarize this call.
```
Hit Enter. While it streams: "this is what most people do with AI."

**C2. Do NOT trash the summary. Praise it.** This is the beat: "Notice, this is actually a *good* summary. That's the trap. It reads well enough that you stop here. But try to use it: is Priya a real champion? Did I ask the questions my sales process says I have to ask? Can I compare this call to the last one? A summary, even a great one, is something you read once, nod at, and never open again."

**C3.** Copy-paste this and hit Enter:

```
You're my deal-desk analyst. Score this call against MEDDIC. For each letter (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion), quote the exact moment from the transcript that proves it, or mark it MISSING. Then give me the two questions I should have asked.
```
While it streams: "same call, same AI, same intelligence. I didn't get a smarter model, I gave it the right job: a role, the rubric your team already runs on, and one rule, quote the moment or mark it MISSING. If it has to quote the transcript, it can't make things up."

**C4.** When it finishes, point at TWO things: **Economic buyer: MISSING** ("the rep never got a path to the CISO, and the AI caught it") and the **Champion** line ("Priya is friendly, but friendly is not a champion").

**Switch back:** "so that's one prompt. There are five I want you to steal" → ⌘-Tab to the deck → advance to slide 8.

---

## Part D · DEMO 2, on slide 8 "Five prompts to steal" (~5-6 min)

**When to switch:** talk the five list items on the slide for ~30 seconds, drag the glow slider once to top 1%, then: "reading prompts on a slide is one thing. Let me actually run all five, right now, on this deal" → ⌘-Tab to Claude → click New chat inside the project.

Run these five messages in ONE conversation, in order. Between each, one sentence of narration while it streams.

**D1 · Capture** (say: "step one, the call becomes a record")
```
Today's call with Cobalt Freight is call-2-trial-checkin-cobalt.md. Write the entry I should append to this deal's running file: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
```

**D2 · Coaching ledger** (say: "step two, and this is the one that changed how I sell, the AI checks whether I did what I said I'd do") — THE MEMORY PAYOFF, give it a beat:
```
Now the coaching side. Using jordan-coaching-log.md and today's transcript: add a dated entry with what went well, gaps, and one focus for next call. First, check whether the last entry's focus (get a path to Marcus with an artifact he'd actually read) showed up on this call, and quote the moment where it did or didn't.
```
When it quotes the "thirty minutes with Marcus / one-pager" moment, point at it: "two weeks ago the log said get to the CISO. Today it checked. That's a coach, not a note-taker."

**D3 · Deal scorecard** (say: "step three, the MEDDIC scorecard updates itself")
```
Update cobalt-deal-scorecard.md from today's call. For each MEDDIC letter, quote the exact moment that proves it or mark it MISSING, and call out which letters moved since call 1.
```
Point: "Economic buyer just moved from MISSING toward PARTIAL, and it can show you the sentence that moved it."

**D4 · Game plan** (say: "step four, next call's prep, in the time it takes to walk to your desk")
```
The next call is the 30-minute meeting with Marcus, Cobalt's CISO. Give me a 60-second brief: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line.
```

**D5 · Drill** (say: "and step five, practice on the AI, not on the customer"):
```
Play Marcus. He's a CISO buried in a board audit who asks about price in the first five minutes. I'm going to practice my opening for that meeting. Push back the way he would, don't go easy on me, and after each of my responses break character for one line of coaching. Start the meeting.
```
Claude opens as Marcus. **Answer out loud, live, once or twice.** (Have a decent opener ready: tie the trial's triage numbers to his board audit.) Cap it at two exchanges, then: "I could do this all day, and that's the point, my reps can."

**Switch back:** "Now. Everything I just did worked. It also took me five pastes, four files, and I'll have to do it again after every single call. The AI did the thinking..." → ⌘-Tab to the deck → advance to slide 9, "...and I'm still the plumbing." Slide 9 lands, then the WingRep reveal does its job.

---

## Part E · Failure modes

| If | Then |
|---|---|
| A response is slow or the site hiccups | "Let me show you one I ran on this exact call earlier" → open the BACKUP conversation → scroll. Keep narrating; the words are identical. |
| Claude can't find a file by name | Say "one sec," open the paste-sheet tab, copy the file's raw text from GitHub, paste it into the message above the prompt. 15 seconds, looks intentional. |
| The drill goes sideways / a weird roleplay beat | Break it yourself: "and see, it'll keep going, that's the drill" → move to the switch-back line. Never negotiate with the roleplay on stage. |
| You blank on narration | Read Claude's own output aloud. Its scorecard headers are the narration. |
