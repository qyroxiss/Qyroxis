# Handoff: Qyroxis `/services` page redesign

## Overview
A motion-led redesign of the Services page for the Qyroxis marketing site (vanilla-JS
hash-router SPA). It presents the five services as a **build pipeline**: a sticky
pipeline bar tracks progress through the page, and each service "compiles" as it
enters view   numeral and icon land, heading assembles word by word, the 3-step
process connector draws itself on scrub, four stats stagger in and count up, and the
linked case study arrives last as the output.

Interaction thesis: **scroll is the build pipeline.** Motion is tied to the meaning of
the content (sequence, rigor, outcomes), not a novelty mechanic layered on a plain grid.

## About the design files
`Services - Pipeline.dc.html` is a **design reference prototype**, not production code.
It is a self-contained HTML page written with an internal streaming-component runtime
(`support.js`   a dev-preview harness, **do not port it**). The template markup uses
inline `style` attributes because that harness requires it.

Your task: **recreate this design inside the real Qyroxis site**, using its existing
conventions   the site's own CSS files and `--*` tokens, its GSAP setup, its
hash-router, its `/services` route module. Translate inline styles into the site's
stylesheet patterns. Copy the *design and motion behaviour*, not the file structure.

To view the reference: open the HTML file in a browser (needs network access for the
Google Fonts, GSAP 3.13 and three.js CDN loads).

## Fidelity
**High fidelity.** Colours, type scale, spacing, radii, easings, copy and animation
timings below are final and should be matched. Where a value here disagrees with the
live site's design tokens, **the live tokens win**   this prototype substitutes
Google Fonts Space Grotesk / Inter for the real `QSpaceGrotesk` / `QInter` faces.

## Page structure (single route, `/services`)

### 0. Backgrounds (fixed, `z-index: 0`, `pointer-events: none`)
| Layer | Detail |
|---|---|
| `[data-dots]` | CSS ambient dot grid   `radial-gradient(var(--rule) 1px, transparent 1px)`, `background-size: 26px 26px`, `opacity: .5`. **This is the no-JS / reduced-motion fallback and must always render.** |
| `[data-dotglow]` | Same grid in `--accent-strong` at 1.4px, revealed through a `mask-image: radial-gradient(260px circle at Xpx Ypx, #000, transparent 70%)` that follows the cursor. Opacity 0 → .5 on load. Fine-pointer only. |
| `[data-three]` | three.js point field (see *Hero WebGL* below). Fades out as the hero leaves the viewport. |
| `[data-progress]` | 2px `--accent-strong` scroll-progress bar, `position: fixed; top: 0`, `transform-origin: left`, `scaleX` scrubbed 0→1 over document height. |

### 1. Header   sticky, `top: 0`, `z-index: 40`
`backdrop-filter: blur(14px)`, background `color-mix(in srgb, var(--bg-deep) 82%, transparent)`,
`border-bottom: 1px solid var(--rule-soft)`, padding `16px clamp(16px,4vw,56px)`.
Left: wordmark "Qyroxis"   `--font-display` 700 / 19px / `-.02em`.
Right: Work · Services (active, weight 500, `--text-strong`) · About, 14px, `--text-mute`;
then a theme-toggle pill   1px `--rule` border, `border-radius: 999px`, padding `8px 12px`,
`--font-mono` 12px uppercase `.08em`. Height ≈ 66px.
**Not animated** (deliberate   an animated header can strand the logo off-screen).

### 2. Pipeline bar   sticky, `top: 66px`, `z-index: 35`
Horizontal, in normal flow (it must never overlay content). Padding `11px clamp(20px,5vw,72px)`,
`gap: clamp(14px,2.4vw,32px)`, `overflow-x: auto` with hidden scrollbar, same blur/`88%` backdrop,
`border-bottom: 1px solid var(--rule-soft)`.
Items: label "PIPELINE" (`--font-mono` 10px uppercase `.16em`, `--text-mute`), then five node links
`01 AI Agents / 02 Platforms / 03 Commerce / 04 Healthcare / 05 Full-Stack`, then a square-node "Start".
Node = 9px circle, 1px `--rule` border, `--bg-deep` fill, with an inner `[data-railfill]` dot
(`inset: 1.4px`, `--accent-strong`, `transform: scale(0)` at rest).
Labels `--font-mono` 11px `.04em`, **full-opacity `--text-mute`** at rest (do not dim   WCAG AA),
`--text-strong` when active.
Bottom edge carries a 1px `--rule-soft` line plus `[data-railprogress]`, a 1px `--accent-strong`
line, `transform-origin: left`, `scaleX` scrubbed from `#svc-1` top-70% to `#svc-5` bottom-55%.

### 3. Hero
Two columns, `grid-template-columns: repeat(auto-fit, minmax(300px,1fr))`, `gap: clamp(28px,5vw,72px)`,
`align-items: end`, `max-width: 1440px`, padding `clamp(56px,10vw,120px) clamp(20px,5vw,72px) clamp(40px,6vw,80px)`.

Left:
- Eyebrow: 26px × 1px `--accent-strong` dash + "Services", `--font-mono` 12px uppercase `.18em`, `--text-mute`. Scramble/decrypt-in on load.
- H1 "Five ways we ship working software."   `--font-display` 700, `clamp(40px,7.2vw,86px)`, line-height .98, `-.035em`, `--text-strong`, `text-wrap: balance`.
- Body: "No black boxes. Every engagement runs the same way: scope the real problem, build in the open, measure the outcome. Below is what we build and what it has actually done."   `clamp(16px,1.3vw,19px)`/1.55, max 52ch.
- Buttons: primary pill "Start a project →" (`--accent-strong` bg, #fff, 15px/500, padding `14px 22px`, radius 999px, magnetic) + ghost pill "See the five" (1px `--rule`).

Right   **manifest card**: `--bg-card`, 1px `--rule`, `border-radius: var(--radius-card)` (24px),
padding `clamp(18px,2.4vw,28px)`. Header row `SERVICE / PROOF` (`--font-mono` 11px uppercase `.14em`,
`--text-mute`, 1px `--rule-soft` under). Five rows, each `padding: 14px 0`, 1px `--rule-soft` divider
(last has none): left `--font-display` 500 `clamp(16px,1.5vw,19px)`; right `--font-mono` 13px `--text-mute`.

| Row | Proof |
|---|---|
| 01 AI & Automation Agents | 400% faster |
| 02 Web & Mobile Platforms | 99.99% uptime |
| 03 E-Commerce & Payments | +3% net margin |
| 04 Healthcare & Enterprise | 45% faster retrieval |
| 05 Custom Full-Stack | DB → deploy |

Row hover: row shifts `x: +6` and turns `--accent-strong`; proof value shifts `x: -4` to `--text-strong` (0.35s `power3.out`).

### 4. Service sections ×5 (`#svc-1` … `#svc-5`, `data-svc="n"`)
`border-top: 1px solid var(--rule)`, padding `clamp(64px,9vw,140px) clamp(20px,5vw,72px)`,
inner `max-width: 1440px`, two columns `repeat(auto-fit, minmax(300px,1fr))`, `gap: clamp(32px,5vw,80px)`, `align-items: start`.

**Left column   `position: sticky; top: 112px`:**
- Big numeral `01`…`05`: `--font-mono` 700 `clamp(48px,7vw,92px)`, `--accent-strong`, low opacity, `-.04em`.
- Icon tile: 44×44, radius 12px, 1px `--rule`, `--bg-card`, 22px stroke-1.4 SVG in `--accent-strong`
  (nodes-graph / phone+desktop / cart / shield+cross / layers).
- H2: `--font-display` 700 `clamp(30px,3.6vw,46px)`, line-height 1.03, `-.03em`.
- One-liner: 17px/1.5, max 38ch.
- "Service detail →" link: 15px/500, 1px `--accent-strong` bottom border, → `#/services/<slug>`.

**Right column   `display: grid; gap: clamp(28px,3.5vw,44px)`:**
1. Long paragraph   `clamp(17px,1.4vw,20px)`/1.6, max 58ch, `text-wrap: pretty`.
2. **Process flow**   3 steps, `gap: 22px`, `padding-left: 30px`; a 1px `--rule` vertical connector
   (`[data-flowline]`, `transform-origin: top`) plus per-step 19px numbered circle at `left: -30px`;
   step title `--font-display` 600/17px, sub 15px `--text-mute`.
3. **Stats grid**   `repeat(auto-fit, minmax(190px,1fr))`, `gap: 1px` on a `--rule` background inside a
   1px `--rule` / 24px-radius container (hairline cell dividers). Cell: `--bg-card`, padding `22px 20px`;
   numeric stats `--font-display` 700 `clamp(30px,3vw,40px)`; wordy stats 600 `clamp(19px,1.8vw,23px)`;
   caption 14px `--text-mute`. Hover: cell background → `--accent-wash`.
4. **Case study card(s)**   `--bg-card`, 1px `--rule`, 24px radius. One linked study = 2-up
   (text + `--bg-sunk` screenshot panel, `min-height: 190px`); two studies = side-by-side cards
   (`minmax(240px,1fr)`) with the screenshot panel on top (`min-height: 150px`).
   Hover: lift `y: -4` and a cursor-tracked spotlight
   `radial-gradient(420px circle at Xpx Ypx, var(--accent-wash), var(--bg-card) 60%)`.

**Content (final copy   use verbatim):**

| # | Service / slug | Process steps | Stats | Case studies |
|---|---|---|---|---|
| 01 | AI & Automation Agents   `ai-automation-agents`<br>"Autonomous systems that take on the manual work: lead generation, data extraction, qualification." | Map the manual work · Build the agent with guardrails · Measure, then widen scope | **400%** faster lead generation · **92%** qualification accuracy · Zero manual entry · Scales flat |   |
| 02 | Web & Mobile Platforms   `web-mobile-platforms`<br>"Cross-platform products built once, shipped everywhere: Flutter, React, Next.js." | Define the shared core · Ship platform by platform · Harden and hand over | **99.99%** uptime in production · **1** codebase, every platform · Consistent UX · Faster iteration | GardenRich |
| 03 | E-Commerce & Payments   `ecommerce-payments`<br>"Ordering, reservations, and custom payment flows that cut out unnecessary fees." | Model the real order flow · Build direct payments · Roll out location by location | **+3%** net margin recovered on digital orders · Custom payment flows · Real-time reservations · Multi-location | Rasoi by TSN, Charm Avenue |
| 04 | Healthcare & Enterprise Software   `healthcare-enterprise`<br>"Secure, compliant systems for handling sensitive data at scale." | Audit data and access · Build to the compliance line · Roll out beside the old system | **45%** faster record retrieval · Enterprise-grade security · Web + mobile · Fewer entry errors |   |
| 05 | Custom Full-Stack Development   `custom-full-stack`<br>"End-to-end builds, database to deployment, tailored to how the business runs." | Model the business, not the app · Build in the open · Deploy and keep improving | Schema → deployment · Row-level security · Built around workflow · Supported after launch | Vishal Fitness Gym (Pulse) |

Full step sub-lines and paragraph copy are in the HTML   copy them from there verbatim.

### 5. Closing CTA (`#svc-cta`)
H2 "Tell us what is slow, manual, or breaking."   `clamp(34px,5.4vw,68px)`, line-height 1, `-.035em`.
Body: "We will tell you whether software fixes it, what it would take, and what it would cost   before either of us commits."
Magnetic pill "Book a scoping call →" → `#/contact`.

## Interactions & motion

All GSAP 3.13 + ScrollTrigger. `ease: 'power3.out'` unless stated.

| Element | Motion |
|---|---|
| Hero intro timeline (`delay: .1`) | eyebrow `from {autoAlpha:0, y:16}` .5s → H1 words `from {yPercent:115}` .9s `expo.out` stagger .045 (each word in an `overflow:hidden` mask) → body/buttons `from {autoAlpha:0,y:18}` .6s stagger .08 → manifest card .6s → rows stagger .06 |
| Eyebrow | 1.1s character scramble/decrypt resolving to "Services" |
| Section entrance (`start: 'top 75%'`, `once`) | numeral `from {autoAlpha:0,y:24}` .7s → icon `from {autoAlpha:0,scale:.8}` .5s `back.out(2)` → H2 words `from {yPercent:110}` .8s stagger .05 `expo.out` → left-column fades stagger .07 |
| Process connector | `from {scaleY:0}` scrubbed .6, `top 80%` → `bottom 62%` |
| Process steps | `from {autoAlpha:0, x:-14}` stagger .12, `top 82%`, once |
| Stats | `from {autoAlpha:0, y:22}` stagger .09 at `top 84%`; numeric values count 0→target over 1.4s `power2.out`, 90ms apart (`400%`, `92%`, `99.99%`, `1`, `+3%`, `45%`) |
| Case cards | `from {autoAlpha:0, y:34}` at `top 90%`; inner panel parallax `yPercent 8 → -8` scrubbed |
| Pipeline nodes | fill dot `scale 0↔1` .4s `back.out(2)` while the section spans `top 55%`→`bottom 45%`; label colour to `--text-strong`, `x: +2` |
| Whole page | scroll-velocity `skewY`, clamped ±2.6°, `quickTo` .5s settle |
| Ambient grid | `background-position-y` drift scrubbed over the document; accent spotlight follows the cursor (rAF-throttled) |
| Buttons `[data-magnetic]` | translate 25%/35% of cursor offset, .4s; release `elastic.out(1,0.4)` |

### Hero WebGL (three.js 0.169, ES-module import)
`THREE.Points`, 132 × 74 grid over 34 × 19 units, `rotation.x = -0.42`, camera z 14 / fov 52,
`setPixelRatio(min(dpr, 1.5))`, alpha, no antialias.
Custom shader: `z += sin(x*.28 + t*.55) * cos(y*.34 - t*.4) * (1.1 + uVel*2.4) + sin((x+y)*.16 - t*.8)*.5`;
cursor lift `exp(-d²*0.05) * 2.6` with point size and colour mixed toward `uAccent` by that factor;
fragment draws a soft round point, `alpha = smoothstep(.5,.12,r) * (.32 + glow*.6)`.
Uniforms `uBase`/`uAccent` are read from the CSS custom properties and re-synced on theme toggle.
Cursor position is raycast onto the plane and eased with GSAP.
Rendering is driven off `gsap.ticker` and **stops** when the hero scrolls out of view or the tab is hidden.

## Accessibility & resilience (non-negotiable   see `brand-CLAUDE.md`)
- **No-JS / `prefers-reduced-motion: reduce`**: the base CSS renders the complete, readable page.
  No element may depend on JS to become visible. In the prototype every hidden state is the *start of a
  live `from` tween*   there are no standalone hide-states   and motion init bails entirely under
  reduced motion, so nothing can be stranded.
- **Hidden-tab safety**: motion init is skipped while `document.hidden` (rAF never fires there) and
  re-runs on `visibilitychange`; a 2s timer then *measures* computed opacity/visibility/transform and
  clears any stranded state. Keep an equivalent guarantee.
- **Contrast**: pipeline labels are full-opacity `--text-mute` (≈5.96:1). Do not dim nav text.
- **Hash-router safety**: in-page jumps use `preventDefault()` + `window.scrollTo({top, behavior})`
  (offset −96px for the sticky header + bar) so they never write `location.hash`. `href="#svc-n"` is
  retained purely for the no-JS path   in the real app namespace or strip it as your router requires.
- Service links go to the existing detail routes `#/services/<slug>`; case cards to `#/work/<slug>`.
- Theme: `data-theme` on `<html>`, plus `@media (prefers-color-scheme: dark)` for the untoggled default.

## Responsive
Fluid throughout via `clamp()` and `auto-fit` grids   no breakpoints needed. Verified at 375 / 768 / 1024 / 1440.
Both two-column grids collapse to one below ~700px; the sticky left column stops pinning naturally;
the pipeline bar scrolls horizontally.

## Design tokens
```css
--font-display: 'QSpaceGrotesk';  --font-body: 'QInter';  --font-mono: 'QSpaceGrotesk';

/* light */
--bg-deep:#F6F3EC; --bg-card:#FFFDF8; --bg-sunk:#EFEAE0;
--text-strong:#000000; --text:#26262A; --text-mute:#6B6B70;
--rule:rgba(0,0,0,.12); --rule-soft:rgba(0,0,0,.07);
--accent:#004BBA; --accent-strong:#0455D6; --accent-wash:rgba(4,85,214,.08);

/* dark */
--bg-deep:#1D1E20; --bg-card:#26282B; --bg-sunk:#171819;
--text-strong:#F5F3EE; --text:#D8D6D1; --text-mute:#9A9A9F;
--rule:rgba(255,255,255,.14); --rule-soft:rgba(255,255,255,.08);
--accent:#3D7FE8; --accent-strong:#3D7FE8; --accent-wash:rgba(61,127,232,.12);

--radius-card:24px;                    /* cards, stat grid, manifest */
--ease-out-soft:cubic-bezier(.24,.01,.36,1);
--ease-in-out-soft:cubic-bezier(.72,0,.36,1);
```
Spacing is fluid: section padding `clamp(64px,9vw,140px) clamp(20px,5vw,72px)`;
column gap `clamp(32px,5vw,80px)`; inner stack gap `clamp(28px,3.5vw,44px)`; card padding 20–30px.
`--bg-sunk` is a prototype addition for screenshot panels   map it to the site's nearest surface token.

## Assets
- **Fonts**: prototype uses Google Space Grotesk + Inter as stand-ins. **Use the real QSpaceGrotesk / QInter faces.**
- **Icons**: five inline stroke SVGs (1.4 stroke, `currentColor`-style `--accent-strong`) in the HTML   replace with the site's icon set if one exists.
- **Screenshots**: the case-study panels are labelled placeholders. Wire the real GardenRich, Rasoi by TSN,
  Charm Avenue and Vishal Fitness (Pulse) screenshots/logos already used on the work pages.
- **Libraries**: GSAP 3.13 + ScrollTrigger (already on the site) and three.js 0.169 (new   the hero
  point field is the only consumer; drop it and keep the CSS dot grid if you'd rather not add the dep).

## Files
- `Services - Pipeline.dc.html`   the design reference (open in a browser)
- `support.js`   preview harness only, **do not port**
- `brand-CLAUDE.md`   brand, motion and accessibility rules that govern the implementation
