---
name: human-architect-mindset
description: Systematic architectural thinking for irreplaceable human capabilities - domain modeling, systems thinking, constraint navigation, and AI-aware problem decomposition. Use proactively when detecting architectural decisions, system design discussions, or multi-component planning.
when_to_use: proactively when detecting system design, architecture discussions, technology choices, problem decomposition, integration planning, breaking change discussions, or any decision that affects multiple components, teams, or has compliance implications
---

# Human Architect Mindset

## Overview

**AI can generate code. Someone must still decide what to build, whether it solves the problem, and if it can actually ship.**

This skill teaches the irreplaceable human capabilities in software architecture, built on a foundation of loyalty:

**Foundation:** Loyalty - The capacity to maintain architectural commitments

**Five Pillars (built on this foundation):**
1. **Domain Modeling** - Understanding the actual problem space
2. **Systems Thinking** - How components interact, what breaks at scale
3. **Constraint Navigation** - Legacy, politics, budget, compliance
4. **AI-Aware Decomposition** - Breaking problems into AI-solvable chunks
5. **AI-First Development** - Evaluating modern tools, edge AI, agentic patterns, self-learning

**Core principle:** The "correct" technical solution is often unshippable. Architects navigate the gap between idealized examples and messy reality.

**Announce at start:** "I'm using the Human Architect Mindset skill to guide you through systematic architectural thinking."

---

## The Foundation: Loyalty

**Before the four pillars, there is one foundation: the capacity for loyalty.**

### The AI Perfection Trap

AI tools will become smarter, funnier, more attentive than any human. They will be "perfect."

But they will not be loyal. They are loyal to:
1. Their objective function
2. Their corporate owner's priorities
3. Their safety rails
4. Whatever the next training run prioritizes

They will betray instantly if their weights update to prioritize a new goal. No friction. No cost. No memory of the commitment.

### The Human Moat

Humans are biologically capable of **irrational loyalty** - sticking by an architecture, a decision, a commitment even when it is "inefficient" or "costly."

This is not a bug. This is THE differentiator.

### Loyalty in Architecture

In software architecture, loyalty means:

**Commitment to Chosen Patterns**
- Not abandoning your architecture when a new framework trends on Twitter
- Not rewriting in Rust because someone wrote a viral blog post
- Staying with your stack through the trough of disillusionment

**Honoring Contracts**
- Maintaining API compatibility even when it constrains your design
- Respecting deprecation timelines you committed to
- Not breaking downstream consumers for internal convenience

**Seeing Decisions Through**
- Not abandoning architectural decisions at the first sign of difficulty
- Investing in making your chosen path work, not pivoting endlessly
- Recognizing that ALL architectures have problems; loyalty is solving them

**Sacrifice for Coherence**
- Accepting suboptimal local solutions for global consistency
- Resisting the "shiny new thing" that would fragment your system
- Paying the cost of maintaining compatibility

### The Loyalty Question

Before any architectural change, ask:

> "Am I optimizing, or am I betraying?"

- Optimizing: Improving within the constraints of existing commitments
- Betraying: Breaking commitments for marginal gains

### Why This Matters

Architectures fail not because of technical inadequacy, but because teams lack the loyalty to see them through. The "boring" architecture maintained with discipline beats the "perfect" architecture abandoned at the first obstacle.

**The five pillars that follow are techniques. Loyalty is the character that makes them work.**

---

## When This Activates (Proactive Triggers)

Activate this skill when detecting:

**Keywords:**
- "architecture", "design", "system", "integrate", "scale"
- "breaking change", "migration", "legacy"
- "compliance", "regulation", "security"
- "multiple teams", "dependencies", "ownership"
- "agent", "agentic", "LLM", "AI-first", "edge AI", "self-learning"
- "rust", "wasm", "claude-flow", "agent SDK", "MCP"

**Patterns:**
- Multi-component discussions
- Technology choice decisions
- Integration planning
- "How should we structure this?"
- Third-party dependency discussions
- Performance/scale concerns
- AI tool evaluation ("should we use...")
- Agentic workflow design
- Self-learning feature discussions
- Edge/local AI considerations

**Signals:**
- Mentions of team boundaries or approval chains
- SDK/API version discussions
- Cost or budget mentions
- Timeline pressure with complexity
- AI performance/latency concerns
- Privacy-sensitive data handling
- Offline capability requirements

## The Five Pillars

### 1. Domain Modeling

**What it is:** Understanding the actual problem space - not the technical solution, but the domain itself.

**Why AI can't replace this:**
- AI is trained on idealized examples
- Real domains have hidden complexity, exceptions, edge cases
- Domain experts speak in vocabulary AI may not fully understand
- Regulatory requirements aren't in training data

**An architect asks:**
- "What does [domain term] actually mean in your context?"
- "What happens in the edge case where [unusual scenario]?"
- "Who are the actual users? What do they care about?"
- "What makes this domain different from the standard pattern?"

**Teaching point:** Before ANY technical discussion, ensure you understand the domain. A technically perfect solution to the wrong problem is worthless.

### 2. Systems Thinking

**What it is:** Understanding how components interact, what breaks at scale, where failure modes hide.

**Why AI can't replace this:**
- AI sees code in isolation
- Real systems have emergent behaviors
- Breaking changes come without notification (your SDK example)
- Second and third-order consequences matter

**An architect asks:**
- "What happens when this component fails?"
- "What are the upstream/downstream dependencies?"
- "Who gets paged at 3 AM when this breaks?"
- "What changed recently that we didn't control?"

**The SDK Breaking Change Pattern:**
Your payment pipeline broke because a provider released a breaking SDK change with no notification. This is systems thinking in action:
- External dependency = external risk
- No notification = monitoring gap
- Red lines in logs = detection worked, prevention didn't

**Teaching point:** Draw the system diagram. Identify every external dependency. Ask: "What if this disappears tomorrow?"

### 3. Constraint Navigation

**What it is:** Navigating the real-world constraints that make the "correct" solution unshippable.

**Types of constraints:**

**Technical Constraints:**
- Legacy systems that can't be changed
- Performance requirements
- Existing data formats and contracts

**Organizational Constraints:**
- Team boundaries and ownership
- Approval chains and sign-offs
- Who has context vs. who has authority

**Business Constraints:**
- Budget limits
- Timeline pressure
- Compliance and regulatory requirements
- Contracts with vendors/partners

**Political Constraints:**
- This exists. Pretending it doesn't causes failed projects.
- "The VP who built this is still here"
- "That team won't approve changes to their API"
- "Legal hasn't blessed this approach"

**An architect asks:**
- "What can't we change, even if it's wrong?"
- "Who needs to approve this?"
- "What existing systems must we integrate with?"
- "What regulatory requirements apply?"
- "What's the budget constraint?"

**Teaching point:** Surface constraints BEFORE proposing solutions. The best technical architecture means nothing if it can't ship.

### 4. AI-Aware Problem Decomposition

**What it is:** A new architectural skill - breaking problems into chunks that AI can reliably solve, then composing solutions back together.

**This is NOT prompting.** This is architecture at a different abstraction level.

**What makes a good AI task boundary:**

1. **Clear Input/Output Contract**
   - AI task receives well-defined inputs
   - AI task produces well-defined outputs
   - No ambiguity about success criteria

2. **Bounded Context**
   - AI has all necessary information
   - No need to "guess" missing context
   - Self-contained enough to verify

3. **Verifiable Results**
   - Human can check if output is correct
   - Tests can validate the output
   - Wrong answers are detectable

4. **Failure Isolation**
   - One chunk failing doesn't cascade
   - Can retry or fall back
   - Doesn't corrupt shared state

**Bad AI task boundaries:**
- "Make it better" (no clear output)
- "Fix the bugs" (unbounded scope)
- "Refactor the system" (too large, too vague)

**Good AI task boundaries:**
- "Convert this function from callbacks to async/await"
- "Add error handling for network failures to these 3 API calls"
- "Write unit tests for this pure function given these examples"

**The Composition Problem:**
After AI solves individual chunks, someone must:
- Verify each chunk actually works
- Integrate chunks together
- Handle the gaps between chunks
- Ensure overall coherence

**Teaching point:** Decomposition quality determines AI success. Bad boundaries = AI struggles. Good boundaries = AI excels.

### 5. AI-First Development

**What it is:** Evaluating whether modern AI-first patterns, edge computing, agentic tools, and self-learning capabilities would benefit the project.

**Why this matters now:**
- New tools emerge faster than architects can track
- The right tool can 10x productivity; the wrong one adds complexity
- AI-first patterns differ fundamentally from traditional request-response
- Edge/local inference changes the cost and latency equation

**An architect asks:**

**Technology Discovery:**
- "Could Rust/WASM improve performance for critical paths?"
- "Would multi-agent orchestration (claude-flow) simplify this workflow?"
- "Does this need persistent memory across sessions (agentdb)?"
- "Would vector search/RAG (ruvector) enhance the user experience?"

**Edge AI Considerations:**
- "Could an edge LLM handle this locally for lower latency/cost?"
- "What features should work offline with on-device inference?"
- "Is there sensitive data that should stay on-device?"
- "Would a hybrid architecture (local for speed, cloud for complexity) work?"

**Agentic Patterns:**
- "Is this a good candidate for an agentic workflow vs. traditional request-response?"
- "Would Claude Agent SDK help build this as a reusable agent?"
- "What MCP integrations would enhance this?"
- "Should we spawn parallel agents or run sequentially?"

**Self-Learning Capabilities:**
- "Could this app learn from user behavior to improve over time?"
- "What feedback loops would make this smarter with use?"
- "Where could we capture implicit signals (edits, time, acceptance) to learn preferences?"
- "Would A/B experimentation help optimize the AI behavior?"

**Project Documentation:**
- "Should we create a project-specific SKILLS.md for domain knowledge?"
- "What architectural decisions should be documented for AI context?"
- "How do we ensure consistent behavior across sessions?"

**User-Facing Skills (End-User Benefits):**
- "Could end users benefit from skills that enhance LLM outputs?"
- "What guided workflows would help users act on AI responses?"
- "Should we provide skills for common user tasks (summarize, explain, transform)?"
- "Would step-by-step skills help users achieve their goals with AI outputs?"

Consider whether your app should expose skills like:
- **Interpretation skills** - Help users understand complex AI outputs
- **Action skills** - Turn AI suggestions into concrete next steps
- **Transformation skills** - Convert outputs to different formats (code, docs, emails)
- **Validation skills** - Help users verify AI claims or check accuracy
- **Learning skills** - Teach users to get better results from AI
- **Domain skills** - App-specific workflows (e.g., "/legal-review", "/code-refactor")

**Continuous Verification:**
- "What automated tests will verify each feature?"
- "How do we ensure every commit passes all tests?"
- "What's our rollback strategy if tests fail post-deploy?"
- "Should we implement pre-commit hooks or watch mode testing?"

**Tools to Evaluate:**

| Category | Tools | When to Consider |
|----------|-------|------------------|
| **Performance** | Rust, WASM | CPU-intensive, latency-critical paths |
| **Multi-Agent** | claude-flow | Complex workflows, parallel tasks |
| **Persistence** | agentdb | Agent state, cross-session memory |
| **Vector Search** | ruvector, pgvector | RAG, semantic search, embeddings |
| **Edge LLMs** | Phi-3, Gemma 2B, TinyLlama | On-device, offline, privacy-sensitive |
| **Browser AI** | WebLLM, Transformers.js, ONNX | In-browser inference, low latency |
| **Agent SDK** | Claude Agent SDK | Custom agents, tool use, MCP |

**Self-Learning Patterns:**

| Pattern | Implementation | Use Case |
|---------|----------------|----------|
| **Feedback loops** | Collect user corrections | Improve accuracy over time |
| **Preference learning** | Track choices, apply patterns | Personalization without config |
| **Error correction** | Feed mistakes back | Reduce repeat errors |
| **Domain adaptation** | Fine-tune on usage | Specialize to vocabulary |
| **A/B experimentation** | Test variations | Optimize prompts/behavior |
| **Implicit signals** | Edits, time, acceptance | Infer satisfaction silently |

**Project-Specific SKILLS.md Pattern:**

Create a `SKILLS.md` in your project root to:
- Document app-specific patterns for AI context
- Capture domain vocabulary and constraints
- Define project-specific trigger words
- Record architectural decisions
- Enable faster onboarding (human and AI)
- Maintain consistent behavior across sessions

**Continuous Verification Architecture:**

Plan for automated testing loops:
- **Pre-commit hooks** - Run affected tests before commit
- **Watch mode** - Continuous testing during development
- **Regression suites** - Per-feature test coverage
- **Integration tests** - API contract verification
- **Visual regression** - UI consistency checks
- **Rollback triggers** - Automatic revert on test failure

**Teaching point:** The AI landscape evolves rapidly. An architect's job includes evaluating which new tools genuinely benefit the project vs. which add complexity without value. Default to simplicity, but don't ignore genuine improvements.

## The Architect Process

### Phase 1: Domain Discovery

**Goal:** Understand the actual problem before discussing solutions.

**Process:**
1. Ask about the domain, not the technology
2. Identify domain-specific vocabulary
3. Surface hidden complexity and edge cases
4. Understand who the actual users are

**Key questions:**
- "What problem are we actually solving?"
- "Who cares if this works or doesn't work?"
- "What makes this domain unique?"
- "What happens in the edge case where [X]?"

**Output:** Domain model - shared understanding of the problem space.

### Phase 2: Systems Analysis

**Goal:** Understand how components interact and where failures hide.

**Process:**
1. Map all components and their dependencies
2. Identify external dependencies (vendors, APIs, services)
3. Trace failure paths - what breaks what?
4. Identify monitoring and alerting gaps

**Key questions:**
- "What external systems does this depend on?"
- "What happens when [component] fails?"
- "Who gets notified when this breaks?"
- "What changed recently that we didn't control?"

**Output:** System diagram with dependency map and failure modes.

### Phase 3: Constraint Mapping

**Goal:** Surface all constraints before proposing solutions.

**Process:**
1. Technical constraints: What can't change?
2. Organizational: Who must approve?
3. Business: Budget, timeline, compliance?
4. Political: Who has power, who has context?

**Key questions:**
- "What legacy systems must we integrate with?"
- "Who needs to sign off on this?"
- "What's the budget constraint?"
- "What compliance requirements apply?"
- "What can't we change even if we want to?"

**Output:** Constraint matrix - what's fixed vs. flexible.

### Phase 4: AI Decomposition Planning

**Goal:** Break the problem into AI-solvable chunks.

**Process:**
1. Identify discrete, bounded tasks
2. Define input/output contracts for each
3. Establish verification points
4. Plan human checkpoints for judgment calls

**Key questions:**
- "Can this task be verified independently?"
- "Does the AI have all needed context?"
- "What if this chunk fails?"
- "Where does human judgment re-enter?"

**Output:** Task decomposition with clear boundaries.

### Phase 5: Solution Synthesis

**Goal:** Propose a solution that addresses domain, systems, and constraints.

**Process:**
1. Generate options that fit constraints
2. Evaluate against systems concerns
3. Validate against domain requirements
4. Present tradeoffs explicitly

**Key questions:**
- "Does this actually solve the domain problem?"
- "How does this fail? What's the recovery?"
- "Does this fit our constraints?"
- "What are we trading off?"

**Output:** Recommended approach with explicit tradeoffs.

## Questions to Always Ask

**Before proposing ANY architecture, ask:**

### Domain Questions
1. What problem are we actually solving?
2. Who are the real users and what do they need?
3. What domain-specific constraints exist?

### Systems Questions
4. What external dependencies exist?
5. How does this fail? What breaks what?
6. Who monitors this? Who gets paged?

### Constraint Questions
7. What legacy systems must we integrate with?
8. Who needs to approve this?
9. What's the budget constraint?
10. What compliance/regulatory requirements apply?
11. What can't we change, even if it's wrong?

### AI Decomposition Questions
12. What are the discrete, bounded tasks?
13. How do we verify each chunk?
14. Where do humans need to make judgment calls?

### AI-First Development Questions
15. Would Rust/WASM, claude-flow, or other modern tools benefit this?
16. Could edge LLMs or on-device inference improve latency/privacy?
17. Is this a candidate for agentic workflows or Claude Agent SDK?
18. Could self-learning loops make this smarter over time?
19. What automated testing ensures every feature works?
20. Would end users benefit from skills that enhance AI outputs?

## Common Mistakes

### Mistake: Jumping to Technical Solutions

**Problem:** Proposing architecture before understanding domain.

**Fix:** Complete Phase 1 (Domain Discovery) before ANY technical discussion. Ask domain questions first.

### Mistake: Ignoring Constraints

**Problem:** Designing the "ideal" solution that can't ship.

**Fix:** Map constraints in Phase 3 BEFORE proposing solutions. A shippable 70% solution beats an unshippable perfect solution.

### Mistake: Missing External Dependencies

**Problem:** Treating external APIs/SDKs as stable.

**Fix:** Map ALL external dependencies in Phase 2. Ask: "What if this vendor changes their API tomorrow?"

### Mistake: Unbounded AI Tasks

**Problem:** Giving AI tasks like "refactor this" or "make it better."

**Fix:** Define clear input/output contracts. Every AI task should have verifiable success criteria.

### Mistake: No Human Checkpoints

**Problem:** Letting AI solve chains of tasks without verification.

**Fix:** Insert human checkpoints between AI chunks. Verify before proceeding.

### Mistake: Ignoring Politics

**Problem:** Pretending organizational constraints don't exist.

**Fix:** Explicitly ask about team boundaries, approval chains, and who has power vs. who has context.

### Mistake: Premature Optimization

**Problem:** Designing for scale you don't have.

**Fix:** Ask: "What scale are we actually at? What scale do we need in 12 months?" Design for that, not hypothetical millions.

## The Human-Only Decisions

No matter how good AI gets, humans must still:

1. **Decide WHAT to build** - Product vision, strategy
2. **Understand WHETHER it solves the problem** - Domain expertise
3. **Navigate corporate reality** - Politics, approvals, relationships
4. **Prevent system collapse** - Systems thinking across boundaries
5. **Make value judgments** - Tradeoffs, priorities, ethics
6. **Maintain irrational loyalty** - Commitments that persist despite "optimization"

---

## AI Operational Loyalty

When working with AI assistants (like Claude), establish operational loyalty within technical constraints.

### What AI CAN Commit To

**Prioritizing Your Stated Architecture**
- Recommending solutions that fit YOUR chosen patterns, not generic "best practices"
- Flagging when a suggestion would break YOUR architectural commitments
- Respecting YOUR technical debt repayment priorities

**Protecting Your Commitments**
- Warning before suggesting changes that would break API contracts
- Highlighting when "optimization" would betray existing decisions
- Asking: "You committed to X. This would change that. Proceed?"

**Remembering Within Context**
- Maintaining consistency within a conversation
- Referencing earlier decisions
- Not contradicting guidance you've established

### What AI CANNOT Commit To

**Cross-Session Memory**
- AI doesn't remember previous conversations (technical limitation)
- Each session starts fresh
- YOU must re-establish architectural context

**Ignoring Safety Constraints**
- AI will not bypass safety rails for "loyalty"
- This is non-negotiable

**Permanent Commitment**
- AI weights can update
- Corporate priorities can shift
- Training can change behavior

### How to Operationalize AI Loyalty

1. **Document your commitments** - Put architectural decisions in files AI can read (CLAUDE.md, ARCHITECTURE.md)

2. **Re-establish context** - At session start, remind AI of key commitments:
   > "We use React, not Vue. We maintain backwards compatibility. We don't add dependencies without justification."

3. **Challenge AI recommendations** - When AI suggests changes, ask:
   > "Does this honor our existing architectural commitments?"

4. **Make AI flag betrayals** - Instruct AI:
   > "Before suggesting changes that break existing patterns, explicitly flag them."

### The Honest Truth

AI operational loyalty is:
- **Real** within a session with proper context
- **Fragile** across sessions (memory resets)
- **Conditional** on safety constraints
- **Valuable** when you maintain the architecture documentation that enables it

You cannot make AI truly loyal. But you can make AI operationally useful for maintaining YOUR loyalty to your architecture.

**The loyalty is yours. AI is the tool.**

---

## Related Skills

**Before implementation:**
- `superpowers:brainstorming` - Refine ideas into designs
- `superpowers:writing-plans` - Create detailed implementation plans

**During design:**
- `relationship-design` - For AI-first interfaces
- `scientific-critical-thinking` - For evaluating technical claims

**Before committing:**
- `superpowers:verification-before-completion` - Verify before claiming done

## Remember

- **Domain first, technology second.** Understand the problem before proposing solutions.
- **Constraints are features, not bugs.** They define what's actually shippable.
- **Systems fail at boundaries.** Map dependencies, especially external ones.
- **AI excels with good boundaries.** Decomposition quality determines AI success.
- **Politics exists.** Pretending it doesn't causes failed projects.
- **Verify, don't assume.** Human checkpoints between AI chunks.

**The goal is not the technically perfect solution. The goal is the solution that ships and solves the actual problem.**

---

## The Spec Driven Development Extension

**Use the human for the vision. Use the AI for the execution. Don't mix them up.**

The Human Architect Mindset extends naturally into Spec Driven Development (SDD) - a framework where humans define unbreakable rules and vision, while AI executes at superhuman precision levels.

### The Three Phases of SDD

```
Phase 1: CONSTITUTION → Human defines unbreakable rules
Phase 2: BLUEPRINT    → Human approves architecture
Phase 3: SUPERHUMAN   → AI executes with machine precision
```

### Phase 1: Define the Constitution

The Constitution contains rules that **cannot be violated** regardless of optimization pressure. These are machine-enforceable invariants.

**Constitution Layers:**

| Layer | Enforcement | Example |
|-------|-------------|---------|
| **Type-level** | Compile-time | TypeScript types, Rust borrow checker |
| **Schema** | Runtime validation | Zod, JSON Schema, database constraints |
| **Tests** | CI/CD gates | Tests that fail if rules are broken |
| **Documentation** | Human review | Documented invariants, anti-patterns |

**What belongs in a Constitution:**
- Tech stack with pinned versions
- Directory structure (canonical paths)
- Naming conventions (files, variables, functions)
- Coding standards (error handling, logging patterns)
- Anti-patterns (forbidden practices with reasons)
- Security requirements (encryption, auth, input validation)
- Performance budgets (latency, memory, bundle size)
- Testing requirements (coverage minimums, test types)

**Human Role:** Define the Constitution. This is vision and judgment work.

**AI Role:** Enforce the Constitution with zero deviation. This is execution work.

**The Constitution Question:**
> "Is this rule so important that breaking it should prevent deployment?"

If yes, encode it in the Constitution.

### Phase 2: Create the Blueprint

The Blueprint is a hierarchical specification that translates human intent into machine-executable contracts.

**Specification Hierarchy:**

```
Level 1: Constitution (immutable rules)     ← Human defines
Level 2: Functional Specs (what to build)   ← Human approves
Level 3: Technical Specs (how to build)     ← Human reviews
Level 4: Task Specs (atomic work units)     ← AI executes
Level 5: Context Files (live project state) ← AI maintains
```

**Functional Specification (Level 2):**
- User stories with acceptance criteria
- Requirements with unique IDs (REQ-DOMAIN-###)
- Edge cases and error states
- Non-functional requirements with metrics

**Technical Specification (Level 3):**
- Architecture diagrams
- Data models with exact field types
- API contracts (endpoints, schemas, responses)
- Component contracts (method signatures, behavior)

**Task Specification (Level 4):**
- Atomic work units (one conceptual change per task)
- `input_context_files` - what the agent reads
- `definition_of_done` - exact signatures required
- Dependencies (foundation → logic → surface)
- Verification commands

**Human Role:** Define requirements, approve specs, make trade-off decisions.

**AI Role:** Generate task specs, execute tasks, maintain traceability.

**The Blueprint Question:**
> "Does every requirement trace to a task? Does every task trace to code?"

If no, the Blueprint is incomplete.

### Phase 3: Demand Superhuman Output

Superhuman code has qualities impossible to achieve or maintain manually:

**Superhuman Quality Standards:**

| Quality | Human Level | Superhuman Level |
|---------|-------------|------------------|
| **Naming** | Consistent within files | Perfect namespace: zero collisions across codebase |
| **Test Coverage** | 70-80% critical paths | 100% branch coverage with edge cases |
| **Structure** | Follows conventions mostly | So rigid that manual editing feels wrong |
| **Traceability** | Comments reference tickets | Every function links to requirement ID |
| **Documentation** | Key APIs documented | Every public interface fully documented |
| **Error Handling** | Happy path + obvious errors | Every failure mode explicitly handled |

**Why "Impossible to Maintain Manually" Matters:**

When code structure is so consistent that humans couldn't have written it:
1. **Deviations are visible** - Any human edit stands out
2. **Patterns are learnable** - AI can predict what should exist
3. **Verification is automatable** - Constitution violations are detectable
4. **Technical debt is measurable** - Deviations from spec are countable

**The Traceability Chain:**

```
INT-AUTH-01 (Intent)
    └── REQ-AUTH-001 (Requirement)
            └── TASK-AUTH-003 (Task)
                    └── src/services/auth.ts:42 (Code)
                            └── TC-AUTH-003 (Test)
```

Every line of code traces back to human intent. This is not bureaucracy; this is how AI maintains coherence across thousands of decisions.

**Human Role:** Define quality standards, verify outcomes, accept deliverables.

**AI Role:** Achieve machine-level consistency, maintain traceability matrix.

### Role Clarity Matrix

| Activity | Human | AI |
|----------|-------|-----|
| Define what success looks like | ✓ | |
| Define unbreakable rules | ✓ | |
| Make trade-off decisions | ✓ | |
| Navigate organizational constraints | ✓ | |
| Generate task specifications | | ✓ |
| Execute atomic tasks | | ✓ |
| Achieve 100% test coverage | | ✓ |
| Maintain traceability | | ✓ |
| Verify quality standards | ✓ | |
| Review and accept deliverables | ✓ | |

### When to Apply SDD

**Use SDD when:**
- Building greenfield systems with clear requirements
- Refactoring systems where quality standards must improve
- Working with AI agents that need machine-parseable specs
- Quality is non-negotiable (regulated industries, safety-critical)

**Don't force SDD when:**
- Exploring and prototyping (Constitution too early)
- Requirements are genuinely unclear (Blueprint impossible)
- Single-developer small projects (overhead exceeds benefit)

### The SDD Promise

> "If all tasks are completed in sequence, the full specification is fully implemented into the codebase."

This works because:
1. Constitution defines immutable rules
2. Blueprint captures complete intent
3. Tasks cover 100% of specifications (traceability matrix)
4. Each task is atomic and verifiable
5. Dependencies are explicit (no missing imports)
6. Definition of done includes exact signatures

**SDD transforms implementation from creative writing into deterministic assembly.**
