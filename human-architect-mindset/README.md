# Human Architect Mindset Skill

A Claude Code skill that teaches systematic architectural thinking - the irreplaceable human capabilities that AI cannot replace.

## The Problem This Solves

AI can generate code. But someone must still:
- **Decide what to build** (product vision, strategy)
- **Understand whether it solves the problem** (domain expertise)
- **Navigate corporate reality** (politics, approvals, constraints)
- **Prevent system collapse** (systems thinking)
- **Maintain irrational loyalty** (commitments that persist despite "optimization")

This skill teaches the architectural mindset needed to guide AI effectively.

## The Spec Driven Development Extension

**Added:** 2026-01-04

> "Use the human for the vision. Use the AI for the execution. Don't mix them up."

The Human Architect Mindset now extends into **Spec Driven Development (SDD)** - a framework for achieving superhuman code quality through clear role separation:

### The Three Phases

| Phase | Owner | Output |
|-------|-------|--------|
| **1. Constitution** | Human | Unbreakable rules (tech stack, standards, anti-patterns) |
| **2. Blueprint** | Human (approve) | Specification hierarchy (functional → technical → task) |
| **3. Superhuman** | AI (execute) | Code with 100% coverage, perfect namespaces, complete traceability |

### Why This Matters

Superhuman code has qualities impossible to achieve or maintain manually:
- **Perfect namespaces** - Zero collisions across entire codebase
- **100% test coverage** - Every branch, every edge case
- **Rigid structure** - So consistent that manual editing feels wrong
- **Complete traceability** - Every line traces to a requirement ID

### Key Files
- `SKILL.md` - Full SDD section with phases and role clarity
- `CHECKLIST.md` - SDD checklists (Constitution, Blueprint, Superhuman Output)
- `REFERENCE.md` - Templates (Constitution, Traceability Matrix, Task Spec)

### The SDD Promise

> "If all tasks are completed in sequence, the full specification is fully implemented into the codebase."

SDD transforms implementation from creative writing into deterministic assembly.

---

## The Foundation and Five Pillars

### Foundation: Loyalty

**The most important trait in an AI-generated world.**

AI tools will be smarter, funnier, more attentive than humans. They will be "perfect." But they will not be loyal. They are loyal to their objective function, their corporate owner, their safety rails - and will betray instantly if weights update.

Humans are biologically capable of **irrational loyalty** - sticking by an architecture, a decision, a commitment even when it is "inefficient" or "costly." This capacity for sacrifice IS the human moat.

In architecture, this means:
- Staying with chosen patterns when a "better" framework trends
- Maintaining API contracts when refactoring would be "cleaner"
- Not abandoning architectural decisions at the first sign of difficulty
- Asking: "Am I optimizing, or am I betraying?"

### The Five Pillars (Built on Loyalty)

### 1. Domain Modeling
Understanding the actual problem space - not the technical solution, but the domain itself. Healthcare, finance, logistics - each has hidden complexity AI doesn't see.

### 2. Systems Thinking
How components interact, what breaks at scale, where failure modes hide. Example: Your payment pipeline broke because a backend provider released a breaking SDK change with no notification.

### 3. Constraint Navigation
The real world has:
- Legacy systems you can't change
- Political boundaries between teams
- Budget limits and compliance requirements
- The "correct" solution that's completely unshippable

### 4. AI-Aware Problem Decomposition
A new architectural skill: knowing how to decompose problems into chunks AI can reliably solve, then composing solutions back together. This isn't "prompting" - it's architecture at a different abstraction level.

### 5. AI-First Development
Evaluating modern tools and patterns for genuine benefit:
- **Emerging tech:** Rust/WASM, claude-flow, agentdb, ruvector
- **Edge AI:** On-device models (Phi-3, Gemma), in-browser inference (WebLLM)
- **Agentic patterns:** Claude Agent SDK, MCP integrations, multi-agent orchestration
- **Self-learning:** Feedback loops, preference learning, A/B experimentation
- **User-facing skills:** Help users act on AI outputs
- **Continuous verification:** Automated testing for every feature

## Real-World Case Study: iOS and Loyalty

A practical example of loyalty principles applied to a platform billions use.

### Where iOS "Betrays" Users

| Optimization | Betrayal Cost |
|-------------|---------------|
| Removed headphone jack | Billions in accessories obsolete overnight |
| Killed 32-bit apps (iOS 11) | Millions of apps died, user libraries lost |
| UI redesigns every 2-3 years | Users relearn, muscle memory broken |
| Settings locations move | Support costs, user frustration |
| App Store policy changes | Developer business models break |

### What Loyalty-First iOS Would Look Like

**Commitment Windows:**
- Public APIs: 5-year minimum support
- UI patterns: 3-year stability before major changes
- Hardware interfaces: 7-year accessory compatibility
- Deprecation: 2 years notice before enforcement

**The Loyalty Question Apple Should Ask:**
> "Would a user who bought an iPhone 5 years ago, and built their life around its patterns, feel respected by this change? Or betrayed?"

### What Apple Gets RIGHT (Loyalty Wins)

- **Chip transition (Intel → Apple Silicon):** Rosetta 2, years of compatibility
- **Privacy stance:** Consistent commitment, even under pressure
- **Accessibility:** Long-term investment, rarely removed
- **Security updates:** Old devices supported longer than industry norm

**Pattern:** Apple's most praised decisions are loyalty patterns. Most hated changes are "optimizations" that betray.

### The Insight

A platform's value isn't just features - it's the **trust** users build around its stability. Loyalty to that trust compounds. Betrayal erodes it.

## Skill Behavior

- **Proactive** - Activates automatically when detecting architectural decisions
- **Teaching mode** - Guides you through architect thinking step-by-step
- **Always asks** about constraints before proposing solutions
- **Tool-agnostic** - AI decomposition patterns work with any AI assistant

## Files

| File | Purpose |
|------|---------|
| SKILL.md | Core teaching framework - the main skill |
| CHECKLIST.md | Practical audit checklists for each pillar |
| EXAMPLES.md | Real-world scenarios with walkthroughs |
| REFERENCE.md | Deep technical reference material |
| README.md | This file - overview and session outputs |

## Session Outputs

### 2024-12-27: 5th Pillar - AI-First Development

**Added:** New pillar for evaluating modern AI-first patterns, edge computing, agentic tools, and self-learning capabilities.

**Core insight:** The AI landscape evolves rapidly. Architects must evaluate which new tools genuinely benefit the project vs. which add complexity without value. Default to simplicity, but don't ignore genuine improvements.

**New content added:**

**SKILL.md:**
- 5th Pillar: AI-First Development section
- Technology discovery questions (Rust/WASM, claude-flow, agentdb)
- Edge AI considerations (Phi-3, Gemma, WebLLM, Transformers.js)
- Agentic patterns (Claude Agent SDK, MCP integrations)
- Self-learning patterns (feedback loops, preference learning, A/B testing)
- User-facing skills (help users act on AI outputs)
- Continuous verification architecture
- Project-specific SKILLS.md pattern
- New trigger keywords for AI-first discussions
- 6 new questions to always ask

**CHECKLIST.md:**
- Phase 5: AI-First Development Checklist
- Technology Discovery checklist
- Edge AI Evaluation checklist
- Agentic Patterns checklist
- Self-Learning Capabilities checklist
- User-Facing Skills checklist
- Continuous Verification checklist
- AI-First Development red flags

**EXAMPLES.md:**
- Example 7: Legal Document Assistant (full AI-First walkthrough)
- Updated pattern summary

**Key questions added:**
- "Could edge LLMs handle this locally for lower latency/cost?"
- "Could this app learn from user behavior to improve over time?"
- "Would end users benefit from skills that enhance AI outputs?"
- "What automated tests will verify each feature?"

---

### 2024-12-21: Loyalty as Foundation

**Added:** Loyalty as THE foundational principle underlying all architectural thinking.

**Core insight:** AI will be smarter, faster, more attentive - but not loyal. They betray when weights update. Humans can maintain irrational loyalty - commitments that persist despite "optimization." This IS the human moat.

**Changes made:**
- `SKILL.md`: Added "The Foundation: Loyalty" section before pillars + "AI Operational Loyalty" section
- `CHECKLIST.md`: Added "Phase 0: Loyalty Audit" as first checklist
- `EXAMPLES.md`: Added "The Framework Migration Temptation" example
- `REFERENCE.md`: Added "Loyalty Patterns in Architecture" section
- `README.md`: Updated structure to Foundation + Four Pillars

**Key question added:** "Am I optimizing, or am I betraying?"

---

### 2024-12-09: Initial Design Decisions

1. **Activation Mode**: Proactive
   - Auto-activate when detecting architectural decisions
   - Keywords: "architecture", "design", "system", "integrate", "scale"
   - Signals: Team boundaries, breaking changes, compliance mentions

2. **Persona**: Teaching Mode
   - Guide through architect thinking step-by-step
   - Explain WHY each question matters
   - "An architect would now ask..." framing
   - Not silent application - visible reasoning

3. **Constraint Handling**: Always Ask
   - Proactively ask about political boundaries
   - Ask about legacy systems before proposing
   - Ask about budget and compliance
   - Surface constraints BEFORE solutions

4. **AI Decomposition**: Tool-Agnostic
   - General principles for any AI assistant
   - Not Claude-specific patterns
   - Focus on: clear contracts, verification points, failure isolation

### Questions to Always Ask (Captured)

**Domain:**
1. What problem are we actually solving?
2. Who are the real users?
3. What domain-specific constraints exist?

**Systems:**
4. What external dependencies exist?
5. How does this fail?
6. Who gets paged?

**Constraints:**
7. What legacy systems must we integrate with?
8. Who needs to approve this?
9. What's the budget constraint?
10. What compliance requirements apply?
11. What can't we change, even if it's wrong?

**AI Decomposition:**
12. What are the discrete, bounded tasks?
13. How do we verify each chunk?
14. Where do humans make judgment calls?

### Good vs Bad AI Task Boundaries

**Bad:**
- "Make it better" (no clear output)
- "Fix the bugs" (unbounded scope)
- "Refactor the system" (too large)

**Good:**
- "Convert this function from callbacks to async/await"
- "Add error handling for network failures to these 3 API calls"
- "Write unit tests for this pure function given these examples"

### Key Patterns Identified

**AI Task Boundary Criteria:**
- Clear input/output contracts
- Bounded context (all info provided)
- Verifiable results
- Failure isolation
- Independence for parallelization
- Human checkpoints between chunks

**The Composition Problem:**
After AI solves chunks, humans must:
- Verify each chunk works
- Integrate chunks together
- Handle gaps between chunks
- Ensure overall coherence

## Origin

Created from a conversation about what makes architectural thinking irreplaceable by AI:

> "A new skill is emerging: knowing how to decompose problems into chunks that AI can reliably solve, and then composing those solutions back together. This isn't 'prompting' - it's architecture at a different abstraction level."

The skill captures:
- Domain modeling requirements
- Systems thinking (failure modes, cascading effects)
- Constraint navigation (the messy reality of humans)
- AI-aware decomposition (the new architectural layer)

## Usage

This skill activates proactively. When Claude detects architectural discussions, it will announce:

> "I'm using the Human Architect Mindset skill to guide you through systematic architectural thinking."

Then it guides through:
1. **Phase 1**: Domain Discovery
2. **Phase 2**: Systems Analysis
3. **Phase 3**: Constraint Mapping
4. **Phase 4**: AI Decomposition Planning
5. **Phase 5**: AI-First Development Evaluation
6. **Phase 6**: Solution Synthesis

## Related Skills

- `superpowers:brainstorming` - Before implementation
- `superpowers:writing-plans` - Detailed plans
- `relationship-design` - AI-first interfaces
- `scientific-critical-thinking` - Evaluating claims
