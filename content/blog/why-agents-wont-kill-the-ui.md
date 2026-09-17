---
title: "Why Agents Won't Kill the UI"
date: 2026-09-17
description: Agents will change how we use software, but cognition still has costs. Why hybrid interfaces and conceptual integrity will matter in an agentic future.
tags:
  - AI
  - Product
  - Design
draft: false
---

*The economics of cognition and the case for hybrid interfaces*

I have spoken with quite a few people recently who have predicted the end of the traditional UI. We will tell an agent what we want, through text or voice, and it will act on our behalf. Increasingly, those exchanges may happen through earbuds, glasses or other wearables, without us opening an application or seeing the product's own interface at all. When something truly needs to be seen or manipulated, the agent will generate a temporary interface on the fly.

Both parts of this prediction seem reasonable. Some interactions will happen entirely through agents. In other cases, the agent will generate a user interface for a particular need. That is still a UI, but it is assembled at the moment of use rather than designed as a stable part of the product.

From the product team's perspective, both routes depend on an agent interface: semantic layers and ontologies that describe the concepts and rules of the domain, and tools through which agents can act. The agent may use that interface to complete the task itself or to decide what to put in front of the user. In either case, the product team no longer controls every step of the interaction directly. That makes the quality and coherence of the concepts, rules and actions it exposes even more important. I think product teams should already be preparing for this.

My argument is that this still leaves a place for persistent interfaces designed by the product team responsible for the service. Sometimes interacting directly is simply cheaper than delegating. In a niche or complex domain, the product team may also be better placed than a general-purpose agent to decide how a person should move through a task. A stable interface can encode that expertise and guide the user through it. More generally, it can help us work out what we want or make familiar actions almost effortless.

The thinking has to happen somewhere. We can do it ourselves at the moment of action, ask an agent to do it on demand, or rely on work a product team has done in advance. One can look at this through an economic lens. Cognition is a form of labor. Understanding a problem and deciding what to do take time and attention, whether we do that work ourselves or pay someone else to help. A product team spends time thinking (usually really hard!!) about a domain and building a model that makes it usable. We benefit from that work every time we use the product.

In an online shop, that model gives us products, a basket and checkout. In a less familiar domain, deciding what things mean and how they fit together can take considerably more work. You should thank those of us who spend time thinking about office parking so you do not have to. The cost of that work is amortized across many users and repeated uses. Both human and agent interfaces can benefit from it.

Agents change the economics by making more cognitive work available on demand at a lower cost. If we treat this as a market for cognitive services, we can think of a supply curve shifting to the right. In the usual supply-and-demand model, the resulting fall in price increases the quantity demanded. People can afford to delegate tasks they would previously have done themselves, or never attempted. The equilibrium changes.

For the person using the product, though, the total cost also includes explaining the request, waiting for the result and checking it. Repeated inference consumes compute too, whether the user sees that as a token charge or the cost is absorbed elsewhere. An agent can reduce some of these costs through context and memory. A stable interface can reduce them by letting us recognize and perform the action directly. To compare delegation with direct interaction fairly, we need to count everything each requires: compute, the user's time and attention, any learning involved and the effort of correcting mistakes.

One part of that cost is sometimes called the articulation barrier. Natural language is only effortless when we already know what we want and can put it into words. Some intentions are visual, spatial or only become clear as we act. I can select a seat on a map more easily than I can describe all the reasons I prefer it. I can move a label until it looks right without first deciding where it should go. Direct manipulation lets me act on that judgment without translating each adjustment into a fresh request. Voice may remove the effort of typing, but it does not remove the effort of working out and expressing the request.

There are also situations where we do not yet have a request to delegate. An interface can show us possibilities we did not know existed. An agent could in theory do the same, but only if it knows which options are relevant. Someone who understands the domain can anticipate the situation and make those options visible. Seeing them helps us decide what to do. This is the familiar design principle of recognition rather than recall: it is often easier to recognize an option than to produce it from memory.

At other times, a familiar interface lets us act on intuition before we have consciously formulated what we want. In the shorthand popularized by Daniel Kahneman, System 1 has responded before System 2 has even been consulted. Take an extreme example. Imagine something goes wrong on a bus. Beside you is a big red button screaming **STOP** in all caps. Red means danger. **STOP** means stop. The convention is so deeply ingrained that you do not need to stop and think about what to do. You press it. You would hardly open a chat interface and ask an agent to alert the driver. The intended action has already been thought through and made immediately available. The agent could understand the request perfectly and still be an unnecessary step.

Emergencies are an extreme case, but the same calculation applies to ordinary actions. If the right control is already in front of me, using it may be cheaper than delegating. If I first have to hunt through several screens, it may not be.

Predictability matters too. The Principle of Least Astonishment is about things behaving as we reasonably expect. LLMs are probabilistic, so a UI generated in the moment may not present the same controls in the same place, or behave in quite the same way, each time. That variability can be useful when we are exploring. For a repeated task, it creates a cost. Sometimes we want the same interface every time so that familiarity and muscle memory can take over.

For product teams, this points to a hybrid future. Some workflows may disappear from view as our agents take them over. Others will still benefit from a UI we use ourselves, and we may move between the two within the same task. The job is to understand when delegation lowers the user's total effort, when direct interaction does, and to make the handover easy.

Perhaps SaaS should become CaaS: "Cognition as a Service." Not literally, but as some of the visible software disappears, the name gets closer to what is being provided. What remains is a product team's understanding of a domain, encoded in a coherent model and made available through UIs for people and semantic layers, ontologies and tools for agents. Product teams have often been able to paper over awkward or legacy models via the UI. Agent interfaces give them less room to do so.

That is why Fred Brooks looks rather prescient. Back in 1975, he argued for "conceptual integrity": the parts of a system should fit together around a consistent set of design ideas. For a contemporary product team, that means even more discipline in deciding what to build, which concepts belong in the model and how each new capability fits the whole. Product teams were always supposed to do this. But as more workflows move into users' agents, they will have to maintain that integrity across interfaces for people and agents. At a moment when everyone is asking what becomes of product roles in an agentic world, perhaps that is the more interesting question: does conceptual integrity become the main thing a product team is there to provide?

## Sources and notes

- Ben Shneiderman, [Direct manipulation principles](https://www.cs.umd.edu/~ben/about.html): visible objects and actions, with immediate feedback from incremental, reversible changes.
- Nielsen Norman Group, [Overcoming the Articulation Barrier in Generative AI Using Hybrid Interfaces](https://www.nngroup.com/articles/ai-articulation-barrier/).
- Nielsen Norman Group, [Memory Recognition and Recall in User Interfaces](https://www.nngroup.com/articles/recognition-and-recall/).
- Daniel Kahneman, *Thinking, Fast and Slow* (2011), which popularized the terms System 1 and System 2 as shorthand for fast, intuitive thinking and slower, more deliberate thinking.
- Frederick P. Brooks Jr., *The Mythical Man-Month* (1975), chapter 4, "Aristocracy, Democracy, and System Design." See the [publisher's description of the anniversary edition](https://www.informit.com/store/mythical-man-month-anniversary-edition-essays-on-software-9780132119160). The application to human and agent interfaces is this essay's interpretation.
