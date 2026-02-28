# AEO Content Generation Guide for Claude Code

**Goal:** Generate machine-readable content that earns citations and links from ChatGPT, Claude, Gemini, and Google AI Overviews.

**Not in scope:** Building automation tools or complex workflows. This is a content generation guide for manual/Claude-assisted implementation.

---

## Core AEO Principles (Research-Backed)

These principles are derived from LLM citation behavior analysis and should inform all content optimization decisions:

### The 18-Token Extraction Rule
- **Finding:** LLMs extract self-contained sentences of approximately 18 tokens (~15-20 words)
- **Implication:** Key claims must be complete, quotable statements requiring zero surrounding context
- **Example:** "Eight-API synthesis reduces property analysis errors by 67%." (9 tokens, self-contained)

### Single-Topic Focus Pages
- **Finding:** Single-concept pages vastly outperform multi-topic content for AI citations
- **Implication:** Create focused URLs like `domain.com/specific-concept` rather than comprehensive guides
- **Structure:** One clear concept per page with extractable statements

### Citations, Statistics, and Quotations
- **Finding:** Content with citations, stats, and expert quotations receives 30-40% more visibility
- **Implication:** Every major claim needs verifiable data, methodology, and expert attribution
- **Format:** "[Specific claim with number]" + [Citation] + "Expert quote" + [Attribution]

### Micro-Updates Maintain Visibility
- **Finding:** 95% of AI citations come from content updated in the last 10 months
- **Implication:** Static content dies; implement weekly micro-updates (refresh stats, add citations, update examples)
- **Strategy:** Schedule recurring content freshness reviews

### Traditional SEO Tactics Harm GEO Performance
- **Finding:** Keyword stuffing, over-optimization actively hurt GEO performance
- **Implication:** Write for AI extraction, not keyword density
- **Anti-patterns:** ❌ Keyword stuffing, ❌ Generic listicles, ❌ Vague hedged language

### Optimization Aggressiveness by Authority Level
- **Finding:** Princeton study shows rank-5 sites gained 115% visibility with aggressive optimization, while rank-1 sites lost 30% with over-optimization
- **Challenger sites (low authority):** ✅ Aggressive optimization with multiple extraction points, citations, stats
- **Established sites (high authority):** ⚠️ Light touch optimization; trust existing credibility

---

## What Claude Should Generate

When analyzing a website for AEO optimization, Claude Code should produce:

### 1. Homepage Product Overview (50-Word Block)
A concise definition that appears immediately under the H1, including:
- What the product/service is (one clause)
- Scope or timeframe context
- Why it matters (value proposition)
- "Last updated" date

### 2. 15 FAQ Items with Schema
Structured question-answer pairs optimized for AI extraction:
- Questions: 7-12 words, natural language
- Answers: 30-50 words (sweet spot for voice/AI)
- Each FAQ gets a persistent anchor link
- Full FAQPage JSON-LD schema implementation
- "Last updated" date per FAQ

### 3. Evidence Blocks for Key Claims
For every important assertion, add a citation-worthy evidence panel:
- Claim statement
- Methodology
- Data source/dataset
- Date of data collection
- Limitations
- Contact for questions

### 4. JSON-LD Schema Markup
Complete, working schema for:
- FAQPage (for FAQ sections)
- HowTo (for step-by-step guides)
- Product (for product pages)
- Organization (for About page)

### 5. How-To Sections
When relevant, add step-by-step guides with:
- Clear numbered steps
- Explicit constraints or prerequisites
- Expected outcomes
- HowTo schema markup

---

## Content Guidelines (Research-Backed)

### Writing Style for AI Extraction

**Front-load value propositions**
- Put the answer/conclusion first, details second
- Use complete, context-rich sentences
- Avoid pronoun ambiguity (say "the product" not "it")

**Structure for scannability**
- Use clear semantic headings (H2, H3)
- Bullet points for lists
- Comparison tables for product/feature comparisons
- Short paragraphs (2-3 sentences max)

**Optimize for quotability and extraction**
- **Target 15-20 words** (18-token rule) for citation-ready statements
- **Self-contained sentences:** No pronouns requiring context ("the product" not "it")
- **Complete thoughts:** Must be quotable without surrounding paragraphs
- **Declarative structure:** Subject-predicate-object patterns for clarity
- **Confident claims:** Avoid hedging language ("reduces errors by 67%" not "may help reduce errors")
- **Define inline:** All terms understandable without external context
- **FAQ answers:** 30-50 words total, front-loaded with direct answer

**Extraction-Ready Sentence Examples:**
- ✅ "Eight-API synthesis reduces property analysis errors by 67%." (9 tokens, self-contained)
- ✅ "RAG-based systems maintain brand voice 3x better than rule-based approaches." (11 tokens)
- ❌ "Our system is incredibly fast and delivers amazing results." (vague, no specifics)
- ❌ "It significantly improves performance when compared to alternatives." (pronoun ambiguity)

### Content Freshness Signals

**Critical:** 95% of ChatGPT citations come from content updated in the last 10 months.

**Required freshness indicators:**
- "Last updated: YYYY-MM-DD" on every page
- "Last reviewed: YYYY-MM-DD" on evergreen content
- Date stamps on data/benchmarks: "as of YYYY-MM-DD"
- Version numbers on technical docs

### Evidence & Credibility

**AI engines reward specificity over marketing claims:**

✅ **Good:** "In a benchmark of 1,000 queries (July 2025), our system achieved 127ms median latency using the GPT-4 API."

❌ **Bad:** "Our system is incredibly fast and delivers amazing results."

**Include:**
- Original research and first-hand data
- Methodology descriptions
- Dataset sources and dates
- Clear limitations and constraints
- Author expertise/credentials

### Schema & Structure

**Essential schema types:**
1. **FAQPage** - For FAQ sections (most important)
2. **HowTo** - For step-by-step guides
3. **Product** - For product pages
4. **Organization** - For About/Company pages

**Technical requirements:**
- Use JSON-LD format (recommended by Google)
- Place schema in `<script type="application/ld+json">` in `<head>`
- Validate with Google Rich Results Test
- Use persistent anchor IDs for FAQs (#faq-what-is-x)

---

## Templates

### Template 1: Product Overview Block

```html
<article id="product-overview">
  <h1>What is [Product Name]?</h1>

  <div class="overview-answer">
    <p>[Product Name] is a [category] that [core function].
    As of [Month Year], it [key differentiator/scope].
    This matters because [value proposition in one sentence].</p>

    <p class="meta">Last updated: 2025-10-31</p>
  </div>

  <!-- Schema markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "[Product Name]",
    "description": "[50-word description from above]",
    "brand": {
      "@type": "Brand",
      "name": "[Your Company]"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://example.com/product",
      "priceCurrency": "USD",
      "price": "99.00",
      "availability": "https://schema.org/InStock"
    }
  }
  </script>
</article>
```

**Example:**
```
What is AEO Optimizer?

AEO Optimizer is a content analysis tool that identifies gaps in website
structure for AI search engines. As of October 2025, it supports ChatGPT,
Claude, and Gemini analysis. This matters because 60% of searches now end
without a click, making AI citation the new discovery channel.

Last updated: 2025-10-31
```

---

### Template 2: FAQ Section with Schema

```html
<section id="faq">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item" id="faq-what-is-aeo">
    <h3>What is Answer Engine Optimization?</h3>
    <p>Answer Engine Optimization (AEO) is the practice of structuring
    website content so AI systems like ChatGPT, Claude, and Gemini can
    easily extract, cite, and link to your information. It focuses on
    machine-readable formats like JSON-LD and 30-50 word answers.</p>
    <p class="meta">Last updated: 2025-10-31</p>
  </div>

  <div class="faq-item" id="faq-how-different-from-seo">
    <h3>How is AEO different from SEO?</h3>
    <p>SEO optimizes for ranking in search result lists, while AEO
    optimizes for being cited in AI-generated answers. AEO requires
    shorter, more structured answers (30-50 words), strict schema markup,
    and evidence blocks that AI can verify and quote directly.</p>
    <p class="meta">Last updated: 2025-10-31</p>
  </div>

  <!-- Add 13 more FAQ items following same pattern -->

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Answer Engine Optimization?",
        "datePublished": "2025-01-15",
        "dateModified": "2025-10-31",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Answer Engine Optimization (AEO) is the practice of structuring website content so AI systems like ChatGPT, Claude, and Gemini can easily extract, cite, and link to your information. It focuses on machine-readable formats like JSON-LD and 30-50 word answers."
        }
      },
      {
        "@type": "Question",
        "name": "How is AEO different from SEO?",
        "datePublished": "2025-01-15",
        "dateModified": "2025-10-31",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO optimizes for ranking in search result lists, while AEO optimizes for being cited in AI-generated answers. AEO requires shorter, more structured answers (30-50 words), strict schema markup, and evidence blocks that AI can verify and quote directly."
        }
      }
      // Add remaining 13 FAQs with datePublished and dateModified
    ]
  }
  </script>
</section>
```

**FAQ Generation Guidelines:**
- Cover top customer questions (use "People Also Ask," support tickets, sales calls)
- Use natural question phrasing ("What is X?" not "X definition")
- Keep answers factual and specific
- Link to deeper content with "Learn more about [topic]"
- Each FAQ must appear in both HTML and JSON-LD

**Date Fields Explained:**
- `datePublished`: When the FAQ was first created (YYYY-MM-DD format)
- `dateModified`: When the FAQ was last updated (YYYY-MM-DD format)
- **Why they matter**: AI engines prioritize fresh content (95% of citations from content updated in last 10 months). These machine-readable dates signal content currency.
- **HTML vs Schema dates**: Use both! `<p class="meta">Last updated: ...</p>` is for humans; `datePublished`/`dateModified` are for AI engines

---

### Template 3: Evidence Panel

```html
<aside class="evidence-panel" id="evidence-latency-benchmark">
  <h4>Evidence: Response Time Benchmark</h4>

  <dl>
    <dt>Claim:</dt>
    <dd>Median API response time of 127ms for standard queries</dd>

    <dt>Methodology:</dt>
    <dd>Measured 1,000 API calls using standardized test queries
    against GPT-4 endpoint</dd>

    <dt>Data Source:</dt>
    <dd><a href="https://example.com/benchmarks/2025-07">Internal
    Benchmark Report Q3 2025</a></dd>

    <dt>Date:</dt>
    <dd>July 15, 2025</dd>

    <dt>Limitations:</dt>
    <dd>Results measured under optimal network conditions with pre-warmed
    connections; production performance may vary ±20ms</dd>

    <dt>Contact:</dt>
    <dd>research@example.com</dd>
  </dl>

  <p class="meta">Last updated: 2025-07-15</p>
</aside>
```

**Machine-Readable Facts JSON (optional but recommended):**

```json
{
  "page": "https://example.com/product-performance",
  "version": "2025-10-31",
  "lastUpdated": "2025-10-31T14:30:00Z",
  "facts": [
    {
      "id": "latency_median",
      "value": "127ms",
      "source": "https://example.com/benchmarks/2025-07",
      "as_of": "2025-07-15",
      "method": "1000 API calls, GPT-4 endpoint, standard queries"
    },
    {
      "id": "price",
      "value": "$99/month",
      "source": "https://example.com/pricing",
      "as_of": "2025-10-01"
    }
  ]
}
```

**Facts JSON Field Definitions:**
- `page`: URL of the page this data describes
- `version`: Human-readable version date (YYYY-MM-DD)
- `lastUpdated`: ISO 8601 timestamp when this JSON was last generated (YYYY-MM-DDTHH:MM:SSZ)
- `facts[].as_of`: When each specific fact's data was collected

**Why lastUpdated matters**: Enables AI agents to programmatically check data staleness and determine whether to fetch fresh data.

Host this as `page-name.json` alongside the HTML page so agents can fetch structured data directly.

---

### Template 4: How-To Section with Schema

```html
<article id="how-to-implement-faq-schema">
  <h2>How to Implement FAQ Schema on Your Website</h2>

  <ol>
    <li>
      <strong>Identify your top 15 customer questions</strong>
      <p>Review support tickets, "People Also Ask" results, and sales
      call recordings to find the most common questions.</p>
    </li>

    <li>
      <strong>Write 30-50 word answers for each question</strong>
      <p>Keep answers concise and factual. Front-load the direct answer,
      then add supporting details.</p>
    </li>

    <li>
      <strong>Add HTML structure with semantic markup</strong>
      <p>Use H3 for questions, paragraph tags for answers, and assign
      unique IDs to each FAQ item (#faq-question-slug).</p>
    </li>

    <li>
      <strong>Generate FAQPage JSON-LD schema</strong>
      <p>Use the template above or a schema generator. Place the script
      in your page's &lt;head&gt; section.</p>
    </li>

    <li>
      <strong>Validate with Google Rich Results Test</strong>
      <p>Visit search.google.com/test/rich-results and enter your page
      URL. Fix any errors reported.</p>
    </li>
  </ol>

  <p class="meta">Last updated: 2025-10-31</p>

  <!-- HowTo Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Implement FAQ Schema on Your Website",
    "description": "Step-by-step guide to adding FAQPage schema markup for better AI search visibility",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Identify your top 15 customer questions",
        "text": "Review support tickets, 'People Also Ask' results, and sales call recordings to find the most common questions."
      },
      {
        "@type": "HowToStep",
        "name": "Write 30-50 word answers for each question",
        "text": "Keep answers concise and factual. Front-load the direct answer, then add supporting details."
      },
      {
        "@type": "HowToStep",
        "name": "Add HTML structure with semantic markup",
        "text": "Use H3 for questions, paragraph tags for answers, and assign unique IDs to each FAQ item."
      },
      {
        "@type": "HowToStep",
        "name": "Generate FAQPage JSON-LD schema",
        "text": "Use the template above or a schema generator. Place the script in your page's head section."
      },
      {
        "@type": "HowToStep",
        "name": "Validate with Google Rich Results Test",
        "text": "Visit search.google.com/test/rich-results and enter your page URL. Fix any errors reported."
      }
    ]
  }
  </script>
</article>
```

---

## Implementation Checklist

When Claude Code generates AEO-optimized content for a website, verify:

### Content
- [ ] Product overview: 50 words, dated, under H1
- [ ] 15 FAQs: 30-50 words each, natural questions
- [ ] Evidence panels: method, data, date, limitations for key claims
- [ ] How-to sections: numbered steps with constraints
- [ ] "Last updated" dates on every page

### Structure
- [ ] Clear H2/H3 hierarchy
- [ ] Bullet points for lists
- [ ] Comparison tables where relevant
- [ ] Persistent anchor IDs for all FAQs (#faq-slug)
- [ ] Short paragraphs (2-3 sentences)

### Schema Markup
- [ ] FAQPage schema for FAQ section
- [ ] Every FAQ Question includes `datePublished` and `dateModified` fields
- [ ] Product schema for product pages
- [ ] HowTo schema for guides
- [ ] Organization schema for About page
- [ ] All schema placed in `<script type="application/ld+json">` in `<head>`
- [ ] All dates in YYYY-MM-DD format (or ISO 8601 for lastUpdated)

### Validation
- [ ] Validate schema with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test anchor links work
- [ ] Verify dates are current
- [ ] Check FAQ answers are 30-50 words
- [ ] Confirm all evidence blocks have sources + dates
- [ ] Facts JSON (if used) includes `lastUpdated` timestamp in ISO 8601 format

---

## Quick Testing Protocol

After generating content, test with AI engines:

### Manual Prompt Testing
Run these prompts against ChatGPT, Claude, and Gemini:

1. **Recognition:** "What is [Your Product]?"
2. **Comparison:** "Compare [Your Product] to [Competitor]"
3. **Best for:** "What's the best [category] for [use case]?"
4. **How-to:** "How do I [task with your product]?"
5. **Alternatives:** "What are alternatives to [Your Product]?"

### Check for:
- ✅ Brand mentioned by name
- ✅ Link to your website included
- ✅ Accurate information cited
- ✅ Evidence/data quoted
- ❌ Hallucinations or incorrect claims

### Track Results:
Create a simple scorecard (CSV or spreadsheet):

| Intent | Engine | Mentioned? | Linked? | Accurate? | Evidence Quoted? | Notes |
|--------|--------|------------|---------|-----------|------------------|-------|
| What is X | ChatGPT | Yes | Yes | Yes | No | Generic description |
| Compare X vs Y | Claude | No | No | N/A | N/A | Doesn't know us |

---

## Competitive Positioning Strategy

**Critical Insight:** Optimization aggressiveness should match your current authority level. The Princeton study reveals that challenger sites and established sites require opposite approaches.

### Authority Level Assessment

**Determine your site's authority tier:**

1. **Challenger/Low Authority** (Most startups, new sites, rank 5+)
   - Domain age < 2 years
   - Few inbound links from authoritative sources
   - Not currently cited by AI engines
   - Low search engine rankings for target keywords

2. **Established/High Authority** (Top-ranked, well-known brands, rank 1-3)
   - Domain age > 5 years
   - Strong backlink profile from authoritative sources
   - Already cited by AI engines regularly
   - Top 3 search rankings for target keywords

### Optimization Approach by Authority Level

#### For Challenger Sites (Aggressive Optimization)

**✅ DO: Go aggressive with GEO tactics**
- **Multiple extraction points:** 5-7 citation-ready sentences per page
- **Heavy citation layer:** Reference studies, papers, original research
- **Stat callouts everywhere:** Every claim backed by specific numbers
- **Expert attribution:** Your name + credentials + company format on all insights
- **Weekly micro-updates:** Constant freshness signals
- **Focused domain claiming:** Narrow expertise, deep coverage

**Princeton study finding:** Rank-5 sites gained **115% visibility** with proper aggressive optimization.

**Why this works:** You have nothing to lose and everything to gain. AI engines reward specificity and verifiability from emerging sources.

**Example structure:**
```markdown
## Property Valuation Accuracy

Eight-API synthesis reduces property analysis errors by 67%.
[Our 2024 accuracy study - https://example.com/studies/accuracy]

"Multi-source validation eliminates single-point-of-failure bias."
- John Doe, AI CTO at Company, developed the synthesis algorithm

Last updated: 2025-10-31
```

#### For Established Sites (Light Touch Optimization)

**⚠️ CAUTION: Over-optimization hurts established sites**
- **1-2 strategic extraction points:** Don't stuff every paragraph
- **Trust existing credibility:** Your brand already has authority
- **Natural language:** Avoid keyword-stuffed optimization patterns
- **Selective citations:** Add where genuinely valuable, not everywhere
- **Quarterly updates:** Less aggressive freshness signaling

**Princeton study finding:** Rank-1 sites that over-optimized **lost 30% visibility**.

**Why caution matters:** AI engines detect over-optimization patterns. When established sites suddenly shift to aggressive GEO tactics, it triggers quality penalties.

**Example structure:**
```markdown
## Our Approach to Property Valuation

We combine eight data sources including tax assessments, recent comparable sales,
and neighborhood trend analysis. Our methodology has been refined over five years
of serving 10,000+ real estate professionals.

Independent validation: 94% accuracy rate (National Real Estate Technology Council, 2024)
```

### Competitive Advantage Tactics

**Your position as challenger is an advantage:**
- Nike (rank-1) must be conservative
- You (rank-5+) can be aggressive
- AI engines reward emerging sources with strong verification
- Established brands often underestimate GEO, leaving opportunity

**Strategic opportunities:**
- ✅ Claim narrow domains with authoritative depth
- ✅ Publish original research and data
- ✅ Weekly micro-updates show active expertise
- ✅ Focus on extractable, quotable claims
- ✅ Build citation-worthy evidence panels

**Avoid competing head-on:**
- ❌ Don't try to rank for "real estate" (too broad, dominated)
- ✅ DO claim "eight-API property valuation methodology" (specific, ownable)

### Self-Assessment Checklist

Before optimizing, determine your approach:

- [ ] Identified authority level (Challenger vs Established)
- [ ] Chosen appropriate optimization aggressiveness
- [ ] If Challenger: Prepared for 3-5 extraction points per page
- [ ] If Established: Limiting to 1-2 strategic extraction points
- [ ] Avoided traditional SEO keyword stuffing
- [ ] Focused on narrow domain claiming vs broad coverage

---

## Content Refresh Cadence

**Critical insight:** 95% of AI citations come from content published/updated in the last 10 months.

**Recommended schedule:**

- **Homepage & FAQ:** Review monthly, update quarterly
- **Product pages:** Update when features change (immediately)
- **Evidence blocks:** Refresh data every 6 months minimum
- **Blog posts:** Add "Last reviewed" date even if unchanged
- **How-to guides:** Update when process changes

**Quick refresh checklist:**
1. Update "Last updated" dates
2. Refresh any time-sensitive data
3. Add new FAQs from recent customer questions
4. Retire outdated information
5. Re-validate schema markup

---

## Key Principles

### 1. Machine-First Content
Write for AI agents as primary audience. Humans benefit from the summaries AI generates.

### 2. Evidence Over Claims
Don't say "fastest" - say "127ms median latency in Q3 2025 benchmark of 1,000 queries."

### 3. Structured Over Creative
AI prefers scannable structure over narrative flow. Use lists, tables, and clear sections.

### 4. Fresh Over Perfect
Content updated 6 months ago outperforms perfect content from 2 years ago.

### 5. Quotable Over Comprehensive
Better to have 50 words AI can quote exactly than 500 words it has to summarize.

---

## Common Mistakes to Avoid

### Content Structure Errors
❌ **FAQ answers too long** → Keep to 30-50 words, front-load direct answer
❌ **Buried answers** → Put the conclusion first, details second
❌ **Pronoun ambiguity** → Say "the product" not "it" (breaks extraction)
❌ **Long sentences** → Violates 18-token rule; aim for 15-20 words for key claims
❌ **Multi-topic pages** → Split into focused single-concept pages (domain.com/specific-topic)

### Evidence & Authority Errors
❌ **Vague claims** → Include specific data, methods, dates ("reduces by 67%" not "improves significantly")
❌ **Missing evidence** → Add methodology, dataset, limitations for all claims
❌ **No individual attribution** → Use "Name, Title at Company" format, not company name alone
❌ **Missing citations** → Reference studies, papers, original research with dates
❌ **Unsupported statistics** → Every number needs source + "as of [date]"

### Technical Implementation Errors
❌ **Missing dates** → Add "Last updated: YYYY-MM-DD" on every page
❌ **No schema markup** → FAQPage schema is essential; validate with Google Rich Results Test
❌ **Stale content** → Update within 10 months or lose 95% of citation opportunity
❌ **Generic metadata** → Specific, extractable meta descriptions

### Optimization Strategy Errors

#### Traditional SEO Tactics (Actively Harmful for GEO)
❌ **Keyword stuffing** → AI engines penalize unnatural keyword density
❌ **Generic listicles** → "Top 10 X" without original insight or data
❌ **Vague hedging** → "May help improve" instead of specific claims with data
❌ **Aggregated content** → Synthesizing others' work without unique angle
❌ **Over-optimization patterns** → Especially harmful for established/high-authority sites

#### Authority-Level Mismatches
❌ **Established sites going aggressive** → Rank-1 sites lost 30% with over-optimization
❌ **Challengers being too conservative** → New sites need 5-7 extraction points per page, not 1-2
❌ **Broad topic claiming** → Better to own "eight-API property valuation" than "real estate"
❌ **Ignoring competitive position** → Assess authority level before choosing optimization approach

### Content Quality Errors
❌ **Marketing speak** → Use factual, specific language with verifiable claims
❌ **AI-generated without verification** → Obvious patterns trigger quality filters
❌ **No first-hand expertise** → Original research and data beats synthesis
❌ **Anonymous content** → Attribution matters for authority signals

### Update & Maintenance Errors
❌ **One-and-done publishing** → Static content dies; need weekly micro-updates
❌ **No freshness signals** → Dates, version numbers, "last reviewed" timestamps required
❌ **Outdated examples** → References to old data without update notes
❌ **Ignoring feedback loops** → Not testing with actual AI engines (ChatGPT, Claude, Gemini)

---

## Tools & Resources

**Schema Generators:**
- [Google FAQ Schema Generator](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

**AEO Monitoring (optional):**
- ChatRank.ai - Track mentions across AI engines
- Otterly - GEO audit tool with citation tracking
- Profound - Content optimization for AI search

**Testing:**
- Manual prompts to ChatGPT, Claude, Gemini
- Google AI Overviews (google.com with AI mode)
- Perplexity.ai (tracks sources)

---

## AI Visibility Assessment Framework

Use this framework to evaluate existing content for AI citation readiness and identify optimization priorities.

### Assessment Dimensions

For each URL analyzed, score across four dimensions (0-10 scale):

#### 1. Extraction Score (0-10)
**Question:** How many citation-ready sentences exist?

**Scoring:**
- **0-2:** No extractable sentences; all content requires context or summarization
- **3-5:** 1-2 quotable statements but buried in long paragraphs
- **6-8:** 3-5 clear, self-contained statements under 20 words
- **9-10:** 5+ citation-ready statements, highlighted and easily identifiable

**Red flags:**
- Long, winding sentences requiring summarization
- Claims dependent on surrounding paragraphs
- Ambiguous references ("this", "that", "it" without clear antecedents)
- No statements under 25 words

**What to look for:**
- Self-contained statements under 18 tokens (~15-20 words)
- Complete thoughts requiring zero surrounding context
- Confident, declarative claims
- No nested clauses or complex syntax

#### 2. Focus Score (0-10)
**Question:** How narrowly defined is the topic?

**Scoring:**
- **0-2:** Multi-topic page covering 5+ concepts; sprawling content
- **3-5:** 2-4 related topics on same page
- **6-8:** Single primary concept with 1-2 supporting subtopics
- **9-10:** Laser-focused on ONE specific concept/question

**Red flags:**
- Sprawling multi-topic coverage
- Adjacent topic dilution
- Content outside core expertise area
- Signals of being an "aggregator" rather than expert

**What to look for:**
- Single-topic pages (domain.com/specific-concept)
- Narrow, deep expertise in one area
- Consistent topic clustering
- Clear domain boundaries

#### 3. Authority Score (0-10)
**Question:** How strong are expertise signals?

**Scoring:**
- **0-2:** Anonymous authorship; no citations; unsupported claims
- **3-5:** Generic claims with minimal attribution; company name only
- **6-8:** Clear authorship, some citations, specific data points
- **9-10:** Expert attribution (name + credentials + org), verifiable citations, first-hand research

**Red flags:**
- Anonymous or ambiguous authorship
- Institution name without individual attribution
- Unsupported claims
- Institutional shadow (org overshadowing individual)

**What to look for:**
- Proper name + credential + org in clean format
- Citations to verifiable sources
- Specific data points and studies referenced
- First-hand expertise signals

#### 4. Freshness Score (0-10)
**Question:** How recently updated?

**Scoring:**
- **0-2:** No dates; appears 2+ years old based on content
- **3-5:** Dated 12-24 months ago; no recent updates
- **6-8:** Updated within 6-11 months
- **9-10:** Updated within last 90 days; clear micro-update signals

**Red flags:**
- Static "evergreen" content with no updates
- Outdated examples or references
- No indication of ongoing maintenance

**What to look for:**
- Recent update timestamps
- Micro-updates to existing content (refreshed stats, new citations)
- Living document signals
- "Last updated" dates visible

### Optimization Level Assessment

Based on scores + authority level:

**For High-Authority/Top-Ranked Sites:**
- **Optimal:** Light touch optimization
  - 1-2 strategic extractable sentences per page
  - Trust existing credibility
  - Natural fluency over keyword stuffing
- **Avoid:** Aggressive multi-technique optimization (triggers detection)

**For Low-Authority/Challenger Sites:**
- **Optimal:** Aggressive but focused optimization
  - Multiple 18-token extraction points (5-7 per page)
  - Clear expertise signals
  - Citation-rich content
  - Focused domain claiming
- **Avoid:** Trying to cover too many topics; dilution of expertise

### Content Evaluation Checklist

**Scan content for:**

- [ ] Can you extract 3-5 self-contained sentences under 18 tokens?
- [ ] Does the page focus on ONE specific concept/question?
- [ ] Are key claims highlighted or easily identifiable?
- [ ] Is authorship clearly attributed with credentials?
- [ ] Are there verifiable data points or citations?
- [ ] Has content been updated in the last 90 days?
- [ ] Does the URL structure indicate topic specificity?
- [ ] Is the content human-readable while being extraction-friendly?
- [ ] Does it avoid content sprawl outside core expertise?
- [ ] Are claims confident and definitive (not hedged)?

### Signal Quality Markers

**High Signal (Citation-Worthy):**
- Verifiable data with methodology
- Specific studies/sources named with dates
- First-hand expertise and original research
- Unique insights not found elsewhere
- Clear, quotable statements

**Low Signal (Noise Floor):**
- Generic listicles without original insight
- Synthesized content without unique angle
- Obvious AI generation patterns
- Vague, hedged language ("may help", "could potentially")
- Aggregated content without attribution

### Output Format for Assessment

Create a simple scorecard per URL:

| Dimension | Score (0-10) | Notes |
|-----------|-------------|-------|
| **Extraction** | X | "Found 2 quotable statements but buried in 300-word paragraphs" |
| **Focus** | X | "Single topic (property valuation) with clear boundaries" |
| **Authority** | X | "Company name only; no individual attribution or citations" |
| **Freshness** | X | "Last updated 14 months ago; several outdated stats" |
| **Overall** | XX/40 | |
| **Optimization Level** | Under/Optimal/Over | "Challenger site - recommend aggressive optimization" |

**Priority Actions:** List top 3-5 changes needed based on lowest scores.

### Quick Assessment Questions

Answer these to rapidly gauge AEO readiness:

1. **Extraction test:** Can you copy-paste 3 sentences that fully answer a question without context? (Yes/No)
2. **Focus test:** Does the URL indicate exactly one topic? (Yes/No)
3. **Authority test:** Is the author named with credentials? (Yes/No)
4. **Freshness test:** Updated within 90 days? (Yes/No)
5. **Citation test:** Are there 2+ verifiable sources with dates? (Yes/No)

**Score:**
- **0-2 Yes:** Critical optimization needed
- **3-4 Yes:** Good foundation, needs enhancement
- **5 Yes:** Excellent AEO readiness

---

## Example: Full Homepage Optimization

Here's what the top of an optimized homepage looks like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AEO Optimizer - AI Search Engine Optimization Tool</title>

  <!-- Product Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AEO Optimizer",
    "description": "Content analysis tool that identifies gaps in website structure for AI search engines. Supports ChatGPT, Claude, and Gemini analysis.",
    "brand": {
      "@type": "Brand",
      "name": "Example Company"
    }
  }
  </script>

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AEO Optimizer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO Optimizer is a content analysis tool that identifies gaps in website structure for AI search engines. As of October 2025, it supports ChatGPT, Claude, and Gemini analysis. This matters because 60% of searches now end without a click."
        }
      }
      // ... 14 more FAQs
    ]
  }
  </script>
</head>
<body>
  <!-- Product Overview -->
  <main>
    <article id="product-overview">
      <h1>What is AEO Optimizer?</h1>
      <div class="overview-answer">
        <p>AEO Optimizer is a content analysis tool that identifies gaps
        in website structure for AI search engines. As of October 2025,
        it supports ChatGPT, Claude, and Gemini analysis. This matters
        because 60% of searches now end without a click, making AI
        citation the new discovery channel.</p>
        <p class="meta">Last updated: 2025-10-31</p>
      </div>
    </article>

    <!-- FAQ Section -->
    <section id="faq">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-item" id="faq-what-is-aeo-optimizer">
        <h3>What is AEO Optimizer?</h3>
        <p>AEO Optimizer is a content analysis tool that identifies gaps
        in website structure for AI search engines. As of October 2025,
        it supports ChatGPT, Claude, and Gemini analysis. This matters
        because 60% of searches now end without a click.</p>
        <p class="meta">Last updated: 2025-10-31</p>
      </div>

      <!-- 14 more FAQ items -->
    </section>
  </main>
</body>
</html>
```

---

## Next Steps

When using this guide in a Claude Code session:

1. **Analyze target website:** Identify missing elements (product overview, FAQs, schema, evidence)
2. **Generate content:** Use templates above to create optimized content
3. **Add schema markup:** Implement JSON-LD for all relevant sections
4. **Validate:** Test with Google Rich Results Test and manual AI prompts
5. **Track results:** Create simple scorecard to monitor citations over 4-8 weeks

This guide prioritizes **immediate action** over perfect strategy. Generate content, test with AI engines, iterate based on results.
