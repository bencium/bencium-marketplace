---
name: bencium-code-conventions
description: Bence's code style, tech stack, and workflow conventions
when_to_use: When writing code or setting up projects for Bence
---

# Code Conventions

## Core Technologies
- **Frontend:** ReactJS, Next.js (App Router structure), TypeScript
- **Styling:** TailwindCSS v3.x (never v4), Shadcn UI
- **Build Tools:** Vite (when applicable)
- **Backend:** Postgres compatible convex.dev or Supabase (always ask, never local postgres)
- **Deployment:** Netlify or Vercel or Fly - suggest
- **Environment:** Mac M2, Python3 with virtual environments, no CUDA, no Docker
- **Alternative Languages:** Avoid python if you can, try using RUST

## Code Style & Structure
- Use ES modules (import/export) syntax
- Destructure imports when possible
- Use TypeScript for all new code
- Use async/await instead of Promise chains
- Prefer const/let over var; use early returns
- Use consts instead of functions: `const toggle = () =>`. Define types.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Use lowercase with dashes for directory names (e.g., `components/auth-wizard`)

## Framework Conventions
- **Next.js:** Use App Router (app directory) structure and page.tsx files
- **React:** Functional and declarative patterns; avoid classes
- **State Management:** Zustand, TanStack React Query
- **Validation:** Zod for schema validation

## Component Library & Styling
- **Component Library:** Prefer shadcn components from `@/components/ui`
- **Styling:** Tailwind utility classes
- **Layout:** Grid/flex wrappers with `gap` for spacing
- **Icons:** `@phosphor-icons/react`
- **Toasts:** `sonner` for notifications
- Always add loading states, spinners, placeholder animations

## Quality Assurance & Testing
- **TDD:** Write failing tests first, commit them, then iterate until suite passes
- Never mock tests - if there's a test script, execute all until done
- Always write SQL in chunks with test steps after each chunk
- Typecheck after making code changes
- Run tests before committing
- Prefer running single tests for performance, not whole suite

## Error Handling
- Implement proper error handling and user input validation
- Error messages should be understood by non-technical people
- Use early returns for error conditions
- Test APIs via curl commands first, then implement in code

## Performance & Architecture
- Minimize `'use client'`, `useEffect`, `setState`; favor RSC and Next.js SSR
- Implement dynamic imports for code splitting
- Optimize images: WebP format, size data, lazy loading
- Favor small, simple, well-named modules

## Development Workflow
**Process:** Explore → Plan → Code → Commit
- Read relevant files
- Think through a plan
- Implement
- Then commit
- Never local backend, always ask (usually Supabase, Neon)
- Minimal dependency, no docker

## Environment & Deployment
- Add .env files for API keys; warn me to save keys in Vercel/Netlify env variables
- Write code deployable to Netlify or Vercel; prepare to build locally first
- Document progress in progress.md; ask for implementation plan
