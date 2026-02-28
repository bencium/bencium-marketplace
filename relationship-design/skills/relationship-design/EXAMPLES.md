# Agentic UX Design - Real-World Examples

This document provides concrete examples of relationship-centric design in action.

## Example 1: EU B2B Relationship Cockpit (Automotive Service Networks)

### Context
European automotive aftermarket/service networks facing speed and cost pressure from China. Europe's edge: trusted, service-centric relationships.

### The Traditional Approach (Screen-Centric)
- Static dashboard showing tickets, parts inventory, warranty claims
- User logs in → checks metrics → responds to alerts → logs out
- Next day: same process, system treats each session independently
- No learning, no adaptation, no relationship building

### The Agentic Approach (Relationship-Centric)

**Memory-Aware Interface**
```
Interface shows: "Yesterday you spent 20 min frustrated searching
for hydraulic pump inventory across 3 regions. Found pattern:
your Wednesday searches are 3× longer than other days.
Here are the parts you typically need on Wednesdays, pre-loaded."

Features:
- Emotional state indicators (frustration detection)
- Contextual suggestions timeline (weekly patterns)
- Dynamic preference evolution (learns search behavior)
```

**Trust Evolution Built-In**
- **Week 1 (Transparency):** System explains every suggestion: "Recommending part X because similar vehicles in your region needed it after this symptom, 78% match rate"
- **Month 2 (Selective Disclosure):** Shows reasoning only for high-stakes decisions (expensive parts, warranty issues)
- **Month 6 (Autonomy):** Quietly pre-orders common parts for predictable service patterns, just notifies user

**Agentic Goal Alignment**
System understands real goals:
- Not just "find parts" but "reduce MTTR (Mean Time To Repair)"
- Not just "process tickets" but "improve first-time-fix rate"
- Not just "manage inventory" but "optimize cash flow while preventing stockouts"

System constructs custom paths:
- For urgent repairs: direct paths to fastest solutions
- For training mode: shows educational context
- For cost optimization: suggests alternatives with trade-off analysis

**New Metrics Dashboard**
Instead of vanity metrics, shows:
- **Relationship Quality:** Trust score 8.2/10 (↑0.4 from last month), user delegates 64% of routine decisions
- **Compounding Value:** MTTR decreased 22% since onboarding (Week 1: 4.2 hours → Month 6: 3.3 hours)
- **Context Accuracy:** System correctly predicted 87% of your part needs this week
- **Democratic Alignment:** All autonomous actions followed EU data protection and safety guidelines

### Technical Implementation Sketch

```typescript
// Memory Architecture
interface UserRelationshipContext {
  behavioralPatterns: {
    searchFrustrationIndicators: {
      timeSpent: number;
      repeatedQueries: string[];
      weekdayPattern: Map<string, number>;
    };
    decisionPatterns: {
      priceThreshold: number; // evolves over time
      preferredSuppliers: string[]; // learns from choices
      urgencyIndicators: string[]; // context signals
    };
  };

  trustLevel: {
    stage: 'transparency' | 'selective' | 'autonomous';
    delegationComfort: number; // 0-100
    autonomousCategories: string[]; // what user trusts system to handle
    lastTrustCheckpoint: Date;
  };

  ongoingGoals: {
    primaryObjective: 'reduce_mttr' | 'optimize_costs' | 'improve_first_fix';
    constraints: string[];
    progressMetrics: {
      baseline: number;
      current: number;
      trend: 'improving' | 'stable' | 'declining';
    };
  };
}

// Proactive Nudging Example
function generateContextualSuggestion(
  context: UserRelationshipContext,
  currentSituation: ServiceTicket
): Suggestion {
  // System recognizes pattern: Wednesday + hydraulic issues
  if (isWednesday() && currentSituation.involves('hydraulic')) {
    const historicalPattern = context.behavioralPatterns
      .searchFrustrationIndicators.weekdayPattern.get('Wednesday');

    return {
      message: "Based on 8 similar Wednesday cases, here's what you typically need...",
      suggestions: preloadCommonParts(historicalPattern),
      confidence: 0.87,
      reasoning: context.trustLevel.stage === 'transparency'
        ? "Show full historical analysis"
        : "Hide reasoning, show confidence only"
    };
  }
}
```

## Example 2: Memory-Aware Content Discovery (Streaming Service)

### Traditional Approach
- User searches for "sci-fi" for 20 minutes
- Finds nothing satisfying
- Closes app
- Next day: same generic recommendations, no awareness of yesterday's frustration

### Agentic Approach

**Memory-Aware Interface**
```
"Yesterday you spent 20 min frustrated searching for sci-fi.
Noticed you skipped 14 action-heavy titles but paused on
philosophical/cerebral ones. Found these new releases that
match your mood pattern: [Arrival, Solaris, Annihilation]"
```

**Trust Evolution**
- **Early:** Explains every recommendation: "Suggesting Arrival because 87% of users who liked Contact also enjoyed this, and you watched Contact 3× last year"
- **Later:** Shows recommendations with simple confidence indicator
- **Mature:** Creates personalized category: "Cerebral Sci-Fi You'll Actually Finish" (learns completion patterns)

**Relationship Metrics**
- Time to find satisfying content: Week 1: 18 min → Month 3: 4 min (78% improvement)
- Discovery satisfaction: 8.4/10 (up from 5.2/10 at onboarding)
- Autonomous playlist acceptance rate: 71% (users play without previewing)

## Example 3: Collaborative Planning Assistant (Project Management)

### Traditional Approach
- User creates tasks manually
- System displays Gantt chart
- No understanding of user's working style, energy patterns, or goal priority evolution

### Agentic Approach

**Goal Continuity**
```
System maintains awareness:
"Your Q2 goal: ship MVP by June 30.
Detected: 3 days behind schedule since design revisions.
Morning energy pattern: you do best creative work 8-10am.
Suggestion: block tomorrow 8-10am for design finalization (uninterrupted)."
```

**Collaborative Planning Pattern**
Human: "Need to add user authentication"
System: "I see 3 approaches:
1. OAuth (2 day setup, best for scale) - matches your long-term goals
2. Simple email/password (4 hour setup) - MVP-ready
3. Magic link (8 hours, good UX) - middle ground

Based on your 'ship by June 30' goal and current 3-day delay,
I suggest option 2 now, plan migration to option 1 in July.
Your past decisions favored 'working now > perfect later' under time pressure."

**Adaptive Interface**
- Week 1: Full task board, all options visible
- Month 2: System learned user rarely uses Gantt view, auto-hides it
- Month 3: Surfaces "energy-matched tasks" automatically based on time of day

**Trust Evolution**
- **Transparency Phase:** Shows reasoning for all scheduling suggestions
- **Selective Phase:** Auto-schedules routine tasks, asks about strategic decisions
- **Autonomous Phase:** Manages entire routine workflow, only escalates conflicts/uncertainties

**Relationship Metrics**
- Project completion rate: +34% since onboarding
- User-reported "feeling overwhelmed": decreased from 7/10 to 3/10
- System-suggested schedules accepted: 82%
- Planning time reduced: 45 min/week → 12 min/week

## Example 4: Trust-Evolving Financial Advisor

### Traditional Approach
- User logs in to see portfolio
- System shows generic risk profile based on questionnaire
- No learning from user's actual behavior, emotional responses, or decision patterns

### Agentic Approach

**Memory Architecture**
```
System tracks:
- User's stated risk tolerance: "Moderate" (from questionnaire)
- User's actual behavior: panics during 5% dips, holds through 20% gains
- Emotional patterns: checks portfolio 8× on red days, 1× on green days
- Decision patterns: sells near bottom, regrets later, wants "guardrails"

Real understanding: "Conservative during volatility, despite stated moderate tolerance"
```

**Trust Evolution Design**

**Phase 1: Transparency (Months 1-2)**
```
Every suggestion shows:
"Recommending moving 15% to bonds because:
- Your portfolio checks increased 4× this week (stress indicator)
- Historical pattern: you make regrettable decisions when checking >5× daily
- This will reduce volatility by 18% while maintaining 73% of growth potential
- Based on your actual behavior pattern, not questionnaire answers"
```

**Phase 2: Selective Disclosure (Months 3-6)**
```
Routine rebalancing: Quiet execution with simple notification
"Rebalanced portfolio (standard monthly maintenance)"

Significant decisions: Full explanation
"Suggesting defensive position. Market volatility elevated +
your stress indicators active. Details: [expand]"
```

**Phase 3: Autonomous Action (Month 7+)**
```
System has earned trust to:
- Auto-rebalance within agreed parameters
- Execute "emotional guardrails" (prevent panic selling)
- Gradually shift allocation as goals approach (retirement, home purchase)

User retains control:
- Adjust autonomy level anytime
- Override any decision
- Explain any action on demand
```

**Trust Recovery Protocol**
When system makes mistake (e.g., missed opportunity during rally):
1. Transparent explanation: "I prioritized volatility reduction based on your stress patterns. In hindsight, your stress was situational (work deadline), not market-related. Learning: correlate with calendar events."
2. Ask: "Should I adjust my stress detection? Options: A) Factor in calendar stress, B) Require explicit market concerns, C) Reduce autonomy level"
3. User choice becomes new pattern

**Relationship Metrics**
- Trust score: Started 3.2/10 → Currently 8.9/10
- Delegation comfort: User now comfortable with 76% autonomous actions
- Regrettable decisions: Decreased 89% (baseline: 2.3/month → current: 0.25/month)
- Portfolio performance: +3.2% vs. user's historical self-directed performance (controlled for market conditions)
- Emotional well-being: User-reported investment stress decreased from 8/10 to 3/10

## Example 5: Healthcare Relationship Cockpit (Patient Care Coordination)

### Context
Chronic condition management (diabetes, hypertension, etc.) requires ongoing relationship between patient and care system.

### Traditional Approach
- Patient portal shows test results, appointments
- No understanding of patient's lifestyle, compliance patterns, or personal goals
- Generic reminders: "Take medication" (ignored 60% of time)

### Agentic Approach

**Memory-Aware Care**
```
System learns:
- Patient's glucose spikes correlate with work stress (deadline weeks)
- Medication compliance drops on weekends (routine disruption)
- Patient's real goal: "Be active with grandkids" (not just "control A1C")
- Communication preference: morning texts, not evening emails

Contextual intervention:
"Noticed work deadline approaching (calendar sync).
Your glucose typically rises 15% during deadline weeks.
Proactive suggestion: pack healthy snacks for late nights,
glucose check before bed this week?"
```

**Trust Evolution in Healthcare**

**Transparency Phase (Critical for medical):**
- Every recommendation shows clinical reasoning
- Data sources (lab results, clinical guidelines, research)
- Confidence levels and uncertainty acknowledgment
- Option to "explain like I'm 5" or "show me the research"

**Selective Phase:**
- Routine: "Time for your medication" (no explanation needed)
- Significant: "Your pattern suggests A1C rising. Let's discuss: [detailed reasoning]"

**Autonomous Phase (Limited in healthcare):**
- Auto-scheduling routine appointments
- Smart reminders based on learned patterns (not fixed schedule)
- Proactive supply management (refills before running out)
- NEVER autonomous medication changes (always requires provider)

**Collaborative Care Planning**
Patient: "Want to reduce medication if possible"
System: "I see your goal. Your data shows:
- A1C improved 1.2 points over 6 months (excellent!)
- Your active minutes increased 3× (grandkids effect!)
- Blood pressure stable

Your progress supports discussing medication reduction with Dr. Smith.
I've flagged this for your next visit and prepared a summary of your improvements.
Dr. Smith's typical approach: 3-month trial of lifestyle-first, medication as backup."

**Relationship Metrics**
- Medication adherence: 64% → 91%
- A1C improvement: 8.2 → 6.8 (goal <7.0 achieved)
- Patient engagement: visits portal 0.3×/week → 2.1×/week (increased because it's useful)
- Patient-reported confidence: "I feel like my care team knows me" 9.1/10
- Clinical outcomes: 34% reduction in urgent care visits

## Common Patterns Across Examples

### 1. Memory Architecture
All examples maintain:
- **Behavioral patterns** (what user actually does, not what they say)
- **Emotional indicators** (frustration, stress, confidence)
- **Goal evolution** (how priorities change over time)
- **Context signals** (time, environment, situational factors)

### 2. Trust Evolution
All examples progress through:
- **Transparency:** Show everything
- **Selective:** Show what matters
- **Autonomy:** Act independently for routine tasks

With user control:
- Adjust autonomy level anytime
- Override decisions
- Explain on demand

### 3. Relationship Metrics
All examples track:
- **Quality:** Trust scores, delegation comfort
- **Value:** Improvement over time (compounding)
- **Accuracy:** System understanding of user needs
- **Alignment:** Ethical/social guardrails

### 4. Collaborative Planning
All examples feature:
- **Goal awareness:** System knows what user is trying to achieve
- **Proactive suggestions:** Contextual help without intrusion
- **Co-creation:** Human judgment + AI capabilities
- **Adaptive paths:** System constructs custom workflows

## Implementation Checklist for Your Project

Based on these examples, for your specific use case:

- [ ] **Memory architecture:** What behavioral patterns matter for your domain?
- [ ] **Trust stages:** What should be transparent vs. autonomous in your context?
- [ ] **Goal framework:** What are your users' real goals (not just task completion)?
- [ ] **Context signals:** What indicates user's current state (stress, urgency, exploration)?
- [ ] **Relationship metrics:** Which 2-3 metrics from each category (Quality, Value, Accuracy, Alignment)?
- [ ] **Privacy controls:** What should users control about memory/learning?
- [ ] **Trust recovery:** What happens when system makes mistakes?
- [ ] **Collaborative UI:** Where does human judgment + AI capability combine?

## Next Steps

1. **Choose your domain:** Which example is closest to your use case?
2. **Map your relationship model:** What should system remember and learn?
3. **Design trust evolution:** What stages make sense for your domain?
4. **Define success metrics:** How will you measure relationship quality?
5. **Build MVP:** Start with memory + basic trust indicators
6. **Iterate with users:** Learn from real relationship development

See [CHECKLIST.md](CHECKLIST.md) for detailed audit and design worksheets.
