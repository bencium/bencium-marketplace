# Kill Criteria Template

Generate a project-specific version of this template for every system or feature reviewed.
The template is divided into sections that must all be completed — a kill criteria framework
with gaps is worse than none because it creates false confidence.

---

## Instructions for Generation

When generating kill criteria for a specific project:

1. Replace all `[bracketed placeholders]` with project-specific values
2. Delete any criteria that genuinely do not apply (with a one-line reason)
3. Add project-specific criteria where the template does not cover the domain
4. All numeric thresholds must be agreed by the team before deployment — do not ship
   with placeholder numbers
5. Assign a **Kill Criteria Owner** — a named person whose job is to enforce this framework.
   This cannot be the same person who built the feature.

---

## Day-0 Setup (Before First Commit)

Before writing any code, complete these:

```
PROJECT: [Name]
OWNER: [Person responsible for the feature]
KILL CRITERIA OWNER: [Different person responsible for enforcement]
START DATE: [Date]
EVALUATION WINDOW: [30/60/90 days — define based on expected adoption curve]
BUDGET CAP: [Monthly cost ceiling in currency]
SUCCESS METRIC: [The one number that justifies this feature's existence]
SUCCESS THRESHOLD: [Minimum acceptable value for the success metric]
MEASUREMENT METHOD: [How the success metric is measured — dashboard URL, query, API]
```

---

## Tier 1 — Hard Kill Triggers

These are non-negotiable. If any of these conditions are met, the component is shut down
immediately. No meeting, no discussion, no "let's give it another week."

Enforcement mechanism: Automate where possible. For conditions that cannot be automated,
the Kill Criteria Owner checks daily during the evaluation window.

| # | Trigger | Detection Method | Auto-Kill? |
|---|---------|-----------------|------------|
| H1 | Security breach traced to this component | Security monitoring / incident report | YES — immediate rollback |
| H2 | Production incident P1/P0 caused by this component | Incident management system | YES — immediate rollback |
| H3 | Cost exceeds [BUDGET_CAP * 1.5] on any single day | Billing alerts | YES — auto-disable |
| H4 | Zero usage for [30] consecutive days | Usage monitoring dashboard | YES — auto-decommission |
| H5 | Sole maintainer departs and no volunteer within [14] days | HR / team notification | Kill Criteria Owner enforces |
| H6 | [Project-specific catastrophic condition] | [Detection method] | [Yes/No] |

### Implementation Requirements for Hard Kills

For each auto-kill trigger, implement:
- **Alert**: Fires when condition approaches threshold (80% of limit)
- **Kill switch**: Automated mechanism to disable the component
- **Rollback plan**: Tested procedure to revert to the previous state
- **Post-mortem template**: Pre-written, so the post-mortem happens even under pressure

These must exist before the feature ships. If they do not exist, the feature does not ship.

---

## Tier 2 — Review Triggers

These force a mandatory review meeting within 48 hours of being triggered. The default
outcome of the review is KILL. The team must argue for continuation, not against shutdown.

| # | Trigger | Threshold | Review Default |
|---|---------|-----------|---------------|
| R1 | Success metric below threshold | [METRIC] < [THRESHOLD] for [14] consecutive days | Kill |
| R2 | Maintenance cost exceeds value | > [X] eng-hours/month on unplanned work | Kill |
| R3 | Consecutive sprints with unplanned work | [3] sprints in a row | Kill |
| R4 | Dependency CVE | CVSS >= 7.0 in any dependency introduced by this component | Kill unless patched in 72h |
| R5 | Team velocity impact | Measurable velocity decrease > [15%] since introduction | Kill |
| R6 | Onboarding friction | New team member cannot make a meaningful change within [1 day] | Simplify or kill |
| R7 | [Project-specific degradation signal] | [Threshold] | Kill |

### Review Meeting Protocol

1. Present the data (5 min). No narrative, just numbers.
2. Kill Criteria Owner states: "The default outcome is shutdown. Who wants to argue otherwise?"
3. Continuation requires ALL of:
   - Clear explanation of why the threshold was missed
   - Concrete plan to meet the threshold within [14] days
   - Named person accountable for the plan
4. If continuation is approved, set a hard follow-up date. If the threshold is still
   not met at follow-up, kill with no further review.

---

## Tier 3 — Soft-Go Criteria

These define success. The feature must meet ALL of these within the evaluation window
to earn the right to continue existing. Failure to meet any one criterion triggers a
Tier 2 review with default-to-kill.

| # | Criterion | Target | Measurement | Window |
|---|-----------|--------|-------------|--------|
| S1 | Primary success metric | >= [TARGET] for 7 consecutive days | [Dashboard/query] | [30] days |
| S2 | Latency / performance | P95 <= [X ms] for 7 consecutive days | APM monitoring | [30] days |
| S3 | Security | Zero incidents attributable to component | Security monitoring | [30] days |
| S4 | Cost | Under [BUDGET_CAP] for 7 consecutive days | Billing dashboard | [30] days |
| S5 | Bus factor | >= 2 people can independently modify and deploy | Demonstrated (not claimed) | [30] days |
| S6 | Documentation | Exists, validated by non-author, covers ops runbook | Reviewed artifact | [30] days |
| S7 | Dependency health | All deps maintained, no known vulns, upgrade path clear | Audit | [30] days |
| S8 | [Project-specific value criterion] | [Target] | [Measurement] | [Window] |

### Soft-Go Graduation

When all Soft-Go criteria are met for the full evaluation window:
1. The component graduates to "established" status
2. Hard kill triggers (Tier 1) remain permanently active
3. Review triggers (Tier 2) shift to quarterly cadence instead of continuous
4. A 6-month re-evaluation date is set to reassess whether the component still earns its place

---

## The Anti-Vanity Addendum

These criteria specifically target vanity engineering recurrence. Include at least 3
in every kill criteria framework:

| # | Criterion | What It Catches |
|---|-----------|----------------|
| A1 | No abstraction may be added without 2+ concrete consumers | Premature abstraction |
| A2 | No new dependency without written justification (problem it solves, alternatives considered, maintenance cost accepted) | Framework worship |
| A3 | Any component not modified in [90] days is flagged for deletion review | Code that exists because nobody deletes things |
| A4 | Architecture changes require a "what could be simpler?" section in the RFC | Complexity bias |
| A5 | No technology choice based on "learning opportunity" in production systems | Resume-driven development |
| A6 | Complexity budget: each feature gets a max file/module count proportional to its user value | Over-decomposition |
| A7 | The question "could a junior engineer maintain this?" must be answered in every design review | Intellectual self-indulgence |

---

## Enforcement Calendar

Generate this calendar when creating project-specific kill criteria:

```
Day 0:    Kill criteria framework completed, reviewed, signed off
Day 0:    Auto-kill mechanisms deployed and tested
Day 1:    Feature ships
Day 7:    First soft-go checkpoint — are we trending toward targets?
Day 14:   Second checkpoint — any Tier 2 triggers tripped?
Day 21:   Third checkpoint — trajectory check
Day 30:   Soft-go evaluation. All criteria met? Graduate or kill.
Day 90:   Post-graduation review — still earning its place?
Day 180:  Second post-graduation review — still necessary at all?
```

---

## Common Failure Modes of Kill Criteria

These are how kill criteria frameworks fail in practice. Guard against each:

1. **Placeholder numbers that never get filled in.** Ship with real thresholds or do not ship.
2. **Kill Criteria Owner is the feature's builder.** They will never kill their own creation.
3. **"Let's give it one more sprint" syndrome.** The review protocol above exists to prevent this.
4. **Metrics that cannot actually be measured.** Every threshold must have a working dashboard
   or query on Day 0.
5. **Auto-kills that are never tested.** Run a drill before the feature ships. Trigger the kill
   switch intentionally. Verify it works.
6. **Graduated features that are never re-evaluated.** The 6-month review exists for a reason.
7. **Kill criteria written after the feature ships.** At that point, anchoring bias has set in.
   Kill criteria must be written before the first commit.
