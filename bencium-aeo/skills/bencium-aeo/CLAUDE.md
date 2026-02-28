# AEO Content Generation Guide

This skill provides guidance for generating Answer Engine Optimization (AEO) content - optimizing websites for AI-powered answer engines (ChatGPT, Claude, Gemini, AI Overviews).

**This is NOT a tool or software project.** This is a content generation workflow for use with Claude Code.

## What This Skill Does

When invoked, Claude should:
1. Analyze target website/content for AEO gaps
2. Generate optimized content using research-backed templates
3. Create complete JSON-LD schema markup
4. Provide copy-paste ready HTML

## Core Philosophy: Machine-First Content

Optimize for **AI agents as primary consumers** (~90%), humans secondary (~10%):
- Make facts **copyable** (JSON snippets, 18-token sentences)
- Make claims **verifiable** (Evidence Panels with methods, dates, sources)
- Make structure **scannable** (short answers, clear hierarchy, anchors)
- Make updates **visible** (dated change logs, freshness signals)

## Key Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Skill definition and quick reference |
| `prd.md` | **Main guide** - Complete templates, examples, implementation checklist |
| `story-structured.md` | Princeton study insights and strategic framework |

## Content Generation Workflow

### Input Required
- Target URL or page description
- Product/service details (what, why, differentiators)
- Top 15 customer questions
- Evidence/data (benchmarks, research, case studies)

### Output Generated
1. **Product Overview** - 50 words + Product schema
2. **15 FAQs** - 30-50 word answers + FAQPage schema
3. **Evidence Panels** - Claim, methodology, source, date, limitations
4. **JSON-LD Schema** - FAQPage, HowTo, Product, Organization
5. **Implementation Checklist** - Validation steps

## Research-Backed Principles

### The 18-Token Rule
LLMs extract self-contained sentences of ~18 tokens. Structure content with quotable, context-free statements.

### Single-Topic Focus
One concept per page. `domain.com/specific-concept` beats comprehensive guides.

### Authority-Based Strategy
- **Challengers:** Aggressive optimization (5-7 extraction points, heavy citations)
- **Established sites:** Light touch (1-2 points, trust existing credibility)

### Freshness Requirement
95% of AI citations come from content updated in last 10 months. Static content dies.

## Anti-Patterns to Avoid

- Keyword stuffing (actively harms GEO)
- FAQ answers over 50 words
- Missing dates and freshness signals
- No schema markup
- Pronoun ambiguity ("it" vs "the product")
- Over-optimization on established sites

## Validation

After generating content:
1. Validate schema: [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test with AI engines (ChatGPT, Claude, Gemini)
3. Track citations in scorecard over 4-8 weeks

## Full Documentation

See `prd.md` for complete templates, HTML examples, and detailed implementation guidance.
