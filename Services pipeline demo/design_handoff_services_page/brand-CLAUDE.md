# Project instructions

## Design & Motion
Prioritize visually striking, motion-rich design   never generic templates.

- Use **GSAP + ScrollTrigger** for scroll-driven animation, native CSS for lightweight
  effects, and **Three.js** for hero/background visuals where it fits the brand.
- Always ship a `prefers-reduced-motion: reduce` path: base render is fully functional
  and static; motion is an enhancement layer only.
- The page must also work with JavaScript disabled   real content, never a broken shell.
- Check accessibility and performance before shipping motion (no layout-thrashing
  per-frame reads, throttle pointer handlers to rAF, keep scrubbed tweens transform/opacity only).

## Qyroxis brand
- Fonts: `--font-display`/`--font-mono` = QSpaceGrotesk, `--font-body` = QInter.
- Light: cream `--bg-deep`/`--bg-card`, `--text-strong:#000`, accent `#004BBA` / `--accent-strong:#0455D6`.
- Dark: `--bg-deep:#1D1E20`, off-white text, `--accent-strong:#3D7FE8`. Light/dark toggle + OS preference both supported.
- `--radius-card: 24px`. Easings: `--ease-out-soft: cubic-bezier(.24,.01,.36,1)`, `--ease-in-out-soft: cubic-bezier(.72,0,.36,1)`.
- Voice: direct and concrete, real stats ("+3% net margin", "99.99% uptime"). Never "revolutionary" or "cutting-edge".
- Vanilla JS only (hash-router SPA). No new npm dependencies without asking.
- Responsive floor: 375 / 768 / 1024 / 1440px.
