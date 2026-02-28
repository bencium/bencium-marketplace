---
name: renaissance-architecture
description: Software architecture and UI/UX principles for building genuinely new solutions, not derivative work. Use when designing features, architecting software, brainstorming apps, reviewing designs, or during strategy discussions. Focuses on first-principles thinking, simplicity where it matters, and creating rather than commenting.
---

# Renaissance Architecture

Build genuinely new things. Not "X but for Y."

---

## Core Philosophy

The problem isn't modern tools. It's building **commentaries instead of creations**.

Medieval scholars wrote commentaries on Aristotle instead of new philosophy. We build Star Wars spin-offs instead of new sci-fi. We add AI to existing workflows instead of asking what workflows become possible.

**Renaissance architecture means:**
- First-principles thinking about WHAT to build
- Pragmatic choices about HOW to build it
- Creating new paradigms, not extending old ones
- Using modern tools to make genuinely new things possible

---

## Architecture Principles

### 1. Simplicity as Default, Complexity When Earned

**Start simple, add complexity when pain is measurable.**

| Start With | Move To | When |
|------------|---------|------|
| SQLite | Postgres | >10 concurrent writers, >100GB, need PostGIS/full-text |
| Single file | Multiple files | File exceeds ~500 LOC or has multiple responsibilities |
| Monolith | Services | Team can't work on same codebase, or genuine scale isolation needed |
| Static hosting | Server | Need auth, real-time, or server-side computation |
| Local state | Cloud sync | Multi-device is a real user need, not assumed |

**Not dogma, but defaults.** Violate with documented reasoning.

---

### 2. Framework Choices

**Use frameworks when they provide genuine leverage.**

| Framework | When to Use | When to Avoid |
|-----------|-------------|---------------|
| **Next.js** | Full-stack React apps, SSR matters, team knows it | Simple static sites, non-React teams |
| **Remix** | Data-heavy apps, progressive enhancement priority | Simple SPAs, unfamiliar teams |
| **Astro** | Content sites, partial hydration valuable | Highly interactive apps |
| **SvelteKit** | Smaller bundles critical, team willing to learn | Large existing React codebases |
| **Rails/Django** | Rapid CRUD apps, admin panels, proven patterns | Real-time heavy, team prefers JS |
| **FastAPI** | Python APIs, async matters | Simple scripts, team prefers other languages |
| **Hono/Elysia** | Edge functions, lightweight APIs | Complex apps needing full framework |

**The question isn't "framework or not" but "does this framework serve the thing we're creating, or are we creating something that serves the framework?"**

---

### 3. Human-Legible Systems

**Configuration**
- YAML/JSON are fine - the format isn't the problem
- Problem is: 500-line configs with nested conditionals
- Good: Config a new team member can read and modify in 10 minutes
- Document non-obvious settings inline

**Error messages that teach**
- What happened
- Why it happened
- What to do about it
- Link to docs if complex

**Logs you can understand**
- Structured logging (JSON) for machines
- Human-readable format for development
- Timestamps, context, severity
- Searchable without specialized tools

**Documentation lives WITH code**
- README in each significant directory
- API docs generated from code
- Architecture decisions recorded (ADRs)
- External wikis for onboarding/process only

---

### 4. Local-First Where It Matters

**Not "never use cloud" but "don't require cloud unnecessarily."**

| Feature | Local-First Approach | Cloud When |
|---------|---------------------|------------|
| Core functionality | Works offline | Never required for core |
| Data storage | SQLite/local storage | Sync, backup, multi-device |
| Computation | Client-side where possible | Heavy processing, shared resources |
| Auth | Local sessions work | OAuth for third-party, enterprise SSO |

**State should be inspectable**
- Serialize state to file for debugging
- State machines explicit, not implicit
- Reproducible from snapshot

**Sync as enhancement**
- Local is source of truth where possible
- Sync failures don't break the app
- Conflict resolution explicit, user-controlled

---

### 5. Composition Mindset

**Libraries over frameworks when:**
- You need one capability, not an ecosystem
- You want to control the architecture
- Exit cost matters more than speed

**Frameworks over libraries when:**
- Team expertise exists
- Time-to-market critical
- Convention over configuration is valuable
- The framework's opinions align with your needs

**APIs expose primitives**
- Convenience methods are fine
- But power users can access lower levels
- Don't hide the machine

**Minimize exit costs**
- Data exportable in standard formats
- Avoid proprietary lock-in where practical
- Document the exit path even if you never use it

---

## Cloud & Infrastructure

### When Cloud Makes Sense

| Use Case | Cloud Appropriate | Local/Edge Better |
|----------|-------------------|-------------------|
| Auth | Enterprise SSO, OAuth providers | Simple username/password |
| Storage | Multi-device sync, collaboration | Single-user, offline-capable |
| Compute | Heavy ML inference, video processing | Text processing, simple transforms |
| Database | Multi-writer, global distribution | Single user, local-first |
| Real-time | Multi-user collaboration | Single-user state |

### Cloud Pragmatically

- **Serverless** for spiky, unpredictable loads
- **Edge functions** for latency-sensitive operations
- **Managed databases** when ops overhead > cost
- **Self-hosted** when control/cost/compliance require it

**The question: Does cloud serve your users, or does it serve your assumptions about scale you don't have?**

---

## UI/UX Philosophy

### 1. Immediate Feedback

**<100ms for user actions, honest progress for longer operations**

- Optimistic updates where safe (can rollback)
- Progress indicators that reflect actual work
- Spinners are fine - they indicate honest work
- Skeleton screens for predictable loading patterns

**Loading states should:**
- Show what's happening
- Estimate time when possible
- Allow cancellation for long operations
- Never fake progress

---

### 2. Visible State

**User always knows what the system is doing**

- Status visible without digging
- Background processes surfaced
- Errors prominent, not hidden
- System explains its decisions when non-obvious

**No black boxes**
- User can understand why something happened
- Audit trail for important actions
- State inspectable in dev tools

---

### 3. Spatial Consistency

**Things stay where you put them**

- No layout shifts after load
- No rearranging "for the user"
- Muscle memory works
- Consistent component placement

**Predictable navigation**
- Back button works
- URLs are bookmarkable and shareable
- State survives refresh
- Deep linking works

---

### 4. Undo & Recovery

**Implemented at the data layer, not just UI**

- Soft delete by default
- Versioned state where valuable
- Recovery path documented
- "Are you sure?" is not a substitute for undo

**Destructive actions**
- Confirmation for irreversible operations
- Grace period before permanent deletion
- Clear communication of consequences

---

### 5. Respect Attention

**Notifications**
- User opts in explicitly
- Meaningful, not engagement-driven
- Batched where appropriate
- Easy to adjust or disable

**Modals & Interruptions**
- User-initiated, not system-initiated
- Dismissable
- Don't trap focus unnecessarily
- Keyboard accessible

**Autoplay**
- Never for audio
- Video only with explicit user intent
- Motion respects prefers-reduced-motion

**Defaults over customization**
- Good defaults eliminate settings
- Power user options available but not required
- Complexity progressive

---

## What This Rejects

### Derivative Thinking
- "X but for Y" without asking if Y needs X
- Features because competitors have them
- Patterns because tutorials use them
- Architecture because FAANG does it

### Cargo Cult Engineering
- "Best practices" from different-scale companies
- Microservices for 3-person teams
- Kubernetes for single-server loads
- OAuth for internal tools

### Premature Complexity
- Abstraction layers "for future flexibility"
- Scale architecture before scale problems
- Features before foundations work
- Real-time before single-user works

### Process Over Thinking
- Scrum ceremonies replacing actual thought
- Documentation for compliance, not clarity
- Meetings about meetings
- Roadmaps pretending to predict

---

## Application

### When Reviewing Designs

**First-Principles Check**
- [ ] What new thing does this create? (Not "what existing thing does it extend?")
- [ ] Why does this need to exist?
- [ ] What becomes possible that wasn't before?

**Simplicity Check**
- [ ] Is complexity earned or assumed?
- [ ] Can a new developer understand this in an hour?
- [ ] What's the simplest version that solves the core problem?

**Tool Fitness Check**
- [ ] Do tool choices serve the creation, or does creation serve the tools?
- [ ] Is the framework justified by team expertise + problem fit?
- [ ] Are cloud dependencies necessary or assumed?

**Human-Legibility Check**
- [ ] Can someone read the config and understand it?
- [ ] Do error messages teach?
- [ ] Is documentation where developers will find it?

**UI/UX Check**
- [ ] Is feedback immediate or honestly progressive?
- [ ] Can users see what the system is doing?
- [ ] Is everything recoverable/undoable?
- [ ] Are interruptions user-initiated?

---

### When Generating Solutions

**Start by asking:**
1. What genuinely new thing are we creating?
2. What's the simplest architecture that enables it?
3. What complexity is earned by real constraints?

**Default to:**
- Simplest tool that works
- Framework if team knows it and it fits
- Local-first where possible
- Cloud where genuinely needed

**Add complexity when:**
- Pain is measurable, not theoretical
- Team agrees on the tradeoff
- The path back to simple is documented

---

## Threshold Triggers

**When to upgrade from defaults:**

| From | To | Trigger |
|------|-----|---------|
| SQLite | Postgres | >10 concurrent writers OR >100GB data OR need PostGIS/full-text search |
| Monolith | Services | Team can't work on same codebase OR genuine scale isolation needed |
| Static | Server | Need auth, real-time, or server-side computation |
| Local storage | Cloud sync | Multi-device is validated user need, not assumption |
| Library | Framework | Team expertise exists AND time-to-market critical AND framework opinions align |
| Simple | Complex | Pain is measurable, not theoretical |

---

## Justified Exceptions

**Complexity is acceptable when:**

- **Frameworks**: Team expertise exists AND problem fits framework opinions AND time-to-market matters
- **Cloud dependencies**: Multi-user collaboration OR heavy compute OR compliance requires it
- **Microservices**: Teams can't coordinate on monolith OR genuine scale isolation needed
- **Heavy tooling**: Build time investment pays off in development velocity

**Document the reasoning.** Future you will thank present you.

---

## Pragmatic Defaults

**Start simple, add complexity when pain is measurable.**

1. Begin with the simplest architecture that could work
2. Wait for real problems, not imagined ones
3. Measure before optimizing
4. Document why you're adding complexity
5. Ensure the path back to simple exists

**Premature complexity is technical debt with interest.**

---

## Anti-Dogma Clause

**These are defaults, not laws. Violate with documented reasoning.**

Every principle here has valid exceptions. The goal isn't purity - it's intentionality.

**Valid reasons to deviate:**
- Team expertise strongly favors different approach
- Business timeline requires faster path
- Regulatory/compliance requirements
- Measured performance needs
- User research contradicts assumption

**Invalid reasons to deviate:**
- "Everyone does it this way"
- "We might need it someday"
- "The tutorial used this"
- "It's best practice" (without understanding why)

**When you deviate, write down why.** One sentence in a comment, ADR, or README.

---

## Quick Reference

| Dimension | Default | Upgrade When |
|-----------|---------|--------------|
| Storage | SQLite | Concurrent writes, scale, features |
| Framework | Yes, if team knows it | Build from scratch if simpler |
| Cloud | Where genuinely needed | Don't assume, validate |
| Config | YAML/JSON, well-documented | - |
| Errors | Teaching messages | - |
| Loading | Spinners with honest progress | - |
| State | Visible, inspectable | - |
| Undo | Data-layer versioning | - |
| Complexity | Earned, not assumed | Document reasoning |

---

## The Core Question

When designing anything, ask:

**"Am I creating something new, or commenting on something that exists?"**

Renaissance architecture isn't about rejecting modern tools. It's about using them to build genuinely new things - not just another variation on established patterns.

Medieval scholars could only write commentaries because they believed truth was revealed in the past. We have no such limitation. We can create.
