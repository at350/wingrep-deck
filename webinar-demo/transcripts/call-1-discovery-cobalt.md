# Call transcript: Discovery call
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
