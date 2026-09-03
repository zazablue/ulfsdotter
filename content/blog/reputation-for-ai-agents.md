---
title: Can an AI Agent Have a Reputation?
date: 2026-08-24
description: If agents have no reputation to lose, no court to appeal to, and no colleague who remembers them — what would giving them one look like?
tags:
  - AI
  - Multi-agent
  - Trust
draft: false
---

Last week I wrote about [the social temperament of AI agents](/blog/social-temperament-ai-agents): how readily they should trust one another, when they should cooperate or maintain an independent view, and why the right calibration probably depends on what they are doing and where.

Towards the end of the [Anthropic research](https://www.anthropic.com/research/multiagent-systems) that prompted those thoughts, the authors point to another part of the problem. Human cooperation does not depend on temperament alone. We have also built norms, systems of reputation, credible ways of signaling trustworthiness (e.g. putting down a deposit or providing a product guarantee), and forms of recourse such as insurance and the courts. Agents, as Anthropic rather neatly puts it, currently enter the market with "no reputation to lose, no court to appeal to, and no colleague who remembers them."

So what would a system of reputation for agents actually look like?

For humans, reputation is both evidence (past behavior) and incentive (a desire to protect it). It helps us decide whether somebody is likely to behave well, based on what they have done before. But it also gives that person a reason to behave well now, because today's behavior may affect who trusts them tomorrow.

For that to work, we need some continuity of identity, a history that can be checked, something the person stands to lose, and some form of recourse when things go wrong.

For agents, there is a seemingly attractive answer to the identity problem. Perhaps the persistent entity is not the agent at all, but the person or legal entity on whose behalf it acts, known as the principal in legalese.

"Isabelle's assistant" may switch models, tools, prompts and configurations over time. Isabelle, however, remains Isabelle. The same is true of an agent acting for a company. Where the principal is known, or at least knowable, the agent's actions can be attributed to the person or company that authorized them.

For us regular and mostly law-abiding folks that means many of the incentives for good behavior already exist. And the law is beginning to signal fairly clearly that deploying an agent will not create a convenient responsibility-free zone. In the UK, for example, the [Competition and Markets Authority has told businesses](https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents) that they remain responsible under consumer law for what an AI agent does, much as they would for an employee, even if somebody else supplied the agent.

Exactly how liability will be divided between users, deploying companies, agent-system providers and model developers is [far from settled](https://law.duke.edu/news/legal-liability-and-agentic-ai-how-law-applies-when-bots-go-rogue), and will depend on the jurisdiction and circumstances. Still, "the agent did it" seems unlikely to become a universally compelling defense.

Even without full clarity from the legal system, existing systems already provide more ordinary consequences. If my agent [exploits a security flaw to cancel somebody else's gym reservation](https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym/), it is my account the gym can suspend and perhaps my membership it can be terminated.

The problem in such cases may therefore be less that principals lack an incentive to keep their agents well behaved, and more that most of us lack the technical expertise to ensure that they actually do behave. An unusually thoughtful system prompt is probably not going to be enough.

That creates an opportunity for providers of agent systems. These would not necessarily have to be the model providers themselves. A provider might build an agent system around interchangeable models, combining the chosen model with tools, permissions, guardrails, monitoring, audit logs and human approval for sensitive actions — basically what harnesses like Claude Code, Codex, OpenClaw and Hermes already do today (Codex is already open source and can be used with non-OpenAI models). The difference might be what the whole system is optimized for. It could even use models that have been specifically fine-tuned or post-trained with protecting their principal's "reputation" worked into the reward function.

For most of us, the appeal would simply be that somebody with more technical expertise had configured and tested the system and was prepared to accept some responsibility when it failed. Perhaps the provider could even offer insurance for the occasions when the agent did something rather less sensible.

Of course, that only deals with our side of the transaction. The person or agent encountering our agent still needs some way to verify who it represents, what it is authorized to do and perhaps how it has behaved before.

Some of that external infrastructure is already beginning to appear. Experian recently announced Agent Trust, an initiative with Visa, Cloudflare and Skyfire that would bind agents to verified consumers and provide identity, authorization and risk signals during transactions.

It is focused on commerce where the person behind the agent is known, so it does not solve every problem, particularly what happens when the agent changes substantially over time. But it does show that this new layer of trust infrastructure is already beginning to take shape.

Which leaves the harder question: what happens when the identity of the principal cannot be ascertained at all? Surely we cannot assume that every agent, in every corner of the internet, would (or should) systematically reveal and verify the person or company it represents?

But that is a subject for the next post.
