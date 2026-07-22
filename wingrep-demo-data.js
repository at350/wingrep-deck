window.WINGREP_DEMO_FILES = {
  "deals/cobalt-freight/transcripts/call-1-discovery-cobalt.md": `# Call transcript: Discovery call
**Deal:** Cobalt Freight (mid-market logistics, ~1,800 employees)
**Rep:** Jordan Avila (AE, Vantage Security)
**Attendees:** Priya Raman (Director of Security Operations, Cobalt Freight)
**Date:** June 26, 2026 · 31 min

---

**[00:00] Jordan:** Priya, thanks for making time. I know you found us through the CloudSec conference, so I'll skip the long intro. How's the week going?

**[00:24] Priya:** Busy. We just wrapped a SOC 2 renewal, so everyone's a little fried.

**[00:31] Jordan:** Ha, I bet. Well, congrats on getting through it. So the way I usually run these is I'll give you a quick overview of Vantage, then we can talk about what's going on on your side. Sound good?

**[00:45] Priya:** Sure.

**[00:47] Jordan:** Great. So Vantage is a cloud security posture platform. We connect to your AWS and Azure environments, continuously scan for misconfigurations, and prioritize findings by actual exploitability instead of just severity scores. Most of our customers are mid-market companies like Cobalt where the security team is five to ten people trying to cover everything. We integrate with Jira and Slack so findings route straight to the engineer who owns the resource. We're SOC 2 Type II ourselves, deploy agentless in about an hour, and our customers typically see their critical-finding backlog drop sixty to seventy percent in the first quarter. Companies like Meridian Grocers and Tandem Payroll run their whole cloud posture program on us.

**[02:10] Priya:** Okay.

**[02:12] Jordan:** So tell me a bit about your environment. Mostly AWS?

**[02:16] Priya:** AWS primarily, some Azure from an acquisition two years ago that we're still untangling.

**[02:24] Jordan:** Got it, that's really common. And what are you using today for posture management?

**[02:30] Priya:** Honestly, a mix. AWS native tooling, Security Hub, and a lot of spreadsheets. My team exports findings weekly and triages by hand.

**[02:41] Jordan:** Painful. How big is the team?

**[02:44] Priya:** Six, including me. Two of those are really IT ops that I borrow.

**[02:49] Jordan:** Yeah, that's exactly who we built this for. So with the spreadsheet process, how much time would you say the team spends on triage?

**[02:58] Priya:** A lot. Maybe two full days a week across the team? It's the part everyone hates. And things slip. We had a public S3 bucket sit for eleven days in March before anyone caught it.

**[03:14] Jordan:** Ouch. Okay, so that's exactly the kind of thing we catch in minutes. Let me actually show you, because the prioritization engine is the part people usually get excited about. Can I share my screen?

**[03:26] Priya:** Go ahead.

**[03:28] Jordan:** *(demoing)* So this is a live environment. You can see the findings feed here, and instead of four hundred criticals like Security Hub gives you, we're showing eleven, because these are the ones that are actually reachable from the internet with a known exploit path. This one here, for example, is an IAM role that...

*(demo continues, Jordan walks features for roughly nine minutes)*

**[12:40] Priya:** That routing into Jira is nice. My engineers ignore anything that isn't in Jira.

**[12:46] Jordan:** Everyone says that! It's table stakes now. Okay, so what else... let me show you the compliance mapping since you mentioned SOC 2.

*(demo continues, roughly six more minutes)*

**[19:02] Priya:** Okay, this is genuinely more interesting than I expected. What does something like this cost?

**[19:08] Jordan:** So pricing depends on cloud footprint, number of accounts, that kind of thing. I don't want to throw a number that's wrong. We're definitely built for mid-market budgets though, we're usually quite a bit under Wiz. I can put a proposal together.

**[19:24] Priya:** Alright.

**[19:26] Jordan:** How does buying usually work at Cobalt? Is this something you'd own?

**[19:31] Priya:** I'd drive the evaluation. Anything over a certain size goes through our CISO, Marcus, and then procurement. But getting Marcus's attention is its own project, he's buried in the board audit stuff until end of summer.

**[19:44] Jordan:** Sure, makes sense. Well, the eval is the fun part anyway. What I'd suggest is we get you into a trial, you connect a couple of AWS accounts, and the findings speak for themselves. Then when it's time to bring in Marcus you'll have real data.

**[20:00] Priya:** A trial could work. I'd want my senior engineer Dana in on that.

**[20:05] Jordan:** Perfect, loop Dana in. I'll send over the trial paperwork. Anything else you'd want to see?

**[20:12] Priya:** Integration with Okta for access reviews, eventually. Not a day-one thing.

**[20:17] Jordan:** We have that on the roadmap actually. Okay, I'll send the trial link and a recap. Should we pencil something in for two weeks out?

**[20:28] Priya:** Send me some times. Also, heads up, we're talking to one of your competitors, I won't say who, so timing-wise we're trying to decide by end of Q3.

**[20:37] Jordan:** Good to know! You'll like us better. Alright Priya, this was great. Talk soon.

**[20:44] Priya:** Thanks Jordan.

*(call ends)*
`,

  "deals/cobalt-freight/transcripts/call-2-trial-checkin-cobalt.md": `# Call transcript: Trial check-in
**Deal:** Cobalt Freight
**Rep:** Jordan Avila (AE, Vantage Security)
**Attendees:** Priya Raman (Director of Security Operations), Dana Okafor (Senior Security Engineer)
**Date:** July 10, 2026 · 24 min

---

**[00:00] Jordan:** Priya, Dana, good to see you both. Dana, welcome, I hear you've been the one actually living in the trial.

**[00:08] Dana:** That's me. I connected our two main AWS accounts last Tuesday.

**[00:13] Jordan:** Perfect. So rather than me presenting, I'd love to just hear it straight. What's the verdict so far?

**[00:20] Dana:** Mostly positive, honestly. The exploitability scoring is legit. It flagged an internet-reachable RDS instance with an old snapshot policy that Security Hub had buried at severity medium. We fixed it same day.

**[00:34] Jordan:** That's a great catch. Did that go through the Jira routing?

**[00:38] Dana:** Yeah, and that part my engineers actually like, which is rare. Two complaints though. The Azure connector kept timing out on our acquired tenant, and the weekly digest email is noise, I turned it off.

**[00:50] Jordan:** Okay. The Azure tenant thing I want to get support on this week, that shouldn't happen. The digest, fair, most power users turn it off. Priya, from your seat?

**[01:00] Priya:** The triage time is the story for me. Dana, what did you say, the Monday review went from most of a day to about an hour?

**[01:07] Dana:** About that, yeah. The dedupe alone is worth it.

**[01:11] Jordan:** That's huge. So Priya, last time you mentioned Marcus and the board audit. I've been thinking about that. If the Monday triage number holds, that's roughly a day and a half of engineer time back per week. That feels like a story Marcus would want for the board, not a distraction from it. Any appetite to get thirty minutes with him before the audit wraps?

**[01:32] Priya:** Maybe. He did ask me last week what we were doing about the cloud audit findings, so there's an opening. I'd want a one-pager first, something I can forward. Not a deck, he won't open a deck.

**[01:44] Jordan:** Done, I'll draft a one-pager you can edit. What would need to be on it for it to work for him?

**[01:50] Priya:** Cost of the current process, the S3 incident without calling it that, and what it costs. He'll ask about price in the first five minutes.

**[01:58] Jordan:** Understood. On price, for your footprint we'd land between fifty-five and seventy k a year depending on the Azure tenant. I'll put the real number on the one-pager.

**[02:08] Priya:** That's within the realm. Over fifty needs Marcus plus procurement, so no surprises there.

**[02:14] Jordan:** Good. And you mentioned a competitor last time. Is that eval running in parallel on the trial too?

**[02:20] Priya:** They're earlier stage with us. We've had one call. I'll be honest, they came in cheaper on paper, but nobody here has used the product yet.

**[02:28] Jordan:** Appreciate you telling me. Okay. Dana, anything that would make this a no for you?

**[02:34] Dana:** If the Azure connector doesn't get fixed, that's a real problem. That tenant is half our risk.

**[02:40] Jordan:** Then that's my top priority. Recap: I get support on the Azure tenant this week, I draft the Marcus one-pager with real pricing by Friday, and Priya, you look for that thirty-minute slot with him. Fair?

**[02:52] Priya:** Fair. No promises on Marcus's calendar before August though.

**[02:56] Jordan:** Understood. And should we hold a slot for the three of us plus Marcus, so it's on the books if he bites?

**[03:02] Priya:** Send the invite, worst case I move it.

**[03:05] Jordan:** Great. Thanks both.

*(call ends)*
`,

  "deals/cobalt-freight/deal-scorecard.md": `# Deal scorecard: Cobalt Freight
One file per deal. Paste back into Claude with each new transcript and ask it to update every letter with quoted evidence.

**Deal:** Vantage Security → Cobalt Freight · ~$55-70k ARR · Target close: end of Q3 2026
**CRM stage:** Evaluation (trial live since July 1)

---

## MEDDIC as of call 1 (June 26)

**M · Metrics: PARTIAL**
Evidence: "Maybe two full days a week across the team" on manual triage; public S3 bucket "sat for eleven days in March."
Gap: nothing converted to dollars, and no target state agreed with the buyer.

**E · Economic buyer: MISSING**
Evidence: Marcus (CISO) signs anything over threshold, but "getting Marcus's attention is its own project, he's buried in the board audit stuff until end of summer." No plan to reach him.

**D · Decision criteria: MISSING**
Never asked what they will judge the eval on. Okta integration mentioned as future want.

**D · Decision process: PARTIAL**
Evidence: "I'd drive the evaluation... goes through our CISO, Marcus, and then procurement." Decision target "end of Q3." No detail on procurement, security review, or legal.

**I · Identify pain: STRONG**
Evidence: spreadsheet triage, borrowed IT ops headcount, the 11-day S3 exposure. Pain is real and recent.

**C · Champion: UNTESTED**
Priya is engaged (a coach, at minimum) but has not yet sold internally or spent capital. Test: will she put the one-pager in front of Marcus?

**Competition:** unnamed competitor, "trying to decide by end of Q3." Nothing else known.

---

## Focus carried into call 2 (from coaching log)
Get a path to Marcus with an artifact he'd read; ask real questions about the competitor.
`,

  "reps/jordan-avila/coaching-log.md": `# Coaching log: Jordan Avila
One running file per rep. Paste this back into Claude with each new transcript.

---

## Entry: June 12, 2026 · Discovery, Meridian Grocers renewal expansion
**What went well:** Opened with their incident from the news instead of a pitch. Prospect talked for the first six minutes.
**Gap:** Never asked how success would be measured. We left without a single number.
**Focus for next call:** Get one quantified metric on the table before any demo.

## Entry: June 26, 2026 · Discovery, Cobalt Freight (Priya Raman)
**What went well:** Surfaced real pain with evidence (two days a week of triage, the 11-day public S3 bucket). Priya leaned in at the Jira routing.
**Gaps:**
- Talked for the first two minutes straight; demoed for 15 of 31 minutes on a first call.
- Priya asked about price and I deflected. She was giving me a buying signal and I gave her homework.
- Marcus (CISO) is the economic buyer and I accepted "he's buried until end of summer" without a plan.
- She mentioned a competitor in the last 30 seconds and I said "you'll like us better" instead of asking a single question about it.
**Focus for next call:** Get a path to Marcus on the table, with a concrete artifact he'd actually read. And ask about the competitor like an adult.

## Entry: (next call goes here)
`
};
