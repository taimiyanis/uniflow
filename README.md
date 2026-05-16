# UNIFLOW

Student portal for European business school students. Premium B2B platform that universities license to give their students a unified study experience: course content, AI tutor, planner, past exams, and progress tracking — in one product.

Current build is the **ESCP BIM** demo (Bachelor in International Management, second year). Hero course is **EC22 Macroeconomics**.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind v4 + shadcn/ui (`base-nova` style) + Base-UI
- **Icons:** lucide-react
- **Command bar:** cmdk
- **Fonts:** Inter (body/UI) · JetBrains Mono (numerics) · Syne (display)
- **Type system:** TypeScript strict mode

## Routes

| Path | What it is |
|---|---|
| `/` | Dashboard — exam countdown, progress ring, course grid |
| `/planner` | Weekly tasks + upcoming events |
| `/course/[code]` | Course detail — chapter navigator, 5 tabs (Notes, Videos, Quizzes, Exercises, Past Exams), AI chat panel. EC22 is fully built. |
| `/design-research` | Internal — UI/UX research gallery: 30 surveyed products, 5 design directions, proposed token system |

## Keyboard

- `⌘K` / `Ctrl+K` — open command bar (search routes, chapters, tasks, ask AI)
- `⌘1` `⌘2` `⌘3` `⌘4` `⌘5` — jump to nav items

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build       # production build
npm run start       # serve production build
npm test            # Jest tests
```

## Design research

The full UI/UX research deliverable (30 surveyed products, design directions, anti-patterns, proposed token system) lives in [`docs/design-research/RESEARCH.md`](./docs/design-research/RESEARCH.md). Live gallery at [`/design-research`](http://localhost:3000/design-research).

## Demo context

Target dates:
- **2026-05-19** — demo freeze (no new features after)
- **2026-05-22** — ESCP executive demo
- **2026-05-26** — ESCP dean pitch

Deploys to Vercel on push to `main`.
