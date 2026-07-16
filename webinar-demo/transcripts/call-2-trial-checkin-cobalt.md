# Call transcript: Trial check-in
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
