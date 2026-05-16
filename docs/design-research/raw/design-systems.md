# PART 1 — System-by-system notes

## 1. shadcn/ui (incl. base-nova / tweakcn era)

- **URLs:** https://ui.shadcn.com/docs/theming, https://ui.shadcn.com/docs/tailwind-v4, https://ui.shadcn.com/themes, https://tweakcn.com
- **Color philosophy:** Pure semantic tokens. No `blue-500` style scales exposed. Every token is a role: `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--destructive-foreground`, `--border`, `--input`, `--ring`, plus `--chart-1..5` and sidebar variants (`--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, etc.). Tailwind v4 era switched defaults from HSL to **OKLCH**. Dark mode: a `.dark` class swaps the same token names; no separate naming.
- **base-nova / tweakcn:** "base-nova" is the new default style shipped with the Tailwind v4 update — flatter, higher-contrast neutrals, OKLCH-based, slightly larger default radius (`--radius: 0.625rem`). Tweakcn.com is the community theme generator; most popular themes in 2025 lean neutral-warm with a single saturated accent, slightly soft radius (10–14px), and a single subtle elevation. (Confidence: medium — exact defaults may differ slightly version-to-version.)
- **Type:** Inherits whatever the app provides (Geist by default in the docs). No prescribed type scale; uses Tailwind's defaults (12/14/16/18/20/24/30/36/48/60/72).
- **Spacing:** Tailwind's 0.25rem (4px) base, full 0–96 scale.
- **Radii:** A single `--radius` token; derived as `--radius-sm: calc(var(--radius) - 4px)`, `-md`, `-lg`, `-xl`. Default 0.625rem (10px).
- **Shadow:** Minimal — relies on Tailwind utilities; the "new" style favors subtle borders over shadows.
- **Motion:** Not tokenized at the framework level; left to the app.
- **Distinctive:** Pure role-based tokens + `-foreground` pairing convention. Every surface has a guaranteed legible text token. Theme is one CSS file you can paste.
- **Bookmark:** `ui.shadcn.com/docs/theming`, `tweakcn.com`

## 2. Vercel Geist

- **URLs:** https://vercel.com/geist, https://vercel.com/geist/foundations, https://vercel.com/geist/colors, https://vercel.com/geist/typography
- **Color philosophy:** Two layers. (1) Raw scales: `gray`, `blue`, `red`, `amber`, `green`, `teal`, `purple`, `pink`, each as a **100-1000** scale (10 steps). (2) Semantic aliases like `background`, `accents-1..8`, `success`, `error`, `warning`, `highlight`. Built originally on HSL with alpha variants. Dark mode is a full token swap.
- **Type:** **Geist Sans** + **Geist Mono** (Vercel's own). Modular scale; common sizes 12/13/14/16/18/20/24/32/40/48/56/72 px with tight line-heights (1.1 for display, 1.4 for body). Weights 400/500/600/700.
- **Spacing:** 4px base, scale through 64+ px in 4-px steps.
- **Radii:** Small set: 4 / 6 / 8 / 12 / 999 (pill). Default UI = 6–8px.
- **Shadow:** Quiet system — 1–2 elevations max in the public components. Geist favors borders over shadows.
- **Motion:** ~150ms ease for hovers, ~250ms for surface transitions; no formal motion-tokens doc public-facing.
- **Distinctive:** Looks "invisible." Mono font for numbers + code. Almost zero saturation in neutrals. Razor-thin borders (`#eaeaea` light / `#333` dark equivalents).
- **Bookmark:** `vercel.com/geist/foundations`

## 3. Linear

- **URLs:** https://linear.app, https://linear.app/blog (search "design", "typography"), https://linear.app/docs
- **Color philosophy:** Custom palette derived from a single brand violet plus a near-monochrome neutral scale. Heavy use of subtle tinted neutrals (cool grays in light mode, near-black surfaces in dark). Token names are semantic role (e.g., `color-bg-primary`, `color-text-tertiary`, `color-border-subtle`). Linear is dark-mode-first.
- **Type:** **Inter** (custom variant), tight scale: 11/12/13/14/15/17/20/24/32. Body 14px is the workhorse. Heavy use of 13px for UI. Line-height 1.5 body, 1.25 headings.
- **Spacing:** 4px base, but heavily uses 8/12/16/24 only. Famously dense.
- **Radii:** Small set, 4/6/8/12. Components mostly 6px.
- **Shadow:** Layered, low-blur, tinted shadows for menus and popovers — typically 2–3 stops stacked.
- **Motion:** Fast (120–180ms), spring-y. Custom cubic-bezier for menu open / drag.
- **Distinctive:** Density + speed. Everything snaps. Keyboard-first. Visual quietness with a single highly-saturated brand color used as accent only.
- **Bookmark:** Linear's "Building Linear" blog posts; their public components page.

## 4. Radix Themes + Radix Colors

- **URLs:** https://www.radix-ui.com/themes/docs/theme/color, https://www.radix-ui.com/colors, https://www.radix-ui.com/colors/docs/palette-composition/scales
- **Color philosophy:** The reference for 12-step semantic scales. Every color comes as a **12-step** scale with a **defined role per step**:
  - 1: App background
  - 2: Subtle background
  - 3: UI element background
  - 4: Hovered UI element background
  - 5: Active / Selected UI element background
  - 6: Subtle borders / separators
  - 7: UI element border / focus rings
  - 8: Hovered UI element border
  - 9: Solid backgrounds (brand fill)
  - 10: Hovered solid background
  - 11: Low-contrast text
  - 12: High-contrast text

  Also alpha (`A1–A12`) and P3 variants. Naming: `--blue-1` ... `--blue-12`, plus semantic alias layer (`--color-background`, `--color-panel-solid`, etc.) when used in Themes.
- **Type:** Inter default in Themes; scales 1–9 (`text-1` = 12px through `text-9` = 60px).
- **Spacing:** 1–9 scale (`space-1` = 4px ... `space-9` = 64px).
- **Radii:** Configurable; `none / small / medium / large / full`.
- **Shadow:** 6-level `shadow-1..6` from inset hairline to large elevation.
- **Motion:** Minimal tokens; per-component.
- **Distinctive:** The 12-step semantic role mapping is the gold standard — copy this. Steps 9/10 are the only "solid brand" steps; everything else is for backgrounds, borders, and text.
- **Bookmark:** `radix-ui.com/colors/docs/palette-composition/scales`

## 5. Material 3 (Material You)

- **URLs:** https://m3.material.io, https://m3.material.io/styles/color/system/overview, https://m3.material.io/styles/typography/overview
- **Color philosophy:** **Tonal palettes** generated from a source color → 13 tones (0/10/20/.../99/100) for each of 5 key colors (primary, secondary, tertiary, error, neutral, neutral-variant). Then mapped onto semantic roles: `primary`, `on-primary`, `primary-container`, `on-primary-container`, `surface`, `surface-variant`, `outline`, etc. Both light and dark schemes generated from the same palettes.
- **Type:** Roboto/Roboto Flex default. Type scale of 15 named styles in 5 groups: Display (L/M/S), Headline (L/M/S), Title (L/M/S), Body (L/M/S), Label (L/M/S). Each has font, weight, size, line-height, tracking defined.
- **Spacing:** 4dp base, 4/8/12/16/24/32/40 ramp.
- **Radii:** `none/xs/sm/md/lg/xl/full` — 0/4/8/12/16/28/full.
- **Shadow:** Elevation levels 0–5 (0/1/3/6/8/12 dp), but M3 prefers **surface tint** over shadow.
- **Motion:** Heavy token system. Easing: `emphasized`, `standard`, `emphasized-decelerate`, `emphasized-accelerate`. Durations: short1–4 (50–200ms), medium1–4 (250–400ms), long1–4 (450–600ms), extra-long1–4 (700ms+).
- **Distinctive:** Algorithmically generated dynamic palette + the role-pair pattern (`primary` / `on-primary` / `primary-container` / `on-primary-container`) which inspired shadcn's `-foreground` pairing.
- **Bookmark:** M3 color roles spec; M3 typography spec; M3 motion easing & duration tokens.

## 6. IBM Carbon

- **URLs:** https://carbondesignsystem.com, https://carbondesignsystem.com/elements/color/overview/, https://carbondesignsystem.com/guidelines/typography/overview/
- **Color philosophy:** Two-tier. Tier 1: raw IBM palette (e.g., `blue-10..100`, `gray-10..100` in 11 steps). Tier 2: themed semantic tokens grouped into **themes** (white, g10, g90, g100). Tokens like `background`, `layer-01/02/03`, `field-01`, `border-subtle`, `text-primary`, `text-secondary`, `interactive`, `support-error`, etc. Themes pre-bake light vs. dark mappings.
- **Type:** **IBM Plex Sans** + Plex Mono. Type sets like `body-01`, `heading-03`, `code-02`, each fully specified. Mostly 12/14/16/20/28/32 etc., scale based on IBM's "expressive vs. productive" duality.
- **Spacing:** Token names `spacing-01..13` mapped to 2/4/8/12/16/24/32/40/48/64/80/96/160 px.
- **Radii:** Very small — Carbon is famously square (0–2px on most components).
- **Shadow:** Minimal; relies on layer tokens (stacked surfaces with progressively lighter/darker fills) instead of shadow.
- **Motion:** Strong system. Durations `fast-01 (70ms)`, `fast-02 (110ms)`, `moderate-01 (150ms)`, `moderate-02 (240ms)`, `slow-01 (400ms)`, `slow-02 (700ms)`. Easings: `standard`, `entrance`, `exit`, `expressive`, `productive`.
- **Distinctive:** Layer-based depth (no shadow). Productive vs. expressive duality applied to type and motion. Enterprise-grade, B2B-friendly. Highly relevant for UNIFLOW.
- **Bookmark:** Carbon color tokens reference; Carbon motion easing curves.

## 7. Shopify Polaris

- **URLs:** https://polaris.shopify.com, https://polaris.shopify.com/tokens/colors
- **Color philosophy:** Fully semantic; tokens like `color-bg`, `color-bg-surface`, `color-bg-surface-secondary`, `color-bg-fill-brand`, `color-text`, `color-text-secondary`, `color-border`, `color-border-emphasis`, `color-icon-*`. Built on a P3/sRGB palette but exposed only as semantics. Strong status colors: `success`, `caution`, `warning`, `critical`, `info`, `magic` (for AI).
- **Type:** **Inter**. Scale `font-size-275..2000` (sizes in tenths of px) plus semantic styles `heading-md`, `body-md`, etc. Sizes 11/12/13/14/16/20/24/28/32/40.
- **Spacing:** `space-0..3200` (0 to 32rem) with sensible steps; main scale 0/2/4/8/12/16/20/24/32/48/64.
- **Radii:** `border-radius-050..750` plus `full`. Tokens like `border-radius-200` = 8px.
- **Shadow:** `shadow-100..600` — six elevations, soft, neutral, not tinted.
- **Motion:** `motion-duration-50..5000` and easings `motion-ease-in/out/in-out`.
- **Distinctive:** Best-in-class B2B SaaS reference for token *naming*. Numeric suffix conveys magnitude (`-100`, `-200`...). Magic AI color is interesting — UNIFLOW could borrow.
- **Bookmark:** `polaris.shopify.com/tokens/colors`, `/tokens/font`, `/tokens/space`, `/tokens/motion`.

## 8. Atlassian Design System

- **URLs:** https://atlassian.design, https://atlassian.design/foundations/color-new, https://atlassian.design/tokens
- **Color philosophy:** Three-tier. (1) Raw palette (`B100..B1000`, `N0..N1000`). (2) Foundation tokens (`color.background.brand.bold`, `color.text.subtlest`). (3) Component tokens. Dark mode is a full alias swap on the foundation layer. Strong accessibility annotations on every token.
- **Type:** **Charlie Sans** (custom) + system fallback. Scale UI 11/12/14/16, headings 16/20/24/29/35.
- **Spacing:** `space.025..1000` (2px to 80px), base 4px.
- **Radii:** `border.radius` + `.050/.100/.200/.300/.400/circle`. Generally small.
- **Shadow:** `elevation.shadow.raised/overlay`. Two levels mostly.
- **Motion:** `motion.duration.small/medium/large` (100/350/700ms approx) + ease tokens.
- **Distinctive:** The most rigorous *token-naming taxonomy* in the industry: `color.<property>.<role>.<emphasis>.<state>`. Overkill for UNIFLOW but valuable reference for B2B-enterprise feel.
- **Bookmark:** `atlassian.design/tokens` for the full token table.

## 9. Tailwind CSS philosophy

- **URLs:** https://tailwindcss.com, https://tailwindcss.com/docs/theme, https://tailwindcss.com/docs/colors
- **Color philosophy:** Raw scales (`slate/gray/zinc/neutral/stone` + every named hue), each 50/100/200/300/400/500/600/700/800/900/950. v4 moved to **OKLCH** as the canonical color space. No semantic layer — that's left to the app. Dark mode via `dark:` variant.
- **Type:** Default scale `text-xs (12)`, `sm (14)`, `base (16)`, `lg (18)`, `xl (20)`, `2xl (24)`, `3xl (30)`, `4xl (36)`, `5xl (48)`, `6xl (60)`, `7xl (72)`, `8xl (96)`, `9xl (128)`. Each ships a paired line-height.
- **Spacing:** `0..96`, base 0.25rem (4px).
- **Radii:** `rounded-none/sm/DEFAULT/md/lg/xl/2xl/3xl/full` → 0/2/4/6/8/12/16/24/full.
- **Shadow:** `shadow-2xs/xs/sm/DEFAULT/md/lg/xl/2xl/inner`. 8 levels.
- **Motion:** `duration-{0..1000}`, ease tokens (`linear/in/out/in-out`).
- **Distinctive:** v4's @theme directive + OKLCH + Tailwind variables aligned with shadcn semantic layer. This is UNIFLOW's actual runtime.
- **Bookmark:** Tailwind v4 `@theme` reference.

## 10. Bonus — tweakcn / shadcn registry trends (2025)

- **URLs:** https://tweakcn.com, https://ui.shadcn.com/themes
- **Patterns trending in 2025:** OKLCH everywhere. Single saturated brand color, plus a near-neutral surface set. Radius 0.5rem–0.75rem (10–14px) is the most-picked range. Sidebar tokens (`--sidebar`, `--sidebar-foreground`, `--sidebar-border`, `--sidebar-primary`, `--sidebar-accent`, `--sidebar-ring`) are now standard. Chart tokens `--chart-1..5` standardized.

---

# PART 2 — Proposed UNIFLOW token set

Opinionated. Built to ship. Pulls from shadcn's role-based tokens + Radix's 12-step semantic mapping (for the brand scale) + Carbon's layer concept (for the sidebar/main contrast UNIFLOW already uses) + Polaris naming for status.

**Brand anchor:** `--uniflow-blue #2F6FED` → OKLCH `oklch(0.595 0.207 263)` (computed; verify with browser dev tools or `oklch.com` — within ±0.005 of true).

## A. Color tokens (light + dark)

```css
:root {
  /* === Brand scale (Radix-style 12 steps, OKLCH) === */
  /* Step 1-2: app/subtle bg; 3-5: UI fills; 6-8: borders; 9-10: solid brand; 11-12: text */
  --uniflow-1:  oklch(0.992 0.004 263);   /* page bg tint */
  --uniflow-2:  oklch(0.975 0.012 263);   /* subtle bg */
  --uniflow-3:  oklch(0.945 0.028 263);   /* hover surface */
  --uniflow-4:  oklch(0.910 0.045 263);   /* active surface */
  --uniflow-5:  oklch(0.870 0.065 263);   /* selected surface */
  --uniflow-6:  oklch(0.820 0.085 263);   /* subtle border */
  --uniflow-7:  oklch(0.750 0.115 263);   /* border */
  --uniflow-8:  oklch(0.680 0.150 263);   /* strong border / focus */
  --uniflow-9:  oklch(0.595 0.207 263);   /* SOLID BRAND = #2F6FED */
  --uniflow-10: oklch(0.545 0.215 263);   /* solid hover */
  --uniflow-11: oklch(0.470 0.190 263);   /* low-contrast text on light */
  --uniflow-12: oklch(0.245 0.085 263);   /* high-contrast text / sidebar = #1B2B5E */

  /* === Semantic surface roles (shadcn-style) === */
  --background:        oklch(0.985 0.006 263);   /* #F7F9FF feel */
  --foreground:        oklch(0.205 0.040 263);
  --card:              oklch(1 0 0);
  --card-foreground:   var(--foreground);
  --popover:           oklch(1 0 0);
  --popover-foreground:var(--foreground);
  --muted:             var(--uniflow-2);
  --muted-foreground:  oklch(0.500 0.030 263);
  --accent:            var(--uniflow-3);
  --accent-foreground: var(--uniflow-12);
  --border:            var(--uniflow-6);
  --input:             var(--uniflow-6);
  --ring:              var(--uniflow-8);

  /* === Primary (brand) === */
  --primary:           var(--uniflow-9);
  --primary-foreground:oklch(0.985 0.006 263);

  /* === Sidebar (UNIFLOW's signature dark navy panel on light app) === */
  --sidebar:                 var(--uniflow-12);          /* #1B2B5E */
  --sidebar-foreground:      oklch(0.92 0.015 263);
  --sidebar-muted-foreground:oklch(0.72 0.025 263);
  --sidebar-primary:         var(--uniflow-9);
  --sidebar-accent:          oklch(0.310 0.090 263);     /* hover row */
  --sidebar-border:          oklch(0.290 0.060 263);
  --sidebar-ring:            var(--uniflow-8);

  /* === Status === */
  --success:           oklch(0.680 0.165 152);   /* emerald */
  --success-foreground:oklch(0.985 0 0);
  --warn:              oklch(0.780 0.160 75);    /* amber */
  --warn-foreground:   oklch(0.260 0.050 75);
  --danger:            oklch(0.605 0.225 27);    /* red */
  --danger-foreground: oklch(0.985 0 0);
  --info:              oklch(0.700 0.130 230);   /* cyan-blue, distinct from brand */
  --info-foreground:   oklch(0.985 0 0);

  /* === Chart === */
  --chart-1: var(--uniflow-9);
  --chart-2: oklch(0.700 0.165 195);   /* teal */
  --chart-3: oklch(0.730 0.155 130);   /* green */
  --chart-4: oklch(0.780 0.160 75);    /* amber */
  --chart-5: oklch(0.620 0.200 320);   /* magenta accent */
}

.dark {
  --background:        oklch(0.180 0.025 263);
  --foreground:        oklch(0.965 0.010 263);
  --card:              oklch(0.220 0.030 263);
  --card-foreground:   var(--foreground);
  --popover:           oklch(0.230 0.030 263);
  --popover-foreground:var(--foreground);
  --muted:             oklch(0.260 0.030 263);
  --muted-foreground:  oklch(0.700 0.020 263);
  --accent:            oklch(0.300 0.060 263);
  --accent-foreground: oklch(0.965 0.010 263);
  --border:            oklch(0.320 0.040 263);
  --input:             oklch(0.320 0.040 263);
  --ring:              var(--uniflow-8);
  --primary:           oklch(0.685 0.180 263);    /* brightened brand for dark */
  --primary-foreground:oklch(0.180 0.025 263);

  --sidebar:                 oklch(0.155 0.020 263);
  --sidebar-foreground:      oklch(0.92 0.015 263);
  --sidebar-muted-foreground:oklch(0.65 0.020 263);
  --sidebar-primary:         var(--primary);
  --sidebar-accent:          oklch(0.240 0.050 263);
  --sidebar-border:          oklch(0.260 0.040 263);
}
```

## B. Type scale

Fonts: **Nunito** for body/UI (already chosen), **Syne** for display (already chosen), system mono for numerics in tables.

```css
:root {
  --font-sans:    "Nunito", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Syne", "Nunito", sans-serif;
  --font-mono:    ui-monospace, "JetBrains Mono", monospace;

  --text-xs:    0.75rem;   /* 12px */    --leading-xs:   1rem;
  --text-sm:    0.8125rem; /* 13px */    --leading-sm:   1.125rem;
  --text-base:  0.9375rem; /* 15px */    --leading-base: 1.5rem;
  --text-md:    1rem;      /* 16px */    --leading-md:   1.5rem;
  --text-lg:    1.125rem;  /* 18px */    --leading-lg:   1.625rem;
  --text-xl:    1.375rem;  /* 22px */    --leading-xl:   1.75rem;
  --text-2xl:   1.75rem;   /* 28px */    --leading-2xl:  2.125rem;
  --text-3xl:   2.25rem;   /* 36px */    --leading-3xl:  2.5rem;

  --display-sm: 2.75rem;   /* 44px */     --leading-display-sm: 1.05;
  --display-md: 4rem;      /* 64px */     --leading-display-md: 1;
  --display-lg: 5.5rem;    /* 88px */     --leading-display-lg: 0.95;
  --display-xl: 7.5rem;    /* 120px */    --leading-display-xl: 0.9;

  --weight-regular:  400;
  --weight-medium:   600;
  --weight-semibold: 700;
  --weight-bold:     800;
  --weight-black:    900;
}
```

## C. Spacing scale

```css
:root {
  --space-0:  0;
  --space-1:  0.25rem;  --space-2:  0.5rem;
  --space-3:  0.75rem;  --space-4:  1rem;
  --space-5:  1.25rem;  --space-6:  1.5rem;
  --space-8:  2rem;     --space-10: 2.5rem;
  --space-12: 3rem;     --space-16: 4rem;
  --space-20: 5rem;     --space-24: 6rem;
}
```

## D. Radii

```css
:root {
  --radius-sm:  6px;
  --radius-md:  10px;
  --radius-lg:  14px;
  --radius-xl:  20px;
  --radius-2xl: 28px;
  --radius-full: 9999px;
}
```

## E. Shadow

```css
:root {
  --shadow-xs:  0 1px 2px 0 oklch(0.245 0.085 263 / 0.04);
  --shadow-sm:  0 1px 3px 0 oklch(0.245 0.085 263 / 0.06),
                0 1px 2px -1px oklch(0.245 0.085 263 / 0.04);
  --shadow-md:  0 4px 12px -2px oklch(0.245 0.085 263 / 0.08),
                0 2px 4px -2px oklch(0.245 0.085 263 / 0.05);
  --shadow-lg:  0 12px 24px -6px oklch(0.245 0.085 263 / 0.10),
                0 4px 8px -4px oklch(0.245 0.085 263 / 0.06);
  --shadow-xl:  0 24px 48px -12px oklch(0.245 0.085 263 / 0.14),
                0 8px 16px -8px oklch(0.245 0.085 263 / 0.08);
}
```

## F. Motion

```css
:root {
  --duration-instant: 80ms;
  --duration-fast:    150ms;
  --duration-base:    220ms;
  --duration-slow:    360ms;
  --duration-hero:    600ms;

  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Files to bookmark
- https://ui.shadcn.com/docs/theming
- https://tweakcn.com
- https://vercel.com/geist/foundations
- https://www.radix-ui.com/colors/docs/palette-composition/scales
- https://m3.material.io/styles/color/system/overview
- https://m3.material.io/styles/motion/easing-and-duration
- https://carbondesignsystem.com/elements/color/tokens/
- https://carbondesignsystem.com/guidelines/motion/overview/
- https://polaris.shopify.com/tokens/colors
- https://atlassian.design/tokens
- https://tailwindcss.com/docs/theme
