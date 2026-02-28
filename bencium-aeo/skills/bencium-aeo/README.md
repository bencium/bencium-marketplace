# AISEO - Answer Engine Optimization Content Generator

Generate machine-readable content that earns citations from ChatGPT, Claude, Gemini, and Google AI Overviews.

**Not a tool or app** - this is a guided workflow with templates for use with Claude Code.

---

## What This Repository Does

This repo contains instructions and templates for Claude Code to generate AEO-optimized content for any website. When you start a Claude Code session here, Claude will:

1. Analyze your website for AEO gaps
2. Generate optimized content using research-backed templates
3. Create complete JSON-LD schema markup
4. Provide copy-paste ready HTML

**No coding required.** Just natural language requests to Claude.

---

## Quick Start

### 1. Open Claude Code in this directory
```bash
cd /Users/bencium/AISEO
# Start Claude Code session
```

### 2. Make a request
```
"Generate AEO content for my product at example.com/product"
```

### 3. Receive optimized content
- Product overview (50 words + schema)
- 15 FAQs (30-50 words each + FAQPage schema)
- Evidence blocks with citations
- Complete JSON-LD markup

### 4. Implement on your site
Copy the generated HTML into your website or CMS.

### 5. Validate
- Test schema with [Google Rich Results Test](https://search.google.com/test/rich-results)
- Run manual prompts on ChatGPT, Claude, Gemini

---

## Files in This Repository

| File | Purpose | Audience |
|------|---------|----------|
| `prd.md` | Complete AEO content generation guide with templates | Claude Code |
| `CLAUDE.md` | Project context and development guidelines | Claude Code |
| `README.md` | Usage instructions and workflow | You (human) |

**Key file:** `prd.md` contains all the templates, best practices, and guidelines Claude uses to generate content.

---

## What You'll Get

### 1. Product Overview Block
```
50-word definition with:
- What the product is
- Why it matters
- "Last updated" date
- Product schema markup
```

### 2. 15 FAQ Items
```
Each FAQ includes:
- 7-12 word natural question
- 30-50 word answer (AI sweet spot)
- Persistent anchor link
- FAQPage JSON-LD schema
- "Last updated" date
```

### 3. Evidence Blocks
```
For key claims:
- Claim statement
- Methodology
- Data source + date
- Limitations
- Contact info
```

### 4. JSON-LD Schema
```
Complete working schemas for:
- FAQPage (FAQ sections)
- HowTo (step-by-step guides)
- Product (product pages)
- Organization (about page)
```

### 5. How-To Sections
```
When relevant:
- Numbered steps
- Prerequisites/constraints
- Expected outcomes
- HowTo schema markup
```

---

## How to Use This Repository

### Preparation (Before Starting Claude Session)

Gather this information about your website/product:

1. **Target URL or page description**
   - What page are you optimizing?
   - Current content (if any)

2. **Product/service details**
   - What is it?
   - Why does it matter?
   - Key differentiators

3. **Top customer questions** (aim for 15)
   - Check support tickets
   - Review sales call recordings
   - Look at "People Also Ask" in Google
   - Check competitor FAQs

4. **Evidence/data** (if available)
   - Research findings
   - Benchmarks or performance data
   - Case studies
   - Industry statistics

5. **Competitor information** (optional)
   - 2-3 competitor URLs
   - How they position themselves

### During Claude Code Session

**Simple approach:**
```
"Generate AEO content for [website URL or product description]"
```

**Detailed approach:**
```
"I need AEO-optimized content for [product name].

Product: [brief description]
Target page: [URL]
Top questions: [list 5-10 customer questions]
Data available: [any benchmarks, research, or stats]

Generate:
- Product overview (50 words)
- 15 FAQs with schema
- Evidence blocks for key claims
- All necessary JSON-LD markup"
```

Claude will:
1. Ask clarifying questions if needed
2. Use templates from `prd.md` to generate content
3. Create complete, working HTML/schema
4. Provide implementation guidance

### After Receiving Generated Content

1. **Review the content**
   - Check FAQ answers are 30-50 words
   - Verify evidence blocks have sources + dates
   - Ensure product overview is clear and specific

2. **Implement on your website**
   - Copy HTML to your page
   - Add JSON-LD schema to `<head>` section
   - Ensure anchor links work

3. **Validate**
   - Schema: [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Content: Check FAQ word counts, dates present
   - Links: Test all anchor IDs work

4. **Test with AI engines**
   - ChatGPT: "What is [your product]?"
   - Claude: "Compare [your product] to [competitor]"
   - Gemini: "What's the best [category] for [use case]?"
   - Check if your site is mentioned, linked, cited

5. **Track results**
   - Create simple scorecard (CSV or spreadsheet)
   - Test monthly with same prompts
   - Update content quarterly

---

## Example Claude Code Session

### You:
```
"Generate AEO content for my SaaS analytics product.

Product: Real-time analytics dashboard for e-commerce stores
URL: analytics.example.com
Top questions:
- What is real-time analytics?
- How is this different from Google Analytics?
- What metrics can I track?
- How long does setup take?
- What integrations are supported?

We have benchmark data: 127ms median query latency from Q3 2025 study"
```

### Claude Will Generate:

**1. Product Overview:**
```html
<article id="product-overview">
  <h1>What is [Product Name]?</h1>
  <div class="overview-answer">
    <p>[Product Name] is a real-time analytics dashboard for
    e-commerce stores that tracks customer behavior and sales metrics.
    As of October 2025, it processes over 10M events daily with
    sub-second latency. This matters because real-time insights enable
    immediate optimization of marketing campaigns and inventory.</p>
    <p class="meta">Last updated: 2025-10-31</p>
  </div>
  <!-- Product schema -->
  <script type="application/ld+json">
  { ... complete schema ... }
  </script>
</article>
```

**2. 15 FAQs with Schema:**
```html
<section id="faq">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item" id="faq-what-is-realtime-analytics">
    <h3>What is real-time analytics?</h3>
    <p>Real-time analytics processes and displays customer behavior
    data within seconds of events occurring, enabling immediate
    business decisions. Unlike batch processing (hourly/daily),
    real-time systems update dashboards continuously as customers
    interact with your store.</p>
    <p class="meta">Last updated: 2025-10-31</p>
  </div>

  <!-- 14 more FAQs -->

  <!-- FAQPage Schema -->
  <script type="application/ld+json">
  { ... complete FAQPage schema with all 15 FAQs ... }
  </script>
</section>
```

**3. Evidence Block:**
```html
<aside class="evidence-panel" id="evidence-query-latency">
  <h4>Evidence: Query Performance Benchmark</h4>
  <dl>
    <dt>Claim:</dt>
    <dd>127ms median query latency for dashboard analytics</dd>

    <dt>Methodology:</dt>
    <dd>Measured 10,000 dashboard queries across 50 e-commerce stores
    over 30-day period</dd>

    <dt>Data Source:</dt>
    <dd><a href="https://example.com/benchmarks/2025-q3">Q3 2025
    Performance Report</a></dd>

    <dt>Date:</dt>
    <dd>September 15, 2025</dd>

    <dt>Limitations:</dt>
    <dd>Performance measured on standard tier; enterprise tier may
    vary ±15ms based on custom configurations</dd>
  </dl>
</aside>
```

Plus complete schema markup, validation guidance, and implementation checklist.

---

## Key Principles from Research

### Content Structure
- **30-50 word answers** - Sweet spot for AI extraction and voice search
- **Front-load answers** - Put conclusion first, details second
- **Evidence over claims** - "127ms latency" not "incredibly fast"
- **Fresh dates** - 95% of ChatGPT citations from last 10 months

### Schema Requirements
- **JSON-LD format** - Place in `<script type="application/ld+json">` in `<head>`
- **FAQPage is critical** - Most important schema for AEO
- **Persistent anchors** - Each FAQ needs stable ID (#faq-slug)
- **Validate everything** - Use Google Rich Results Test

### Writing Style
- **Specific over vague** - Include numbers, dates, methods
- **Structured over narrative** - Lists, tables, clear sections
- **Complete sentences** - Avoid pronoun ambiguity ("the product" not "it")
- **Short paragraphs** - 2-3 sentences maximum

---

## Validation Checklist

After implementing generated content, verify:

### Content Quality
- [ ] Product overview is exactly 50 words (±5)
- [ ] All 15 FAQs present with 30-50 word answers
- [ ] "Last updated" date on every section
- [ ] Evidence blocks include: claim, method, data, date, limitations
- [ ] No marketing fluff - specific, factual language

### Structure
- [ ] Clear H2/H3 heading hierarchy
- [ ] Each FAQ has unique anchor ID (#faq-slug-format)
- [ ] Bullet points used for lists
- [ ] Comparison tables where relevant
- [ ] Short paragraphs (2-3 sentences)

### Schema Markup
- [ ] FAQPage schema in `<head>` section
- [ ] Every FAQ Question includes `datePublished` and `dateModified` fields
- [ ] Product schema (if product page)
- [ ] HowTo schema (if guide/tutorial)
- [ ] Schema validates with no errors in [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] All FAQ content matches between HTML and JSON-LD
- [ ] All dates use YYYY-MM-DD format (or ISO 8601 for timestamps)

### Technical
- [ ] All anchor links work when clicked
- [ ] Schema is valid JSON (no syntax errors)
- [ ] "Last updated" dates are current
- [ ] Evidence block sources are real, working URLs
- [ ] Facts JSON (if used) includes `lastUpdated` timestamp in ISO 8601 format

---

## Testing Protocol

### Manual AI Engine Testing

Run these prompts across ChatGPT, Claude, and Gemini:

1. **Recognition:** "What is [Your Product]?"
2. **Comparison:** "Compare [Your Product] to [Competitor]"
3. **Best for:** "What's the best [category] for [use case]?"
4. **How-to:** "How do I [task with your product]?"
5. **Alternatives:** "What are alternatives to [Your Product]?"

### Track in Scorecard

| Intent | Engine | Mentioned? | Linked? | Accurate? | Evidence Quoted? | Notes |
|--------|--------|------------|---------|-----------|------------------|-------|
| What is X | ChatGPT | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | Generic description |
| Compare X vs Y | Claude | ❌ No | ❌ No | N/A | N/A | Doesn't know us yet |
| Best [category] | Gemini | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | Cited our benchmark |

### Success Criteria

**4-8 weeks after implementation:**
- Mentioned in ≥3 target intents across ≥2 engines
- At least 1 engine links to your site
- Information cited is accurate

**12 weeks:**
- Stable inclusion for top intents
- Rising mentions in AI Overviews
- Agent-extractable facts being used

---

## Content Refresh Cadence

**Critical insight:** 95% of AI citations come from content updated in the last 10 months.

### Update Schedule

| Content Type | Check | Update |
|--------------|-------|--------|
| Homepage & FAQ | Monthly review | Quarterly update |
| Product pages | When features change | Immediately |
| Evidence blocks | Every 6 months | When data refreshes |
| Blog posts | Quarterly | Add "Last reviewed" even if unchanged |
| How-to guides | When process changes | Immediately |

### Quick Refresh Checklist
1. Update "Last updated" dates
2. Refresh time-sensitive data
3. Add new FAQs from recent customer questions
4. Retire outdated information
5. Re-validate schema markup
6. Re-run AI engine tests

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| ❌ FAQ answers too long | ✅ Keep to 30-50 words |
| ❌ Missing dates | ✅ Add "Last updated" everywhere |
| ❌ Vague claims | ✅ Include specific data, methods, dates |
| ❌ No schema markup | ✅ FAQPage schema is essential |
| ❌ Marketing speak | ✅ Use factual, specific language |
| ❌ Buried answers | ✅ Front-load the answer, details second |
| ❌ Pronoun ambiguity | ✅ Say "the product" not "it" |
| ❌ Missing evidence | ✅ Add methodology for all claims |
| ❌ Stale content | ✅ Update within 10 months or lose visibility |

---

## Tools & Resources

### Schema Validation
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Validate schema markup
- [Schema.org Documentation](https://schema.org/) - Official schema reference
- [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/faqpage) - FAQPage guidelines

### AEO Monitoring (Optional)
- **ChatRank.ai** - Track citations across AI engines ($49/month)
- **Otterly** - GEO audit tool with citation tracking
- **Profound** - Content optimization for AI search

### Manual Testing
- **ChatGPT** - chat.openai.com
- **Claude** - claude.ai
- **Gemini** - gemini.google.com
- **Google AI Overviews** - google.com (enable AI mode)
- **Perplexity** - perplexity.ai (shows sources clearly)

---

## Tech Stack

**No dependencies required:**
- Pure HTML/CSS
- JSON-LD schema (JavaScript in `<script>` tags)
- Works with any CMS or static site generator
- Claude Code for content generation only

**Compatible with:**
- WordPress (paste into Gutenberg blocks or HTML)
- Shopify (paste into pages or theme templates)
- Webflow (paste into Embed components)
- Static sites (paste into HTML files)
- Any CMS that accepts HTML

---

## Future Claude Code Sessions

Each new Claude Code session in this directory can:

### Generate New Content
```
"Generate AEO content for [new page/product]"
```

### Refresh Existing Content
```
"Update the FAQ section with new questions and refresh dates"
```

### Expand Content
```
"Add 5 more FAQs about [topic]"
"Generate evidence blocks for [specific claims]"
```

### Validate Schema
```
"Check if this schema is correct: [paste schema]"
```

### Analyze Competitors
```
"Analyze how [competitor URL] structures their content for AEO"
```

---

## Workflow Summary

```
1. PREPARE
   ├─ Gather product info
   ├─ List top 15 customer questions
   ├─ Collect evidence/data
   └─ Note competitors

2. GENERATE (Claude Code session)
   ├─ "Generate AEO content for [URL/product]"
   ├─ Claude analyzes requirements
   ├─ Claude uses prd.md templates
   └─ Receive complete HTML + schema

3. IMPLEMENT
   ├─ Copy HTML to your website
   ├─ Add schema to <head>
   └─ Verify anchor links work

4. VALIDATE
   ├─ Google Rich Results Test
   ├─ Check FAQ word counts
   ├─ Verify all dates present
   └─ Test anchor links

5. TEST
   ├─ Manual prompts (ChatGPT, Claude, Gemini)
   ├─ Track in scorecard
   └─ Monitor over 4-8 weeks

6. MAINTAIN
   ├─ Monthly review
   ├─ Quarterly updates
   └─ Refresh data every 6 months
```

---

## Questions?

### "Do I need coding skills?"
No. Claude generates ready-to-use HTML. Just copy/paste into your CMS.

### "How long does it take?"
- Claude session: 10-15 minutes
- Implementation: 20-30 minutes
- Validation: 10 minutes
- **Total: ~1 hour per page**

### "Can I use this for multiple websites?"
Yes. Each Claude session can generate content for different sites/products.

### "What if I don't have 15 customer questions?"
Claude can help generate relevant questions based on your product description.

### "Do I need all the evidence blocks?"
No. Start with product overview + 15 FAQs. Add evidence blocks as you gather data.

### "How do I know if it's working?"
Track with manual AI engine tests (prompt scorecard). Results typically visible in 4-8 weeks.

### "Can I modify the generated content?"
Yes! Treat Claude's output as a strong starting point. Edit to match your voice, but keep:
- 30-50 word FAQ answers
- Specific evidence with dates
- "Last updated" dates
- Schema structure intact

---

## Example Use Cases

### SaaS Product Pages
Generate optimized product overviews, feature FAQs, and comparison content that helps AI engines understand and cite your product.

### E-commerce Category Pages
Create category overviews with structured product information that AI can extract and recommend to shoppers.

### Service Business Websites
Build expertise-demonstrating content with evidence blocks showing methodology, case studies, and credentials.

### Documentation Sites
Structure technical docs with HowTo schema and clear step-by-step guides that AI can parse and cite.

### Blog Posts
Transform blog content with FAQ sections, evidence blocks, and proper schema to increase AI discoverability.

---

## Next Steps

1. **Read prd.md** - Familiarize yourself with the templates and best practices
2. **Prepare your info** - Gather product details and customer questions
3. **Start a Claude session** - Say "Generate AEO content for [your website]"
4. **Implement & validate** - Copy content to your site, test schema
5. **Track results** - Monitor AI engine citations over 4-8 weeks

**Remember:** This is about immediate action over perfect strategy. Generate content, test with AI engines, iterate based on results.

---

## License

This repository contains guides and templates for content generation. Generated content is yours to use freely.
