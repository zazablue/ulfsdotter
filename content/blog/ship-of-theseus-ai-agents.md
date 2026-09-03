---
title: "Ship of Theseus: Can an AI Agent Keep Its Reputation?"
date: 2026-09-03
description: If every component of an agent gets replaced — model, prompt, tools, budget — is it still the same agent? And does its reputation carry over?
tags:
  - AI
  - Multi-agent
  - Trust
draft: false
---

It is completely ordinary to transact with other humans whose identities we do not know, especially in the digital world. Whenever you buy something on a marketplace from a private seller, you are basically interacting with an unknown entity. All I may know about the seller is a reassuring handle such as BargainBadger1974 and a 4.8-star rating across several hundred sales. If the transaction goes awry, say the merchandise never arrives, the marketplace will usually provide some form of recourse such as refunding my money. I can also leave a devastatingly polite one-star review. So there is a system of trust around the transaction and I personally do not, in fact, need to care who is really on the other side.

What I do get, however, is some reassurance that BargainBadger1974 is the same seller who earned those 4.8 stars. If I buy from them for the fifth time, I am not supposed to be dealing with an entirely different person borrowing the account's history. Even when it is a company and the employees change, I assume I am still dealing with broadly the same organization, operating under broadly the same incentives.

In my last post I touched upon the topic of agents' reputation, and in particular agents whose identity is known or knowable because they represent some kind of principal. I thought the next question might be what happens when the principal cannot be identified, does not need to be identified or simply does not want to be identified.

But before getting there, I realized that we may already have another problem.

As a thought experiment, take the example of Isabelle's assistant. Imagine my assistant has spent a year booking restaurants, buying train tickets and negotiating with hotels. It may have completed thousands of transactions. It has never insulted anybody. It has never accidentally booked me a skydiving excursion I did not want or tried to blackmail a hapless airline support agent into giving me a first-class upgrade because, frankly, I really do deserve a proper vacation. By now it has an excellent reputation.

What happens when I start replacing the pieces of this agent? What if the model is upgraded? What if the system prompt is rewritten? What if I give it a new tool or change its budget, maybe giving it less money than it had before? What if I use a broker to select a different model for every task so that I get the cheapest and best one for the task at hand?

Is it really still the same assistant?

Here I think we start having a little bit of a Ship of Theseus problem. As a reminder, the Ship of Theseus asks: if every plank in a ship is gradually replaced, at what point is it no longer the same ship?

We have something similar with agents. The difference is that replacing the component parts of an agent is not a bug; it is a feature. Models are supposed to improve. Prompts are supposed to be refined. Security flaws are supposed to be fixed. Better tools are supposed to be added. Nobody is going to keep using an agent from 2026 in 2029 merely to protect the integrity of its identity.

We update ordinary software too, of course, and we have a notion of stable builds. But agents are also probabilistic systems. We cannot test every possible way that a new model might behave across thousands of future conversations and situations. "Stability" is not really built into the agent paradigm, and at some point its component parts would have shifted enough that its reputation would no longer be applicable. BargainBadger1974, by comparison, is beginning to look reassuringly dependable.

Of course, if all these changes produce exactly the same outcomes, there is no problem. The difficulty is that we may only discover the difference when the agent encounters a situation that its previous history never tested.

For the sake of illustration, what kinds of changes might actually affect an agent's reputation?

- Does fixing a typo in the system prompt change the agent or its reputation?
- What about updating it from Fable 5, for example, to the newly released Fable 5.1? Anthropic has been adjusting some safeguards to reduce false positives that were frustrating Fable 5 users. That may be a perfectly sensible improvement, but it is intended to create a change in behavior.
- Let us say the agent is given a smaller budget but is still instructed to obtain the lowest possible hotel price. How might that affect its behavior? Unlike what OpenAI's agents were exposed to during recent training rounds it may not be an impossible task, but it has certainly become a harder one. Might that cause it to act more aggressively or bend rules that it previously respected?
- And what if a broker selects different models for different tasks? In that case, the thing operating as "Isabelle's assistant" may change from one transaction to the next.

So where does this leave reputation? What does it actually belong to?

In the last post I treated the known principal as a fairly convenient answer. If an agent acts in my name, other people can infer certain incentives and, importantly, at least know where to start when something goes wrong. My identity provides a degree of continuity and possibility of recourse.

But it only provides continuity at the level of the principal. It does not tell anybody whether the version of Isabelle's assistant in front of them is meaningfully the same one that earned those five stars.

Perhaps agents will need something resembling a change log. If a typo is corrected in the system prompt, nobody needs to panic. If the model changes, the budget is cut and the requirement for human approval is removed, perhaps our confidence in its previous reputation should fall a little.

Who decides when that point has been reached? The model provider? The company configuring the wider agent system? The marketplace where the agent is operating? I am not sure.

I had intended to move on to the harder question of reputation when the principal is unknown. It turns out that even when the principal remains exactly the same, we first have to decide what it means for the agent to remain the same.
