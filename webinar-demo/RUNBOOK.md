# Webinar runbook

**How to use this document: read it top to bottom, once per section, in order. Nothing ever asks you to skip ahead or scroll back.** Part 1 is the day before. Part 2 is right before doors. Part 3 is the live show, written in show order, and it is the ONLY part you touch while presenting. Part 4 is what to do if something breaks.

Anything in a code block gets sent to Claude character-for-character. Every prompt appears twice: once in Part 1 when you record the backup, once in Part 3 in the live script, so each section stands alone. If you ever edit a prompt, edit it in both places. Spoken narration is in *italics* and is never typed into Claude.

---

# Part 1 · The day before (~60 min)

## 1.1 Record the demo-1 backup (the demo-1 parachute)
Demo 1 runs in plain claude.ai, outside any project. There is no `Sales Coach` project to build anymore; demo 2 has moved to the Claude desktop app. You perform demo 1 once now, for real, so a finished version exists. No narration needed, just the sends.
1. Go to claude.ai. In a second tab, open the raw text of `call-1-discovery-cobalt.md` (on GitHub: open the file, click **Raw**). You copy the transcript from here.
2. Start a **plain new chat**: click **New chat** from the claude.ai home/sidebar. (Check: the chat header shows NO project name.)
3. Send this as message 1:
```
Write my follow-up to Priya. Call went well, she liked the demo, pricing came up.
```
4. Go to the call-1 raw tab, select all (⌘A), copy (⌘C). Back on the chat, paste into the message box (⌘V, it collapses into a paste chip), then paste this after it and send:
```
You're my deal-desk analyst. Here's the real transcript. Score the call on MEDDIC: for each letter, quote the exact moment that proves it, or mark it MISSING. Then draft the follow-up that closes the biggest gap.
```
5. Read the output. **Pick your favorite invented detail in message 1's email now** (a recap that never happened, enthusiasm never voiced, a made-up next step) so you know what to point at live.
6. Rename the conversation: hover it in the sidebar, **⋯ → Rename → `BACKUP · demo 1`**.

## 1.2 The demo workspace
Demo 2 is a live build in the Claude desktop app, reading real files off disk. Create a folder OUTSIDE this repo at `~/Coaching Demo/` containing EXACTLY these five things, and nothing else:
- `transcripts/call-1-discovery-cobalt.md` (copied)
- `transcripts/call-2-trial-checkin-cobalt.md` (copied)
- `cobalt-deal-scorecard.md` (copied)
- `jordan-coaching-log.md` (copied)
- `cobalt-deal-file.md`, a NEW empty file you create in the folder root (this is the "deal file" the loop appends to; its pre-loop state is empty)
- plus an empty `game-plans/` folder

NEVER copy the README, the RUNBOOK, or `prompts.md` into it. Those describe the transcript's planted gaps; if Claude can read them on stage, the demo looks rigged. Copy only the four existing files, create `cobalt-deal-file.md` empty by hand, and make `game-plans/` empty by hand.

Then point the Claude desktop app at this folder: grant it access to `~/Coaching Demo/` only, never the whole repo.

## 1.3 Senses (calendar)
1. In the desktop app settings, connect Google Calendar.
2. Create the staged event on the morning your live question will point at. On stage you ask *what's my first call tomorrow?*, so the event lives on the morning after the webinar: `10:00am · Marcus Webb (CISO) · Cobalt Freight · 30 min`.
3. Then CHECK the rest of that same morning on screen. Any personal event that would embarrass on a projector gets its calendar **deselected in the app for the day**. The live calendar ask is:
```
what's my first call tomorrow?
```
and the staged Marcus event must be the honest answer. If anything earlier than 10:00am survives on a visible calendar, deselect that calendar or move the event so Marcus is genuinely first.

## 1.4 Record the demo-2 backup, then reset the stage
This section builds the whole loop once, saves it as a parachute, then wipes the stage so the live run is identical to the backup.

**Record the backup:**
1. In the desktop app, open one conversation on the `~/Coaching Demo/` folder. Paste the LOOP prompt and let it run; it appends to all three files (`cobalt-deal-file.md`, `jordan-coaching-log.md`, `cobalt-deal-scorecard.md`):
```
Run my after-call loop on today's call with Cobalt Freight (call-2-trial-checkin-cobalt.md), in this order:
1. Deal file: append an entry: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
2. Coaching log: add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.
3. Scorecard: update the MEDDIC scorecard from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since the last call.
Then stop and tell me the one thing that changed most.
```
2. In the same conversation, create the scheduled automation with the AUTOMATION prompt:
```
Every weekday at 7am: check my calendar for today's sales calls. For each one, read the deal file and my coaching log, then write a 60-second brief: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line. End with the one coaching focus to practice on this call, quoted from my log. Save each brief to game-plans/ and stop when every call has one.
```
3. Run the automation once manually (**run now**) and confirm `game-plans/` gains the Marcus brief.
4. In the same conversation, run the drill once so the backup shows one full exchange:
```
Play Marcus, the CISO from these transcripts. I want to practice his pricing pushback in the first five minutes. Push back the way he would, don't go easy on me, and after each of my responses break character for one line of coaching. Start the meeting.
```
Reply once as yourself (your rehearsed opener: tie the trial's triage-time savings to his board audit) so the backup captures a real drill turn.
5. Rename/save this conversation as the backup: `BACKUP · demo 2`.

**Reset the stage (only after the backup is saved):**
6. Revert the three files (`cobalt-deal-file.md`, `cobalt-deal-scorecard.md`, `jordan-coaching-log.md`) to their pre-loop state. For the deal file, pre-loop means EMPTY: restore it to an empty file. Keep copies of the appended versions somewhere OUTSIDE `~/Coaching Demo/` (for example `~/Coaching Demo reference/`) so you have them if you need to point at what "after" looks like.
7. DELETE the generated file in `game-plans/` so the folder is empty again.
8. DELETE the scheduled task, so nothing on stage says "already exists".

The paradox, say it to yourself once so you trust it: the backup proves the loop works; the reset makes the live run identical to the backup. On stage you are re-running something you already watched land.

## 1.5 Stage the machine
1. Quit every app except the deck, the browser, and the Claude desktop app. ⌘-Tab cycles these three by most-recent-use: during demo 1 you flip deck ↔ browser, during demo 2 you flip deck ↔ desktop app. As long as you never touch the third app mid-demo, ⌘-Tab keeps flipping the two you want.
2. Turn on macOS Focus mode (no notification can appear on stage).
3. In the browser: hide the bookmarks bar, set zoom to 150% on the Claude tab (⌘+ three times). Claude's default text is unreadable on a projector.
4. In the Claude desktop app: bump the text size up for the projector, and widen the window so a file's contents read from the back of the room.
5. Open the deck, press `t` on slide 1 if you want to set the doors-open countdown to the real start time.

## 1.6 Dress rehearsal
Your rehearsal IS the live script: keep reading in order through Part 2 and into Part 3, and the first time through Part 3, perform it out loud, timed, including every app switch. Target: demo 1 about 90 seconds, demo 2 about 8 minutes. The rehearsal runs the loop for real, so afterward reset the stage again exactly as in 1.4 steps 6 through 8 (files pre-loop, `game-plans/` empty, scheduled task deleted). Delete the rehearsal conversation; keep the two BACKUPs.

---

# Part 2 · Day of, 10 minutes before doors

Work down this checklist:
1. **Browser:** three tabs, in order: Claude web (for demo 1) / this RUNBOOK scrolled to Part 3 / call-1 raw text.
2. **Desktop app:** open on the `~/Coaching Demo/` folder.
3. The three files (`cobalt-deal-file.md`, `cobalt-deal-scorecard.md`, `jordan-coaching-log.md`) are at their **pre-loop** state; the deal file is empty.
4. `game-plans/` is **empty**.
5. **No scheduled tasks** listed in the desktop app.
6. Calendar shows the staged `10:00am · Marcus Webb (CISO) · Cobalt Freight · 30 min` as the honest answer to *what's my first call tomorrow?*, and nothing embarrassing sits earlier.
7. **Backups present:** `BACKUP · demo 1` in the claude.ai sidebar, `BACKUP · demo 2` in the desktop app.
8. Claude tab zoom still 150%; desktop app text bumped. Focus mode still on.
9. Deck on slide 1, countdown running.

**Paste-count guard.** Demo 1 has exactly **2 sends** (vibes prompt, deal-desk prompt). Demo 2 has exactly **4 sends** (loop paste, calendar ask, automation prompt into the scheduler, drill paste) plus **one button** (run now). If a send count comes up short mid-demo, the missing one is almost certainly the loop paste; send it and the order self-heals.

---

# Part 3 · THE LIVE SCRIPT (the only part you use on stage)

**Slides 1 through 7: pure deck.** Two things to do while they are up:
- On **slide 1**, during doors: point at the callout and say the install line, the room installs the Claude desktop app while they wait.
- On **slide 4**: point at the artifact strip and say: *"that brief wrote itself at 7am. By slide 10 you'll know how."*

## Slide 8, "Garbage in, garbage out." → DEMO 1 (~90 sec)

Read the ✕ and ✓ boxes on the slide aloud. Then: *"let me prove it on a real call"* → switch to the browser (Claude tab).

**Vibes prompt.** Click **New chat** (plain, no project). Type this by hand, casually, like a rep at 6pm:
```
Write my follow-up to Priya. Call went well, she liked the demo, pricing came up.
```
Send. ONE line of narration while it streams: *"this is what most reps give AI: no transcript, just vibes, and it will not say 'I don't know,' it will be confident."* Point at the one invented detail you picked in rehearsal.

**Transcript + deal-desk.** Go to the call-1 raw tab, ⌘A, ⌘C. Back on the Claude tab: ⌘V (paste chip), paste this after it, and send:
```
You're my deal-desk analyst. Here's the real transcript. Score the call on MEDDIC: for each letter, quote the exact moment that proves it, or mark it MISSING. Then draft the follow-up that closes the biggest gap.
```
Land TWO beats only:
- **Economic buyer: MISSING**: *"the rep never got a path to the CISO, and the AI caught it."*
- **Compare the two emails**: *"this one closes a real gap. The first one was fan fiction."*

Exit line: *"Pasting fixed it. Pasting is also the problem. Let me show you the version where the context shows up on its own."* → switch to the deck → advance to slide 9.

## Slide 9, "The loop" (~40 sec, deck only)

Five jobs, one loop. Name the discipline: *"the AI world calls this loop engineering; sales just calls it coaching that sticks."* Advance to slide 10.

## Slide 10, "Build yours live, one tab at a time" → DEMO 2 (~8 min)

This slide is the SalesOS window with six tabs: **1 Memory, 2 The loop, 3 Calendar, 4 Automation, 5 Drill, 6 The catch.** The screen uses reusable bracketed templates so the room can follow along; your live app fills those brackets with the fictional Cobalt example. Say once: *"Use the brackets on screen for your call. I'm running the exact same structure on our fictional Cobalt deal."* The rhythm for each tab is: click the tab on the slide → say the line → switch to the Claude desktop app → do the thing → switch back → next tab. The desktop app is already open on `~/Coaching Demo/`.

**Tab 1 · Memory**, say: *"the deal file started empty this morning. The log and the scorecard carry two weeks of calls. Nobody typed a word of any of them; the loop wrote every entry."* Show the folder in the app: the three files (`cobalt-deal-file.md`, `cobalt-deal-scorecard.md`, `jordan-coaching-log.md`), the transcripts, and the empty `game-plans/`.

**Tab 2 · The loop**, paste:
```
Run my after-call loop on today's call with Cobalt Freight (call-2-trial-checkin-cobalt.md), in this order:
1. Deal file: append an entry: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
2. Coaching log: add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.
3. Scorecard: update the MEDDIC scorecard from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since the last call.
Then stop and tell me the one thing that changed most.
```
THE MEMORY PAYOFF, give it a beat. When the coaching-log step quotes the thirty-minutes-with-Marcus moment, point: *"two weeks ago the log said get to the CISO. Today it checked, and quoted the exact moment the ask happened. That's observability, the thing most coaching never has."*

**Tab 3 · Calendar**, type the calendar ask live:
```
what's my first call tomorrow?
```
The staged Marcus event is the answer. Say: *"that's the loop's senses. No pasting, the context comes to it."*

**Tab 4 · Automation**, create the scheduled task with the AUTOMATION prompt:
```
Every weekday at 7am: check my calendar for today's sales calls. For each one, read the deal file and my coaching log, then write a 60-second brief: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line. End with the one coaching focus to practice on this call, quoted from my log. Save each brief to game-plans/ and stop when every call has one.
```
Say the good-loop line: *"clear goal, right context, and a stopping rule."* Hit **run now**. Open the generated brief in `game-plans/`, point at the quoted coaching focus.

**Tab 5 · Drill**, paste:
```
Play Marcus, the CISO from these transcripts. I want to practice his pricing pushback in the first five minutes. Push back the way he would, don't go easy on me, and after each of my responses break character for one line of coaching. Start the meeting.
```
Claude opens as Marcus. Answer out loud as yourself, once or twice max (your rehearsed opener: the trial's triage-time savings, framed for his board audit). Exit line: *"I could do this all day, and that's the point, my reps can."*

**Tab 6 · The catch**, switch back to the deck → click **Tab 6** and read its four bullets, the honest cost of the loop you just ran. Clicking Tab 6 a SECOND time triggers the blue-screen gag, *"Eight reps, eight folders, one of you."*, use it if the room is warm.

**Transition into slide 11:** *"The loop preps, reviews, even drills. Here's the one thing it cannot do..."* → advance to slide 11 → the typer plays → bridge into the reveal: *"Keep the loop, it's on your cheat sheet, it's free, and it's genuinely good. We built it, ran it, loved it, and hit the same wall you just saw: it has no ears. So we gave it ears."* → slide 12 reveal.

**Slide 12, Before / During / After:** the slide now waits for you. It enters on **Before**. Advance once for **During**, once for **After**, and once more for slide 13. Previous reverses the states if you need to revisit a beat. Do not wait for an animation; nothing changes until you click.

**Slide 13, outcome proof:** scroll the two large native emails. The Gmail mark, WingRep wordmark, scored debrief treatment, and Jeffrey Gitomer coach assets come from the supplied email examples; every account, address, meeting, and performance detail is fictional. Point to the 8.1 score before scrolling. The game plan arrives before the call; the debrief lands after it. The point is that reps do not need to reopen the product to get the workflow's value.

**Slide 14, differentiation:** most call tools preserve the conversation; WingRep changes the next call. Read the comparison as the answer to “why another tool?”

**Slide 15, manual-admin game:** let the room feel the cost of running the loop by hand. The pre-game controls disappear once play begins, so the end menu owns the single WingRep action.

**Slide 16, recap:** give the workflow away cleanly: five prompts, four moves, one coaching rhythm. The room can run it with or without WingRep.

**Slide 17, standard trial:** present the ordinary pilot as one simple three-week decision: connect a few reps, let the loop run, then decide from evidence. There is deliberately no product montage here; the audience has already seen the workflow. Do not mention Amit or founder onboarding yet.

**Slide 18, founder bonus:** this is the first founder-deal reveal. Say: *"You just felt the admin. Now get live with Amit."* Present the attendee-only 20-minute onboarding, point to the larger live founder-slot clock, and send the room to `wingrep.ai/webinar`.

**Finale (slide 19):** point to `wingrep.ai/webinar`, then paste the cheat-sheet PDF link and deck link into the Zoom chat. Say: "everything on screen is in the chat right now."

---

# Part 4 · If something breaks

| If | Then |
|---|---|
| A response is slow or the app hiccups | *"Let me show you one I ran on this exact call earlier"* → open the matching BACKUP (`BACKUP · demo 1` in the claude.ai sidebar, `BACKUP · demo 2` in the desktop app) → scroll it while narrating. The words are identical. |
| The demo-1 vibes email comes out surprisingly cautious (asks for details instead of inventing them) | Still a win, read it as: *"see, even the AI is telling me it has nothing to work with."* Then proceed to the transcript + deal-desk send unchanged. |
| The drill goes sideways or a weird roleplay beat | Break it yourself: *"and see, it'll keep going, that's the drill"* → jump to the exit line. Never negotiate with the roleplay on stage. |
| You blank on narration | Read Claude's own output headers aloud. The scorecard is its own narration. |
| The calendar connector fails or returns the wrong thing | Open the `BACKUP · demo 2` conversation and narrate the calendar answer from there. Do not re-ask live. |
| The scheduler UI hiccups | Paste the Tab 4 automation prompt as a normal message instead of a scheduled task, and say: *"the schedule is just this prompt on a timer."* |
| The loop writes to the wrong file | Open the file it did write; the content is still right. Say nothing about the filename; fix it after the show. |
| Screen share drops | Keep narrating, re-share the ENTIRE display (not a single window), and recap in one line where you were. |

## Live Q&A talk tracks (only if asked; none of this goes on slides)
- **Security / compliance:** "Short version: your calls never train anyone else's model, and we're ISO 27001 certified. I'll send the full security packet with the follow-up, and we go deep on it in the demo." Do not enumerate SOC 2 status on stage.
- **"Do you replace Gong?":** "No, we plug into it. Gong watches the call; WingRep does the work after."
- **Real-time coaching availability:** pitch it exactly as the reveal slide shows it. If someone asks when they can have it: "It's rolling out with design partners now. Book the demo and we'll show you it live on your stack." Do not litigate the roadmap on stage.
