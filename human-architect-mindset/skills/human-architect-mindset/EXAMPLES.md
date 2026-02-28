# Human Architect Mindset - Examples

Real-world scenarios demonstrating the five pillars in action.

---

## Example 1: The Payment Pipeline Failure

**Scenario:** Your payment pipeline broke. Red lines in logs. The backend provider (capital S) released a breaking SDK change with no notification.

### What Happened (Systems Thinking Failure)

**The failure:**
- External dependency changed without warning
- No monitoring for SDK version changes
- Breaking change detected only via production errors
- Time-to-detection: Hours? Days?

**The gap:**
- Treated external SDK as stable
- No fallback strategy
- No version pinning strategy communicated
- Provider's changelog not monitored

### Architect Thinking Applied

**Phase 2 (Systems Analysis) would have asked:**
1. "What external systems does this depend on?"
   - Payment provider SDK (external, not controlled)
2. "What happens when this dependency changes?"
   - Currently: Production breaks
   - Should: Canary deployment, version monitoring
3. "Do we have monitoring for their failures?"
   - Partial: Error logs caught it
   - Missing: SDK version change detection, changelog monitoring

**Phase 3 (Constraints) would have asked:**
1. "What's our contract with this provider?"
   - Do they guarantee backwards compatibility?
   - What's their deprecation policy?
2. "What's our fallback?"
   - Alternative provider?
   - Graceful degradation?

### Better Architecture

```
Current:
[App] -> [SDK v1.2] -> [Provider]
         ^-- Breaking change here, no warning

Better:
[App] -> [SDK Wrapper] -> [SDK vX] -> [Provider]
              |                ^
              |                |-- Version pinned, tested
              |-- Abstraction layer
              |-- Fallback logic
              |-- Provider change monitoring
```

**AI Decomposition for Fix:**

Good task boundaries:
- "Create SDK wrapper interface with current SDK calls"
- "Add version monitoring that alerts on SDK updates"
- "Write fallback logic for provider unavailability"

Bad task boundary:
- "Fix the payment system to never break again"

### Lesson

External dependencies are external risk. Systems thinking maps this risk BEFORE it bites.

---

## Example 2: Healthcare API Integration

**Scenario:** You need to integrate with a hospital's EHR (Electronic Health Record) system for a healthcare app.

### Domain Modeling Required

**Domain questions an architect asks:**

1. "What does 'patient data' mean in this context?"
   - Demographics? Medical history? Current medications?
   - Different data = different compliance requirements

2. "What's HIPAA mean for our architecture?"
   - Encryption at rest and in transit
   - Audit logging of all access
   - BAA (Business Associate Agreement) required
   - Data residency requirements

3. "What's the domain vocabulary?"
   - HL7 FHIR? CCD? ADT messages?
   - ICD-10 codes? CPT codes?
   - Understanding these is prerequisite to implementation

4. "What are the edge cases?"
   - Patient with multiple records (duplicate detection)
   - Emergency override access
   - Corrections and amendments
   - Minor patients (different consent rules)

### Constraint Navigation

**Technical constraints:**
- Hospital system uses HL7 v2.x (1990s protocol)
- No REST API, only file-based EDI
- 24-hour batch processing, not real-time

**Organizational constraints:**
- Hospital IT team reviews all integrations
- 90-day approval cycle
- Requires penetration testing

**Compliance constraints:**
- HIPAA Security Rule
- State-specific healthcare laws
- Insurance portability requirements

**Political constraints:**
- Hospital's existing vendor has exclusive relationship
- IT team resistant to new integrations
- Physician workflow changes require medical director sign-off

### Architect Thinking Applied

**Phase 1 (Domain Discovery):**
```
Q: What problem are we solving?
A: Patients want their records accessible in our app.

Q: What's the real problem?
A: Actually, physicians want to see records from other
   systems. Patients are secondary.

Q: Who needs to approve access to this data?
A: The patient (consent), the hospital (BAA), and
   the physician (medical necessity).
```

**Phase 3 (Constraints):**
```
Q: What can't we change?
A: The hospital's HL7 v2.x interface. It's 20 years old.

Q: What's the timeline?
A: 6 months, but hospital approval is 90 days.

Q: Who blocks this?
A: Hospital IT manager. Previous integration broke their system.
```

**The "correct" solution (REST API, real-time sync) is unshippable.**

**The shippable solution:**
- Batch file processing on hospital's terms
- Their approval cycle factored into timeline
- Build relationship with IT manager before technical work

### AI Decomposition

**Good boundaries:**
- "Parse HL7 v2.x ADT message into patient demographics object"
- "Generate FHIR Patient resource from internal patient model"
- "Write audit log entry for each data access with required HIPAA fields"

**Bad boundaries:**
- "Build the healthcare integration"
- "Handle HIPAA compliance"

---

## Example 3: Multi-Team Feature Rollout

**Scenario:** You're building a feature that requires changes from three teams: Backend, Mobile, and Data.

### Political Constraint Navigation

**The teams:**
- **Backend team:** Owns the API. Busy with their own roadmap.
- **Mobile team:** Ships every 2 weeks. Behind on bugs.
- **Data team:** New team. Proving themselves. Eager but inexperienced.

**The politics:**
- Backend team lead doesn't like being told what to do
- Mobile team is underwater, will resist new work
- Data team wants to use new technology (Kafka) that others don't trust

### Architect Thinking Applied

**Phase 3 (Constraint Mapping):**

```
Q: Who needs to approve this?
A: Each team lead, plus the director for cross-team work.

Q: Who has context vs. who has authority?
A:
   - Backend lead: Authority over API, context on system
   - Mobile lead: Authority over app, no context on backend changes
   - Data lead: Context on data flow, limited authority (new)
   - Director: Authority over all, limited context on details

Q: What past decisions are politically sensitive?
A: Last cross-team project blamed Backend when it failed.
   They're defensive now.

Q: What can't we change, even if it's "wrong"?
A: Mobile's 2-week release cycle. It's contractual with App Store.
```

**The "correct" technical solution:**
- Coordinated release across all three systems
- Shared schema owned by... someone?
- Feature flag for gradual rollout

**The shippable solution:**
- Backend API designed to be backwards compatible
- Mobile can release whenever (no coordination needed)
- Data team gets small scope to prove themselves
- Feature flag owned by Backend (they trust themselves)

### Systems Thinking for Dependencies

```
Dependency Map:

[Mobile App] --> [Backend API] --> [Database]
                      |
                      v
                [Data Pipeline] --> [Analytics]

Failure scenarios:
- Backend deploys first: Mobile shows errors (old client, new API)
- Mobile deploys first: Works but no new features
- Data deploys first: No data flowing yet
- Coordinated deploy: Single point of failure (one failure blocks all)

Better:
- Backend: Additive changes only, old endpoints stay
- Mobile: Feature flag client-side, enable when ready
- Data: Parallel pipeline, switch over when validated
```

### AI Decomposition for Cross-Team Work

**Task boundaries that respect team ownership:**

For Backend team:
- "Add new endpoint /v2/feature that returns X"
- "Add feature flag check to existing endpoint"

For Mobile team:
- "Add local feature flag for new feature UI"
- "Update API client to call v2 endpoint when flag enabled"

For Data team:
- "Create new data pipeline that reads from X, writes to Y"
- "Add validation that compares old pipeline to new"

**Human checkpoints:**
- Each team verifies their own work
- Integration test when all ready
- Director approves rollout

---

## Example 4: AI-Assisted Legacy Refactoring

**Scenario:** You have a 10,000-line monolithic file that needs refactoring. You want AI to help.

### Why "Refactor This" Fails

**Bad AI task:**
```
"Refactor legacy_system.py into clean modules"
```

**Why it fails:**
- No clear success criteria
- Unbounded scope
- No verification possible
- Context too large for AI to hold

### AI Decomposition Done Right

**Phase 4 (AI Decomposition Planning):**

**Step 1: Understand the system (human work)**
```
Q: What does this file actually do?
A: Handles user authentication, session management,
   and permission checking.

Q: What are the natural boundaries?
A:
   - Authentication (login, logout, password reset)
   - Session (create, validate, expire)
   - Permissions (check, grant, revoke)

Q: What are the dependencies between these?
A:
   - Permissions depends on Session (need valid session to check)
   - Session depends on Authentication (need login to create session)
   - All depend on database layer
```

**Step 2: Define bounded AI tasks**

Task 1: Extract authentication functions
```
Input: Lines 100-500 of legacy_system.py (authentication logic)
Output: auth.py with same interface, passing existing tests
Verification: All auth_test.py tests pass
```

Task 2: Extract session functions
```
Input: Lines 501-900 of legacy_system.py (session logic)
Output: session.py with same interface, passing existing tests
Verification: All session_test.py tests pass
```

Task 3: Extract permission functions
```
Input: Lines 901-1500 of legacy_system.py (permission logic)
Output: permissions.py with same interface, passing existing tests
Verification: All permission_test.py tests pass
```

**Step 3: Human checkpoints**

After each extraction:
- [ ] Tests still pass
- [ ] Interface unchanged
- [ ] No subtle behavior changes
- [ ] Original file still works with extracted module

**Step 4: Integration (human work)**
- Update imports across codebase
- Verify full system tests pass
- Remove duplicated code from original file

### Good vs Bad Task Examples

**Bad:**
- "Make the code better"
- "Add proper error handling"
- "Refactor for readability"

**Good:**
- "Extract the `authenticate_user` function and its helpers (lines 100-200) into `auth.py`, maintaining the existing function signature"
- "Add try/except around the database call on line 150, catching `DatabaseError` and re-raising as `AuthenticationError`"
- "Rename the variable `x` on line 175 to `user_session` and update all references in this function"

### Verification Strategy

```
For each AI task:
1. Run existing tests (should pass before)
2. Apply AI change
3. Run existing tests (should still pass)
4. Run new tests for extracted module
5. Human review for subtle issues:
   - Did AI change behavior, not just structure?
   - Are there side effects not covered by tests?
   - Does the change fit the overall architecture?
```

---

## Example 5: The "Simple" Feature Request

**Scenario:** Product manager says "Just add a delete button to user profiles."

### Why "Simple" Is Dangerous

**Surface request:** Add a delete button.

**Domain questions an architect asks:**

1. "What does 'delete' mean?"
   - Soft delete? Hard delete?
   - Delete user? Delete profile? Delete account?
   - What about their content?

2. "What regulations apply?"
   - GDPR right to erasure?
   - California CCPA?
   - Data retention requirements?

3. "What happens to related data?"
   - User's posts? Comments? Messages?
   - Payment history? Invoices?
   - Audit logs?

### Systems Thinking

```
Q: What depends on User?

[User Profile]
    ^
    |-- [Posts] (has user_id foreign key)
    |-- [Comments] (has user_id foreign key)
    |-- [Messages] (has sender_id and recipient_id)
    |-- [Orders] (has user_id, but also legal record)
    |-- [Payment Methods] (PCI compliance)
    |-- [Audit Logs] (compliance - can't delete)
    |-- [Analytics Events] (has user_id)
```

**Cascading effects:**
- Delete user = orphan posts, comments, messages
- Delete payment methods = might need to keep for tax
- Delete orders = legal and accounting issues
- Delete audit logs = compliance violation

### Constraints

**Technical:**
- Foreign key constraints prevent simple delete
- Analytics pipeline expects user_id to exist

**Business:**
- Legal requires 7-year retention for financial data
- Support needs to access deleted user history for disputes

**Regulatory:**
- GDPR: Must delete within 30 days of request
- Tax law: Must retain invoices for 7 years

**The "correct" solution (hard delete everything) is illegal.**

### The Shippable Solution

```
Account Deletion Architecture:

1. Immediate (user-facing):
   - Mark account as "deleted"
   - Remove from search/listings
   - Anonymize public content
   - Revoke access tokens

2. 30-day window:
   - User can recover account
   - Data retained but inaccessible

3. After 30 days:
   - Delete PII
   - Retain financial records (anonymized)
   - Retain audit logs (anonymized)
   - Delete analytics user_id mapping

4. Never delete:
   - Audit logs of deletion itself
   - Financial records (7 years)
```

### AI Decomposition

**Good boundaries:**
- "Add `deleted_at` timestamp column to users table"
- "Update user query to exclude soft-deleted users"
- "Create anonymization function for user profile fields"
- "Add deletion request to audit log"

**Bad boundaries:**
- "Implement user deletion"
- "Handle GDPR compliance"

---

## Example 6: The Framework Migration Temptation

**Scenario:** Your team has used React for 3 years. A new framework (call it "HypeJS") is trending. Benchmarks show it's 20% faster. Twitter loves it. Your junior developers want to migrate.

### The Optimization Argument

"HypeJS is faster. Modern. Growing community. We should migrate."

### The Loyalty Analysis

**Commitment inventory:**
- 3 years of React investment
- Team expertise built in React patterns
- Component library tailored to React
- All tutorials/docs written for React
- Third-party integrations assume React

**What migration actually costs:**
- 6+ months of rewriting (not building features)
- Learning curve productivity loss
- Risk of HypeJS being abandoned (new frameworks die)
- Loss of accumulated optimization knowledge
- All past architectural decisions need re-evaluation

**The loyalty questions:**
- "Are we solving a problem or chasing a trend?"
- "Would we consider this if it weren't popular right now?"
- "Have we invested enough in making React work?"
- "What's the REAL performance problem? (Hint: probably not React)"

### The Architect's Response

**Instead of migrating:**
1. Profile actual performance issues (they're probably in YOUR code)
2. Apply React-specific optimizations (memoization, code splitting)
3. Upgrade React version for any framework-level gains
4. Revisit in 2 years when HypeJS has proven longevity

**The loyal answer:**
"We committed to React. React is not our problem. Our implementation is. Let's fix our code, not blame our framework."

### When Migration IS Justified

- React is actually end-of-life (not just "old")
- Your specific use case has proven React incompatible
- You've invested significantly in optimization and hit real walls
- You've communicated timeline to all stakeholders
- New framework has 3+ years of stability (not trending, proven)

### The Pattern

Most framework migrations are betrayals dressed as optimizations.

The loyal architect asks: "Have we truly exhausted our commitment, or are we just bored?"

---

## Example 7: AI-First Development for a Legal Document Assistant

**Scenario:** You're building a legal document review app. Users upload contracts, the AI extracts key terms, flags risks, and suggests edits.

### Technology Discovery

**The questions an architect asks:**

1. "Could performance-critical paths benefit from Rust/WASM?"
   - PDF parsing: Yes, CPU-intensive
   - Text extraction: Maybe, depends on volume
   - AI inference: Cloud API, not applicable
   - Decision: Use Rust via WASM for PDF parsing

2. "Would multi-agent orchestration simplify this?"
   - claude-flow for parallel clause analysis: Yes
   - Each clause type can be analyzed independently
   - Decision: Use claude-flow for parallel agents

3. "Does this need persistent memory?"
   - Cross-session memory for user preferences: Yes
   - Remember previous contract patterns: Yes
   - Decision: Use agentdb for user context

### Edge AI Evaluation

**The questions:**

1. "Could edge LLMs reduce latency or protect privacy?"
   - Legal documents are highly confidential
   - Some clients prohibit cloud processing
   - Basic extraction could run locally
   - Complex reasoning still needs cloud

2. "What should work offline?"
   - Document preview: Yes
   - Basic text extraction: Yes
   - Risk flagging: Hybrid (local for common, cloud for complex)
   - Suggestions: Cloud required

**Architecture decision:**

```
Hybrid Architecture:

[Document] → [Local: WASM PDF Parser] → [Local: Phi-3 for initial extraction]
                                                    ↓
                    [Privacy check: Contains PII? High confidentiality?]
                           ↓                              ↓
                        [Local]                        [Cloud]
                    (Gemma 2B for                (Claude for complex
                     basic tagging)              reasoning/suggestions)
```

### Self-Learning Capabilities

**The questions:**

1. "Could this app learn from user behavior?"
   - Users correct AI extractions → train on corrections
   - Users accept/reject suggestions → learn preferences
   - Users edit AI drafts → improve future drafts

2. "What feedback loops make sense?"
   - **Explicit:** "Was this extraction correct?" thumbs up/down
   - **Implicit:** Did user edit the suggestion? Track edit distance
   - **Domain:** This client's contracts use specific terminology

**Self-learning architecture:**

```
Feedback Loop:

[AI Suggestion] → [User Action]
                       ↓
              ┌───────────────────┐
              │ Accept unchanged  │ → High confidence signal
              │ Minor edit        │ → Track pattern
              │ Major rewrite     │ → Negative signal, learn from correction
              │ Delete/ignore     │ → Strong negative signal
              └───────────────────┘
                       ↓
         [Aggregate feedback per user/domain]
                       ↓
         [Fine-tune prompts or model adapters]
```

### User-Facing Skills

**The questions:**

1. "Would users benefit from skills that enhance AI outputs?"
   - `/explain-clause` - Explain legal jargon in plain English
   - `/compare-versions` - Show differences between contract versions
   - `/risk-summary` - Generate executive summary of risks
   - `/suggest-negotiation` - Suggest negotiation points

2. "What transformation skills help users?"
   - `/export-to-word` - Format AI analysis as Word document
   - `/create-checklist` - Turn risks into action checklist
   - `/draft-response` - Draft response to counterparty

**Skill architecture:**

```
User-Facing Skills:

/explain-clause <clause>
  Input: Selected clause text
  Process: Simplify legal language, add examples
  Output: Plain English explanation with key implications

/risk-summary
  Input: Full contract analysis
  Process: Aggregate risks, prioritize by severity
  Output: Executive summary with top 5 risks, actions needed

/draft-response <risk>
  Input: Identified risk
  Process: Generate negotiation language
  Output: Suggested contract edit or email response
```

### Continuous Verification

**The questions:**

1. "What automated tests verify each feature?"
   - Unit tests: Extraction accuracy on known documents
   - Integration tests: Full pipeline from upload to analysis
   - Regression tests: Previous contracts should still work
   - Visual tests: UI renders correctly

2. "How do we test AI behavior?"
   - Golden set: 50 contracts with human-verified extractions
   - Accuracy threshold: 95% extraction accuracy
   - Regression: New models must match or exceed baseline

**Testing architecture:**

```
Continuous Verification Pipeline:

[Code Change] → [Pre-commit: Unit tests] → [CI: Integration tests]
                                                    ↓
                                          [Golden set evaluation]
                                                    ↓
                                    [Accuracy > 95%?] ──No──→ [Block deploy]
                                           ↓ Yes
                                    [Canary deploy to 5%]
                                           ↓
                                    [Monitor error rates 24h]
                                           ↓
                                    [Full rollout or rollback]
```

### Project-Specific SKILLS.md

For this legal document app, create a SKILLS.md:

```markdown
# Legal Document Assistant - Project Skills

## Domain Vocabulary
- "Clause" = Numbered paragraph in contract
- "Red flag" = High-risk term requiring attention
- "Boilerplate" = Standard language, low risk
- "Material term" = Key business term (price, dates, scope)

## AI Patterns
- Always use claude-flow for clause analysis
- Phi-3 for initial extraction, Claude for reasoning
- Minimum confidence threshold: 0.8 for auto-accept

## Testing Requirements
- All extractions must be verified against golden set
- New clause types require 10+ examples before deployment
- User feedback must be reviewed weekly

## Architectural Decisions
- Hybrid local/cloud for privacy flexibility
- Self-learning enabled, but requires 100+ signals before adaptation
- Skills exposed to users: /explain, /risk-summary, /draft-response
```

### The Complete Picture

**5th Pillar applied:**

| Area | Decision | Reasoning |
|------|----------|-----------|
| **Performance** | Rust/WASM for PDF parsing | CPU-intensive, latency-sensitive |
| **Multi-agent** | claude-flow for parallel clause analysis | Independent tasks, faster processing |
| **Edge AI** | Phi-3/Gemma for local extraction | Privacy, offline capability |
| **Cloud AI** | Claude for complex reasoning | Accuracy critical for legal |
| **Self-learning** | Feedback loops on user actions | Improve over time, per-user/domain |
| **User skills** | /explain, /risk-summary, /draft-response | Help users act on AI outputs |
| **Testing** | Golden set + accuracy thresholds | AI behavior must be verifiable |

**The lesson:** AI-First Development is about evaluating which modern patterns genuinely benefit the project, not adopting everything because it's new.

---

## Pattern Summary

Across all examples, the architect mindset:

1. **Maintains loyalty to architectural commitments**
2. **Asks domain questions before technical ones**
3. **Maps systems and dependencies before changes**
4. **Surfaces constraints before proposing solutions**
5. **Defines bounded AI tasks with verification**
6. **Plans human checkpoints for judgment calls**
7. **Evaluates AI-first patterns critically** - edge AI, self-learning, user skills
8. **Plans continuous verification** - automated testing for every feature

The "simple" solution is rarely shippable. The shippable solution is rarely simple.

**And the "better" solution that betrays existing commitments is often not better at all.**

**Modern tools are opportunities, not requirements.** Evaluate genuinely, adopt selectively.
