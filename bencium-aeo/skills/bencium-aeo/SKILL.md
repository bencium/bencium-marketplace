---
name: bencium-aeo
description: Generate AEO-optimized content (Answer Engine Optimization) for AI search visibility - ChatGPT, Claude, Gemini, AI Overviews. Use when optimizing websites for AI citations, creating FAQ schemas, evidence panels, or analyzing content for LLM extraction readiness.
---

# AEO Content Optimization Skill

**Answer Engine Optimization** - Optimize content for AI citations, not traditional search rankings.

## When to Use This Skill

Use this skill when:
- User asks to optimize content for AI search/citations
- User mentions ChatGPT, Claude, Gemini visibility
- User wants FAQ schema, JSON-LD, or structured data for AI
- User asks about GEO (Generative Engine Optimization)
- User wants to analyze content for AI extraction readiness
- User mentions "AI Overviews" or "answer engines"

**NOT for traditional SEO** - This is specifically for AI/LLM citation optimization.

## Core Reference

**Full templates and guidelines:** Read `prd.md` in this directory for complete implementation details.

## Quick Reference: Key Principles

### The 18-Token Extraction Rule
LLMs extract self-contained sentences of ~18 tokens (~15-20 words). Key claims must be complete, quotable statements requiring zero surrounding context.

**Good:** "Eight-API synthesis reduces property analysis errors by 67%." (9 tokens)
**Bad:** "Our system is incredibly fast and delivers amazing results." (vague)

### Single-Topic Focus Pages
Single-concept pages vastly outperform multi-topic content. Create focused URLs like `domain.com/specific-concept` rather than comprehensive guides.

### Citations + Statistics = 30-40% More Visibility
Every major claim needs:
- Verifiable data with methodology
- Date of data collection
- Expert attribution (Name + Credentials + Org)

### Freshness is Critical
95% of AI citations come from content updated in last 10 months. Static content dies.

### Authority Level Determines Strategy

| Authority Level | Optimization Approach |
|-----------------|----------------------|
| **Challenger** (new sites, low authority) | Aggressive: 5-7 extraction points per page, heavy citations, weekly micro-updates |
| **Established** (top-ranked, well-known) | Light touch: 1-2 strategic points, trust existing credibility, avoid over-optimization |

**Princeton finding:** Rank-5 sites gained 115% visibility with aggressive optimization. Rank-1 sites that over-optimized lost 30%.

## What to Generate

When user requests AEO content, generate:

### 1. Product Overview (50 words)
- What it is (one clause)
- Scope/timeframe context
- Why it matters (value proposition)
- "Last updated" date

### 2. 15 FAQs with Schema
- Questions: 7-12 words, natural language
- Answers: 30-50 words (sweet spot for AI extraction)
- FAQPage JSON-LD schema with `datePublished` and `dateModified`
- Persistent anchor IDs (#faq-slug)

### 3. Evidence Panels
For every important claim:
- Claim statement
- Methodology
- Data source + URL
- Date of data collection
- Limitations
- Contact for questions

### 4. JSON-LD Schema
- FAQPage (most important)
- HowTo (for guides)
- Product (for product pages)
- Organization (for About page)

## Anti-Patterns (What to Avoid)

### Traditional SEO Tactics Harm GEO
- Keyword stuffing
- Generic listicles without original insight
- Vague hedged language ("may help", "could potentially")
- Multi-topic comprehensive guides
- Over-optimization on established sites

### Content Structure Errors
- FAQ answers over 50 words
- Buried answers (put conclusion first)
- Pronoun ambiguity ("it" instead of "the product")
- Missing dates and freshness signals
- No schema markup

## Assessment Framework

When analyzing content for AEO readiness, score (0-10):

| Dimension | What to Check |
|-----------|--------------|
| **Extraction** | How many citation-ready sentences under 18 tokens? |
| **Focus** | Single topic or sprawling multi-topic? |
| **Authority** | Expert attribution with credentials? Citations? |
| **Freshness** | Updated within 90 days? Dated content? |

**Quick test:** Can you copy-paste 3 sentences that fully answer a question without context?

## Implementation Checklist

- [ ] Product overview: 50 words, dated, under H1
- [ ] 15 FAQs: 30-50 words each, natural questions
- [ ] Evidence panels: method, data, date, limitations
- [ ] "Last updated" dates on every section
- [ ] FAQPage JSON-LD schema in `<head>`
- [ ] Persistent anchor IDs for FAQs
- [ ] Validated with Google Rich Results Test

## Testing Protocol

After implementation, test with:

1. **Recognition:** "What is [Product]?" (ChatGPT, Claude, Gemini)
2. **Comparison:** "Compare [Product] to [Competitor]"
3. **Best for:** "What's the best [category] for [use case]?"
4. **How-to:** "How do I [task with product]?"

**Track:** Mentioned? Linked? Accurate? Evidence quoted?

## Full Documentation

For complete templates, examples, and detailed guidelines, read:
- `prd.md` - Full AEO content generation guide with HTML templates
- `story-structured.md` - Framework summary from Princeton study
