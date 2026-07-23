# Webinar runbook

**How to use this document: read it top to bottom, once per section, in order. Nothing ever asks you to skip ahead or scroll back.** Part 1 is the day before. Part 2 is right before doors. Part 3 is the live show, written in show order, and it is the ONLY part you touch while presenting. Part 4 is what to do if something breaks.

Anything in a code block gets sent to Claude character-for-character. On slide 10, the Sales OS copy buttons are the live paste source and include the full starter-file bundle. This runbook carries the narration and backup procedure. Spoken narration is in *italics* and is never typed into Claude.

---

# Part 1 · The day before (~60 min)

## 1.1 Record the demo-1 backup (the demo-1 parachute)
Demo 1 runs in plain claude.ai, outside any project. There is no `Sales Coach` project to build anymore; demo 2 runs in Claude Cowork. You perform demo 1 once now, for real, so a finished version exists. No narration needed, just the sends.
1. Open the deck on slide 8 and click **Copy transcript + exact prompt**. The clipboard now holds the complete call-1 transcript and the evidence-bound deal-desk instruction.
2. Go to claude.ai and start a **plain new chat**: click **New chat** from the home/sidebar. (Check: the chat header shows NO project name.)
3. Send this as message 1:
```
Write my follow-up to Priya. Call went well, she liked the demo, pricing came up.
```
4. Paste the deck bundle into the message box (⌘V, it may collapse into a paste chip) and send. The bundled instruction is:
```
You're my deal-desk analyst. The text above is the complete call transcript. Score the call on MEDDIC: for each letter, quote the exact timestamped moment that proves it, or mark it MISSING. Do not infer facts that were not said. Then draft the follow-up email that closes the single biggest gap. Stop after the email.
```
5. Read the output. **Pick your favorite invented detail in message 1's email now** (a recap that never happened, enthusiasm never voiced, a made-up next step) so you know what to point at live.
6. Rename the conversation: hover it in the sidebar, **⋯ → Rename → `BACKUP · demo 1`**.

## 1.2 The demo workspace
Demo 2 is a live build in Claude Cowork, reading and writing real files off disk. Create one **empty** folder OUTSIDE this repo at `~/Coaching Demo/`, then grant Claude access to that folder only, never the whole repo.

Do not pre-copy the transcripts, README, RUNBOOK, or `prompts.md`. On stage, slide 10 Tab 1 copies one complete setup prompt containing the four safe fictional source files. Claude creates a reusable workspace for every deal and rep: `deals/`, `reps/`, `game-plans/`, and `WORKSPACE.md`. Cobalt Freight is loaded only as the first demo deal under `deals/cobalt-freight/`; Jordan's coaching history lives under `reps/jordan-avila/`. This makes the on-screen workflow the only live source of truth without implying that the workspace belongs to one deal.

## 1.3 Senses (calendar)
1. In Claude Cowork settings, connect Google Calendar.
2. Create the staged event on the morning your live question will point at. Tab 3 asks for tomorrow's first external sales call after 8:00 AM, so the event lives on the morning after the webinar: `10:00am · Marcus Webb (CISO) · Cobalt Freight · 30 min`.
3. Then CHECK the rest of that same morning on screen. Any personal event that would embarrass on a projector gets its calendar **deselected in the app for the day**. Slide 10 Tab 3 asks for the first external sales call tomorrow after 8:00 AM and excludes personal events, holds, and focus blocks. The staged Marcus event must be the honest answer. If an earlier external call survives on a visible calendar, deselect that calendar or move the event so Marcus is genuinely first.

## 1.4 Record the demo-2 backup, then reset the stage
This section builds the whole loop once, saves it as a parachute, then wipes the stage so the live run is identical to the backup.

**Record the backup:**
1. In Claude Cowork, open one conversation on the empty `~/Coaching Demo/` folder. In the deck, open slide 10 → **1 Set up memory** → **Copy setup + files**. Paste it and confirm Claude creates `WORKSPACE.md`, `deals/cobalt-freight/`, `reps/jordan-avila/`, and `game-plans/`, with `deals/cobalt-freight/deal-file.md` empty.
2. On slide 10, open **2 Run the loop** → **Copy exact prompt**. Paste it and let it run; it appends to all three memory files (`deals/cobalt-freight/deal-file.md`, `reps/jordan-avila/coaching-log.md`, and `deals/cobalt-freight/deal-scorecard.md`).
3. Open **3 Read calendar** → **Copy exact prompt**. Paste it and confirm the staged Marcus meeting comes back in the fixed five-line format.
4. Create the scheduled automation from slide 10 → **4 Automate prep** → **Copy exact prompt**.
5. Run the automation once manually (**run now**) and confirm `game-plans/` gains the Marcus brief.
6. Rename/save this conversation as the backup: `BACKUP · demo 2`.

**Reset the stage (only after the backup is saved):**
7. Delete everything inside `~/Coaching Demo/` so the granted folder is empty again. Keep copies of the completed files somewhere OUTSIDE that folder if you want a manual fallback.
8. DELETE the scheduled task, so nothing on stage says "already exists".

The paradox, say it to yourself once so you trust it: the backup proves the setup and loop work; the empty folder makes the live run identical to the backup. On stage you are re-running something you already watched land.

## 1.5 Stage the machine
1. Quit every app except the deck, the browser, and Claude Cowork. ⌘-Tab cycles these three by most-recent-use: during demo 1 you flip deck ↔ browser, during demo 2 you flip deck ↔ Cowork. As long as you never touch the third app mid-demo, ⌘-Tab keeps flipping the two you want.
2. Turn on macOS Focus mode (no notification can appear on stage).
3. In the browser: hide the bookmarks bar, set zoom to 150% on the Claude tab (⌘+ three times). Claude's default text is unreadable on a projector. No raw-transcript tab is needed.
4. In Claude Cowork: bump the text size up for the projector, and widen the window so a file's contents read from the back of the room.
5. Open the deck, press `t` on slide 1 if you want to set the doors-open countdown to the real start time. Page numbers start hidden; press `n` only when you need an internal reference, then press `n` again before presenting.

## 1.6 Dress rehearsal
Your rehearsal IS the live script: keep reading in order through Part 2 and into Part 3, and the first time through Part 3, perform it out loud, timed, including every app switch. Target: demo 1 about 90 seconds, demo 2 about 8 minutes. The rehearsal runs the setup and loop for real, so afterward reset the stage again exactly as in 1.4 steps 7 and 8 (granted folder empty, scheduled task deleted). Delete the rehearsal conversation; keep the two BACKUPs.

---

# Part 2 · Day of, 10 minutes before doors

Work down this checklist:
1. **Browser:** two tabs, in order: Claude web (for demo 1) / this RUNBOOK scrolled to Part 3. The transcript comes from the deck.
2. **Claude Cowork:** open on the empty `~/Coaching Demo/` folder.
3. `~/Coaching Demo/` is completely **empty**. Slide 10 creates the reusable workspace and seeds Cobalt Freight as its first fictional deal live.
4. Sales OS opens on **1 Set up memory** and shows only the five workflow tabs.
5. **No scheduled tasks** listed in Claude Cowork.
6. Calendar shows the staged `10:00am · Marcus Webb (CISO) · Cobalt Freight · 30 min` as the honest first external sales call after 8:00 AM, and nothing embarrassing sits earlier.
7. **Backups present:** `BACKUP · demo 1` in the claude.ai sidebar, `BACKUP · demo 2` in Claude Cowork.
8. Claude tab zoom still 150%; Cowork text bumped. Focus mode still on.
9. Deck on slide 1, countdown running, page numbers hidden.

**Paste-count guard.** Demo 1 has exactly **2 sends** (vibes prompt, deal-desk prompt). Demo 2 has exactly **4 sends** (setup + bundled files, after-call loop, calendar ask, automation prompt) plus **one button** (run now). If a send count comes up short mid-demo, check which numbered Sales OS tab you last completed.

---

# Part 3 · THE LIVE SCRIPT (the only part you use on stage)

**Slides 1 through 7: pure deck.** Two things to do while they are up:
- On **slide 1**, during doors: point at the install callout, then the small bonus note. Say: *"Stay through the close and I will give you a free 30-minute build session to turn this into your own workflow."*
- On **slide 4**: point at the artifact strip and say: *"that brief wrote itself at 7am. By slide 10 you'll know how."*

## Slide 8, "Garbage in, garbage out." → DEMO 1 (~90 sec)

Read the ✕ and ✓ boxes on the slide aloud. Click **Copy prompts link for Zoom**, paste the copied Google Doc link into Zoom chat, then click **Copy transcript + exact prompt**. Say: *"the prompts are in the chat so you can follow along. Let me prove it on a real call."* → switch to the browser (Claude tab).

**Vibes prompt.** Click **New chat** (plain, no project). Type this by hand, casually, like a rep at 6pm:
```
Write my follow-up to Priya. Call went well, she liked the demo, pricing came up.
```
Send. ONE line of narration while it streams: *"this is what most reps give AI: no transcript, just vibes, and it will not say 'I don't know,' it will be confident."* Point at the one invented detail you picked in rehearsal.

**Transcript + deal-desk.** In the Claude tab, paste the deck bundle with ⌘V and send. It already contains the complete transcript followed by this instruction:
```
You're my deal-desk analyst. The text above is the complete call transcript. Score the call on MEDDIC: for each letter, quote the exact timestamped moment that proves it, or mark it MISSING. Do not infer facts that were not said. Then draft the follow-up email that closes the single biggest gap. Stop after the email.
```
Land TWO beats only:
- **Economic buyer: MISSING**: *"the rep never got a path to the CISO, and the AI caught it."*
- **Compare the two emails**: *"this one closes a real gap. The first one was fan fiction."*

Exit line: *"Pasting fixed it. Pasting is also the problem. Let me show you the version where the context shows up on its own."* → switch to the deck → advance to slide 9.

## Slide 9, "The loop" (~40 sec, deck only)

Four jobs, one loop. Name the discipline: *"the AI world calls this loop engineering; sales just calls it coaching that sticks."* Advance to slide 10.

## Slide 10, "Build yours live, one tab at a time" → DEMO 2 (~8 min)

Six tabs are visible: **1 Set up memory, 2 Run the loop, 3 Read calendar, 4 Automate prep, 5 Demo files, 6 Recap.** The limitation still arrives as the surprise blue screen on slide 11, after the recap. The structure is reusable for every deal; the filled prompts use Cobalt Freight only as the live example. Say once: *"This workspace holds every deal. Cobalt is just the first one we are loading so you can watch the loop work."* The rhythm is: click the tab → copy → switch to Claude Cowork → paste and run → switch back.

**Tab 1 · Set up memory:** click **Copy setup + files**, switch to Cowork, paste, and send. This single paste creates the all-deals structure, writes `WORKSPACE.md`, and loads the two Cobalt transcripts, scorecard, and Jordan coaching log. When Claude reports the created paths, show `deals/cobalt-freight/`, `reps/jordan-avila/`, and `game-plans/`. Confirm that `deals/cobalt-freight/deal-file.md` is empty. Say: *"No hidden download and no external document. Cobalt is one deal inside a workspace built for all of them."*

**Tab 2 · Run the loop:** click **Copy exact prompt**, switch to Cowork, paste, and send. The exact filenames, ordering, evidence rule, and stop condition are already filled in.

THE MEMORY PAYOFF, give it a beat. When the coaching-log step quotes the thirty-minutes-with-Marcus moment, point: *"two weeks ago the log said get to the CISO. Today it checked, and quoted the exact moment the ask happened. That's observability, the thing most coaching never has."*

**Tab 3 · Read calendar:** click **Copy exact prompt**, paste it into Cowork, and send. The staged Marcus event is the answer in the fixed five-line format. Say: *"That's the loop's senses. No pasting the meeting context; it comes to the workflow."*

**Tab 4 · Automate prep:** click **Copy exact prompt**, paste it into the scheduler, and create the task. Say: *"Clear schedule, trusted inputs, exact output, failure behavior, and a stopping rule."* Hit **run now**. Open the generated brief in `game-plans/` and point at the quoted coaching focus.

**Tab 5 · Demo files:** click through both transcripts, the scorecard, and the coaching log inside Sales OS. Use **Copy open file** if you need to recover one file live. Land: *"The prompts and the source material stay in one presenter cockpit."*

**Tab 6 · Recap:** read the three verbs only: *"Remember. Learn. Prepare."* Land: *"You built a loop that compounds instead of rebuilding context every time. Keep it. It is yours."*

Click **See the missing piece**. The deck becomes a blue screen. Pause for the laugh, then read the headline and the three status lines: *"The workflow works until the call starts. Before: prep ready. After: follow-up done. During: missing live audio."* Land: *"Claude can read the record. It cannot hear the buyer or coach the rep live."* Press **→** to add live call support and reveal slide 12.

**Slide 12, Before / During / After:** the slide now waits for you. It enters on **Before**. Advance once for **During**, once for **After**, and once more for slide 13. Previous reverses the states if you need to revisit a beat. Do not wait for an animation; nothing changes until you click.

**Slide 13, outcome proof:** use **Expand email** when the room needs to read either message, then scroll inside it. **Escape**, **Close**, or the shaded backdrop returns to the two-email view. If you are finished while an email is still expanded, **→** closes it and advances in one action; **←** closes it and returns to slide 12. The Gmail mark, WingRep wordmark, scored debrief treatment, and Jeffrey Gitomer coach assets come from the supplied email examples; every account, address, meeting, and performance detail is fictional. Point to the 8.1 score first, then scroll the debrief through coaching, the performance scorecard, CRM sync, MEDDIC capture, the drafted follow-up email, and action items. The game plan arrives before the call; the full debrief lands after it. The point is that reps do not need to reopen the product to get the workflow's value.

**Slide 14, differentiation:** most call tools preserve the conversation; WingRep changes the next call. Read the comparison as the answer to “why another tool?”

**Slide 15, manual-admin game:** there is one action: **Try to clear it manually**. Let someone click. The pile is intentionally unwinnable; when it fails, stop clicking and give the full WingRep-logo agent its four-second sweep. Let the room watch the tasks disappear before landing on *"work handled, rep ready: admin taken care of, time back to sell, stronger next call."*

**Slide 16, recap:** give the workflow away cleanly: four prompts, four moves, one coaching rhythm. The room can run it with or without WingRep.

**Slide 17, standard trial:** present the ordinary pilot as one simple three-week progression: connect a few reps, let the loop run, then make the removal test tangible. Land on *"Hate to see it go away"* and explain that taking WingRep back off the reps is the actual test. There is deliberately no product montage here; the audience has already seen the workflow. Do not mention Alan's attendee setup session yet.

**Slide 18, attendee setup:** say: *"You just felt the admin. Now let's build yours."* Present the free attendee-only 30-minute session with Alan as hands-on help turning the framework into their own sales assistant and getting WingRep set up for real calls. Point to the live setup-slot clock, then send the room to `https://calendly.com/alan-wingrep/30min`.

**Finale (slide 19):** point to Alan's Calendly link, then paste the cheat-sheet PDF link and deck link into the Zoom chat. Say: "everything on screen is in the chat right now."

---

# Part 4 · If something breaks

| If | Then |
|---|---|
| A response is slow or the app hiccups | *"Let me show you one I ran on this exact call earlier"* → open the matching BACKUP (`BACKUP · demo 1` in the claude.ai sidebar, `BACKUP · demo 2` in Cowork) → scroll it while narrating. The words are identical. |
| The demo-1 vibes email comes out surprisingly cautious (asks for details instead of inventing them) | Still a win, read it as: *"see, even the AI is telling me it has nothing to work with."* Then proceed to the transcript + deal-desk send unchanged. |
| The starter pack fails to create a file | Open Tab 5 in Sales OS, select that file, click **Copy open file**, and paste it into Cowork with: `Write this exact content to the filename shown and stop.` |
| You blank on narration | Read Claude's own output headers aloud. The scorecard is its own narration. |
| The calendar connector fails or returns the wrong thing | Open the `BACKUP · demo 2` conversation and narrate the calendar answer from there. Do not re-ask live. |
| The scheduler UI hiccups | Paste the Tab 4 automation prompt as a normal message instead of a scheduled task, and say: *"the schedule is just this prompt on a timer."* |
| The loop writes to the wrong file | Open the file it did write; the content is still right. Say nothing about the filename; fix it after the show. |
| Screen share drops | Keep narrating, re-share the ENTIRE display (not a single window), and recap in one line where you were. |

## Live Q&A talk tracks (only if asked; none of this goes on slides)
- **Security / compliance:** "Short version: your calls never train anyone else's model, and we're ISO 27001 certified. I'll send the full security packet with the follow-up, and we go deep on it in the demo." Do not enumerate SOC 2 status on stage.
- **"Do you replace Gong?":** "No, we plug into it. Gong watches the call; WingRep does the work after."
- **Real-time coaching availability:** pitch it exactly as the reveal slide shows it. If someone asks when they can have it: "It's rolling out with design partners now. Book the demo and we'll show you it live on your stack." Do not litigate the roadmap on stage.
