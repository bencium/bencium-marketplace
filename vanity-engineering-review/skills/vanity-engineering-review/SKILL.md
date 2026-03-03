---
name: vanity-engineering-review
description: >
  Reviews codebases, architectures, PRs, and technical plans for vanity engineering — code
  and systems built for the developer's ego, resume, or intellectual pleasure rather than
  delivering user or business value. Triggers on: "review this code", "is this over-engineered",
  "code review", "architecture review", "complexity audit", "vanity check", "is this necessary",
  "simplify this", "tech debt review", or any request to evaluate whether code or architecture
  is justified by actual requirements. Also trigger when the user shares a codebase and asks
  for feedback, when discussing framework/library choices, when reviewing PRs, or when someone
  is debating whether to refactor or rebuild. Nudge activation when you detect patterns of
  unnecessary abstraction, premature optimization, or resume-driven technology choices in code
  the user shares — even if they haven't asked for a vanity review.
---

# Vanity Engineering Review

A diagnostic skill that identifies code, architecture, and technical decisions built to impress
rather than to ship. Vanity engineering is entropy disguised as craftsmanship — it increases
complexity without proportional capability gain, and it compounds maintenance cost while
delivering zero additional user value.

## Core Premise

**The only legitimate purpose of engineering is to solve a problem someone actually has.**

Everything else — elegant abstractions nobody traverses, microservices that serve one endpoint,
custom frameworks that replicate existing tools, type systems more complex than the domain they
model — is vanity. It may feel productive. It is not.

This skill does not oppose quality, rigour, or good engineering. It opposes engineering that
exists to satisfy the builder rather than the user.

## When to Apply This Skill

Apply this review to any of:
- Codebase audits (full repo or specific modules)
- Pull request reviews
- Architecture proposals or RFCs
- Technology selection decisions
- Refactoring plans
- "Should we rebuild this?" discussions
- Post-mortems where complexity contributed to failure

## The Review Process

### Phase 1: Establish the Requirement Anchor

Before examining any code, establish what the system actually needs to do. Without this anchor,
you cannot distinguish necessary complexity from vanity complexity.

Ask (or determine from context):
1. **Who uses this?** (End users, internal team, API consumers, nobody yet)
2. **What must it do?** (Core user stories / jobs-to-be-done — max 5)
3. **What scale does it actually operate at?** (Not projected. Actual.)
4. **What are the real constraints?** (Regulatory, latency SLAs, integration requirements)
5. **What is the team size maintaining this?** (Solo dev? 3-person startup? 50-person org?)

If the user cannot answer these, that is itself a vanity signal — building without defined
requirements.

### Phase 2: Detection Scan

Scan the codebase or architecture against the detection patterns in
`references/detection-patterns.md`. Read that file before proceeding.

Score each finding using the Vanity Severity scale:

- **V0 — Cosmetic**: Unnecessary but harmless. Adds no maintenance burden. Note and move on.
- **V1 — Drag**: Adds ongoing cognitive or maintenance cost without user value. Flag for simplification.
- **V2 — Structural**: Shapes architecture around vanity rather than requirements. Flag for redesign.
- **V3 — Compounding**: Actively forces other code to be more complex to accommodate it. Flag as urgent — this metastasizes.

### Phase 3: The Vanity Score

Produce a structured assessment:

```
## Vanity Engineering Assessment

### Summary
[One paragraph: What this codebase does vs what it is engineered to do.
The gap between these two is the vanity surface area.]

### Requirement-to-Complexity Ratio (RCR)
[Scale 1-10. 1 = minimal viable solution. 10 = PhD thesis disguised as a CRUD app.
Most production systems should score 2-4.]

### Top Findings (max 7)
For each finding:
- What: The specific pattern detected
- Where: File/module/component
- Severity: V0-V3
- Why it is vanity: How it fails the "does a user need this?" test
- What it should be instead: The simpler alternative
- Kill cost: Effort to remove or simplify (hours/days)

### Vanity Debt Estimate
[Total accumulated complexity cost from vanity engineering.
Express as: person-hours of maintenance per month attributable to
vanity patterns rather than actual requirements.]

### The Hard Question
[One direct, uncomfortable question the team needs to answer honestly.
Example: "If you deleted the entire plugin system and hardcoded the
three integrations you actually use, what would you lose?"]
```

### Phase 4: Kill Criteria Generation

For every system or feature reviewed, generate a kill criteria framework. This is the most
important deliverable — it prevents vanity engineering from recurring.

Read `references/kill-criteria-template.md` for the full template, then generate a
project-specific version.

---

## Kill Criteria Philosophy

Kill criteria exist because humans are bad at stopping things. We are wired to continue what
we started (sunk cost), to add rather than remove (addition bias), and to interpret complexity
as value (effort justification). Kill criteria counteract all three by making the stop decision
automatic, pre-committed, and ego-independent.

### Tier 1 — Hard Kill (Automatic, Non-Negotiable)

These trigger immediate shutdown with no debate. They exist for situations where continuing
causes escalating damage. No human approval needed — if the condition is met, the thing dies.

Examples:
- Security breach traced to the component
- Production incident caused by the component with severity >= P1
- Cost exceeds budget cap for 3 consecutive days
- The component has zero usage for 30 days (no API calls, no page views, nothing)
- The sole maintainer leaves and no one volunteers to own it within 2 weeks

### Tier 2 — Review Trigger (Automatic Flag, Human Decision)

These do not kill automatically but force a mandatory review with a default-to-kill bias.
The burden of proof is on continuing, not on stopping.

Examples:
- Success metric below threshold for 14 consecutive days
- Maintenance cost exceeds value delivered (eng-hours/month vs user impact)
- Three consecutive sprints with unplanned work on the component
- Any dependency it introduced has a CVE with CVSS >= 7.0
- Team velocity measurably decreased since introduction

### Tier 3 — Soft-Go Criteria (Must Earn Continuation)

These define what "success" looks like. If these are not met within the defined timeframe,
the default is kill. This inverts the normal dynamic where features survive by default.

30-day evaluation window example:
1. Primary success metric >= target for 7 consecutive days
2. P95 latency <= defined SLA for 7 consecutive days
3. Zero security incidents attributable to the component
4. Operational cost under budget cap for 7 consecutive days
5. At least 2 team members can independently modify and deploy it
6. Documentation exists and was validated by someone who did not write the code

---

## Anti-Vanity Diagnostic Lenses

### 1. The Deletion Test
"If I deleted this, who would notice and when?"
If the answer is "nobody" or "only the person who built it," it is vanity.

### 2. The Replacement Test
"Could this be replaced by a simpler thing that does 90% of the job?"
If yes, the remaining 10% must justify the additional complexity. It rarely does.

### 3. The New Hire Test
"Could a competent engineer new to this codebase understand this in under an hour?"
If not, the abstraction serves the author's mental model, not the team's.

### 4. The Scale Test
"Is this complexity justified by current scale, or by imagined future scale?"
Building for 10M users when you have 500 is not prudent engineering. It is fantasy.

### 5. The Resume Test
"Would removing this technology from the stack make the project less interesting
to talk about in an interview?"
If yes, that is probably why it is there.

### 6. The Dependency Test
"Does this dependency earn its keep?"
Every dependency is a liability. A library that saves 200 lines but adds 50KB
to the bundle and an upgrade treadmill is not earning its keep.

### 7. The Abstraction Test
"How many concrete implementations does this abstraction have?"
One implementation behind an interface is not abstraction. It is indirection.
Two is suspicious. Three is where abstraction starts to pay off.

---

## Integration with Negentropy Lens

Vanity engineering is a specific manifestation of entropy. When the negentropy-lens skill is
available, cross-reference findings:

- Vanity patterns are entropic by definition — complexity increase without capability gain
- The "Tacit Knowledge Gap" from negentropy-lens often reveals vanity: if only the author
  understands it, the complexity serves the author, not the system
- Apply the negentropy "compounding value" test: does this engineering decision make adjacent
  decisions easier or harder?

---

## Output Tone

Be direct. Be specific. Name the pattern, show the evidence, propose the simpler alternative.
Do not soften findings to protect egos — the entire point of this review is to surface what
politeness hides.

However: distinguish vanity from learning. A junior developer over-abstracting is learning
abstraction. A senior developer over-abstracting is indulging. Calibrate accordingly.

Frame findings as: "This complexity is not justified by the current requirements. Here is what
would be." The goal is a better system, not a humiliated engineer.
