# UNIFLOW Design System Research

**Date:** 2026-05-16
**Author:** Claude (executive assistant session, autonomous run)
**Stack context:** Next.js 16 · React 19 · Tailwind v4 · shadcn/ui (base-nova) · Base-UI · lucide-react · Nunito + Syne (current fonts) · `--uniflow-blue #2F6FED` · `--uniflow-sidebar #1B2B5E` · `--uniflow-bg #F7F9FF`
**Target:** ESCP executive demo (2026-05-22), dean pitch (2026-05-26). Freeze 2026-05-19.

---

## TL;DR — what to ship before May 19

**Direction:** *Premium Academic, light mode* — Brilliant's warmth + Linear's discipline + Khanmigo's AI rail + Canvas-shaped LMS shell. This is the most credible direction for a B2B product targeting a European business school dean.

**Three XS-effort moves that ship this week (one day each):**

1. **Monospace numerals everywhere data appears.** Grades, deadlines, scores, the exam countdown — switch to JetBrains Mono or Geist Mono. Single highest-impact change for perceived seriousness.
2. **Warm near-black text on warm off-white bg.** Replace any `#000`/`#FFF` pair with Notion-style `#37352F` on `#FAFAF7` or stay on the existing `#F7F9FF` tinted bg. CSS variable swap, zero UI work.
3. **Status pills = dot + label, never filled chips.** Linear/Resend pattern: `● Active`, `● In progress`, `● Mastered`. Replace every filled badge across CourseGrid, ExamCountdown, and the planner.

**Two M-effort moves for demo day:**

4. **Cmd+K command bar.** Raycast/Linear pattern. The demo moment that sells "real product, not slideware" to the ESCP dean.
5. **AI tutor → AI agent.** Persistent right-side panel that can take actions (schedule, generate quiz, explain). Khanmigo's right-rail context-aware pattern × Height's action-taking AI.

**Live in the app at** [`/design-research`](http://localhost:3000/design-research).

---

## 1. Method

- **Survey:** 30 products across B2B SaaS (premium reference), EdTech (direct competitors), university LMS (the incumbents we're replacing), study tools, and design systems.
- **Categories:** 13 B2B SaaS · 13 EdTech · 4 LMS · 2 study tools · 10 design systems (Tailwind, shadcn, Geist, Radix, Material 3, Carbon, Polaris, Atlassian, Linear's system, tweakcn trends).
- **Method note:** Initial run was synthesized from training-data knowledge of these well-documented systems through early 2026 (WebFetch/WebSearch were denied at first). Critical hex codes were spot-verified via web search after permission was granted. Linear's brand `#5E6AD2` confirmed via [Mobbin](https://mobbin.com/colors/brand/linear) and [Linear's own brand page](https://linear.app/brand). shadcn `base-nova` confirmed as the current Tailwind v4 default style on [ui.shadcn.com/docs/theming](https://ui.shadcn.com/docs/theming). Khanmigo is being **redesigned for summer 2026** (per [Khan Academy blog](https://blog.khanacademy.org/how-khan-academy-is-building-a-better-ai-tutor-our-most-recent-learnings/), making this research timely).

## 2. Top 5 design moves UNIFLOW should adopt

| # | Move | Source | Effort | Impact |
|---|------|--------|--------|--------|
| 1 | Mono numerals for all data | Vercel · Mercury · Stripe · Notion Calendar | **XS** | Critical |
| 2 | Status pill: colored dot + label (no fills) | Linear · Resend · Notion Calendar | **S** | High |
| 3 | Cmd+K command bar as primary nav | Raycast · Linear · Superhuman · Obsidian | **M** | Critical |
| 4 | Persistent right-side AI agent (takes actions) | Khanmigo · Height | **L** | Critical |
| 5 | Warm near-black text + tinted off-white bg | Notion · Brilliant · MasterClass | **XS** | Medium |
| 6 | 12-step OKLCH brand scale (Radix model) | Radix · shadcn · Tailwind v4 | **S** | High |
| 7 | Skeleton loaders matching exact final layout | Vercel · Linear | **M** | Medium |

All seven plus rationales are rendered live at [`/design-research`](http://localhost:3000/design-research#high-leverage-moves) with effort/impact pills.

## 3. The five design directions

Each direction is documented in full with pros/cons/references in `/lib/data/design-research.ts` and renders at [`/design-research#candidate-directions`](http://localhost:3000/design-research).

### 3.1 Premium Academic *(Recommended)*

> Brilliant's warmth + Notion's restraint + Linear's discipline + Khanmigo's AI rail.

Warm cream/off-white bg. Syne for hero display (kept from current), Inter for body and UI (replaces Nunito). Single saturated `#2F6FED` brand. Linear-level density and keyboard control. AI panel pinned right rail.

**Why this wins:** Distinctive — almost no one in B2B EdTech looks like Brilliant. Signals academic gravitas to ESCP dean. Builds on existing Syne choice. Warm bg + warm near-black text avoids the cold-corporate-SaaS feel that hurts education products. Most credible direction for "B2B premium product from a thoughtful European team."

**Trade-off:** Cream background is a commitment — every screen needs to re-test. Body font shift from Nunito → Inter is a credibility-vs-warmth call (Inter wins for B2B).

### 3.2 Vercel-Engineered *(Viable)*

> B/W maximalism. Mono numerals. No shadows.

Pure-white app, pure-black accents, single blue used rarely. Geist Sans + Geist Mono. 1px borders only — zero shadows. Tabular numerals everywhere. Reads as serious infrastructure software, not edtech.

**Trade-off:** Maximum "serious product" signal but risks reading cold and austere for an education product. Removes the warmth that's currently UNIFLOW's differentiator.

### 3.3 Dark-First Tutor *(Risky)*

> Linear/Height/Cron templates. AI-forward. Near-black canvas, single accent.

Strong differentiation from all EdTech (which is light by default). AI tutor demo becomes visually dominant.

**Trade-off:** Universities and academic stakeholders prefer light mode. ESCP dean may not "get" dark-first UI. Course content (text-heavy) is harder to read in dark mode. **Recommended only if pivoting hard toward "AI-native study tool" positioning.**

### 3.4 Stripe Trust *(Viable)*

> Light, soft, premium-pastel. Metric cards + sparklines.

Light gray app bg (`#F6F8FA`). White cards with soft 1px borders. Metric cards with large numbers + sparklines. Side-sheets instead of center modals.

**Trade-off:** Easy migration from current UNIFLOW. Less distinctive than Premium Academic — Stripe-lookalike admin panels exist everywhere. Soft shadows date faster than borders.

### 3.5 Editorial Magazine *(Risky)*

> Brilliant + MasterClass cinematic. Editorial serif. Full-bleed hero.

Most beautiful direction. Strong landing-page potential. Signals "premium content" to ESCP.

**Trade-off:** Hard to scale across functional tool surfaces (planner, quiz, AI tutor). Risk of being beautiful but impractical for daily student use. Requires custom serif font licensing.

## 4. Proposed token system

Full token spec lives in `/docs/design-research/raw/design-systems.md` PART 2. Key decisions:

### 4.1 Color: 12-step OKLCH brand scale (Radix model)

```css
:root {
  /* Brand scale — step 9 is the existing #2F6FED, step 12 is the existing sidebar navy */
  --uniflow-1:  oklch(0.992 0.004 263);   /* page bg tint */
  --uniflow-2:  oklch(0.975 0.012 263);   /* subtle bg */
  --uniflow-3:  oklch(0.945 0.028 263);   /* hover surface */
  --uniflow-4:  oklch(0.910 0.045 263);   /* active surface */
  --uniflow-5:  oklch(0.870 0.065 263);   /* selected surface */
  --uniflow-6:  oklch(0.820 0.085 263);   /* subtle border */
  --uniflow-7:  oklch(0.750 0.115 263);   /* border */
  --uniflow-8:  oklch(0.680 0.150 263);   /* strong border / focus ring */
  --uniflow-9:  oklch(0.595 0.207 263);   /* SOLID BRAND = #2F6FED */
  --uniflow-10: oklch(0.545 0.215 263);   /* solid hover */
  --uniflow-11: oklch(0.470 0.190 263);   /* low-contrast text */
  --uniflow-12: oklch(0.245 0.085 263);   /* high-contrast text / sidebar = #1B2B5E */
}
```

Plus dedicated sidebar tokens (`--sidebar`, `--sidebar-foreground`, `--sidebar-accent`, etc.) because the dark-rail-on-light-app is UNIFLOW's signature layout. Plus status colors (`--success`, `--warn`, `--danger`, `--info`) and chart tokens (`--chart-1..5`).

Live preview at [`/design-research#proposed-token-system`](http://localhost:3000/design-research) renders all 12 brand steps with their roles.

### 4.2 Type scale

Fonts (proposed): **Inter** (body/UI) · **Syne** (hero display only) · **JetBrains Mono** (numerics in tables, IDs, time labels).

Body scale uses Linear-style density: `12 / 13 / 15 / 16 / 18 / 22 / 28 / 36`. Display scale separate: `44 / 64 / 88 / 120` — the 88px is what the ESCP demo countdown should use.

### 4.3 Radii / shadow / motion

- **Radii:** `6 / 10 / 14 / 20 / 28` — geometric step, default 10px (matches shadcn base-nova).
- **Shadow:** 5 levels, all tinted with the sidebar navy at 4–14% alpha (not pure black) for branded depth. Default to `xs/sm` for rest, reserve `md+` for transient elements.
- **Motion:** `80 / 150 / 220 / 360 / 600 ms`. Ease curves: `--ease-out` for 90% of cases, `--ease-spring` for positive feedback (success toasts), `--ease-in-out` for symmetric swaps.

## 5. Survey — what each surveyed product teaches us

Full notes in `raw/`:
- `raw/b2b-saas.md` — 17 B2B SaaS products with palette/typography/steal patterns
- `raw/edtech.md` — 25 EdTech + LMS products with same structure
- `raw/design-systems.md` — 10 design systems + concrete proposed token set

### Highest-leverage products to study (5/5 relevance)

| Product | Why | URL |
|---------|-----|-----|
| **Linear** | The template for serious software UI. Cmd+K, status pills, density. | https://linear.app |
| **Vercel** | Dashboard restraint, mono numerals, 1px borders only. | https://vercel.com/geist/foundations |
| **Stripe Dashboard** | Light-mode B2B gold standard. Side-sheets, metric cards. | https://dashboard.stripe.com |
| **Notion Calendar** | Planner UX template. NL event creation, colored left bars. | https://calendar.notion.so |
| **Raycast** | Command bar gold standard. Action-panel pattern (Cmd+K within Cmd+K). | https://raycast.com |
| **Height** | Persistent right-side AI Copilot — exactly UNIFLOW's AI tutor pattern. | https://height.app |
| **Brilliant** | Premium EdTech aesthetic done right. Editorial dark + interactive widgets. | https://brilliant.org |
| **Khan Academy / Khanmigo** | Canonical AI tutor in EdTech. Right rail, context-aware, Socratic. **Being redesigned summer 2026** — UNIFLOW can leapfrog. | https://khanacademy.org |
| **Notion (incl. for Education)** | Warmth + restraint. `#37352F` warm-near-black is a signature steal. | https://notion.so |
| **Pluralsight** | Closest B2B EdTech analog. Skill IQ (adaptive assessment placing learner on Novice/Proficient/Expert spectrum) is the strongest competency-positioning UI in EdTech. | https://pluralsight.com |
| **Canvas LMS** | The incumbent at most universities. Adopt the familiar left-rail icon shell; deliver radically better interior. | https://instructure.com/canvas |

### Notable patterns to steal, by product

- **Khanmigo:** persistent right rail, knows current lesson, Socratic dialogue (not answer-spitting)
- **Pluralsight Skill IQ:** bell curve with student's position marked, instead of `% complete`
- **Canvas:** left vertical icon rail global nav — students/faculty expect this
- **Mathigon:** inline interactive widgets within textbook-style prose
- **Codecademy:** three-pane "do-it-here" layout (instruction | workspace | feedback)
- **edX:** university co-brand pattern (edX + Harvard logo lockup) → directly applicable to UNIFLOW + ESCP
- **MasterClass:** instructor-as-hero card → "Professor-as-hero" for UNIFLOW
- **Notion Calendar:** natural-language event creation ("Quiz Friday 3pm")
- **Linear:** monospace IDs, keyboard hint pills (`⌘K`), 13px UI text
- **Vercel:** skeleton loaders matching exact final layout, not spinners

## 6. Anti-patterns to avoid

| Anti-pattern | Why |
|---|---|
| Pure `#000` on pure `#FFF` | Harsh and dated. Notion's `#37352F` is a one-line quality lift. |
| Soft drop-shadows on every card | Fastest way to date a UI. Linear, Vercel, Resend all use 1px borders only. |
| Filled-color badge chips | Reads as 2018 EdTech. Dot-label pattern reads as 2025 software. |
| Gradient buttons / sidebar gradients | Scream "consumer app." Reserve gradients for hero marketing only. |
| Center modals for detail views | Side-sheets preserve context. Modals interrupt. Use modals only for confirmations. |
| Multiple bright accent colors | One saturated brand color, used rarely. Linear has one violet. Vercel barely uses blue. |
| Rounded UI fonts (Nunito-like) | Consumer/playful. Inter or Geist is the unambiguous signal of "real software" for B2B. |

## 7. What's already in the live app

- **Route:** `app/design-research/page.tsx` — the full visual gallery at `localhost:3000/design-research`.
- **Data:** `lib/data/design-research.ts` — 30 products + 5 directions + 7 moves + 7 anti-patterns, typed and structured for future iteration.
- **Sidebar link:** "Design Research" added to the global nav (between AI Tutor and Grades).
- **Build verified:** `npm run build` clean. Route prerenders as static.

## 8. Decisions you need to make this week

1. **Pick a direction.** Premium Academic is the call. If you want a different fork, the trade-offs are documented inline. **Don't ship as a hybrid** — that reads as none of them.
2. **Body font: Nunito or Inter?** Single biggest credibility lever. Recommend Inter; keep Syne for hero display only (Welcome banner, countdown, page H1).
3. **Add Cmd+K to the demo?** M-effort, critical-impact. This is the moment that sells "real product" to the dean.
4. **AI tutor upgrade scope.** Chat → agent that takes actions. Could be a smaller MVP (just visual right rail + 3 canned actions) for the demo.
5. **Adopt the 12-step OKLCH scale?** S-effort token refactor. Better to do it before adding more screens than after.

## 9. References

### Design system docs
- [shadcn/ui theming (Tailwind v4 + OKLCH)](https://ui.shadcn.com/docs/theming)
- [shadcn/ui Tailwind v4 guide](https://ui.shadcn.com/docs/tailwind-v4)
- [Vercel Geist foundations](https://vercel.com/geist/foundations)
- [Radix Colors — palette composition](https://www.radix-ui.com/colors/docs/palette-composition/scales)
- [Material 3 color system](https://m3.material.io/styles/color/system/overview)
- [Material 3 motion easing](https://m3.material.io/styles/motion/easing-and-duration)
- [IBM Carbon color tokens](https://carbondesignsystem.com/elements/color/tokens/)
- [Carbon motion](https://carbondesignsystem.com/guidelines/motion/overview/)
- [Shopify Polaris color tokens](https://polaris.shopify.com/tokens/colors)
- [Atlassian Design tokens](https://atlassian.design/tokens)
- [Tailwind v4 @theme](https://tailwindcss.com/docs/theme)
- [tweakcn.com — shadcn theme generator](https://tweakcn.com)

### Verified brand sources
- [Linear brand guidelines](https://linear.app/brand)
- [Linear color palette on Mobbin](https://mobbin.com/colors/brand/linear)
- [Khan Academy — building Khanmigo blog post](https://blog.khanacademy.org/how-khan-academy-is-building-a-better-ai-tutor-our-most-recent-learnings/) (note: full Khanmigo redesign rolling to all district partners summer 2026)

### Product references (sample)
Full URLs for all 30 products live in `lib/data/design-research.ts`. Click-through gallery at [`/design-research`](http://localhost:3000/design-research).

---

## Appendix — file structure

```
uniflow-app/
├── app/
│   └── design-research/
│       └── page.tsx                  # live visual gallery
├── components/
│   └── layout/Sidebar.tsx            # updated with /design-research link
├── lib/
│   └── data/
│       └── design-research.ts        # typed data: products, directions, moves, anti-patterns
└── docs/
    └── design-research/
        ├── RESEARCH.md               # this file
        └── raw/
            ├── b2b-saas.md           # 17 B2B SaaS products, full notes
            ├── edtech.md             # 25 EdTech + LMS products, full notes
            └── design-systems.md     # 10 design systems + proposed token spec
```

## Appendix — what was scoped out

- **No actual code refactor.** Token swap, font change, status-pill component, Cmd+K — all designed and proposed, none implemented yet (out of scope for this 2-hour research session).
- **No animations / motion prototype.** Motion tokens proposed; visual prototype not built.
- **No dark mode designs.** Dark token set proposed in `raw/design-systems.md` but no dark-mode screens drawn.
- **No mobile.** UNIFLOW is desktop-first for the ESCP demo; mobile considered out of scope.
- **No copywriting / marketing.** This is a system + product UI research, not a landing-page direction.
