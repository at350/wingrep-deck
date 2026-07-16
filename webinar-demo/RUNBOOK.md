# Webinar runbook

**How to use this document: read it top to bottom, once per section, in order. Nothing ever asks you to skip ahead or scroll back.** Part 1 is the day before. Part 2 is right before doors. Part 3 is the live show, written in show order, and it is the ONLY part you touch while presenting. Part 4 is what to do if something breaks.

Anything in a code block gets sent to Claude character-for-character. Some blocks appear twice (once in rehearsal, once in the live script) so each section stands alone; if you ever edit a prompt, edit it in both places.

---

# Part 1 · The day before (~40 min)

## 1.1 Create the Project
1. Go to claude.ai. In the left sidebar, click **Projects → New project**.
2. Name it `Sales Coach`. Leave the instructions box empty. Create it.
3. On the project page, find the **knowledge** panel (right side) and upload these 3 files from the `webinar-demo/` folder:
   - `transcripts/call-2-trial-checkin-cobalt.md`
   - `jordan-coaching-log.md`
   - `cobalt-deal-scorecard.md`

Do NOT upload `call-1-discovery-cobalt.md`, the README, or `prompts.md`. Call 1 stays out because demo 1 runs outside the project: `cobalt-deal-scorecard.md` is effectively demo 1's answer key, and if Claude can see it during demo 1 it may crib from it or cite it on stage, which would look rigged. Same reason you never run these demos anywhere Claude can browse the whole `webinar-demo/` folder (Claude Code, the desktop app with folder access): the README describes the transcript's planted gaps.

## 1.2 Set up your browser tabs (this exact arrangement is what you present with)
One browser window, three tabs, in this order:
- **Tab 1: Claude** (claude.ai).
- **Tab 2: this RUNBOOK**, scrolled to Part 3. This is your script and paste source.
- **Tab 3: the raw text of `call-1-discovery-cobalt.md`** (on GitHub: open the file → click **Raw**). You will select-all and copy from here during demo 1.

## 1.3 Record backup #1 (the demo-1 parachute)
You now perform demo 1 once, for real, so a finished version exists. No narration needed, just the sends.
1. On Tab 1, start a **plain new chat**: click **New chat** from the claude.ai home/sidebar, NOT from inside the `Sales Coach` project. (Check: the chat header should NOT show the project name.)
2. Send this as message 1:
```
Write my follow-up email to Priya. Call went well, she liked the demo, pricing came up, there's a CISO involved somewhere.
```
3. Go to Tab 3, select all (⌘A), copy (⌘C). Back on Tab 1, paste into the message box (⌘V, it collapses into a paste chip), then paste this after it and send:
```
You're my deal-desk analyst. Here's the real transcript. Score this call against MEDDIC. For each letter (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion), quote the exact moment from the transcript that proves it, or mark it MISSING. Then draft the follow-up email that closes the biggest gap.
```
4. Read the output. **Pick your favorite invented detail in message 1's email now** (a recap that never happened, enthusiasm never voiced, a made-up next step) so you know what to point at live.
5. Rename the conversation: hover it in the sidebar → **⋯ → Rename** → `BACKUP · demo 1`.

## 1.4 Record backup #2 (the demo-2 parachute)
1. Open the `Sales Coach` project and click **New chat** INSIDE it (check: header shows the project name).
2. Send these five messages, in order, waiting for each to finish:
```
Today's call with Cobalt Freight is call-2-trial-checkin-cobalt.md. Write the entry I should append to this deal's running file: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
```
```
Here's my coaching log and today's call. Add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.
```
```
You're my deal-desk analyst. Update this deal's MEDDIC scorecard (cobalt-deal-scorecard.md) from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since call 1.
```
```
Using the deal file and both transcripts: the next call is the 30-minute meeting with Marcus, Cobalt's CISO. Give me a 60-second brief for it: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line.
```
```
Play Marcus. He's a CISO buried in a board audit who asks about price in the first five minutes. I'm going to practice my opening for that meeting. Push back the way he would, don't go easy on me, and after each of my responses break character for one line of coaching. Start the meeting.
```
3. For the last one, reply once as yourself (practice your opener: tie the trial's triage-time savings to his board audit) so the backup shows one full drill exchange.
4. Rename the conversation `BACKUP · demo 2`.

## 1.5 Stage the machine
1. Quit every app except the deck and the browser. With exactly two apps open, ⌘-Tab always lands on the other one.
2. Turn on macOS Focus mode (no notification can appear on stage).
3. In the browser: hide the bookmarks bar, set zoom to 150% on the Claude tab (⌘+ three times). Claude's default text is unreadable on a projector.
4. Open the deck, press `t` on slide 1 if you want to set the doors-open countdown to the real start time.

## 1.6 Dress rehearsal
Your rehearsal IS the live script: keep reading in order through Part 2 and into Part 3, and the first time through Part 3, perform it out loud, timed, including every ⌘-Tab. Target: demo 1 about 2 min, demo 2 about 6 min. Afterward, delete the two rehearsal conversations it created (keep the two BACKUPs).

---

# Part 2 · Day of, 10 minutes before doors

Work down this checklist:
1. Browser has the three tabs from 1.2: Claude / this runbook scrolled to Part 3 / call-1 raw text.
2. `Sales Coach` project shows 3 files in knowledge.
3. Sidebar shows `BACKUP · demo 1` and `BACKUP · demo 2`.
4. Claude tab zoom still 150%. Focus mode still on.
5. ⌘-Tab once: it flips deck ↔ browser and nothing else.
6. Deck on slide 1, countdown running.

---

# Part 3 · THE LIVE SCRIPT (the only part you use on stage)

Slides 1 through 6: pure deck. Nothing to prepare, nothing to switch to.

## Slide 7, "Garbage in, garbage out." → DEMO 1 (~2 min)

Read the ✕ and ✓ boxes on the slide aloud. Then say: **"let me prove it on a real call"** → ⌘-Tab to the browser (Claude tab).

**Step 1 · Garbage in.** Click **New chat** (plain, NOT in the project). Type this by hand, casually, like a rep at 6pm:
```
Write my follow-up email to Priya. Call went well, she liked the demo, pricing came up, there's a CISO involved somewhere.
```
Send. While it streams, say: *"this is what most reps actually give AI: no transcript, just vibes. And watch, it will not say 'I don't know.' It will be confident."*

**Step 2 · Read the garbage out loud.** Point at the generic lines and at the invented detail you picked during rehearsal. Say: *"confident, polished, and partly fiction. Garbage in, garbage out. The model isn't broken, it just has nothing real to work with."*

**Step 3 · The real call in.** Go to Tab 3 (call-1 raw), ⌘A, ⌘C. Back on the Claude tab: ⌘V into the message box (it becomes a paste chip). Then copy this from Tab 2 and paste it after the chip, and send:
```
You're my deal-desk analyst. Here's the real transcript. Score this call against MEDDIC. For each letter (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion), quote the exact moment from the transcript that proves it, or mark it MISSING. Then draft the follow-up email that closes the biggest gap.
```
While it streams: *"same AI, same deliverable. The only thing that changed is what went in: the real call, the rubric your team already runs on, and one rule, quote the moment or mark it MISSING. If it has to quote the transcript, it can't make things up."*

**Step 4 · Land it.** Point at three things:
- **Economic buyer: MISSING**: *"the rep never got a path to the CISO, and the AI caught it."*
- The **Champion** line: *"Priya is friendly. Friendly is not a champion."*
- The follow-up email: *"compare this email to the first one. This one closes a real gap. That one was fan fiction."*

**Switch back:** *"that's one prompt. There are five I want you to steal"* → ⌘-Tab to the deck → advance to slide 8.

## Slide 8, "Five prompts to steal" → DEMO 2 (~6 min)

Talk the five list items for ~30 seconds. Drag the glow slider to top 1% once. Then: **"reading prompts on a slide is one thing. Let me run all five, right now, on this deal"** → ⌘-Tab to the browser.

Open the `Sales Coach` project → **New chat** inside it (header shows the project name). Say this first, it sews the slide, the handout, and the screen together: *"These are the exact five prompts from your handout, in the same order as the slide. The only thing I've done is fill in the blanks with this deal's names."*

All five messages go in this ONE conversation, in order. Copy each from here, paste, send, narrate one line while it streams.

**1 · Capture**, say: *"step one, the call becomes a record."*
```
Today's call with Cobalt Freight is call-2-trial-checkin-cobalt.md. Write the entry I should append to this deal's running file: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
```

**2 · Coaching ledger**, say: *"step two is the one that changed how I sell: the AI checks whether I did what I said I'd do."* (This paste is, word for word, the prompt typed on slide 9 two slides from now.)
```
Here's my coaching log and today's call. Add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.
```
THE MEMORY PAYOFF, give it a beat. When it quotes the "thirty minutes with Marcus / one-pager" moment, point at it: *"two weeks ago the log said get to the CISO. Today it checked. That's a coach, not a note-taker."*

**3 · Deal scorecard**, say: *"step three, the MEDDIC scorecard updates itself."*
```
You're my deal-desk analyst. Update this deal's MEDDIC scorecard (cobalt-deal-scorecard.md) from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since call 1.
```
Point: *"Economic buyer just moved from MISSING toward PARTIAL, and it shows you the sentence that moved it."*

**4 · Game plan**, say: *"step four, next call's prep in the time it takes to walk to your desk."*
```
Using the deal file and both transcripts: the next call is the 30-minute meeting with Marcus, Cobalt's CISO. Give me a 60-second brief for it: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line.
```

**5 · Drill**, say: *"and step five, practice on the AI, not on the customer."*
```
Play Marcus. He's a CISO buried in a board audit who asks about price in the first five minutes. I'm going to practice my opening for that meeting. Push back the way he would, don't go easy on me, and after each of my responses break character for one line of coaching. Start the meeting.
```
Claude opens as Marcus. **Answer out loud, live** (your rehearsed opener: the trial's triage-time savings, framed for his board audit). Cap it at TWO exchanges, then: *"I could do this all day, and that's the point, my reps can."*

**Switch back:** *"Now. Everything I just did worked. It also took me five pastes, four files, and I'll have to do it again after every single call. The AI did the thinking..."* → ⌘-Tab to the deck → advance to slide 9 → *"...and I'm still the plumbing."* From slide 9 on it's pure deck again, through the WingRep reveal to the end.

---

# Part 4 · If something breaks

| If | Then |
|---|---|
| A response is slow or the site hiccups | "Let me show you one I ran on this exact call earlier" → sidebar → open the matching BACKUP conversation → scroll it while narrating. The words are identical. |
| In demo 2, Claude can't find a file by name | Say "one sec," open the file on GitHub (raw), copy its text, paste it above the prompt and resend. 15 seconds, looks intentional. |
| The demo-1 vibes email comes out surprisingly cautious (asks for details instead of inventing them) | Still a win, read it as: "see, even the AI is telling me it has nothing to work with." Then proceed to Step 3 unchanged. |
| The drill goes sideways or a weird roleplay beat | Break it yourself: "and see, it'll keep going, that's the drill" → jump to the switch-back line. Never negotiate with the roleplay on stage. |
| You blank on narration | Read Claude's own output headers aloud. The scorecard is its own narration. |
