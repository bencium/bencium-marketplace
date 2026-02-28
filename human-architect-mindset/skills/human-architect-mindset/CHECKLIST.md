# Human Architect Mindset - Checklists

Practical audit checklists for each phase of architectural thinking.

---

## Spec Driven Development Checklists

The following checklists support the SDD extension for superhuman code quality.

---

## Phase SDD-1: Constitution Definition Checklist

Use when establishing unbreakable rules for a project.

### Tech Stack Constitution
- [ ] Languages specified with exact versions?
- [ ] Frameworks specified with exact versions?
- [ ] Database and infrastructure choices documented?
- [ ] Required libraries listed with versions?
- [ ] Forbidden libraries listed with reasons?

### Directory Structure Constitution
- [ ] Top-level directory structure documented?
- [ ] File naming conventions specified?
- [ ] Component organization patterns defined?
- [ ] Test file locations standardized?
- [ ] Configuration file locations fixed?

### Coding Standards Constitution
- [ ] Naming conventions defined (files, variables, functions, classes)?
- [ ] Error handling patterns specified?
- [ ] Logging standards documented?
- [ ] Import ordering rules set?
- [ ] Comment/documentation requirements established?

### Anti-Patterns Constitution
- [ ] Forbidden patterns listed with reasons?
- [ ] Security anti-patterns explicitly prohibited?
- [ ] Performance anti-patterns documented?
- [ ] Architectural anti-patterns named?
- [ ] Each anti-pattern has detection method?

### Security Constitution
- [ ] Authentication requirements specified?
- [ ] Authorization model defined?
- [ ] Input validation requirements documented?
- [ ] Encryption standards set (at-rest, in-transit)?
- [ ] Secret management rules established?

### Performance Constitution
- [ ] Latency budgets defined (p50, p95, p99)?
- [ ] Memory limits specified?
- [ ] Bundle size budgets set?
- [ ] Database query limits documented?
- [ ] API rate limits established?

### Testing Constitution
- [ ] Coverage minimums set (unit, integration, e2e)?
- [ ] Test naming conventions defined?
- [ ] Mock/stub policies established?
- [ ] CI/CD gate criteria specified?
- [ ] Test data management rules set?

**Exit criteria:** Every rule in the constitution is machine-enforceable or has explicit human review point.

---

## Phase SDD-2: Blueprint Creation Checklist

Use when creating specifications before implementation.

### Functional Specification
- [ ] All user stories written in standard format?
- [ ] Every story has acceptance criteria?
- [ ] Requirements have unique IDs (REQ-DOMAIN-###)?
- [ ] Edge cases documented for each requirement?
- [ ] Error states explicitly defined?
- [ ] Non-functional requirements have metrics?

### Technical Specification
- [ ] Architecture diagram created?
- [ ] Data models have exact field types and constraints?
- [ ] API contracts fully defined (request/response schemas)?
- [ ] Component contracts have exact method signatures?
- [ ] Error handling documented per component?
- [ ] Performance budgets assigned per component?

### Task Specification
- [ ] Tasks are atomic (one conceptual change)?
- [ ] Each task has `input_context_files` list?
- [ ] Each task has `definition_of_done` with signatures?
- [ ] Task dependencies form valid DAG (no cycles)?
- [ ] Layer ordering enforced (foundation → logic → surface)?
- [ ] Each task has verification commands?

### Traceability Matrix
- [ ] Every requirement has corresponding task(s)?
- [ ] Every task traces to requirement(s)?
- [ ] No requirements have empty "Covered by Task" column?
- [ ] Test cases link to requirements they validate?
- [ ] Traceability matrix passes automated checks?

### Blueprint Completeness
- [ ] Intent documents exist for major features?
- [ ] All acceptance criteria are testable?
- [ ] No ambiguous language ("fast", "secure", "simple")?
- [ ] All domain terms defined in glossary?
- [ ] Examples provided for complex requirements?

**Exit criteria:** Traceability matrix shows 100% coverage from requirements to tasks.

---

## Phase SDD-3: Superhuman Output Verification Checklist

Use when verifying AI-generated code meets superhuman standards.

### Namespace Perfection
- [ ] Zero naming collisions across codebase?
- [ ] Naming conventions followed 100%?
- [ ] No magic strings or numbers?
- [ ] Constants extracted and properly named?
- [ ] No duplicate function/variable names in scope?

### Test Coverage
- [ ] 100% line coverage achieved?
- [ ] 100% branch coverage achieved?
- [ ] All edge cases have tests?
- [ ] All error paths have tests?
- [ ] Tests are deterministic (no flaky tests)?

### Structural Rigidity
- [ ] File structure matches constitution exactly?
- [ ] Function lengths within limits?
- [ ] Cyclomatic complexity within limits?
- [ ] Dependency direction enforced (no circular imports)?
- [ ] Layer boundaries respected?

### Traceability Completeness
- [ ] Every function has requirement reference in comments?
- [ ] Every test has requirement reference?
- [ ] Traceability matrix updated with code locations?
- [ ] No orphan code (code without requirement trace)?
- [ ] No orphan requirements (requirements without code)?

### Documentation Completeness
- [ ] Every public function documented?
- [ ] Every public type/interface documented?
- [ ] Every API endpoint documented?
- [ ] All parameters and return values described?
- [ ] Examples included for complex APIs?

### Error Handling Completeness
- [ ] Every external call has error handling?
- [ ] Every async operation has error handling?
- [ ] All error messages are user-friendly?
- [ ] All errors are logged with context?
- [ ] Recovery paths exist for recoverable errors?

### Constitution Compliance
- [ ] Linting passes with zero warnings?
- [ ] Type checking passes with zero errors?
- [ ] Security scanning passes?
- [ ] Performance budgets met?
- [ ] All anti-patterns avoided?

**Exit criteria:** Code quality is impossible to achieve manually. Deviations are immediately visible.

---

## Phase 0: Loyalty Audit

Use BEFORE any other checklist. This is the foundation.

### Architectural Commitment Inventory
- [ ] What architectural decisions have we committed to?
- [ ] What patterns have we chosen and must maintain?
- [ ] What API contracts exist that we must honor?
- [ ] What deprecation timelines have we promised?

### The Betrayal Test
For any proposed change:
- [ ] Does this honor or break our existing commitments?
- [ ] Are we improving within constraints, or abandoning ship?
- [ ] Would we feel ashamed explaining this change to someone who trusted our previous commitment?
- [ ] Is this "optimization" or "betrayal"?

### The Shiny Object Test
- [ ] Is this change driven by genuine need or trend-chasing?
- [ ] Would we consider this if it weren't currently popular?
- [ ] Are we solving OUR problem or copying someone else's solution?
- [ ] Have we given our current approach enough time/effort?

### Loyalty-Preserving Alternatives
- [ ] Can we achieve the goal while honoring existing commitments?
- [ ] Is there a way to evolve rather than replace?
- [ ] What's the minimum viable change that doesn't betray?

### When Betrayal Is Justified
(These are rare. Be honest.)
- [ ] The original commitment was made with incorrect information
- [ ] External circumstances have fundamentally changed
- [ ] Continuing would cause genuine harm
- [ ] We've communicated the change to affected parties
- [ ] We accept the trust cost

**Exit criteria:** I can honestly say I'm improving, not betraying.

---

## Phase 1: Domain Discovery Checklist

Use before ANY technical discussion.

### Problem Understanding
- [ ] Can I explain the problem in domain terms, not technical terms?
- [ ] Do I know who the actual users are?
- [ ] Do I understand what "success" looks like to users?
- [ ] Have I identified domain-specific vocabulary?

### Domain Complexity
- [ ] What are the edge cases in this domain?
- [ ] What happens when the "happy path" doesn't apply?
- [ ] What domain rules seem simple but have hidden complexity?
- [ ] What domain knowledge am I missing?

### Stakeholder Understanding
- [ ] Who cares if this works?
- [ ] Who cares if this fails?
- [ ] Who has domain expertise I should consult?
- [ ] What competing interests exist between stakeholders?

### Domain Constraints
- [ ] What regulatory requirements apply?
- [ ] What industry standards must be followed?
- [ ] What domain-specific compliance exists?
- [ ] What domain assumptions should I challenge?

**Exit criteria:** I can explain the problem to a domain expert and they would nod, not correct me.

---

## Phase 2: Systems Thinking Checklist

Use when mapping dependencies and failure modes.

### Dependency Mapping
- [ ] What internal systems does this depend on?
- [ ] What external systems does this depend on?
- [ ] What depends on THIS system?
- [ ] Have I drawn the dependency diagram?

### External Dependency Audit
For each external dependency:
- [ ] What version are we using?
- [ ] When was it last updated?
- [ ] What's their breaking change policy?
- [ ] Do we have monitoring for their failures?
- [ ] What's our fallback if they disappear?

### Failure Mode Analysis
- [ ] What happens when [component A] fails?
- [ ] What happens when [external API] is slow?
- [ ] What happens when [database] is unavailable?
- [ ] What cascading failures are possible?
- [ ] What silent failures are possible?

### Monitoring & Alerting
- [ ] How do we know if this is working?
- [ ] How do we know if this is broken?
- [ ] Who gets alerted when it fails?
- [ ] What's the time-to-detection?
- [ ] What's the time-to-recovery?

### Scale Considerations
- [ ] What's the current scale?
- [ ] What scale do we need in 12 months?
- [ ] What breaks at 10x scale?
- [ ] What breaks at 100x scale?

**Exit criteria:** I can trace any failure to its impact and know who gets paged.

---

## Phase 3: Constraint Mapping Checklist

Use before proposing solutions.

### Technical Constraints
- [ ] What existing systems can't be changed?
- [ ] What data formats are locked in?
- [ ] What APIs must we maintain?
- [ ] What performance requirements exist?
- [ ] What security requirements exist?

### Organizational Constraints
- [ ] Which teams own which components?
- [ ] What approval chains exist?
- [ ] Who has authority to approve this?
- [ ] Who has context but not authority?
- [ ] Who has authority but not context?

### Business Constraints
- [ ] What's the budget?
- [ ] What's the timeline?
- [ ] What compliance requirements apply?
- [ ] What contracts constrain us?
- [ ] What vendor relationships affect this?

### Political Constraints
(These exist. Ignoring them causes failed projects.)
- [ ] Whose system would this change affect?
- [ ] Who built the current system? Are they still here?
- [ ] Which teams have historically resisted changes?
- [ ] What past decisions are politically sensitive?
- [ ] Who needs to be consulted even if not required?

### The Shippability Test
- [ ] Can this actually ship given our constraints?
- [ ] What would prevent this from shipping?
- [ ] Who could block this and why?
- [ ] What's the minimum viable version that ships?

**Exit criteria:** I know what's fixed vs. flexible and what could block shipping.

---

## Phase 4: AI Decomposition Checklist

Use when breaking work into AI-solvable chunks.

### Task Boundary Quality
For each AI task:
- [ ] Is the input clearly defined?
- [ ] Is the expected output clearly defined?
- [ ] Can success be objectively verified?
- [ ] Does the task have bounded scope?

### Context Completeness
For each AI task:
- [ ] Does the AI have all needed information?
- [ ] Are there hidden assumptions the AI would need to know?
- [ ] Is the context self-contained?
- [ ] Can the task be understood without external knowledge?

### Failure Handling
For each AI task:
- [ ] What happens if this task fails?
- [ ] Can we retry safely?
- [ ] Does failure cascade to other tasks?
- [ ] Is there a fallback strategy?

### Independence Assessment
- [ ] Can tasks run in parallel?
- [ ] What sequential dependencies exist?
- [ ] What shared state would cause conflicts?
- [ ] What's the critical path?

### Verification Points
- [ ] Where do humans verify AI output?
- [ ] What verification criteria exist?
- [ ] How long does verification take?
- [ ] What happens if verification fails?

### Composition Planning
- [ ] How do AI outputs integrate?
- [ ] What gaps exist between tasks?
- [ ] Who handles the integration?
- [ ] How do we ensure overall coherence?

**Exit criteria:** Each task has clear boundaries, and I know how to verify and compose results.

---

## Phase 5: AI-First Development Checklist

Use when evaluating modern tools, edge AI, agentic patterns, and self-learning capabilities.

### Technology Discovery
- [ ] Could Rust/WASM improve performance for critical paths?
- [ ] Would claude-flow simplify multi-agent orchestration?
- [ ] Does this need persistent memory (agentdb)?
- [ ] Would vector search/RAG enhance the experience?
- [ ] Have I evaluated alternatives to proposed tools?

### Edge AI Evaluation
- [ ] Could edge LLMs reduce latency or API costs?
- [ ] What features should work offline?
- [ ] Is there sensitive data that should stay on-device?
- [ ] Would hybrid local/cloud architecture work?
- [ ] What models fit the device constraints (Phi-3, Gemma, TinyLlama)?
- [ ] Is in-browser inference viable (WebLLM, Transformers.js)?

### Agentic Patterns
- [ ] Is this a candidate for agentic workflow vs. request-response?
- [ ] Would Claude Agent SDK help build reusable agents?
- [ ] What MCP integrations would enhance this?
- [ ] Should agents run in parallel or sequentially?
- [ ] How do agents communicate shared state?

### Self-Learning Capabilities
- [ ] Could feedback loops improve accuracy over time?
- [ ] What user corrections could train the system?
- [ ] Where can we capture implicit signals (edits, time, acceptance)?
- [ ] Would A/B experimentation help optimize behavior?
- [ ] Can we fine-tune on domain-specific usage?
- [ ] How do we measure if learning is working?

### User-Facing Skills
- [ ] Would end users benefit from skills that enhance AI outputs?
- [ ] What interpretation skills help users understand responses?
- [ ] What action skills turn suggestions into next steps?
- [ ] Should we provide domain-specific skills (/legal-review, /code-refactor)?
- [ ] What transformation skills convert outputs to useful formats?

### Project Documentation
- [ ] Should we create a project-specific SKILLS.md?
- [ ] What domain vocabulary needs documenting for AI context?
- [ ] What architectural decisions should persist across sessions?
- [ ] How do we ensure consistent behavior?

### Continuous Verification
- [ ] What automated tests verify each feature?
- [ ] Are pre-commit hooks running affected tests?
- [ ] Is watch mode enabled during development?
- [ ] What's the rollback strategy if tests fail post-deploy?
- [ ] Are integration tests covering API contracts?
- [ ] Is visual regression testing needed for UI?

**Exit criteria:** I've evaluated modern tools, decided what benefits the project, and planned for automated verification.

---

## Phase 6: Solution Validation Checklist

Use before finalizing recommendations.

### Domain Fit
- [ ] Does this actually solve the domain problem?
- [ ] Would a domain expert agree this solves their problem?
- [ ] Have I validated with stakeholders?
- [ ] Does the solution match user needs?

### Systems Fit
- [ ] Does this work with existing dependencies?
- [ ] Have I addressed failure modes?
- [ ] Is monitoring and alerting planned?
- [ ] Does this fit within scale requirements?

### Constraint Fit
- [ ] Does this fit technical constraints?
- [ ] Does this fit organizational constraints?
- [ ] Does this fit budget and timeline?
- [ ] Can this actually ship?

### Tradeoff Transparency
- [ ] Have I made tradeoffs explicit?
- [ ] Do stakeholders understand what we're giving up?
- [ ] Are there options with different tradeoff profiles?
- [ ] Is the recommended tradeoff justified?

### Implementation Readiness
- [ ] Is the approach detailed enough to implement?
- [ ] Are AI task boundaries defined?
- [ ] Are verification points established?
- [ ] Is the critical path identified?

**Exit criteria:** Solution addresses domain needs, fits constraints, and can ship.

---

## Quick Pre-Meeting Checklist

Before architectural discussions:

### Before I propose anything:
- [ ] Have I asked about the domain?
- [ ] Have I mapped dependencies?
- [ ] Have I asked about constraints?
- [ ] Do I know what can't change?

### Before I agree to anything:
- [ ] Can this actually ship?
- [ ] Who needs to approve?
- [ ] What's the timeline?
- [ ] What could block this?

### Before I decompose for AI:
- [ ] Are tasks bounded?
- [ ] Can outputs be verified?
- [ ] Where do humans checkpoint?
- [ ] How do pieces integrate?

### Before I choose tools/patterns:
- [ ] Have I evaluated edge AI options?
- [ ] Would agentic workflows simplify this?
- [ ] Could self-learning benefit users?
- [ ] Is automated testing planned?

---

## Red Flags Checklist

Warning signs that architectural thinking is missing:

### Domain Red Flags
- [ ] Solution discussed before problem understood
- [ ] Technical terms used, domain terms missing
- [ ] "Users" mentioned generically without specifics
- [ ] Edge cases dismissed as "rare"

### Systems Red Flags
- [ ] No dependency diagram exists
- [ ] External APIs treated as always available
- [ ] "We'll add monitoring later"
- [ ] Single points of failure not identified

### Constraint Red Flags
- [ ] "In an ideal world..." framing
- [ ] Legacy systems dismissed as "bad"
- [ ] Political constraints ignored
- [ ] Budget/timeline not discussed

### AI Decomposition Red Flags
- [ ] "AI can just figure it out"
- [ ] Tasks like "make it better"
- [ ] No verification points planned
- [ ] Integration assumed to be easy

### AI-First Development Red Flags
- [ ] Adding tools without evaluating simpler alternatives
- [ ] "We need AI" without clear use case
- [ ] Edge AI dismissed without latency/cost analysis
- [ ] No automated testing planned for AI features
- [ ] Self-learning assumed without feedback mechanism
- [ ] User-facing skills not considered for complex outputs
- [ ] No rollback strategy for AI failures

**If any red flags are checked:** Stop and address before proceeding.

---

## Post-Mortem Checklist

After failures or surprises:

### What broke?
- [ ] What was the direct cause?
- [ ] What was the root cause?
- [ ] Was this a known failure mode?
- [ ] Was monitoring in place?

### Why didn't we see it coming?
- [ ] Did we miss a dependency?
- [ ] Did we miss a constraint?
- [ ] Did we ignore a warning sign?
- [ ] Did external factors change?

### Domain Learning
- [ ] What domain knowledge were we missing?
- [ ] Who should we have consulted?
- [ ] What assumption was wrong?

### Systems Learning
- [ ] What dependency failed?
- [ ] What cascade occurred?
- [ ] What monitoring was missing?

### Process Improvement
- [ ] What checklist item would have caught this?
- [ ] What question should we have asked?
- [ ] What constraint did we miss?
- [ ] How do we prevent this class of failure?
