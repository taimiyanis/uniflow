// Design research data — surveyed products and design directions for UNIFLOW
// Source basis: training-data synthesis (WebFetch denied this session). Hex values
// without confidence flag are well-documented; "approx" tags indicate qualitative
// description rather than verified spec.

export type Product = {
  name: string;
  url: string;
  category: 'b2b-saas' | 'edtech' | 'design-system' | 'lms' | 'study-tool';
  oneLine: string;
  palette: { hex: string; label: string }[];
  mood: string;
  type: string;
  steal: string[];
  relevance: 1 | 2 | 3 | 4 | 5;
};

export const products: Product[] = [
  // ── B2B SaaS (premium reference) ──────────────────────────────────────
  {
    name: 'Linear',
    url: 'https://linear.app',
    category: 'b2b-saas',
    oneLine: 'Issue tracker that became the design template for serious software.',
    palette: [
      { hex: '#08090A', label: 'canvas' },
      { hex: '#1A1B1E', label: 'surface' },
      { hex: '#5E6AD2', label: 'brand violet' },
      { hex: '#9CA3AF', label: 'muted text' },
    ],
    mood: 'Dark-first. Cool, monochrome, single brand accent. Density + speed.',
    type: 'Inter. 11/13/14/16/24/32. Tight, no decorative fonts.',
    steal: [
      'Cmd+K command bar as primary nav, not hidden affordance',
      'Right-aligned keyboard hint pills (⌘K) on every row',
      'Status: colored dot + label, never filled chip',
    ],
    relevance: 5,
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com',
    category: 'b2b-saas',
    oneLine: 'Frontend cloud with the cleanest, most-copied dashboard aesthetic.',
    palette: [
      { hex: '#000000', label: 'pure black' },
      { hex: '#FFFFFF', label: 'pure white' },
      { hex: '#EAEAEA', label: 'border light' },
      { hex: '#0070F3', label: 'legacy blue' },
    ],
    mood: 'B/W maximalism. 12-step gray ramp. No shadows, only 1px borders.',
    type: 'Geist Sans + Geist Mono. Tight modular scale.',
    steal: [
      'Geist Mono numerals for grades, deadlines, scores',
      'Skeleton loaders matching exact final layout (not spinners)',
      '12-step gray ramp instead of light/medium/dark',
    ],
    relevance: 5,
  },
  {
    name: 'Stripe Dashboard',
    url: 'https://dashboard.stripe.com',
    category: 'b2b-saas',
    oneLine: 'The gold standard for light-mode B2B dashboards.',
    palette: [
      { hex: '#F6F8FA', label: 'app bg' },
      { hex: '#FFFFFF', label: 'card' },
      { hex: '#635BFF', label: 'Stripe purple' },
      { hex: '#FAD000', label: 'test mode amber' },
    ],
    mood: 'Premium-pastel. Card-heavy. Sparklines + metric deltas.',
    type: 'Söhne (proprietary). 14px body. Tabular nums.',
    steal: [
      'Side-sheet pattern instead of center modals (course detail)',
      'Metric card + sparkline ("courses progressed this week")',
      'Environment-style pill (repurpose for "B2 Spring 2026")',
    ],
    relevance: 5,
  },
  {
    name: 'Notion',
    url: 'https://notion.so',
    category: 'b2b-saas',
    oneLine: 'Warm-paper feel; the original block editor.',
    palette: [
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#37352F', label: 'warm near-black text' },
      { hex: '#F7F6F3', label: 'sidebar warm gray' },
      { hex: '#EBECED', label: 'hover bg' },
    ],
    mood: 'Warm, paper-like, calm. Anti-card — pages are documents.',
    type: 'Inter + optional Lyon serif headings (editorial feel).',
    steal: [
      'Warm near-black #37352F instead of pure black — instant quality lift',
      'Slash commands (/) for inline AI prompts inside notes',
      'Callout block (colored left border + icon) for exam tips',
    ],
    relevance: 4,
  },
  {
    name: 'Raycast',
    url: 'https://raycast.com',
    category: 'b2b-saas',
    oneLine: 'macOS launcher; THE reference for command-bar UI.',
    palette: [
      { hex: '#1C1C1C', label: 'glass bg' },
      { hex: '#FF6363', label: 'brand red' },
      { hex: '#2D2D2D', label: 'hover row' },
      { hex: '#FFFFFF', label: 'foreground' },
    ],
    mood: 'Dark-glass. Backdrop-blur. Premium, focused.',
    type: 'SF Pro / Inter. 13px UI. Mono for shortcuts.',
    steal: [
      'Action panel pattern: Cmd+K within Cmd+K for contextual actions',
      'Row layout (icon + title + subtitle + accessory) for course lists',
      'Spring animation on open; arrow-key nav with row highlight',
    ],
    relevance: 5,
  },
  {
    name: 'Height',
    url: 'https://height.app',
    category: 'b2b-saas',
    oneLine: 'AI-native PM tool. Persistent right-side Copilot panel.',
    palette: [
      { hex: '#0F0F11', label: 'canvas' },
      { hex: '#1A1B1F', label: 'surface' },
      { hex: '#3CC8C8', label: 'cyan accent' },
      { hex: '#9CA3AF', label: 'muted' },
    ],
    mood: 'Cool, technical. Multi-hue labels.',
    type: 'Inter. Linear-style tight scale.',
    steal: [
      'Persistent collapsible right-side AI panel — exactly UNIFLOW AI tutor',
      'AI that can take actions ("schedule this for Tuesday")',
      'Floating multi-select toolbar at bottom on bulk operations',
    ],
    relevance: 5,
  },
  {
    name: 'Notion Calendar (Cron)',
    url: 'https://calendar.notion.so',
    category: 'b2b-saas',
    oneLine: 'Premium calendar; natural-language event creation.',
    palette: [
      { hex: '#0E0E10', label: 'canvas' },
      { hex: '#1C1C20', label: 'surface' },
      { hex: '#7B61FF', label: 'event purple' },
      { hex: '#52A9FF', label: 'event blue' },
    ],
    mood: 'Minimal, focused. Colored left bar on events, not full fill.',
    type: 'Inter. Mono for time labels.',
    steal: [
      'Natural-language event creation for planner ("Quiz Friday 3pm")',
      'Colored left bar on event blocks, not full color fill',
      'Mono numerals for time labels (10:00, 14:30)',
    ],
    relevance: 5,
  },
  {
    name: 'Superhuman',
    url: 'https://superhuman.com',
    category: 'b2b-saas',
    oneLine: 'Keyboard-first premium email; defines "expensive" software.',
    palette: [
      { hex: '#FAFAFA', label: 'app bg' },
      { hex: '#5E2EFF', label: 'brand indigo' },
      { hex: '#1A1A1F', label: 'foreground' },
    ],
    mood: 'Editorial, calm, expensive. Custom serif on marketing.',
    type: 'Tiempos-style serif (marketing) + Inter (product).',
    steal: [
      'Single-letter shortcuts visible on hover (J/K, E to archive)',
      '"Splits" pattern → saved views ("Due this week", "Exam prep")',
      'Inbox-zero celebration empty state when daily tasks done',
    ],
    relevance: 4,
  },
  {
    name: 'Mercury',
    url: 'https://mercury.com',
    category: 'b2b-saas',
    oneLine: 'Business banking. Trust-forward, tabular-first.',
    palette: [
      { hex: '#FAFAFA', label: 'app bg' },
      { hex: '#1A1F36', label: 'navy text' },
      { hex: '#0AC18E', label: 'mint positive' },
    ],
    mood: 'Light, trust-forward, calm. Typographic hierarchy over color.',
    type: 'Polysans (custom marketing) + Inter (product). Tabular nums.',
    steal: [
      'Animated count-up on numbers (grade %, course completion %)',
      'Tabular numerals everywhere',
      'Navy + mint accent as alt to brand blue',
    ],
    relevance: 4,
  },
  {
    name: 'Resend',
    url: 'https://resend.com',
    category: 'b2b-saas',
    oneLine: 'Dev email API; brutalist-minimal dashboard.',
    palette: [
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#000000', label: 'foreground' },
      { hex: '#F5F5F5', label: 'hover' },
      { hex: '#22C55E', label: 'success dot' },
    ],
    mood: 'Brutalist-minimal. White-on-white cards with 1px border only.',
    type: 'Inter. Display 96px+ on marketing.',
    steal: [
      'Borderless white-on-white cards (1px border, no shadow)',
      'Status pill: colored dot + label, always',
      'Mono numerals for IDs, dates, scores',
    ],
    relevance: 4,
  },
  {
    name: 'Attio',
    url: 'https://attio.com',
    category: 'b2b-saas',
    oneLine: 'Modern CRM. Airtable refinement, premium feel.',
    palette: [
      { hex: '#FAFAFA', label: 'app bg' },
      { hex: '#0F1419', label: 'deep blue/black' },
      { hex: '#3B82F6', label: 'tag blue' },
    ],
    mood: 'Spreadsheet meets Notion. Rich cells with chips inside.',
    type: 'Inter. Tabular mono for numerical data.',
    steal: [
      'Multi-select chip inside content (tags: "Macro", "Exam-relevant")',
      'Quick-look popover on hover (preview lesson without leaving list)',
      'Rich-cell table pattern for dashboard table view',
    ],
    relevance: 4,
  },
  {
    name: 'Arc Browser',
    url: 'https://arc.net',
    category: 'b2b-saas',
    oneLine: 'Browser with per-space gradient theming.',
    palette: [
      { hex: '#FFC0CB', label: 'space gradient 1' },
      { hex: '#B19CD9', label: 'space gradient 2' },
      { hex: '#FAB3A4', label: 'space gradient 3' },
    ],
    mood: 'Playful, warm, expressive. Per-context theming.',
    type: 'Inter + Tiempos serif accents on marketing.',
    steal: [
      'Per-course accent (Macro = blue, Marketing = pink) for spatial memory',
      'Backdrop-blur floating command bar with spring physics',
      'Cmd+T-style "open anything" as primary affordance',
    ],
    relevance: 3,
  },

  // ── EdTech (direct competitors) ───────────────────────────────────────
  {
    name: 'Coursera',
    url: 'https://coursera.org',
    category: 'edtech',
    oneLine: 'MOOC giant. Generic safe-EdTech aesthetic.',
    palette: [
      { hex: '#0056D2', label: 'Coursera blue' },
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#1F1F1F', label: 'text' },
    ],
    mood: 'Safe, corporate, university-blue. Generic.',
    type: 'Source Sans Pro / Open Sans. Mostly inoffensive.',
    steal: [
      'Course card grid pattern (image top, title, instructor, progress)',
      'Skill tags + level chips on course cards',
    ],
    relevance: 3,
  },
  {
    name: 'Duolingo',
    url: 'https://duolingo.com',
    category: 'edtech',
    oneLine: 'Language gamification leader; playful, mascot-driven.',
    palette: [
      { hex: '#58CC02', label: 'Duo green' },
      { hex: '#FFC800', label: 'streak yellow' },
      { hex: '#FF4B4B', label: 'mistake red' },
      { hex: '#1CB0F6', label: 'lesson blue' },
    ],
    mood: 'Bright, playful, gamified. Heavy mascot use.',
    type: 'Custom rounded sans (Duolingo Sans variant).',
    steal: [
      'Streak counter visualization (fire icon + day count)',
      'XP/level progress bars',
      'Daily-goal ring (similar to your current ProgressRing)',
    ],
    relevance: 2,
  },
  {
    name: 'Khan Academy / Khanmigo',
    url: 'https://khanacademy.org',
    category: 'edtech',
    oneLine: 'Free non-profit edu + the most credible AI tutor in EdTech.',
    palette: [
      { hex: '#14BF96', label: 'Khan teal' },
      { hex: '#0A2540', label: 'navy' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Trustworthy, calm, math-friendly. Khanmigo is owl-mascot.',
    type: 'System sans. Conservative scale.',
    steal: [
      'Knowledge tree visualization (mastered → in-progress → locked)',
      'Khanmigo conversational AI tutor pattern (Socratic, not answer-spitting)',
      'Mastery levels (familiar / proficient / mastered) with colored badges',
    ],
    relevance: 4,
  },
  {
    name: 'Brilliant',
    url: 'https://brilliant.org',
    category: 'edtech',
    oneLine: 'Interactive STEM problem-sets; best-in-class EdTech aesthetic.',
    palette: [
      { hex: '#FFEDD3', label: 'cream bg' },
      { hex: '#2F2A26', label: 'dark text' },
      { hex: '#FF4F4F', label: 'accent coral' },
      { hex: '#1B8B6A', label: 'success' },
    ],
    mood: 'Editorial, warm, intelligent. Feels like a premium magazine.',
    type: 'Custom serif headings + clean sans body. Distinctive.',
    steal: [
      'Interactive problem cells with inline answer entry',
      'Pathway visualization (course → unit → lesson)',
      'Cream/warm bg instead of cold blue — distinctive for premium EdTech',
    ],
    relevance: 5,
  },
  {
    name: 'MasterClass',
    url: 'https://masterclass.com',
    category: 'edtech',
    oneLine: 'Celebrity video classes; cinematic premium feel.',
    palette: [
      { hex: '#000000', label: 'canvas' },
      { hex: '#FFFFFF', label: 'foreground' },
      { hex: '#D40404', label: 'play red' },
    ],
    mood: 'Cinematic. Full-bleed video thumbnails. Editorial typography.',
    type: 'Custom serif display + clean sans body.',
    steal: [
      'Full-bleed hero video on course landing',
      'Editorial type pairings (serif display + clean sans)',
      'Course "season" framing instead of "modules"',
    ],
    relevance: 3,
  },
  {
    name: 'Quizlet',
    url: 'https://quizlet.com',
    category: 'edtech',
    oneLine: 'Flashcards platform. Bright but dated.',
    palette: [
      { hex: '#4257B2', label: 'Quizlet blue' },
      { hex: '#FFCD1F', label: 'yellow accent' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Bright, school-y, dated.',
    type: 'Custom geometric sans.',
    steal: [
      'Spaced-repetition pattern (Anki-style intervals)',
      'Card-flip animation for term/definition',
    ],
    relevance: 3,
  },
  {
    name: 'Notion for Education',
    url: 'https://notion.so/product/notion-for-education',
    category: 'edtech',
    oneLine: 'University-targeted Notion. Direct UNIFLOW competitor in spirit.',
    palette: [
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#37352F', label: 'warm text' },
      { hex: '#F7F6F3', label: 'sidebar' },
    ],
    mood: 'Warm, paper, student-friendly. Notion aesthetic.',
    type: 'Inter + optional Lyon serif headings.',
    steal: [
      'Same patterns as Notion (callouts, slash menu)',
      'Page-tree sidebar as alternative to flat nav',
    ],
    relevance: 4,
  },
  {
    name: 'Obsidian',
    url: 'https://obsidian.md',
    category: 'study-tool',
    oneLine: 'Knowledge-graph note app heavily used by students.',
    palette: [
      { hex: '#202020', label: 'canvas dark' },
      { hex: '#7F6DF2', label: 'Obsidian purple' },
      { hex: '#FFFFFF', label: 'fg' },
    ],
    mood: 'Markdown-first, technical, customizable.',
    type: 'System mono. Code-editor feel.',
    steal: [
      'Linked references / backlinks in lesson notes',
      'Graph view (low priority but impressive for demo)',
    ],
    relevance: 3,
  },
  {
    name: 'Anki',
    url: 'https://apps.ankiweb.net',
    category: 'study-tool',
    oneLine: 'Spaced-repetition flashcards. Aesthetically ancient but functionally gold.',
    palette: [
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#2196F3', label: 'review blue' },
    ],
    mood: 'Utilitarian, dated, ugly.',
    type: 'Default system fonts.',
    steal: [
      'SR interval scheduling (Easy / Good / Hard / Again)',
      'Daily review queue as a fixed bar',
    ],
    relevance: 3,
  },
  {
    name: 'Codecademy',
    url: 'https://codecademy.com',
    category: 'edtech',
    oneLine: 'Interactive code lessons. Side-by-side editor pattern.',
    palette: [
      { hex: '#1F2940', label: 'dark navy' },
      { hex: '#1AC8DB', label: 'cyan accent' },
      { hex: '#F0F5F9', label: 'card bg' },
    ],
    mood: 'Technical, focused, side-by-side instruction.',
    type: 'Custom geometric sans + Fira Code mono.',
    steal: [
      'Three-panel layout: instructions | content | output',
      'Inline exercise widgets within lesson flow',
    ],
    relevance: 3,
  },
  {
    name: 'DataCamp',
    url: 'https://datacamp.com',
    category: 'edtech',
    oneLine: 'Data-science learning. Career-tracks framing.',
    palette: [
      { hex: '#03EF62', label: 'DataCamp green' },
      { hex: '#03202F', label: 'navy' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Career-focused, professional.',
    type: 'Inter / Open Sans.',
    steal: [
      'Career-track framing — bundles of courses with a finish state',
      'Skill assessments before track entry',
    ],
    relevance: 3,
  },
  {
    name: 'Mathigon',
    url: 'https://mathigon.org',
    category: 'edtech',
    oneLine: 'Interactive math textbook; beautifully animated.',
    palette: [
      { hex: '#33B86C', label: 'math green' },
      { hex: '#1F7AE0', label: 'concept blue' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Textbook-as-interactive-app. Scroll-driven storytelling.',
    type: 'Roboto / system serif. Math-friendly.',
    steal: [
      'Scroll-driven progress in long-form lessons',
      'Inline interactive widgets (graphs, geometry) within prose',
    ],
    relevance: 4,
  },
  {
    name: 'LinkedIn Learning',
    url: 'https://linkedin.com/learning',
    category: 'edtech',
    oneLine: 'Professional courses, LinkedIn-blue aesthetic.',
    palette: [
      { hex: '#0A66C2', label: 'LinkedIn blue' },
      { hex: '#FFFFFF', label: 'canvas' },
      { hex: '#191919', label: 'text' },
    ],
    mood: 'Corporate professional. Inoffensive.',
    type: 'System sans.',
    steal: [
      'Certificate-of-completion framing',
      'Learning paths bundling courses',
    ],
    relevance: 2,
  },

  // ── University LMS (the systems we're competing against) ──────────────
  {
    name: 'Canvas LMS',
    url: 'https://instructure.com/canvas',
    category: 'lms',
    oneLine: 'The dominant university LMS — and the bar we must exceed.',
    palette: [
      { hex: '#E13F2B', label: 'Canvas red' },
      { hex: '#394B58', label: 'slate nav' },
      { hex: '#F5F5F5', label: 'app bg' },
    ],
    mood: 'Functional, dated, "instructor-built" feel.',
    type: 'Lato. Generic, fine.',
    steal: [
      'Modules pattern (Course → Module → Item) — students recognize this',
      'Assignment-list view with due-date prominence',
    ],
    relevance: 4,
  },
  {
    name: 'Blackboard',
    url: 'https://blackboard.com',
    category: 'lms',
    oneLine: 'Legacy university LMS. What we are NOT.',
    palette: [
      { hex: '#262626', label: 'dark nav' },
      { hex: '#FFCB05', label: 'highlight yellow' },
    ],
    mood: 'Enterprise-cluttered, decade-old feel.',
    type: 'System fonts.',
    steal: ['Cautionary reference — show the dean what they currently have vs UNIFLOW'],
    relevance: 2,
  },
  {
    name: 'Moodle',
    url: 'https://moodle.org',
    category: 'lms',
    oneLine: 'Open-source LMS. Heavily customizable, aesthetically inconsistent.',
    palette: [
      { hex: '#F88012', label: 'Moodle orange' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Inconsistent — each install looks different.',
    type: 'Roboto / inherits theme.',
    steal: ['Activity-completion checkmarks per lesson'],
    relevance: 2,
  },
  {
    name: 'D2L Brightspace',
    url: 'https://d2l.com',
    category: 'lms',
    oneLine: 'Modern-looking university LMS; the best of the legacy three.',
    palette: [
      { hex: '#006FBF', label: 'D2L blue' },
      { hex: '#FFFFFF', label: 'canvas' },
    ],
    mood: 'Friendlier than Canvas/Blackboard but still LMS-shaped.',
    type: 'System sans.',
    steal: [
      'Mastery-grade view (rubric + level rather than %)',
      'Quizzes with question-bank feel',
    ],
    relevance: 3,
  },
];

export type DesignDirection = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pros: string[];
  cons: string[];
  reference: string[];
  vibeHex: string[];
  recommendationForUniflow: 'recommended' | 'viable' | 'risky' | 'avoid';
};

export const directions: DesignDirection[] = [
  {
    id: 'premium-academic',
    name: 'Premium Academic',
    tagline: 'Brilliant + Notion warmth + Linear discipline',
    description:
      "Warm cream/off-white background. Editorial serif display (Syne or Lyon) for hero numbers and section heads. Inter body. Single saturated brand (the current UNIFLOW blue). Linear-level density and keyboard control. Reads as 'this came from a thoughtful product team at a serious university tech company.'",
    pros: [
      'Distinctive in EdTech (almost no one looks like Brilliant in B2B)',
      'Signals academic gravitas to ESCP dean',
      'Builds on existing Syne + Nunito choices (Syne stays as display)',
      'Warm bg + warm near-black text avoids "cold corporate SaaS" feel',
    ],
    cons: [
      'Cream background is a commitment — must redesign every screen',
      'Body font might need to shift from Nunito to Inter for credibility',
    ],
    reference: ['Brilliant', 'Notion', 'Linear', 'Superhuman'],
    vibeHex: ['#FBF7F0', '#37352F', '#2F6FED', '#1B2B5E'],
    recommendationForUniflow: 'recommended',
  },
  {
    id: 'vercel-engineered',
    name: 'Vercel-Engineered',
    tagline: 'B/W maximalism. Mono numerals. No shadows.',
    description:
      "Pure white app, pure black accents, single blue brand color used rarely. Geist Sans + Geist Mono. 1px borders only — zero card shadows. Tabular numerals everywhere. Reads as 'serious infrastructure software,' not edtech.",
    pros: [
      'Maximum "serious product" signal',
      'Geist fonts are free and ship via next/font',
      "Tabular monospace numerals are a one-line change that lifts perception",
    ],
    cons: [
      'Risks reading as cold/austere for an education product',
      "Students may find it less inviting than current",
      "Removes UNIFLOW's warmth differentiator",
    ],
    reference: ['Vercel', 'Resend', 'Linear (light)'],
    vibeHex: ['#FFFFFF', '#000000', '#EAEAEA', '#2F6FED'],
    recommendationForUniflow: 'viable',
  },
  {
    id: 'dark-first-tutor',
    name: 'Dark-First Tutor',
    tagline: 'Linear/Height/Cron as direct templates. AI-forward.',
    description:
      "Near-black canvas (#0E0E10), surfaces lift via #1A1B1E rather than shadow. Single brand accent. Persistent right-side AI panel. Cmd+K command bar centerpiece. Built around the AI tutor as the hero — every screen has it.",
    pros: [
      'Strong differentiation from all EdTech (which is light-mode-default)',
      'AI tutor demo becomes visually dominant',
      'Eyes-friendly for long study sessions',
    ],
    cons: [
      'Universities and academic stakeholders prefer light mode',
      "ESCP dean may not 'get' dark-first UI",
      'Course content (text-heavy) is harder to read in dark mode',
    ],
    reference: ['Linear', 'Height', 'Notion Calendar', 'Raycast'],
    vibeHex: ['#0E0E10', '#1A1B1E', '#5E6AD2', '#3CC8C8'],
    recommendationForUniflow: 'risky',
  },
  {
    id: 'stripe-trust',
    name: 'Stripe Trust',
    tagline: 'Light, soft, premium-pastel. Metric cards + sparklines.',
    description:
      "Light gray app bg (#F6F8FA). White cards with soft 1px borders and subtle shadows. Metric cards with large numbers + sparklines. Side-sheets instead of center modals. Reads as 'financial-grade trust.'",
    pros: [
      'Stripe-class polish translates well to academic credibility',
      'Easy migration path from current UNIFLOW look',
      'Light mode aligns with university stakeholder expectations',
    ],
    cons: [
      'Less distinctive than Premium Academic — Stripe-lookalike CRMs exist',
      'Soft shadows risk dating fast',
    ],
    reference: ['Stripe', 'Mercury', 'Cal.com'],
    vibeHex: ['#F6F8FA', '#FFFFFF', '#635BFF', '#0AC18E'],
    recommendationForUniflow: 'viable',
  },
  {
    id: 'editorial-magazine',
    name: 'Editorial Magazine',
    tagline: 'Brilliant + MasterClass cinematic feel.',
    description:
      "Full-bleed hero imagery. Editorial serif (Tiempos / Lyon / GT Sectra) for display. Long-form course content reads like a magazine article. Less 'app,' more 'publication.' Works best for content consumption, less for tools.",
    pros: [
      'Most beautiful direction',
      'Strong landing-page potential',
      'Signals "premium content" to ESCP',
    ],
    cons: [
      'Hard to scale across functional tool surfaces (planner, quiz, AI tutor)',
      'Risk of being beautiful-but-impractical for daily student use',
      'Requires custom serif font licensing',
    ],
    reference: ['MasterClass', 'Brilliant', 'Pitch marketing'],
    vibeHex: ['#FAF7F2', '#1A1A1F', '#9B2226', '#005F73'],
    recommendationForUniflow: 'risky',
  },
];

export type DesignMove = {
  title: string;
  source: string;
  rationale: string;
  effort: 'XS' | 'S' | 'M' | 'L';
  impact: 'low' | 'medium' | 'high' | 'critical';
};

export const topMoves: DesignMove[] = [
  {
    title: 'Add Geist Mono numerals for all data',
    source: 'Vercel, Mercury, Stripe, Cron',
    rationale:
      "Single highest-impact change. Grades, deadlines, scores, percentages, exam countdowns — anything numeric becomes 'serious software' instantly.",
    effort: 'XS',
    impact: 'critical',
  },
  {
    title: 'Status pill: colored dot + label (never filled chip)',
    source: 'Linear, Resend, Notion Calendar',
    rationale:
      "Replace every filled badge in UNIFLOW with [dot] Label pattern. Applies to course progress, quiz status, exam readiness. Looks like Linear, not like generic EdTech.",
    effort: 'S',
    impact: 'high',
  },
  {
    title: 'Cmd+K command bar as primary navigation',
    source: 'Raycast, Linear, Superhuman',
    rationale:
      "The demo moment that sells 'this is real software.' Dean presses K, fuzzy-searches 'macro lesson 3', it opens. No EdTech competitor has this.",
    effort: 'M',
    impact: 'critical',
  },
  {
    title: 'Persistent right-side AI tutor panel that takes actions',
    source: 'Height',
    rationale:
      "Upgrade AI from chat to agent: 'schedule lesson 4 for Tuesday', 'generate 10 quiz Qs from chapter 2'. Pair with side-sheets (not center modals) for detail views.",
    effort: 'L',
    impact: 'critical',
  },
  {
    title: 'Warm near-black text + tinted off-white bg',
    source: 'Notion, Brilliant',
    rationale:
      "Drop pure #000 on pure #FFF. Use #37352F or #1A1A1F text on a warm-tinted off-white. Single CSS variable change — instant perceived-quality lift.",
    effort: 'XS',
    impact: 'medium',
  },
  {
    title: '12-step OKLCH brand scale',
    source: 'Radix Colors, shadcn',
    rationale:
      "Replace ad-hoc --uniflow-blue / --uniflow-blue-dark / etc. with a complete 12-step semantic scale. Step 9 is the brand fill; everything else is roles (bg/border/text). Future-proofs the system.",
    effort: 'S',
    impact: 'high',
  },
  {
    title: 'Skeleton loaders that match exact final layout',
    source: 'Vercel, Linear',
    rationale:
      "Replace any spinners with skeleton blocks shaped like the final content. Reduces perceived load time, looks production-grade.",
    effort: 'M',
    impact: 'medium',
  },
];

export type AntiPattern = {
  title: string;
  why: string;
};

export const antiPatterns: AntiPattern[] = [
  {
    title: 'Pure #000 on pure #FFF',
    why: 'Reads as harsh and dated. Notion uses #37352F warm-near-black for a reason — instant quality lift with zero effort.',
  },
  {
    title: 'Soft drop-shadows on every card',
    why: 'Shadows are the fastest way to date a UI. Linear, Vercel, Resend all use 1px borders only. Reserve shadows for transient elements (popovers, modals).',
  },
  {
    title: 'Filled-color badge chips',
    why: 'Looks like a 2018 EdTech product. The dot-label pattern (●  Active) reads as 2025 software.',
  },
  {
    title: 'Gradient buttons and gradient backgrounds',
    why: 'Gradients on UI chrome scream "consumer app." Reserve gradients for hero marketing surfaces only — never buttons, never sidebars (except deliberate Arc-style theming).',
  },
  {
    title: 'Center modals for detail views',
    why: 'Side-sheets (Stripe, Linear) preserve context. Center modals interrupt. Use modals only for confirmations, never for content.',
  },
  {
    title: 'Multiple bright accent colors',
    why: 'One saturated brand color, used rarely. Linear has one violet. Vercel barely uses blue. UNIFLOW should use #2F6FED only for primary actions and brand moments — not for status, not for chart fills.',
  },
  {
    title: 'Decorative or rounded UI fonts (Nunito-like)',
    why: 'Reads as consumer/playful. For a B2B premium product targeting a business school dean, Inter or Geist is the unambiguous signal of "real software." Keep Syne for hero marketing display only.',
  },
];
