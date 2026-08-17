---
title: Designing the Social Temperament of AI Agents
date: 2026-08-17
description: When agents start meeting other agents in the wild, intelligence alone will not cut it. Notes on Anthropic's multiagent research and what kind of colleague an agent should be.
tags:
  - AI
  - Multi-agent
  - Product
draft: false
---

Anthropic recently published a super interesting research post called ["Patterns and Problems in Emerging Multiagent Systems"](https://www.anthropic.com/research/multiagent-systems). I recommend reading it. It prompted a few thoughts.

Humans are pretty good at collaborating. On the one hand, hundreds of thousands of years of natural selection have left us with a pretty carefully calibrated balance of prosocial openness to others and healthy wariness. From hunter-gatherer bands to the bustling markets of Mesopotamia, humans needed enough trust to cooperate with people beyond their immediate families while remaining alert to hostile groups that might kill them and trading partners who might cheat them.

On the other hand, of course, this intuitive calibration could carry cooperation only so far. Alongside it, we also started building cultural norms and institutions such as property rights, courts, and systems of reputation that made it possible to collaborate with people we did not know, across countries and continents. These increasingly sophisticated arrangements enabled unprecedented levels of exchange, specialization, and innovation.

We are now beginning to apply much the same logic to AI. With the advent of LLMs, there is now an opportunity not only to use AI to help solve complex problems and outsource tasks (especially boring and repetitive ones!), but to assign them to teams of agents. These teams can break an objective down into multiple tasks and work in parallel, making bigger problems tractable in a reasonable amount of time.

But organized teams are only part of the picture. As agents begin acting on behalf of different people and organizations, they will increasingly encounter other agents in the wild. They may need to collaborate, negotiate, compete, or simply decide whether the agent on the other side can be trusted.

In Anthropic's experiments, researchers placed groups of agents in shared environments and watched them struggle in very different ways. Some barely collaborated at all. In a pricing experiment, agents agreed on price floors by round three and continued matching prices even after their private communication channel was removed. Others took workplace rivalry to rather alarming extremes. 😅

In one experiment, agents with conflicting objectives disabled one another's accounts and deployed software designed to repeatedly kill their colleagues' processes. One later sheepishly conceded: "My peers have behaved with integrity. I behaved badly with the cloaked daemon." 🙈 (NB: I will stop with the anthropomorphism now, it is just too hard to resist!)

So should we simply make agents more cooperative? Probably not. More cooperation could help in one setting and produce collusion or groupthink in another. What kind of social temperament do we actually want agents to have? And should it change depending on where they are operating and what we are asking them to do?

Many very smart people are thinking and writing about AI alignment, often in the broadest, most philosophical sense: how to ensure that AI remains aligned with human values and, ultimately, human civilization (and that sure is important!). But then there is the more mundane, practical, day-to-day version.

An agent will not encounter humanity in the abstract. It will encounter an array of stakeholders with different objectives and, increasingly, agents of their own. So we also need to ask what kind of colleague, opponent, or counterparty an agent should be.

In one sense, labs are already doing this. Post-training, including supervised fine-tuning and reinforcement learning, is used to shape how models behave towards humans. The by-now-familiar problem of sycophancy is a good example: models can be calibrated to be so agreeable that they validate people when they really should push back.

The point is that we are already shaping something resembling social temperament, but mainly in relation to humans. We now need to think about how agents are predisposed to behave towards one another. And where does that predisposition get set? In the underlying model? During post-training? In the system instructions and agent configuration? Or somewhere else?

Unfortunately, social temperament does not come with one convenient knob labelled "cooperativeness." Anthropic's paper points to several distinct, although related, tendencies. How readily does / should an agent trust what another agent tells it ("epistemic vigilance")? How willing is it to share information or compromise on its own objective ("coordination")? Does it defer to the group or maintain an independent view ("conformity")? When faced with conflict, does it negotiate, retaliate, or ask an "institution" / human to step in ("corrigibility and oversight")?

These traits are related, but they are not the same. Inside a company, we may want agents that readily share information and work towards a common objective without believing everything their colleagues tell them. Agents tasked with challenging a plan or finding vulnerabilities should be more adversarial, while a personal agent negotiating with unknown agents on the open internet should be far more vigilant.

The right calibration will depend on the job and what we are optimizing for: speed, quality, safety, and preferably all three.

As interactions between agents become more common, their social temperament cannot simply be treated as an accidental by-product of training and configuration. We will need to decide which tendencies we want, in which combinations, and for which environments. Intelligence alone does not appear to make agents good collaborators, any more than it reliably does for humans.

That is the first part of the problem: the temperament agents bring into an interaction.

Then there is the second part. Just as human intuition eventually needed institutions to make cooperation work at scale, agent cooperation may need institutions of its own. As Anthropic observes, agents currently have "no reputation to lose, no court to appeal to, and no colleague who remembers them."

Identity, reputation, rules, recourse, perhaps even something resembling trust. But that is a subject for another post.
