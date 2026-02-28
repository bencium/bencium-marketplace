# Agentic UX Design - Technical Reference

This document provides detailed technical patterns, research foundations, and implementation guidance for relationship-centric interfaces.

## Research Foundation

### Key Research Sources

**DeepMind: AndroidControl Dataset (2024)**
- 15,000+ human interaction patterns analyzed
- Key finding: People operate with continuous context, but systems operate with amnesia
- Insight: Gap between human continuous mental models and system's discrete session thinking
- Application: Design for contextual continuity, not session independence

**Anthropic: Constitutional AI Research**
- Trust development through transparent reasoning
- Three-stage trust evolution pattern identified
- Constitutional Classifiers: 86% → 4.4% jailbreak success when users understood system boundaries
- Application: Show reasoning to build trust, especially in early relationship stages

**Anthropic: Multi-Agent Systems (2024)**
- Multi-agent systems use 15× more compute but excel at complex, ongoing tasks
- Small behavioral changes create emergent relationship dynamics
- Key insight: Systems develop distinct relationship patterns with different users
- Application: Design for emergent relationship behavior, not just programmed responses

**OpenAI: Agentic AI Definition**
- "Degree to which systems can adaptively achieve complex goals with limited supervision"
- Key insight: Real human goals are messy, evolving, and contextual
- Application: Design goal-alignment mechanisms, not predetermined paths

**DeepMind: In-Context Abstraction Learning**
- Systems learn from imperfect demonstrations and natural language feedback
- Adapt approach based on what works for individual users
- Application: Build interfaces that learn from user behavior, not just explicit settings

**Anthropic: Collective Constitutional AI**
- Systems should align with broader human values, not just individual preferences
- Democratic alignment through collective input
- Application: Build social guardrails, not just user preferences

## Memory Architecture: Technical Patterns

### Pattern 1: Behavioral Event Streaming

**Traditional approach:**
```typescript
// Static preferences
interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}
```

**Agentic approach:**
```typescript
// Behavioral event stream
interface BehavioralEvent {
  timestamp: Date;
  eventType: string;
  context: {
    userState: 'frustrated' | 'exploring' | 'decided' | 'urgent';
    sessionDuration: number;
    repeatActions: number;
    environmentalContext: {
      dayOfWeek: string;
      timeOfDay: string;
      deviceType: string;
    };
  };
  outcome: 'success' | 'abandoned' | 'escalated';
}

// Pattern detection engine
class BehavioralPatternEngine {
  detectPatterns(events: BehavioralEvent[]): UserPatterns {
    return {
      frustrationTriggers: this.analyzeFrustration(events),
      temporalPatterns: this.analyzeTemporalBehavior(events),
      goalEvolution: this.trackGoalChanges(events),
      successPatterns: this.identifyWhatWorks(events)
    };
  }
}
```

### Pattern 2: Contextual Memory Graph

**Structure:**
```typescript
interface ContextualMemoryGraph {
  // User identity
  userId: string;

  // Behavioral patterns (learned over time)
  patterns: {
    searchBehavior: {
      typicalQueries: string[];
      frustrationIndicators: {
        repeatedSearches: number;
        timeSpentSearching: number;
        queryRefinements: number;
      };
      successPatterns: {
        whatWorks: string[];
        preferredPathways: string[];
      };
    };

    decisionMaking: {
      riskTolerance: {
        stated: number; // from questionnaire
        actual: number; // from behavior
        contexts: Map<string, number>; // varies by context
      };
      timePreference: 'quick' | 'thorough' | 'varies';
      informationNeeds: 'minimal' | 'detailed' | 'adaptive';
    };

    emotionalPatterns: {
      stressTriggers: string[];
      confidenceIndicators: string[];
      satisfactionSignals: string[];
    };
  };

  // Ongoing goals (current state)
  currentGoals: {
    primary: Goal;
    secondary: Goal[];
    constraints: Constraint[];
    deadline?: Date;
  };

  // Trust level (relationship state)
  trust: {
    stage: 'transparency' | 'selective' | 'autonomous';
    delegationCategories: Map<string, number>; // 0-100 per category
    lastTrustCheckpoint: Date;
    escalationPreferences: EscalationConfig;
  };

  // Temporal context
  relationshipTimeline: {
    startDate: Date;
    milestones: Milestone[];
    interactionFrequency: number;
    longestGap: number;
  };
}
```

### Pattern 3: Progressive Memory Loading

**Problem:** Loading entire relationship history for every interaction is inefficient.

**Solution:** Tiered memory loading
```typescript
class MemoryManager {
  // Hot memory: Last 7 days, always loaded
  hotMemory: BehavioralEvent[];

  // Warm memory: Patterns from last 90 days, loaded on demand
  warmMemory: UserPatterns;

  // Cold memory: Historical trends, loaded for analysis
  coldMemory: LongTermTrends;

  async getRelevantContext(currentSituation: Context): Promise<MemoryContext> {
    // Always include hot memory
    const recent = this.hotMemory;

    // Load warm memory if pattern matches
    const patterns = await this.matchWarmPatterns(currentSituation);

    // Load cold memory only for significant decisions
    const historical = currentSituation.isSignificant
      ? await this.loadHistoricalTrends()
      : null;

    return { recent, patterns, historical };
  }
}
```

### Pattern 4: Privacy-Preserving Memory

**Key principle:** Users must control what's remembered

```typescript
interface MemoryControls {
  // What to remember
  rememberedCategories: Set<string>;

  // What to forget
  forgottenCategories: Set<string>;

  // Retention policies
  retentionPolicies: Map<string, number>; // category → days

  // Explicit forgetting
  forgetSpecific: (eventIds: string[]) => void;

  // Memory export (user owns their data)
  exportMemory: () => MemoryExport;
}

class PrivacyPreservingMemory {
  // Differential privacy for pattern learning
  learnPatternWithPrivacy(events: BehavioralEvent[], epsilon: number): Pattern {
    const noisyPattern = this.addLaplaceNoise(
      this.detectRawPattern(events),
      epsilon
    );
    return noisyPattern;
  }

  // Automatic PII scrubbing
  scubPII(event: BehavioralEvent): BehavioralEvent {
    return {
      ...event,
      context: this.removePII(event.context)
    };
  }
}
```

## Trust Evolution: Technical Implementation

### Pattern 1: Dynamic Reasoning Display

**Adaptive explanation based on trust stage:**

```typescript
interface ReasoningDisplay {
  stage: TrustStage;
  decision: Decision;
  confidence: number;

  render(): UIComponent {
    switch (this.stage) {
      case 'transparency':
        return this.fullExplanation();

      case 'selective':
        return this.confidence < 0.7 || this.decision.significance === 'high'
          ? this.fullExplanation()
          : this.confidenceIndicator();

      case 'autonomous':
        return this.subtleNotification();
    }
  }

  fullExplanation(): UIComponent {
    return {
      reasoning: this.decision.reasoning,
      dataSources: this.decision.sources,
      alternatives: this.decision.alternativesConsidered,
      confidence: this.confidence,
      expandable: true
    };
  }

  confidenceIndicator(): UIComponent {
    return {
      confidence: this.confidence,
      summary: this.decision.summary,
      expandForDetails: true
    };
  }

  subtleNotification(): UIComponent {
    return {
      action: this.decision.action,
      undoButton: true,
      explainOnDemand: true
    };
  }
}
```

### Pattern 2: Trust Level Detection

**Automatically adjust based on user behavior:**

```typescript
class TrustLevelDetector {
  detectTrustLevel(userBehavior: UserBehavior): TrustStage {
    const indicators = {
      acceptanceRate: userBehavior.acceptedSuggestions / userBehavior.totalSuggestions,
      overrideRate: userBehavior.overrides / userBehavior.totalSuggestions,
      explanationRequests: userBehavior.explanationClicks / userBehavior.interactions,
      delegationComfort: this.measureDelegation(userBehavior)
    };

    if (indicators.explanationRequests > 0.5 || indicators.acceptanceRate < 0.4) {
      return 'transparency'; // User needs to see reasoning
    }

    if (indicators.acceptanceRate > 0.7 && indicators.delegationComfort > 0.6) {
      return 'autonomous'; // User trusts system
    }

    return 'selective'; // Middle ground
  }

  measureDelegation(behavior: UserBehavior): number {
    // How comfortable is user with autonomous actions?
    const delegatedActions = behavior.actions.filter(a => a.userInitiated === false);
    const acceptedWithoutReview = delegatedActions.filter(a => !a.reviewed).length;

    return acceptedWithoutReview / delegatedActions.length;
  }
}
```

### Pattern 3: Trust Recovery Protocol

**When system makes mistakes:**

```typescript
interface TrustRecoveryProtocol {
  mistake: Decision;
  userFeedback: Feedback;

  async recover(): Promise<RecoveryOutcome> {
    // 1. Acknowledge transparently
    await this.acknowledge({
      what: "I made a suboptimal decision",
      why: this.mistake.reasoning,
      impact: this.calculateImpact(this.mistake)
    });

    // 2. Explain what went wrong
    await this.explain({
      assumption: "I assumed X based on Y",
      reality: "But actually Z was true",
      learning: "Now I understand that..."
    });

    // 3. Offer correction options
    const options = await this.generateRecoveryOptions();
    const userChoice = await this.askUser(options);

    // 4. Adjust trust level temporarily
    await this.adjustTrustLevel({
      category: this.mistake.category,
      adjustment: -0.2, // Reduce autonomy in this category
      duration: '7 days', // Re-evaluate after proving reliability
      escalationThreshold: 'lower' // More cautious
    });

    // 5. Learn from mistake
    await this.updateDecisionModel({
      pattern: this.extractPattern(this.mistake),
      correction: userChoice,
      context: this.mistake.context
    });

    return { recovered: true, newTrustLevel: this.calculateNewTrustLevel() };
  }
}
```

## Relationship Metrics: Implementation Guide

### Metric 1: Relationship Quality Score

**Components:**
```typescript
class RelationshipQualityMetric {
  calculate(user: User, timeWindow: TimeWindow): QualityScore {
    const trustIndicators = {
      delegationComfort: this.measureDelegation(user),
      overrideRate: this.calculateOverrides(user),
      escalationFrequency: this.measureEscalations(user),
      satisfactionSignals: this.detectSatisfaction(user)
    };

    const engagementIndicators = {
      interactionDepth: this.measureDepth(user),
      returnFrequency: this.calculateFrequency(user),
      featureAdoption: this.measureAdoption(user)
    };

    const alignmentIndicators = {
      goalProgress: this.measureGoalProgress(user),
      expectationMatch: this.compareExpectations(user),
      valueAlignment: this.assessAlignment(user)
    };

    return this.weightedScore({
      trust: trustIndicators,
      engagement: engagementIndicators,
      alignment: alignmentIndicators
    });
  }

  // Trust component
  measureDelegation(user: User): number {
    const categories = user.getDelegationCategories();
    const delegationScores = categories.map(cat =>
      user.getDelegationComfort(cat)
    );
    return average(delegationScores);
  }

  // Engagement component
  measureDepth(user: User): number {
    const sessions = user.getRecentSessions(30); // days
    const metrics = sessions.map(session => ({
      duration: session.duration,
      actionsPerSession: session.actions.length,
      complexTasksAttempted: session.complexTasks.length
    }));

    return this.calculateEngagementDepth(metrics);
  }

  // Alignment component
  measureGoalProgress(user: User): number {
    const goals = user.getCurrentGoals();
    const progress = goals.map(goal => ({
      target: goal.target,
      current: goal.current,
      trend: goal.trend
    }));

    return this.calculateGoalAlignment(progress);
  }
}
```

### Metric 2: Compounding Value

**Measure improvement over time:**
```typescript
class CompoundingValueMetric {
  calculate(user: User): CompoundingScore {
    const baseline = user.getOnboardingMetrics();
    const current = user.getCurrentMetrics();
    const timeElapsed = user.getRelationshipDuration();

    return {
      // Efficiency gains
      timeToSuccess: {
        baseline: baseline.averageTimeToGoal,
        current: current.averageTimeToGoal,
        improvement: this.calculateImprovement(baseline, current),
        compoundingRate: this.calculateCompoundingRate(user.getHistoricalMetrics())
      },

      // Quality gains
      outcomeQuality: {
        baseline: baseline.outcomeQuality,
        current: current.outcomeQuality,
        improvement: this.calculateImprovement(baseline, current)
      },

      // Capability expansion
      capabilityGrowth: {
        baselineCapabilities: baseline.featuresUsed,
        currentCapabilities: current.featuresUsed,
        newCapabilitiesAdopted: current.featuresUsed.filter(
          f => !baseline.featuresUsed.includes(f)
        )
      },

      // Compounding rate
      compoundingFactor: this.calculateCompoundingFactor(timeElapsed, improvement)
    };
  }

  calculateCompoundingRate(historical: Metric[]): number {
    // Are improvements accelerating (compounding) or linear?
    const improvements = historical.map((metric, i) =>
      i > 0 ? (metric.value - historical[i-1].value) / historical[i-1].value : 0
    );

    // Fit curve: linear vs. exponential
    const linearFit = this.fitLinear(improvements);
    const exponentialFit = this.fitExponential(improvements);

    // Positive slope in exponential fit = compounding
    return exponentialFit.slope > 0 ? exponentialFit.slope : 0;
  }
}
```

### Metric 3: Context Accuracy

**How well does system understand user?**
```typescript
class ContextAccuracyMetric {
  calculate(user: User, timeWindow: TimeWindow): AccuracyScore {
    const predictions = user.getSystemPredictions(timeWindow);
    const actuals = user.getActualBehavior(timeWindow);

    return {
      // Intent prediction
      intentAccuracy: this.measureIntentPrediction(predictions, actuals),

      // Preference prediction
      preferenceAccuracy: this.measurePreferencePrediction(predictions, actuals),

      // Context recognition
      contextRecognition: this.measureContextRecognition(predictions, actuals),

      // Timing accuracy
      timingAccuracy: this.measureTimingAccuracy(predictions, actuals)
    };
  }

  measureIntentPrediction(predictions: Prediction[], actuals: Actual[]): number {
    // Did system correctly understand what user was trying to do?
    const matches = predictions.filter((pred, i) =>
      pred.intent === actuals[i].intent
    );

    return matches.length / predictions.length;
  }

  measurePreferencePrediction(predictions: Prediction[], actuals: Actual[]): number {
    // For choices offered, did user select system's top recommendation?
    const topRecommendations = predictions.map(p => p.topChoice);
    const userChoices = actuals.map(a => a.choice);

    const matches = topRecommendations.filter((rec, i) =>
      rec === userChoices[i]
    );

    return matches.length / predictions.length;
  }

  measureContextRecognition(predictions: Prediction[], actuals: Actual[]): number {
    // Did system recognize user's situational context?
    const contextMatches = predictions.filter((pred, i) => {
      const predictedContext = pred.detectedContext;
      const actualContext = actuals[i].context;

      return this.contextsMatch(predictedContext, actualContext);
    });

    return contextMatches.length / predictions.length;
  }
}
```

### Metric 4: Democratic Alignment

**Guardrails and ethical boundaries:**
```typescript
class DemocraticAlignmentMetric {
  calculate(user: User, timeWindow: TimeWindow): AlignmentScore {
    const decisions = user.getSystemDecisions(timeWindow);

    return {
      // Value alignment
      valueAlignment: this.measureValueAlignment(decisions),

      // Boundary respect
      boundaryRespect: this.measureBoundaryRespect(decisions),

      // Fairness
      fairness: this.measureFairness(decisions),

      // Transparency
      transparency: this.measureTransparency(decisions)
    };
  }

  measureValueAlignment(decisions: Decision[]): number {
    // Do decisions align with stated human values?
    const valueViolations = decisions.filter(d =>
      this.violatesValue(d, this.getConstitution())
    );

    return 1 - (valueViolations.length / decisions.length);
  }

  measureBoundaryRespect(decisions: Decision[]): number {
    // Did system respect explicit boundaries?
    const boundaryViolations = decisions.filter(d =>
      d.action.crosses(user.getExplicitBoundaries())
    );

    return 1 - (boundaryViolations.length / decisions.length);
  }

  measureFairness(decisions: Decision[]): number {
    // Are decisions fair across user segments?
    const outcomesBySegment = this.groupBySegment(decisions);
    const fairnessScore = this.calculateFairnessMetric(outcomesBySegment);

    return fairnessScore;
  }
}
```

## Collaborative Planning: Technical Patterns

### Pattern 1: Goal-Aware State Machine

**Traditional approach:** Fixed workflows
**Agentic approach:** Goal-aware adaptive paths

```typescript
class GoalAwareStateMachine {
  currentState: State;
  userGoal: Goal;
  context: Context;

  async nextState(): Promise<State> {
    // Instead of predetermined path, evaluate goal progress
    const goalProgress = await this.evaluateGoalProgress();

    if (goalProgress.onTrack) {
      return this.continueCurrentPath();
    }

    if (goalProgress.blocked) {
      // Dynamically generate alternative path
      const alternatives = await this.generateAlternatives();
      const recommended = await this.selectBestAlternative(alternatives);

      // Ask user for collaborative decision
      return await this.collaborativeDecision(alternatives, recommended);
    }

    if (goalProgress.complete) {
      return this.goalCompleteState();
    }

    // Learn from user's actual path
    await this.updatePathModel(this.currentState, goalProgress);

    return this.adaptivePath();
  }

  async generateAlternatives(): Promise<Alternative[]> {
    // System generates options based on:
    // - User's historical preferences
    // - Current context and constraints
    // - Similar users' successful paths
    // - Domain knowledge

    return this.alternativeGenerator.generate({
      goal: this.userGoal,
      context: this.context,
      history: this.getUserHistory(),
      constraints: this.getConstraints()
    });
  }
}
```

### Pattern 2: Proactive Suggestion Engine

**When to suggest vs. when to wait:**

```typescript
class ProactiveSuggestionEngine {
  async evaluateSuggestion(
    suggestion: Suggestion,
    context: Context
  ): Promise<ShouldSuggest> {
    // Don't interrupt if user is in flow state
    if (context.userState === 'focused' || context.userState === 'progressing') {
      return { suggest: false, reason: 'user-in-flow' };
    }

    // Do suggest if user shows frustration patterns
    if (this.detectFrustration(context)) {
      return { suggest: true, urgency: 'high', reason: 'frustration-detected' };
    }

    // Do suggest if system has high-confidence relevant suggestion
    if (suggestion.confidence > 0.85 && this.isRelevant(suggestion, context)) {
      return { suggest: true, urgency: 'medium', reason: 'high-confidence' };
    }

    // Wait for natural pause point
    if (context.userState === 'paused' || context.userState === 'stuck') {
      return { suggest: true, urgency: 'low', reason: 'natural-pause' };
    }

    return { suggest: false, reason: 'wait-for-better-timing' };
  }

  detectFrustration(context: Context): boolean {
    return (
      context.repeatedActions > 3 ||
      context.timeSinceProgress > 300 || // seconds
      context.undoCount > 2 ||
      context.searchRepetitions > 2
    );
  }
}
```

### Pattern 3: Human-AI Co-Creation Interface

**Collaborative workspace pattern:**

```typescript
interface CoCreationWorkspace {
  // Human contributions
  humanInput: {
    goals: Goal[];
    constraints: Constraint[];
    preferences: Preference[];
    judgmentCalls: Decision[];
  };

  // AI contributions
  aiInput: {
    analysis: Analysis[];
    patterns: Pattern[];
    suggestions: Suggestion[];
    capabilities: Capability[];
  };

  // Shared workspace
  sharedArtifacts: {
    plan: Plan;
    decisions: Decision[];
    rationale: Rationale[];
  };

  // Collaboration methods
  collaborate(): void {
    // 1. Human provides high-level goal
    const goal = this.humanInput.goals[0];

    // 2. AI generates analysis and options
    const analysis = this.ai.analyze(goal);
    const options = this.ai.generateOptions(analysis);

    // 3. AI presents for human judgment
    this.present(options);

    // 4. Human selects/refines
    const humanChoice = this.waitForHumanInput();

    // 5. AI fills in details
    const detailedPlan = this.ai.elaborate(humanChoice);

    // 6. Iterate until convergence
    while (!this.converged()) {
      this.humanRefine();
      this.aiRefine();
    }
  }
}
```

## Implementation Checklist

For your specific project:

### Memory Architecture
- [ ] Choose event streaming vs. snapshot approach
- [ ] Design behavioral pattern detection algorithms
- [ ] Implement privacy controls and PII scrubbing
- [ ] Build tiered memory loading (hot/warm/cold)
- [ ] Create memory visualization for users
- [ ] Implement retention policies and forgetting mechanisms

### Trust Evolution
- [ ] Define transparency requirements for your domain
- [ ] Implement dynamic reasoning display
- [ ] Build trust level detection
- [ ] Create trust recovery protocols
- [ ] Design autonomy controls for users
- [ ] Implement escalation pathways

### Relationship Metrics
- [ ] Select 2-3 metrics from each category (Quality, Value, Accuracy, Alignment)
- [ ] Implement baseline measurement
- [ ] Build longitudinal tracking (weekly/monthly)
- [ ] Create metric visualization
- [ ] Define success thresholds
- [ ] Set up alerting for metric degradation

### Collaborative Planning
- [ ] Design goal capture interface
- [ ] Implement proactive suggestion logic
- [ ] Build co-creation workspace
- [ ] Create adaptive path generation
- [ ] Implement learning from user choices

### Privacy & Ethics
- [ ] Define data retention policies
- [ ] Implement user data export
- [ ] Build forgetting controls
- [ ] Create transparency logs
- [ ] Implement democratic alignment guardrails
- [ ] Design trust recovery protocols

## Testing Relationship Design

### User Testing Approach

**Traditional UX testing:** Single session, task completion
**Relationship UX testing:** Longitudinal, relationship development

**Test phases:**
1. **Week 1:** Onboarding and transparency phase
   - Can users understand system reasoning?
   - Do explanations build trust?
   - Are privacy controls clear?

2. **Weeks 2-4:** Transition to selective disclosure
   - Does system correctly detect trust level?
   - Are autonomy controls working?
   - Is system learning user patterns?

3. **Months 2-3:** Autonomous phase
   - Has trust evolved naturally?
   - Are autonomous actions appropriate?
   - Is compounding value evident?

**Metrics to track during testing:**
- Trust scores over time
- Relationship quality indicators
- Context accuracy improvements
- User satisfaction trends
- Delegation comfort evolution

## Common Implementation Pitfalls

### ❌ Pitfall 1: Remembering Too Much
**Problem:** Storing every interaction without relevance filtering
**Impact:** Slow system, privacy concerns, noise in pattern detection
**Fix:** Implement relevance filtering and retention policies

### ❌ Pitfall 2: Rigid Trust Stages
**Problem:** Fixed timeline: "Week 1 = transparency, Week 4 = autonomous"
**Impact:** Doesn't match individual user trust development
**Fix:** Detect trust level from behavior, let users control progression

### ❌ Pitfall 3: Optimizing for Short-Term Metrics
**Problem:** Still measuring session duration, immediate conversion
**Impact:** Misses relationship quality deterioration
**Fix:** Track longitudinal metrics, relationship health over time

### ❌ Pitfall 4: No Trust Recovery Path
**Problem:** When system makes mistake, no way to rebuild trust
**Impact:** Users abandon system after first error
**Fix:** Implement transparent recovery protocols

### ❌ Pitfall 5: Ignoring Privacy
**Problem:** "More data = better personalization" without user control
**Impact:** Privacy violations, user discomfort, regulatory issues
**Fix:** Privacy-first design with user controls

## Next Steps

1. **Choose your domain:** B2B, B2C, healthcare, finance, etc.
2. **Map relationship model:** What should system remember and learn?
3. **Design trust evolution:** What stages make sense for your domain?
4. **Implement metrics:** Start with 2-3 metrics from each category
5. **Build MVP:** Memory + trust indicators + basic collaborative planning
6. **Test longitudinally:** Week 1, Month 1, Month 3, Month 6
7. **Iterate based on relationship health:** Adjust based on metrics

See [EXAMPLES.md](EXAMPLES.md) for domain-specific implementations.
See [CHECKLIST.md](CHECKLIST.md) for detailed audit and design worksheets.
