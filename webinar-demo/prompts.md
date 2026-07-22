# Prompt library: AI as your sales coach

Every prompt here uses the same four moves: give it a role, show it a real transcript, give it memory, and make one clear ask. The phrase "quote the exact moment or mark it MISSING" does the heavy lifting; it forces the answer to come from the transcript instead of being made up.

## Part 1 · The four core prompts (the webinar workflow, in order)

### 1. Capture
> Here's today's call with [prospect]. Write the entry I should append to this deal's running file: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.

### 2. Coaching ledger
> Here's my coaching log and today's call. Add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.

### 3. Deal scorecard
> You're my deal-desk analyst. Update this deal's MEDDIC scorecard from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since the last call.

Swap MEDDIC for SPICED, BANT, or Sandler; the structure holds.

### 4. Game plan
> Using the deal file and the transcripts: the next call is [the meeting] with [buyer]. Give me a 60-second brief for it: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line.

## Part 2 · The deal-desk extras

### Champion test
> From this transcript, is [name] a champion or just a friendly coach? Check three things and cite the evidence for each: do they have access to power, do they have a personal win if this closes, and have they actually spent internal capital selling for us yet? End with one concrete ask that would test them.

### Objection autopsy
> List every objection or pushback raised on this call, even the soft ones. Classify each as price, timing, authority, trust, or status quo. For each, quote what I said in response and score it 1 to 5, then write what a top rep would have said instead.

### Mutual action plan
> Draft a mutual action plan from what was agreed on this call: every milestone, the owner on each side, and the date. Flag anything that has no owner or no date, because that's where the deal will stall. Format it so I can paste it straight into the follow-up email.

### Forecast honesty check
> I have this deal at 70% to close this quarter in my CRM. Using only what's in these transcripts, argue against that number. What has the buyer actually committed to, in their own words? What am I assuming that no one ever said?

## Part 3 · Put it on a loop (Claude Cowork)

Prompts are the steps. The upgrade is the loop: memory it writes to, senses that feed it, and a schedule that runs it. Set up once, per rep.

1. Open Claude Cowork (claude.ai/download) and point it at a folder.
2. In the folder: your call transcripts plus two empty files, a deal file and a coaching log. You never type in them; the loop appends, call by call.
3. Connect Google Calendar in the app's settings, so the loop knows which calls are coming.
4. Schedule the automation below for 7am weekdays. Your reps start every day prepped.

### The after-call loop
*Run after every call; it replaces prompts 1 to 3.*
> Run my after-call loop on today's call with [prospect] ([transcript file]), in this order:
> 1. Deal file: append an entry: date, attendees, what changed since the last call, every decision made, and every commitment with an owner and a date. Keep it tight; this file is the deal's memory.
> 2. Coaching log: add a dated entry: what went well, gaps, one focus for next call. First, check if last call's focus stuck, and quote the moment.
> 3. Scorecard: update the MEDDIC scorecard from today's transcript. For each letter, quote the exact moment that proves it, or mark it MISSING, and call out which letters moved since the last call.
> Then stop and tell me the one thing that changed most.

### The morning brief, scheduled
*Paste as a scheduled task in the app.*
> Every weekday at 7am: check my calendar for today's sales calls. For each one, read the deal file and my coaching log, then write a 60-second brief: the one goal, the three questions to ask, the landmine to avoid, and the exact opening line. End with the one coaching focus to practice on this call, quoted from my log. Save each brief to game-plans/ and stop when every call has one.

**A loop you can trust has:** a clear goal, the right context, small steps, receipts you can check, and a stopping rule.

---

**Anti-pattern, for contrast:** "Write my follow-up to Priya. Call went well, she liked the demo, pricing came up." No transcript, just vibes: confident, generic, and it invents the details.
