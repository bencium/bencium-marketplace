# Vanity Engineering Detection Patterns

Concrete patterns to scan for during review. Each pattern includes what to look for,
why it qualifies as vanity, and what the simpler alternative is.

---

## Category 1: Premature Abstraction

### Single-Implementation Interfaces
**Signal**: Interface/abstract class/trait with exactly one concrete implementation.
**Why vanity**: Abstraction without variation is indirection. It adds a file, a concept,
and a navigation hop for zero polymorphic benefit.
**Simpler alternative**: Use the concrete implementation directly. Extract an interface
when (not if) a second implementation actually materialises.
**Severity**: V1 (one or two instances), V2 (systemic pattern across the codebase)

### Plugin Systems with No Plugins
**Signal**: Registration/discovery/loading mechanism for extensibility, with 0-2 "plugins"
that are all maintained by the same team.
**Why vanity**: Plugin architecture is one of the most expensive abstractions to maintain.
It introduces indirection, configuration complexity, versioning concerns, and testing
surface area. Justified only when third parties actually write plugins.
**Simpler alternative**: Direct function calls. If-else chains. A switch statement.
**Severity**: V2 minimum, V3 if other code must conform to the plugin API

### Generic-Everything
**Signal**: Extensive use of generics/templates where only one or two concrete types
are ever used. Type parameters that could be replaced with the actual type.
**Why vanity**: Generics are useful when you genuinely operate over multiple types.
When you do not, they are noise that makes every type signature harder to read.
**Simpler alternative**: Use concrete types. Genericise when you add the second type.
**Severity**: V1

---

## Category 2: Resume-Driven Architecture

### Microservices at Monolith Scale
**Signal**: Multiple deployed services, service mesh, API gateway — serving traffic
that a single process could handle. Fewer than 10 requests per second across all services.
**Why vanity**: Microservices trade code complexity for operational complexity. This trade
only pays off at scale that demands independent deployment and scaling. Below that, you
are paying the operational tax (networking, serialisation, distributed tracing, deployment
orchestration) for zero benefit.
**Simpler alternative**: Monolith with clean module boundaries. Deploy as one thing.
**Severity**: V3 (forces every feature to deal with network boundaries)

### Kubernetes for a Single Container
**Signal**: K8s manifests, Helm charts, operators — for an application that runs as
one replica with no scaling requirements.
**Why vanity**: Kubernetes is an orchestration platform for managing many containers at scale.
Using it to run one container is like hiring a logistics company to deliver a letter.
**Simpler alternative**: Docker Compose. Or just a systemd service.
**Severity**: V2

### Event-Driven Architecture for Synchronous Workflows
**Signal**: Message queues, event buses, pub/sub — for workflows that are inherently
request-response and need the result immediately.
**Why vanity**: Async messaging adds eventual consistency, retry logic, dead letter queues,
and debugging difficulty. Justified for decoupled, high-throughput, fire-and-forget
workloads. Not justified for "user clicks button, needs result now."
**Simpler alternative**: Function call. HTTP request. Database query.
**Severity**: V2

---

## Category 3: Complexity Theater

### Custom Implementations of Solved Problems
**Signal**: Hand-rolled authentication, custom ORM, bespoke state management, homegrown
logging framework, custom build tooling — where battle-tested alternatives exist.
**Why vanity**: "Not invented here" syndrome. The custom version is always worse than the
community-maintained version because it has one contributor and zero external scrutiny.
**Simpler alternative**: Use the established library. Passport/Auth.js for auth. Prisma/Drizzle
for ORM. Pino/Winston for logging. Unless your requirements genuinely cannot be met.
**Severity**: V2 (security-adjacent like auth: V3)

### Configuration More Complex Than Code
**Signal**: YAML/JSON/TOML configuration files that are longer or more complex than the
code they configure. DSLs for configuration that require their own documentation.
**Why vanity**: Configuration should be simpler than code, not a second programming language.
When config becomes as complex as code, you have reinvented programming — badly.
**Simpler alternative**: Code. Literal code. A TypeScript file with objects. Readable,
type-checked, debuggable.
**Severity**: V2

### Elaborate Error Handling for Impossible Errors
**Signal**: Try-catch blocks, error types, recovery strategies for conditions that
cannot occur given the system's actual inputs and constraints.
**Why vanity**: Defensive programming is good. Defending against logically impossible
scenarios is paranoia that obscures the actual error paths.
**Simpler alternative**: Handle errors that can actually happen. Use assertions for
invariants. Let impossible states crash — they signal a deeper bug.
**Severity**: V1

---

## Category 4: Gold Plating

### 100% Test Coverage on Disposable Code
**Signal**: Exhaustive unit tests, integration tests, property-based tests — for a
prototype, proof of concept, or feature with an explicit expiry date.
**Why vanity**: Testing is essential for code that must be correct and maintained.
Testing throwaway code is polishing something destined for the bin.
**Simpler alternative**: Smoke tests and manual verification for prototypes.
Invest in test infrastructure for code that will live.
**Severity**: V1

### CI/CD Pipeline More Sophisticated Than the Product
**Signal**: Multi-stage pipelines, matrix builds, canary deployments, blue-green switching
— for a product with fewer than 100 users or a team of 1-3.
**Why vanity**: CI/CD is infrastructure that scales engineering teams. A solo developer
deploying once a week does not need a 15-stage pipeline.
**Simpler alternative**: git push + simple deploy script. Graduate to proper CI/CD when
deployment frequency and team size justify it.
**Severity**: V1

### Premature Performance Optimisation
**Signal**: Caching layers, connection pooling, query optimisation, CDN configuration —
for endpoints handling fewer than 100 requests per minute.
**Why vanity**: Performance work should be driven by measurements showing a problem,
not by fear of a problem that does not exist yet.
**Simpler alternative**: Measure first. Optimise only what is measurably slow.
Profile, do not guess.
**Severity**: V1 (isolated), V2 (if caching introduces consistency bugs)

---

## Category 5: Over-Decomposition

### Fifty Files for Three Features
**Signal**: Deep directory trees, one-function-per-file, barrel exports everywhere,
utils/helpers/services/repositories/controllers/DTOs for a feature that processes
data and returns a result.
**Why vanity**: File decomposition should reflect meaningful boundaries, not an
aesthetic preference for small files. Navigation cost is real.
**Simpler alternative**: Co-locate related code. One file per feature is often correct
for features under 300 lines. Split when the file gets unwieldy, not prophylactically.
**Severity**: V1 (mild), V2 (forces architectural ceremony for every change)

### Premature DDD (Domain-Driven Design)
**Signal**: Aggregates, value objects, domain events, repositories, bounded contexts —
for a domain with 3-5 entities and straightforward CRUD operations.
**Why vanity**: DDD is a toolkit for managing complex business domains with intricate
rules and many interacting concepts. Applying it to a todo app creates ceremony that
dwarfs the domain it models.
**Simpler alternative**: Simple data models. Plain functions. Grow into DDD patterns
as the domain proves its complexity.
**Severity**: V2

---

## Category 6: Type Tetris

### Type Definitions Longer Than Functions
**Signal**: TypeScript/Rust/Haskell type definitions, generics, conditional types,
mapped types — that are more lines of code than the functions they annotate.
**Why vanity**: Types exist to catch bugs and document intent. When the type system
becomes the primary intellectual challenge, it has eclipsed the problem domain.
**Simpler alternative**: Simpler types. Use `any`/`unknown` at boundaries where
elaborate types add no safety. Consider whether a runtime check is clearer.
**Severity**: V1 (localised), V2 (if onboarding requires a type system tutorial)

---

## Category 7: Framework Worship

### Choosing Tools for Interest Over Fit
**Signal**: Technology choices that do not match the team's expertise, the problem's
requirements, or the project's constraints — but are cutting-edge or trendy.
**Why vanity**: Technology selection should optimise for: does the team know it,
does it fit the problem, is it maintained, can we hire for it.
**Detection questions**: "Why this tool?" If the answer references blog posts, conference
talks, or "we wanted to try it" rather than specific requirements, it is vanity.
**Severity**: V2 (V3 if the team is fighting the tool)

---

## Compound Indicators

Some patterns are not vanity individually but become vanity in combination:

- **Abstraction stacking**: Interface -> Abstract class -> Base class -> Concrete class
  for one behaviour. Each layer justified in isolation, collectively absurd.
- **Pattern collection**: Repository pattern + Unit of Work + Specification pattern +
  CQRS in the same module. Each is defensible alone. Together they are a design
  patterns textbook, not a product.
- **Infrastructure creep**: Docker + K8s + service mesh + API gateway + observability stack +
  feature flags + A/B testing framework — for a product in private beta with 50 users.

When you find 3 or more patterns from different categories in the same codebase, the issue
is not individual decisions but a systemic orientation toward complexity.
