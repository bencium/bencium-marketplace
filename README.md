# bencium-marketplace

A Claude Code plugin marketplace with 12 skills for design, architecture, and productivity by [bencium.io](https://bencium.io).

## Installation

### Claude Code (CLI)

Add the marketplace, then install individual plugins:

```bash
# Add marketplace
/plugin marketplace add bencium/bencium-marketplace

# Install any plugin
/plugin install bencium-controlled-ux-designer@bencium-marketplace
```

### Claude.ai Cowork App

These skills work as SKILL.md files in the Claude Cowork app. Copy the `skills/` directory from any plugin into your project's `.claude/skills/` folder.

### Other Coding Tools

The SKILL.md format is compatible with 40+ AI coding tools that support markdown-based skill files, including OpenAI Codex, Gemini CLI, Cursor, Windsurf, and others. Copy the skill files into the tool's prompt or context directory.

---

## Plugins

### Design (6 plugins)

| Plugin | Description |
|--------|-------------|
| **bencium-controlled-ux-designer** | Systematic UX design for production. WCAG 2.1 AA, mathematical scales, always-ask-first protocol. Best for enterprise and regulated industries. |
| **bencium-innovative-ux-designer** | Bold creative UX that commits to distinctive directions. Shadows, gradients, experimental typography. Best for landing pages and campaigns. |
| **bencium-impact-designer** | Production-grade frontend interfaces that avoid generic AI aesthetics. Based on Anthropic's Frontend Designer Skill. |
| **design-audit** | Systematic visual UI/UX audits producing phased, implementation-ready design plans. Purely visual -- does not touch functionality. |
| **typography** | Professional typography rules enforcing correct quote marks, dashes, spacing, hierarchy. Auto-applies to generated HTML/CSS/React code. |
| **relationship-design** | AI-first interfaces that build ongoing relationships through memory, trust evolution, and collaborative planning. |

### Productivity (3 plugins)

| Plugin | Description |
|--------|-------------|
| **adaptive-communication** | Detects user communication style (high-context relational vs low-context transactional) and adapts responses. |
| **negentropy-lens** | Decision-support framework evaluating systems through entropy (decay) vs negentropy (growth), surfacing tacit knowledge gaps. |
| **bencium-aeo** | Answer Engine Optimization for AI search visibility. Optimize content for ChatGPT, Claude, Gemini, AI Overviews citations. |

### Development (3 plugins)

| Plugin | Description |
|--------|-------------|
| **bencium-code-conventions** | Code style and tech stack conventions for React/Next.js/TypeScript, TailwindCSS, Supabase projects. |
| **renaissance-architecture** | Software architecture principles for building genuinely new solutions through first-principles thinking, not derivative work. |
| **human-architect-mindset** | Systematic architectural thinking -- domain modeling, systems thinking, constraint navigation, and AI-aware problem decomposition. |

---

## Plugin Structure

Each plugin follows the standard Claude Code plugin format:

```
plugin-name/
  .claude-plugin/
    plugin.json
  skills/
    skill-name/
      SKILL.md
      [reference files]
```

## Bonus: Spinner Verbs

64 satirical tech-bro spinner verbs that replace Claude Code's default "Thinking..." messages with phrases like *Enshittifying platforms*, *Rebranding failures as "pivots"*, and *Overcompensating with rocket size*.

### Install

Copy `spinner-verbs.json` contents into your `~/.claude/settings.json`:

```json
{
  "spinnerVerbs": {
    "mode": "replace",
    "verbs": ["..."]
  }
}
```

Or append to defaults instead of replacing:

```json
{
  "spinnerVerbs": {
    "mode": "append",
    "verbs": ["..."]
  }
}
```

See [`spinner-verbs.json`](spinner-verbs.json) for the full list.

---

## License

MIT
