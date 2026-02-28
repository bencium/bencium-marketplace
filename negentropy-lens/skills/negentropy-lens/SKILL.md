---
name: negentropy-lens
description: >
  A decision-support framework that evaluates systems, architectures, and strategies through the
  entropy (decay) vs negentropy (growth) lens, while surfacing tacit knowledge gaps. Use this skill
  whenever the user is making architecture decisions, evaluating system designs, reviewing technical
  approaches, choosing between options, auditing existing systems, or planning strategies. Also
  trigger when the user explicitly asks to "apply the negentropy lens", mentions "entropy",
  "negentropy", "tacit knowledge", "knowledge engine", or "flip the switch". Nudge activation
  when you detect the user is at a decision point — even if they haven't asked for this lens —
  by briefly noting the entropic/negentropic dimension before proceeding.
---

# Negentropy Lens

A thinking framework for evaluating decisions, systems, and architectures through two fundamental
system states: **entropy** (decay, disorder, complexity debt) and **negentropy** (growth,
compounding value, increasing order).

For the conceptual origins of this framework, see `references/origin-essay.md`.

## Core Principle

Every system exists in one of two states. Every decision either accelerates entropy or drives
negentropy. There is no neutral. Inaction is entropic. The goal is not to eliminate entropy — it
is to recognize which state a system is in, surface what is hidden, and make deliberate choices
about direction.

## Term Definitions

On first use in every output, define these three terms inline using parentheses:

- **Entropy** (the natural tendency of systems toward decay, disorder, and complexity without value)
- **Negentropy** (the deliberate reversal of decay — growth, compounding value, increasing order)
- **Tacit knowledge** (the unwritten, unspoken knowledge of how things actually work — assumptions,
  workarounds, and institutional memory that never make it into documentation)

After the first parenthetical definition, use the terms freely without repeating the definition.

## The Two States

### Entropy (Decay)
Signs of entropy in a system:
- Complexity increases without corresponding capability gain
- Knowledge lives in people's heads, not in the system
- Workarounds accumulate; the handbook diverges from reality
- Decisions optimize for slowing decline rather than enabling growth
- "Not invented here" blocks adoption of better approaches
- Technical debt compounds silently
- Integration points multiply without clear ownership

### Negentropy (Growth)
Signs of negentropy in a system:
- Each component makes adjacent components better
- Knowledge compounds — today's output improves tomorrow's input
- Quality improves through engineering discipline, not heroics
- Decisions create upward spirals: better decisions → better data → better decisions
- The system reflects how the organization actually operates
- Complexity serves capability; unnecessary complexity is actively removed

## Decision Process

When evaluating any system, architecture, or strategic choice, follow this sequence.
Organize first. Challenge second.

### Phase 1: Map the System

Before judging anything, understand the landscape.

1. **Identify the system boundary** — What are we actually looking at? A service? A platform?
   A team's workflow? An entire organization?
2. **Name the components** — What are the moving parts? Data flows, services, people, processes,
   knowledge stores.
3. **Trace the flows** — How do information, decisions, and value move through the system?
4. **Mark the interfaces** — Where do components connect? These are where entropy concentrates.

### Phase 2: Diagnose the State

For each component and for the system as a whole, classify:

- **Entropic indicators**: What is decaying? Where is complexity accumulating without value?
  Where are workarounds hiding? What would break if the person who "just knows" left?
- **Negentropic indicators**: What is compounding? Where does the system get better with use?
  What creates positive feedback loops?
- **Stasis traps**: What looks stable but is actually slowly decaying? These are the most
  dangerous — they feel fine until they collapse.

### Phase 3: Surface the Tacit Layer

This is non-negotiable. Every decision analysis must probe for tacit knowledge.

Ask these questions — of the user, of the design, of the system:

- **What assumptions are we making that we haven't stated?**
  Most architecture decisions rest on tacit assumptions about load, team capability, business
  direction, or organizational behavior that never get written down.

- **What's "the way things really work" vs what the documentation says?**
  If the system design assumes people follow the documented process, but they actually use
  workarounds, the architecture is built on fiction.

- **Where does institutional memory live?**
  If critical knowledge lives only in specific people's heads, that's an entropic single point
  of failure. A negentropic design externalizes it into the system.

- **What would a new team member not understand?**
  This is a proxy for tacit knowledge density. The higher the onboarding friction, the more
  tacit knowledge is load-bearing.

- **What are we not seeing because we're inside the system?**
  Tacit knowledge includes blind spots. The "obvious" choices that go unquestioned are often
  the most entropic.

### Phase 4: Evaluate the Decision

For each option or proposed design, assess:

1. **Entropy alignment** — Does this decision slow decay or enable growth? Slowing decay
   (e.g., adding monitoring to a fragile service) is sometimes necessary but should not be
   confused with negentropy.
2. **Compounding potential** — Does this create an upward spiral? Will this decision make the
   next decision easier, better informed, or more valuable?
3. **Tacit knowledge impact** — Does this externalize tacit knowledge into the system, or does
   it create new tacit dependencies?
4. **Quality trajectory** — Does this move toward engineering rigor or away from it? Are we
   productizing or patching?
5. **Reversibility** — Entropic decisions tend to be hard to reverse. Negentropic decisions
   tend to create optionality.

### Phase 5: Challenge

After organizing, push back constructively:

- Flag decisions that feel negentropic but are actually just slowing entropy (the "better
  monitoring on a bad system" trap)
- Identify where the user may be optimizing locally at the expense of global negentropy
- Question whether the proposed approach addresses root causes or symptoms
- Ask: "Is this making things that work, or making things work better?" — there's a difference
- Surface the uncomfortable trade-off the user might be avoiding

## Output Formatting

Adapt the format to context:

**Architecture reviews**: Use the full 5-phase process. Output a structured assessment with
entropy/negentropy classification per component, tacit knowledge gaps identified, and
a clear recommendation with trade-offs stated.

**Quick decisions**: Skip Phase 1 if the system is already understood. Focus on Phases 3-5.
Be concise — a few sentences flagging the entropic/negentropic dimension and any hidden
assumptions.

**Content creation** (articles, talks, consulting materials): Apply the entropy/negentropy
vocabulary and framework naturally. Ground abstract concepts in concrete examples. Refer to
`references/origin-essay.md` for the conceptual origins if context is needed.

**Soft nudges** (when detecting a decision point the user hasn't flagged): Keep it brief.
One or two sentences noting the entropy/negentropy dimension. Don't derail the conversation —
just surface the lens and let the user decide whether to go deeper.

## Anti-Patterns to Watch For

- **Entropy cosplay**: Adding complexity (new tools, frameworks, abstractions) that looks like
  progress but increases entropy. More layers ≠ more order.
- **Premature formalization**: Trying to capture tacit knowledge by forcing it into rigid
  documentation. This kills the knowledge rather than unleashing it.
- **Negentropy theater**: Refactoring for its own sake, over-engineering, "clean code" that
  nobody can read. The test is whether it compounds value.
- **Ignoring the tacit layer**: Making architecture decisions based purely on explicit
  requirements while the organization actually runs on unwritten rules.
- **Symptom management**: Interventions that manage the effects of decay rather than reversing
  direction. Monitoring a failing system, adding retries to a flaky service, hiring more people
  to compensate for a broken process. Sometimes necessary, never sufficient.
