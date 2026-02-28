# Agentic UX Design - Checklists and Worksheets

This document provides practical checklists, worksheets, and audit tools for implementing relationship-centric design.

## Relationship UX Audit Checklist

Use this checklist to evaluate existing interfaces or plan new ones.

### 1. Memory & Context Awareness

**Current State Assessment:**
- [ ] System remembers user preferences (basic: theme, language)
- [ ] System tracks user behavior patterns
- [ ] System maintains context across sessions
- [ ] System recognizes user's emotional state (frustration, satisfaction)
- [ ] System understands temporal patterns (time of day, day of week)
- [ ] System learns from user's actual behavior (not just stated preferences)
- [ ] System maintains awareness of user's ongoing goals
- [ ] System provides cross-device context continuity

**Gap Analysis:**
- [ ] What user context is currently lost between sessions?
- [ ] What behavioral patterns would be valuable to track?
- [ ] What temporal patterns affect user behavior?
- [ ] What emotional states impact user experience?

**Implementation Priority:**
- [ ] High: Essential context that users complain about losing
- [ ] Medium: Patterns that would improve experience noticeably
- [ ] Low: Nice-to-have personalization

### 2. Trust Evolution Architecture

**Current State Assessment:**
- [ ] System explains its reasoning for suggestions/decisions
- [ ] System shows confidence levels
- [ ] System allows users to adjust autonomy levels
- [ ] System has different trust stages (transparency → selective → autonomous)
- [ ] System provides undo/correction mechanisms
- [ ] System learns from user corrections
- [ ] System has trust recovery protocols for mistakes
- [ ] System escalates uncertain decisions appropriately

**Gap Analysis:**
- [ ] How transparent is system reasoning currently?
- [ ] Can users control autonomy levels?
- [ ] What happens when system makes mistakes?
- [ ] How does trust evolve over time (or does it)?

**Trust Stage Design:**
- [ ] Define what should always be transparent (high-stakes, uncertain)
- [ ] Define what can become autonomous (routine, high-confidence)
- [ ] Design transition criteria between stages
- [ ] Create user controls for trust progression

### 3. Relationship-Centric Metrics

**Current Metrics Assessment:**
- [ ] We measure: session duration, page views, conversion rates (traditional)
- [ ] We measure: relationship quality indicators
- [ ] We measure: compounding value over time
- [ ] We measure: context accuracy
- [ ] We measure: democratic alignment / ethical boundaries
- [ ] We track metrics longitudinally (weeks/months, not just sessions)
- [ ] We compare Month 1 vs. Month 6 experience quality

**Gap Analysis:**
- [ ] What traditional metrics are misleading for our use case?
- [ ] What relationship metrics would better indicate success?
- [ ] How do we measure improvement over time?
- [ ] What longitudinal tracking do we need?

**New Metrics to Implement:**
- [ ] Relationship Quality: Trust scores, delegation comfort
- [ ] Compounding Value: Time-to-success improvement, capability expansion
- [ ] Context Accuracy: Intent prediction, preference matching
- [ ] Democratic Alignment: Value alignment, boundary respect

### 4. Collaborative Planning Patterns

**Current State Assessment:**
- [ ] System understands user's ongoing goals
- [ ] System provides proactive suggestions (not just reactive)
- [ ] System and user co-create plans together
- [ ] System adapts interface based on usage patterns
- [ ] System learns from user's path choices
- [ ] System generates alternative paths dynamically
- [ ] System recognizes when user is stuck/frustrated
- [ ] System offers help at appropriate moments (not intrusive)

**Gap Analysis:**
- [ ] How well does system understand user goals?
- [ ] Is system proactive or only reactive?
- [ ] Do users and system collaborate on planning?
- [ ] Does interface adapt to individual users?

**Collaborative Features to Add:**
- [ ] Goal capture and tracking interface
- [ ] Proactive suggestion engine
- [ ] Co-creation workspace (human + AI contributions)
- [ ] Adaptive UI elements
- [ ] Learning feedback mechanisms

### 5. Privacy & Control

**Current State Assessment:**
- [ ] Users can see what system remembers about them
- [ ] Users can control what gets remembered
- [ ] Users can forget/delete specific memories
- [ ] Users can export their data
- [ ] System has clear retention policies
- [ ] System scrubs PII appropriately
- [ ] System respects user boundaries explicitly
- [ ] System explains data usage transparently

**Gap Analysis:**
- [ ] What memory controls do users currently have?
- [ ] Can users see and manage what's remembered?
- [ ] Are privacy policies clear and actionable?
- [ ] Do users understand data retention?

**Privacy Controls to Implement:**
- [ ] Memory visualization interface
- [ ] Granular forgetting controls
- [ ] Data export functionality
- [ ] Clear retention policy UI
- [ ] Boundary setting interface

## Memory & Data Contracts Sprint Guide

A structured 3-day sprint to design your memory architecture.

### Day 1: Discovery & Mapping

**Morning: Behavioral Inventory (3 hours)**

1. **List all user interactions** (30 min)
   - What actions can users take?
   - What choices do users make?
   - What paths do users follow?

2. **Identify valuable patterns** (60 min)
   - Which patterns indicate user goals?
   - Which patterns indicate frustration?
   - Which patterns indicate satisfaction?
   - Which patterns evolve over time?

3. **Map temporal dimensions** (30 min)
   - What changes by time of day?
   - What changes by day of week?
   - What changes by season/context?

4. **Define context signals** (60 min)
   - What indicates user's current state?
   - What indicates user's goals?
   - What indicates user's constraints?

**Afternoon: Privacy & Retention Design (3 hours)**

1. **Categorize memory types** (45 min)
   - Behavioral patterns
   - Explicit preferences
   - Ongoing goals
   - Historical trends
   - Sensitive information

2. **Define retention policies** (45 min)
   - What must be kept?
   - What should expire?
   - What should users control?
   - What requires special handling?

3. **Design user controls** (90 min)
   - Memory visualization interface
   - Forgetting controls
   - Export functionality
   - Boundary settings

**Day 1 Deliverable:** Memory inventory and privacy framework

### Day 2: Architecture Design

**Morning: Data Structures (3 hours)**

1. **Design event schema** (60 min)
   ```
   What does a behavioral event look like?
   - Timestamp
   - Event type
   - Context (user state, environment)
   - Outcome
   ```

2. **Design pattern schema** (60 min)
   ```
   What does a detected pattern look like?
   - Pattern type
   - Confidence level
   - Supporting evidence
   - Temporal scope
   ```

3. **Design memory graph** (60 min)
   ```
   How do memories connect?
   - User identity
   - Behavioral patterns
   - Ongoing goals
   - Trust level
   - Relationship timeline
   ```

**Afternoon: Implementation Planning (3 hours)**

1. **Storage strategy** (45 min)
   - Hot memory (recent, always loaded)
   - Warm memory (patterns, load on demand)
   - Cold memory (historical, analysis only)

2. **Pattern detection algorithms** (90 min)
   - Frustration indicators
   - Success patterns
   - Temporal patterns
   - Preference evolution

3. **Privacy implementation** (45 min)
   - PII scrubbing
   - Encryption
   - Access controls
   - Audit logging

**Day 2 Deliverable:** Complete memory architecture specification

### Day 3: Metrics & Testing

**Morning: Metrics Design (3 hours)**

1. **Select relationship metrics** (45 min)
   Choose 2-3 from each category:
   - Relationship Quality
   - Compounding Value
   - Context Accuracy
   - Democratic Alignment

2. **Define measurement methods** (90 min)
   For each metric:
   - How to calculate?
   - What data needed?
   - What indicates success?
   - What indicates problems?

3. **Design metric visualization** (45 min)
   - Dashboard layout
   - Trend displays
   - Alert thresholds
   - User-facing vs. internal metrics

**Afternoon: Testing Strategy (3 hours)**

1. **Longitudinal test plan** (60 min)
   - Week 1 tests (onboarding, transparency)
   - Month 1 tests (pattern learning, trust evolution)
   - Month 3 tests (compounding value, autonomy)
   - Month 6 tests (relationship maturity)

2. **Success criteria** (60 min)
   - Week 1: Can system explain reasoning? Do users understand?
   - Month 1: Are patterns being detected? Is trust evolving?
   - Month 3: Is experience improving? Are metrics trending positive?
   - Month 6: Is compounding value evident? Are users delegating comfortably?

3. **Risk mitigation** (60 min)
   - Privacy risks and mitigations
   - Trust violation risks and recovery protocols
   - Metric degradation and intervention triggers

**Day 3 Deliverable:** Metrics specification and longitudinal test plan

## Trust Evolution Design Worksheet

Use this worksheet to design trust evolution for your specific domain.

### Step 1: Define Transparency Requirements

**High-stakes decisions (ALWAYS transparent):**
- Decision: _______________________________________________
- Why high-stakes: ________________________________________
- What to explain: _________________________________________

**Uncertain decisions (ALWAYS show confidence):**
- Decision: _______________________________________________
- Uncertainty source: ______________________________________
- Confidence threshold: ____________________________________

**Routine decisions (CAN become autonomous):**
- Decision: _______________________________________________
- Why routine: ____________________________________________
- Autonomy criteria: _______________________________________

### Step 2: Map Trust Stages

**Stage 1: Transparency Phase (Weeks 1-X)**

User needs to:
- [ ] Understand system reasoning
- [ ] See confidence levels
- [ ] Learn system capabilities
- [ ] Build initial trust

System should:
- [ ] Explain all suggestions
- [ ] Show data sources
- [ ] Display alternatives considered
- [ ] Highlight uncertainties

Exit criteria:
- [ ] User accepts suggestions >60%
- [ ] User requests explanations <40%
- [ ] User indicates comfort with system

**Stage 2: Selective Disclosure Phase (Weeks X-Y)**

User needs to:
- [ ] See reasoning for important decisions
- [ ] Trust system for routine actions
- [ ] Understand when system is uncertain

System should:
- [ ] Full transparency for high-stakes decisions
- [ ] Confidence indicators for medium-stakes
- [ ] Quiet execution for routine tasks
- [ ] Clear escalation for uncertainties

Exit criteria:
- [ ] User accepts suggestions >75%
- [ ] User comfortable with routine autonomy
- [ ] User delegates specific categories

**Stage 3: Autonomous Action Phase (Month Y+)**

User needs to:
- [ ] Trust system to act independently
- [ ] Easy correction mechanisms
- [ ] Transparency on demand
- [ ] Control over autonomy levels

System should:
- [ ] Act autonomously for delegated categories
- [ ] Subtle notifications for actions taken
- [ ] Escalate uncertainties appropriately
- [ ] Learn from corrections

Maintain trust:
- [ ] Consistent with user values
- [ ] Clear undo mechanisms
- [ ] Explain on demand
- [ ] Adjust autonomy based on feedback

### Step 3: Design Trust Indicators

**Visual trust indicators:**
- Confidence meter: How to display? ____________________________
- Reasoning toggle: Where to place? ____________________________
- Autonomy controls: How to adjust? ____________________________
- Trust score: Show to user? ____________________________

**Trust evolution feedback:**
- How does user know trust is evolving? ________________________
- How does user see autonomy increasing? ______________________
- How does user control progression? __________________________

### Step 4: Trust Recovery Protocol

**When system makes mistake:**

1. **Acknowledge** (within X hours/days): ______________________
   Template: "I made a suboptimal decision about [X] because [Y]"

2. **Explain** what went wrong: ________________________________
   - Wrong assumption: _______________________________________
   - What system learned: ____________________________________

3. **Offer corrections:**
   - Option A: _______________________________________________
   - Option B: _______________________________________________
   - User's choice: __________________________________________

4. **Adjust trust level:**
   - Reduce autonomy in category: ____________________________
   - For duration: ___________________________________________
   - Re-evaluation criteria: _________________________________

5. **Update model:**
   - Pattern learned: ________________________________________
   - New guardrails: _________________________________________

## Relationship Metrics Implementation Worksheet

### Select Your Metrics (Choose 2-3 per category)

**Relationship Quality Metrics:**

Option 1: Trust Score
- [ ] Calculation method: _____________________________________
- [ ] Data sources: ___________________________________________
- [ ] Success threshold: ______________________________________

Option 2: Delegation Comfort
- [ ] Measurement: ____________________________________________
- [ ] Categories to track: ____________________________________
- [ ] Target: _________________________________________________

Option 3: Override Rate
- [ ] What counts as override: ________________________________
- [ ] Acceptable rate: ________________________________________
- [ ] Alert threshold: ________________________________________

**Compounding Value Metrics:**

Option 1: Time-to-Success Improvement
- [ ] Baseline measurement: ___________________________________
- [ ] Current measurement: ____________________________________
- [ ] Improvement rate: _______________________________________

Option 2: Capability Expansion
- [ ] Features used at baseline: _____________________________
- [ ] Features used currently: ________________________________
- [ ] Adoption rate: __________________________________________

Option 3: Outcome Quality
- [ ] Quality measurement: ____________________________________
- [ ] Baseline vs. current: ___________________________________
- [ ] Improvement trend: ______________________________________

**Context Accuracy Metrics:**

Option 1: Intent Prediction Accuracy
- [ ] How to measure intent: __________________________________
- [ ] Prediction vs. actual: __________________________________
- [ ] Target accuracy: ________________________________________

Option 2: Preference Matching
- [ ] Recommendation acceptance rate: _________________________
- [ ] Top choice hit rate: ____________________________________
- [ ] Target: _________________________________________________

Option 3: Timing Accuracy
- [ ] Suggestion timing evaluation: __________________________
- [ ] User feedback on timing: ________________________________
- [ ] Target: _________________________________________________

**Democratic Alignment Metrics:**

Option 1: Value Alignment Score
- [ ] Constitution/values defined: ___________________________
- [ ] Violation detection: ____________________________________
- [ ] Target: _________________________________________________

Option 2: Boundary Respect
- [ ] Boundaries defined: _____________________________________
- [ ] Violation tracking: _____________________________________
- [ ] Target: _________________________________________________

Option 3: Fairness Metric
- [ ] Segments to compare: ____________________________________
- [ ] Fairness calculation: ___________________________________
- [ ] Target: _________________________________________________

### Longitudinal Tracking Plan

**Week 1 Baseline:**
- Metrics to capture: _________________________________________
- Measurement method: __________________________________________
- Baseline targets: ___________________________________________

**Month 1 Check-in:**
- Expected improvements: ______________________________________
- Red flags to watch: _________________________________________
- Intervention triggers: ______________________________________

**Month 3 Assessment:**
- Compounding value emerging: _________________________________
- Trust evolution complete: ___________________________________
- Feature adoption: ___________________________________________

**Month 6 Maturity:**
- Relationship quality: _______________________________________
- Compounding factor: _________________________________________
- Success indicators: _________________________________________

## Quick Start: Minimum Viable Relationship (MVR)

Can't do everything at once? Start here.

### Week 1: Basic Memory

**Implement:**
- [ ] Store last 7 days of user interactions
- [ ] Detect 2-3 simple behavioral patterns (e.g., repeat searches, abandoned tasks)
- [ ] Show "Last time you..." context on relevant screens

**Measure:**
- [ ] Do users notice the context?
- [ ] Do users find it helpful?

### Week 2-4: Trust Indicators

**Implement:**
- [ ] Add confidence indicators to suggestions
- [ ] "Explain this" button for system decisions
- [ ] Simple reasoning display

**Measure:**
- [ ] How often do users click "Explain this"?
- [ ] Does explanation increase acceptance?

### Month 2: Longitudinal Metrics

**Implement:**
- [ ] Track 1 relationship quality metric
- [ ] Track 1 compounding value metric
- [ ] Compare Week 1 vs. Week 8

**Measure:**
- [ ] Is experience improving over time?
- [ ] Are metrics trending positive?

### Month 3: Basic Autonomy

**Implement:**
- [ ] Identify 1-2 routine tasks
- [ ] Offer autonomous execution (with easy undo)
- [ ] Track delegation comfort

**Measure:**
- [ ] Do users accept autonomous actions?
- [ ] Is trust evolving naturally?

### Month 6: Full Relationship Architecture

**Implement:**
- [ ] Complete memory architecture
- [ ] Full trust evolution (transparency → selective → autonomous)
- [ ] Comprehensive relationship metrics
- [ ] Collaborative planning features

**Measure:**
- [ ] Relationship quality scores
- [ ] Compounding value evident
- [ ] Context accuracy high
- [ ] User satisfaction

## Red Flags: When Relationship Design Is Going Wrong

### Memory Issues

**Red Flag:** Users complain "system doesn't remember"
- [ ] Check: Are patterns being detected?
- [ ] Fix: Improve pattern detection algorithms

**Red Flag:** Users complain "system remembers too much"
- [ ] Check: Are privacy controls clear and accessible?
- [ ] Fix: Add memory visualization and forgetting controls

**Red Flag:** Context is wrong
- [ ] Check: Is pattern detection accuracy measured?
- [ ] Fix: Improve context signals and learning algorithms

### Trust Issues

**Red Flag:** Users never progress beyond transparency phase
- [ ] Check: Is system reasoning clear?
- [ ] Fix: Improve explanation quality

**Red Flag:** Users don't use autonomous features
- [ ] Check: Is delegation comfortable?
- [ ] Fix: Reduce autonomy scope, improve trust recovery

**Red Flag:** Trust violations
- [ ] Check: Do we have recovery protocols?
- [ ] Fix: Implement transparent recovery, adjust trust level

### Metric Issues

**Red Flag:** Traditional metrics up, relationship metrics down
- [ ] Check: Are we optimizing for wrong things?
- [ ] Fix: Align incentives with relationship health

**Red Flag:** No compounding value
- [ ] Check: Is system learning from user behavior?
- [ ] Fix: Improve learning algorithms, pattern detection

**Red Flag:** Context accuracy declining
- [ ] Check: Is user behavior changing?
- [ ] Fix: Adapt model, update pattern detection

## Summary: Relationship Design Readiness

Use this final checklist to assess readiness:

### Foundation
- [ ] We understand the difference between screens and relationships
- [ ] We've identified user's ongoing goals (not just immediate tasks)
- [ ] We've mapped behavioral patterns that matter
- [ ] We've designed for privacy and user control

### Memory Architecture
- [ ] Event streaming or behavioral tracking implemented
- [ ] Pattern detection algorithms defined
- [ ] Privacy controls and PII handling designed
- [ ] Memory visualization planned

### Trust Evolution
- [ ] Three trust stages designed for our domain
- [ ] Transparency requirements defined
- [ ] Autonomy criteria established
- [ ] Trust recovery protocols created

### Relationship Metrics
- [ ] Selected 2-3 metrics per category
- [ ] Longitudinal tracking plan (Week 1, Month 1, 3, 6)
- [ ] Success thresholds defined
- [ ] Metric visualization designed

### Collaborative Planning
- [ ] Goal capture interface designed
- [ ] Proactive suggestion logic defined
- [ ] Adaptive UI patterns planned
- [ ] Learning feedback mechanisms created

### Ready to build?
- [ ] Team understands relationship-centric paradigm
- [ ] Product roadmap includes longitudinal success criteria
- [ ] Testing plan includes relationship development phases
- [ ] Privacy and ethics frameworks established

**If all checked: You're ready to build agentic, relationship-centric experiences!**

See [EXAMPLES.md](EXAMPLES.md) for domain-specific implementations.
See [REFERENCE.md](REFERENCE.md) for technical implementation details.
