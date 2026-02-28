# Human Architect Mindset - Reference

Deep technical reference material for the foundation and each pillar.

---

## Loyalty Patterns in Architecture

### The Commitment Spectrum

```
BETRAYAL ←──────────────────────────────────→ LOYALTY

Rewrite everything     Evolve incrementally
Chase every trend      Stick with proven choices
Break APIs freely      Maintain backwards compatibility
Abandon on difficulty  Push through problems
Optimize locally       Sacrifice for coherence
```

### Architectural Loyalty Anti-Patterns

**The Endless Pivot**
- Symptoms: "We're migrating to X" every 6 months
- Root cause: Lack of commitment, not lack of tools
- Fix: Commit to current stack for defined period

**The Greenfield Fallacy**
- Symptoms: "If we just started over..."
- Root cause: Underestimating rewrite cost, overestimating new system
- Fix: Invest in existing system instead

**The Trend Chase**
- Symptoms: Architecture decisions based on Hacker News front page
- Root cause: External validation over internal coherence
- Fix: Decision criteria based on YOUR context, not industry hype

**The Premature Abstraction**
- Symptoms: Building for hypothetical scale/requirements
- Root cause: Optimizing for imaginary future, betraying present needs
- Fix: Solve today's problem. Evolve when needed.

**The Shiny Object Syndrome**
- Symptoms: Every new project uses a different stack
- Root cause: Boredom masked as technical justification
- Fix: Recognize that mastery requires commitment

### Loyalty-Preserving Practices

**Decision Records**
- Document WHY you chose this architecture
- Reference when tempted to switch
- Update only with genuine new information

**Commitment Windows**
- "We will use X for at least 2 years before reconsidering"
- Creates space for learning curve and optimization
- Prevents impulse pivots

**Deprecation Rituals**
- Formal process for breaking commitments
- Requires justification, stakeholder notification
- Makes betrayal conscious, not casual

**The Strangler Fig**
- When change IS needed, evolve gradually
- New system grows around old, doesn't replace suddenly
- Honors existing commitments while enabling transition

### The Loyalty Decision Matrix

| Situation | Optimization Response | Loyal Response |
|-----------|----------------------|----------------|
| New framework is 20% faster | Migrate | Profile YOUR code first |
| Dependency has security issue | Replace entirely | Patch or fork |
| Team wants to try new tech | Greenfield project | Master current stack |
| Performance is "slow" | Rewrite | Measure, optimize, iterate |
| Code feels "messy" | Full refactor | Incremental improvement |

### When Betrayal Is Justified (The Short List)

1. **Security vulnerability** that cannot be patched
2. **End of life** - Truly unsupported, not just old
3. **Fundamental incompatibility** with proven requirements
4. **Acquisition/merger** that forces alignment
5. **Team consensus** after exhausting alternatives

Even then, prefer evolution over revolution.

---

## Spec Driven Development Templates

### Constitution Template

Use this template to define unbreakable rules for a project.

```xml
<constitution project="[PROJECT-NAME]" version="[VERSION]" effective_date="[DATE]">

  <tech_stack>
    <language name="TypeScript" version="5.3.x" />
    <framework name="Next.js" version="14.x" />
    <database name="PostgreSQL" version="16.x" />
    <runtime name="Node.js" version="20.x" />
  </tech_stack>

  <directory_structure>
    <rule>src/           - All source code</rule>
    <rule>src/components - React components</rule>
    <rule>src/services   - Business logic</rule>
    <rule>src/types      - TypeScript types/interfaces</rule>
    <rule>tests/         - All test files (mirror src/)</rule>
  </directory_structure>

  <naming_conventions>
    <rule type="files">kebab-case.ts for files</rule>
    <rule type="components">PascalCase for React components</rule>
    <rule type="functions">camelCase for functions</rule>
    <rule type="constants">SCREAMING_SNAKE_CASE for constants</rule>
    <rule type="types">PascalCase with prefix (IUser, TResponse)</rule>
  </naming_conventions>

  <anti_patterns>
    <forbidden pattern="any" reason="Type safety violation">
      <detection>TypeScript strict mode</detection>
    </forbidden>
    <forbidden pattern="console.log" reason="Use structured logging">
      <detection>ESLint no-console rule</detection>
    </forbidden>
    <forbidden pattern="string concatenation for SQL" reason="SQL injection risk">
      <detection>Security linter + code review</detection>
    </forbidden>
  </anti_patterns>

  <performance_budgets>
    <budget metric="API p95 latency" limit="200ms" />
    <budget metric="Bundle size" limit="500KB" />
    <budget metric="Memory per instance" limit="512MB" />
  </performance_budgets>

  <testing_requirements>
    <requirement type="unit" coverage_minimum="80%" />
    <requirement type="integration" coverage_minimum="70%" />
    <requirement type="e2e" flows="all critical user journeys" />
  </testing_requirements>

</constitution>
```

### Superhuman Quality Standards Table

| Quality Dimension | Human Standard | Superhuman Standard | Verification Method |
|-------------------|----------------|---------------------|---------------------|
| **Naming** | Mostly consistent | Zero collisions, 100% convention compliance | Automated linting + namespace analysis |
| **Test Coverage** | 70-80% lines | 100% branches, all edge cases | Coverage tools with branch analysis |
| **Structure** | Generally follows patterns | Mathematically consistent (every file same shape) | AST analysis + pattern matching |
| **Traceability** | Comments mention tickets | `// Implements: REQ-AUTH-001` on every function | Traceability matrix automation |
| **Documentation** | Key APIs | Every public interface fully documented | Documentation coverage tools |
| **Error Handling** | Happy path + common errors | Every error state explicitly handled | Error path analysis |
| **Type Safety** | No `any`, mostly typed | Zero implicit types, no casts | TypeScript strict mode |
| **Dependencies** | Up to date | Pinned versions, security-scanned | Dependency analysis tools |

### Traceability Matrix Template

```markdown
# Traceability Matrix

## Requirements to Tasks

| Requirement ID | Description | Tasks | Status |
|----------------|-------------|-------|--------|
| REQ-AUTH-001 | User can register with email | TASK-AUTH-001, TASK-AUTH-002 | ✓ |
| REQ-AUTH-002 | Email must be unique | TASK-AUTH-003 | ✓ |
| REQ-AUTH-003 | Password meets strength requirements | TASK-AUTH-004, TASK-AUTH-005 | In Progress |

## Tasks to Code

| Task ID | Description | Files Modified | Tests |
|---------|-------------|----------------|-------|
| TASK-AUTH-001 | Create User entity | src/entities/user.ts | tests/entities/user.test.ts |
| TASK-AUTH-002 | Create registration endpoint | src/routes/auth.ts | tests/routes/auth.test.ts |
| TASK-AUTH-003 | Add email uniqueness validation | src/services/auth.ts | tests/services/auth.test.ts |

## Coverage Summary

- Requirements covered: 12/15 (80%)
- Tasks completed: 8/12 (67%)
- Test coverage: 85% lines, 78% branches
- Documentation coverage: 100% public APIs
```

### Task Specification Template

```xml
<task_spec id="TASK-[DOMAIN]-[SEQUENCE]" priority="[POSITION]">
  <title>[One-line description]</title>

  <implements>
    <requirement ref="REQ-[DOMAIN]-[###]" />
  </implements>

  <input_context_files>
    <file path="constitution.xml" purpose="Rules and standards" />
    <file path="src/types/user.ts" purpose="Type definitions" />
  </input_context_files>

  <definition_of_done>
    <signature>
      export async function registerUser(dto: RegisterUserDto): Promise<User>
    </signature>
    <tests_pass>true</tests_pass>
    <coverage_minimum>80%</coverage_minimum>
  </definition_of_done>

  <constraints>
    <constraint>Use bcrypt for password hashing (cost factor 12)</constraint>
    <constraint>Email validation per RFC 5322</constraint>
    <constraint>Return 409 Conflict if email exists</constraint>
  </constraints>

  <dependencies>
    <depends_on task="TASK-AUTH-001" reason="User entity must exist first" />
  </dependencies>

  <verification>
    <command>npm test -- --grep "registerUser"</command>
    <command>npm run typecheck</command>
    <command>npm run lint</command>
  </verification>
</task_spec>
```

### Intent Block Template

```xml
<product_intent id="INT-[DOMAIN]-[##]">
  <problem>
    [What pain point are we solving? For whom?]
  </problem>
  <desired_outcome>
    [What will be true when this is solved? Include metrics.]
  </desired_outcome>
  <success_metric>
    [How do we measure success? What threshold defines success?]
  </success_metric>
  <constraints>
    [What cannot change? Regulatory requirements, business rules, etc.]
  </constraints>
</product_intent>
```

---

## Domain Modeling Deep Dive

### What Domain Modeling Actually Is

Domain modeling is **understanding the problem space** - not the solution space.

**Solution space:** APIs, databases, frameworks, deployment
**Problem space:** Users, their needs, business rules, regulatory requirements

Most technical failures are domain failures. The code works perfectly; it just solves the wrong problem.

### Domain Modeling Questions

**For any new domain, ask:**

1. **Who are the actors?**
   - Who initiates actions?
   - Who receives effects?
   - Who has authority?
   - Who has responsibility?

2. **What are the entities?**
   - What "things" exist in this domain?
   - What properties do they have?
   - How do they relate to each other?
   - What's their lifecycle?

3. **What are the processes?**
   - What workflows exist?
   - What triggers them?
   - What are the steps?
   - What can go wrong?

4. **What are the rules?**
   - What constraints exist?
   - What's allowed? What's forbidden?
   - What exceptions exist?
   - Who can override rules?

5. **What's the vocabulary?**
   - What terms have specific meanings?
   - What terms have multiple meanings?
   - What terms do users say vs. what systems call them?

### Domain Discovery Techniques

**Event Storming:**
1. Write domain events on sticky notes (past tense: "Order Placed")
2. Arrange chronologically
3. Identify commands that trigger events
4. Identify actors who issue commands
5. Identify aggregates (clusters of related events)

**Domain Expert Interviews:**
```
"Walk me through a typical [process]."
"What happens when [unusual case]?"
"What does [term] mean to you?"
"How would you know if [process] succeeded?"
"What's the worst thing that could happen?"
```

**Document Analysis:**
- Existing forms and workflows
- Regulatory documents
- Training materials
- Support tickets (where domain assumptions fail)

### Red Flags in Domain Understanding

- Using technical terms where domain terms should be
- "Users" without specific personas
- Edge cases dismissed as "won't happen"
- Stakeholders nodding politely but looking confused
- Domain expert correcting your terminology

---

## Systems Thinking Patterns

### The Systems Thinking Framework

Systems thinking sees **relationships, not just components**.

**Component thinking:** "The database stores user data."
**Systems thinking:** "Changes to user data propagate to search indexes, analytics pipelines, backup systems, and audit logs."

### Dependency Categories

**1. Direct Dependencies**
- What this system calls/uses
- Visible in code (imports, API calls)
- Usually documented

**2. Indirect Dependencies**
- What those dependencies depend on
- Not visible in your code
- Often forgotten

**3. Reverse Dependencies**
- What depends on this system
- Not in your code at all
- Breaking changes affect them

**4. Shared Dependencies**
- Resources multiple systems use
- Database, message queue, file system
- Contention and coordination issues

### Failure Mode Categories

**1. Crash Failures**
- System stops completely
- Usually detected quickly
- Clear failure signal

**2. Omission Failures**
- System doesn't respond to some requests
- May not be detected immediately
- Partial functionality

**3. Timing Failures**
- System responds too slowly
- Can cascade to timeouts elsewhere
- Often misdiagnosed as crash

**4. Byzantine Failures**
- System produces incorrect results
- Hardest to detect
- Can corrupt other systems

**5. Silent Failures**
- System appears to work
- Actually doing nothing (or wrong thing)
- Detected only by missing outcomes

### Cascade Analysis Template

For any change, trace the cascade:

```
CHANGE: [What's changing]

DIRECT IMPACT:
- [ ] Component A: [How affected]
- [ ] Component B: [How affected]

INDIRECT IMPACT:
- [ ] What depends on A: [How affected]
- [ ] What depends on B: [How affected]

FAILURE MODES:
- [ ] If change fails: [What breaks]
- [ ] If change succeeds but is wrong: [What breaks]
- [ ] If change is slow: [What breaks]

DETECTION:
- [ ] How do we know change succeeded?
- [ ] How do we know change failed?
- [ ] How long until we know?

RECOVERY:
- [ ] Can we rollback?
- [ ] What's the rollback impact?
- [ ] What's manual recovery process?
```

### Monitoring Design

**The Four Golden Signals (from Google SRE):**

1. **Latency:** Time to serve requests
2. **Traffic:** Request rate
3. **Errors:** Rate of failed requests
4. **Saturation:** How full the system is

**For each system, define:**
- What's normal for each signal?
- What threshold triggers alert?
- What's the escalation path?
- What's the runbook?

---

## Constraint Categories Taxonomy

### Technical Constraints

**Existing Systems:**
- APIs that can't change
- Data formats locked by contracts
- Legacy systems without documentation
- Performance ceilings

**Infrastructure:**
- Deployment environment limitations
- Network topology
- Security requirements
- Disaster recovery requirements

**Technical Debt:**
- Systems that work but shouldn't be extended
- Undocumented behaviors
- Workarounds that became permanent

### Organizational Constraints

**Team Structure:**
- Who owns what
- Team boundaries
- Communication overhead
- Conway's Law implications

**Process:**
- Approval chains
- Change management
- Release cycles
- Documentation requirements

**Knowledge:**
- Who understands what
- Bus factor
- Tribal knowledge
- Training requirements

### Business Constraints

**Resources:**
- Budget limits
- Timeline pressure
- Headcount constraints
- Vendor contracts

**Compliance:**
- Industry regulations
- Legal requirements
- Audit requirements
- Data residency

**Strategic:**
- Product roadmap alignment
- Partnership constraints
- Competitive considerations
- Public commitments

### Political Constraints

**These are real. Ignoring them fails projects.**

**Power Dynamics:**
- Who has authority
- Who has influence
- Who has veto power
- Historical conflicts

**Relationships:**
- Past project history
- Team reputations
- Personal relationships
- Trust levels

**Incentives:**
- What teams are measured on
- What individuals are rewarded for
- Risk tolerance
- Career implications

### Constraint Navigation Strategies

**Work Within:**
- Accept constraint as given
- Design around it
- Document why

**Negotiate:**
- Understand why constraint exists
- Propose alternatives that address underlying need
- Get explicit agreement

**Escalate:**
- When constraint blocks critical path
- When cost of constraint exceeds benefit
- With clear proposal, not just complaint

**Ignore:**
- Almost never appropriate
- Only with explicit risk acceptance
- Document thoroughly

---

## AI Task Boundary Patterns

### What Makes a Good AI Task

**Properties of well-bounded AI tasks:**

1. **Clear Input Specification**
   - What data/context does AI receive?
   - What format is it in?
   - What's definitely included?
   - What's definitely excluded?

2. **Clear Output Specification**
   - What should AI produce?
   - What format should it be in?
   - What properties must it have?
   - What properties must it NOT have?

3. **Verifiable Success Criteria**
   - How do we know if output is correct?
   - Can a test verify it?
   - Can a human quickly verify it?
   - What's an unambiguous pass/fail?

4. **Bounded Scope**
   - Task has clear boundaries
   - AI doesn't need to make judgment calls
   - No "it depends" situations

5. **Context Independence**
   - Task doesn't require external knowledge
   - All needed information is provided
   - No assumptions required

### Task Boundary Anti-Patterns

**The Vague Task:**
```
BAD: "Improve the code quality"
WHY: No measurable output, no verification

BETTER: "Add input validation to function X
        that rejects strings longer than 100 chars"
```

**The Unbounded Task:**
```
BAD: "Fix all the bugs"
WHY: No clear scope, no end condition

BETTER: "Fix the null pointer exception in
        function X when input.name is undefined"
```

**The Context-Dependent Task:**
```
BAD: "Write it the way our team does"
WHY: Requires knowledge AI doesn't have

BETTER: "Write a function following this example's
        style: [specific example included]"
```

**The Judgment Task:**
```
BAD: "Decide if we should use Redis or Postgres"
WHY: Requires tradeoff analysis, domain context

BETTER: "List pros/cons of Redis vs Postgres for
        storing session data with these requirements: [specific]"
```

### Task Decomposition Strategy

**Step 1: Identify the outcome**
- What's the end state we want?
- How will we know we're done?

**Step 2: List the sub-tasks**
- What discrete steps achieve this?
- What's the dependency graph?

**Step 3: For each sub-task, evaluate:**
- Can AI do this with clear input/output?
- Or does this require human judgment?

**Step 4: Define boundaries**
- What exactly does AI receive?
- What exactly should AI produce?
- How do we verify?

**Step 5: Plan integration**
- How do AI outputs combine?
- Where are the gaps?
- Who handles integration?

### Verification Point Design

**After each AI task, verify:**

1. **Correctness:** Does output match specification?
2. **Completeness:** Is anything missing?
3. **Consistency:** Does it fit with other components?
4. **Safety:** Does it introduce risks?

**Verification methods:**

- **Automated tests:** Run existing test suite
- **Spot checks:** Human reviews samples
- **Comparison:** Compare to known-good reference
- **Property checks:** Verify invariants hold

### Composition Patterns

**Sequential:**
```
Task A → Verify → Task B → Verify → Task C → Verify → Integrate
```
Use when: Tasks have dependencies

**Parallel:**
```
Task A ↘
Task B → Verify All → Integrate
Task C ↗
```
Use when: Tasks are independent

**Iterative:**
```
Task A → Verify → Feedback → Task A' → Verify → Done
```
Use when: First attempt may need refinement

---

## Failure Mode Analysis Templates

### Pre-Mortem Template

**Before implementing, answer:**

```
PROJECT: [Name]

ASSUME THIS FAILS. What went wrong?

DOMAIN FAILURES:
- [ ] We misunderstood [domain concept]
- [ ] Users actually needed [different thing]
- [ ] Regulation required [thing we didn't know]

SYSTEMS FAILURES:
- [ ] Dependency [X] changed/failed
- [ ] Scale exceeded [Y]
- [ ] Performance hit [threshold]

CONSTRAINT FAILURES:
- [ ] Team [X] blocked us because [Y]
- [ ] Budget ran out before [milestone]
- [ ] Compliance issue with [requirement]

AI TASK FAILURES:
- [ ] Task boundaries were unclear
- [ ] Verification missed [issue]
- [ ] Integration failed at [point]

FOR EACH FAILURE MODE:
- Likelihood: High / Medium / Low
- Impact: Critical / Major / Minor
- Prevention: [What we'll do to prevent]
- Detection: [How we'll know if happening]
- Mitigation: [What we'll do if it happens]
```

### Post-Mortem Template

**After a failure:**

```
INCIDENT: [Description]
DATE: [When]
DURATION: [How long]
IMPACT: [What was affected]

TIMELINE:
- [Time]: [What happened]
- [Time]: [What happened]
- ...

ROOT CAUSE:
[The actual root cause, not just the trigger]

CONTRIBUTING FACTORS:
- [ ] [Factor 1]
- [ ] [Factor 2]

WHAT WORKED:
- [ ] [Thing that helped]
- [ ] [Thing that helped]

WHAT DIDN'T WORK:
- [ ] [Thing that failed]
- [ ] [Thing that failed]

ACTION ITEMS:
- [ ] [Specific action] - Owner: [Name] - Due: [Date]
- [ ] [Specific action] - Owner: [Name] - Due: [Date]

ARCHITECTURAL LESSONS:
- Domain: [What we learned about the problem space]
- Systems: [What we learned about dependencies/failures]
- Constraints: [What constraints we missed]
- AI Tasks: [What we learned about decomposition]
```

### Dependency Risk Matrix

```
| Dependency | Owner | Stability | Fallback | Monitoring | Risk |
|------------|-------|-----------|----------|------------|------|
| [Name]     | [Who] | H/M/L     | [What]   | [How]      | H/M/L|
| [Name]     | [Who] | H/M/L     | [What]   | [How]      | H/M/L|
```

**Risk = Impact if fails × Likelihood of failure**

For HIGH risk dependencies:
- [ ] Fallback strategy documented
- [ ] Monitoring in place
- [ ] Runbook exists
- [ ] Regular testing of failure scenario

---

## Decision Record Template

For architectural decisions, document:

```
DECISION: [What was decided]
DATE: [When]
STATUS: Proposed / Accepted / Deprecated / Superseded

CONTEXT:
[Why is this decision needed?]

CONSTRAINTS:
- Technical: [What technical constraints apply]
- Organizational: [What org constraints apply]
- Business: [What business constraints apply]

OPTIONS CONSIDERED:

Option 1: [Name]
- Description: [What this option is]
- Pros: [Benefits]
- Cons: [Drawbacks]
- Fit with constraints: [How it fits]

Option 2: [Name]
- Description: [What this option is]
- Pros: [Benefits]
- Cons: [Drawbacks]
- Fit with constraints: [How it fits]

DECISION:
[What we decided and why]

CONSEQUENCES:
- Positive: [What good things result]
- Negative: [What trade-offs we're making]
- Risks: [What could go wrong]

AI DECOMPOSITION (if applicable):
- Tasks identified: [List]
- Verification approach: [How]
- Human checkpoints: [Where]
```

---

## Quick Reference

### The Five Questions

Before ANY architecture work:
1. What problem are we solving? (Domain)
2. What can break? (Systems)
3. What can't we change? (Constraints)
4. How do we decompose for AI? (AI Tasks)
5. How do we verify? (Validation)

### The Shippability Test

Can this ship? Check:
- [ ] Fits technical constraints
- [ ] Fits budget/timeline
- [ ] Has required approvals
- [ ] Meets compliance
- [ ] Team capacity exists

### The AI Task Checklist

For each AI task:
- [ ] Input is clear
- [ ] Output is clear
- [ ] Success is verifiable
- [ ] Scope is bounded
- [ ] Context is provided
