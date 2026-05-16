# B2B SaaS Design Intelligence Survey — for UNIFLOW

Source basis: assembled from documented design system materials, blog posts, and product UI memory through Jan 2026. WebFetch/WebSearch were denied in this session, so exact hex codes are flagged "approx" or described qualitatively where not memorized verbatim. Treat as a synthesis starting point, not a primary source citation.

---

## 1. Linear — linear.app

- **URLs**: https://linear.app, https://linear.app/method, https://linear.app/now, https://linear.app/blog/how-we-redesigned-the-linear-ui
- **What it is**: Issue tracking and project management for software teams.
- **Palette**: Dark-first. Backgrounds layered near-black (#08090A / #0F1011 / #1A1B1E approx). Surface lifts via subtle 1px borders (#1F1F22 approx). Accent purple/violet `#5E6AD2` (their signature). Status colors muted: green ~#4CB782, amber ~#F2C94C, red ~#EB5757. Light mode exists but the brand sells dark. Mood: cool, monochromatic, single accent.
- **Typography**: Inter (custom variant) for UI; recently shifted toward their proprietary "Inter Tight"-style display for marketing. Marketing display uses tight tracking, large weights (500-600). Scale: tight, restrained — 11/13/14/16/24/32. No decorative font, no serif.
- **Sidebar / app shell**: Left sidebar ~240px, same color as canvas (no contrast lift), 13px text, lucide-style 16px icons. Section labels in 11px uppercase muted gray. Workspace switcher top, settings bottom. Collapsible groups with subtle chevrons. Density: high.
- **Dashboard / cards**: List-first, not card-first. When cards appear, 1px borders, no shadows, 8-12px radius. Whitespace controlled. Premium feel comes from typographic discipline plus monospace numerals for IDs.
- **Distinctive primitives**: Command menu (Cmd+K) with type-ahead and inline keyboard hints (`⌘ K` pills in `#2A2A2D` with `#9CA3AF` text). Status pills with colored circle + label. Inline `⌘` keyboard shortcut chips everywhere. Priority icons (4-bar). Animated empty states. Quick-add `C` shortcut.
- **Interaction polish**: 60fps everything. View transitions <100ms. Optimistic UI for every mutation. Subtle spring animations for sidebar toggles. Focus rings: 2px violet outline with 2px offset. Hover lift: row gets `#1A1B1E` background — never a shadow.
- **Steal for UNIFLOW**: (a) Keyboard shortcut chips inline next to actions (`⌘ ↵` style). (b) Command menu as primary navigation, not a hidden affordance. (c) Status pill component: colored dot + label + uppercase tracking — for course progress, quiz status, exam countdown.
- **Relevance**: 5/5

---

## 2. Vercel — vercel.com

- **URLs**: https://vercel.com, https://vercel.com/design, https://vercel.com/geist/introduction, https://vercel.com/geist/colors
- **What it is**: Frontend cloud + deployment platform.
- **Palette**: Black/white maximalism. Pure `#000` and `#FFF` as primary. Grayscale 12-step ramp (`gray-100` through `gray-1200`). Accent: blue `#0070F3` (legacy) being phased toward neutral. Status: success green, warning amber, error red — all desaturated. Dark mode default. Mood: neutral, technical, high-contrast.
- **Typography**: Geist Sans (own font, Inter-derived) for UI; Geist Mono for code/IDs. Marketing uses tight tracking, very large weights. Scale follows 4px grid: 12/14/16/20/24/32/48.
- **Sidebar / app shell**: Top-bar dominant (not sidebar) for project switcher + tabs. Dashboard uses left rail with project/team switcher. Borders 1px, no fill differentiation. Heavy use of breadcrumb instead of nav.
- **Dashboard / cards**: Cards with 1px border, 12px radius, no shadows. Status indicators left-aligned with colored dots. Hover = border darkens to gray-600. Premium feel from tight grid + monospace numerals + restraint.
- **Distinctive primitives**: Deployment status badge (animated pulsing dot when building). Inline code blocks in mono. Charts: minimal grid, dotted axes, single-color line. `kbd` chips for shortcuts. Skeleton loaders that match exact final layout.
- **Interaction polish**: Page transitions via View Transitions API. Skeleton loaders shimmer. Toast notifications slide from bottom-right with auto-dismiss progress bar. Buttons: subtle 1px translate-y on press.
- **Steal**: (a) Monospace numerals for any data (grades, deadlines, scores). (b) Skeleton loaders that match exact final layout — better than spinners. (c) 12-step gray ramp instead of "light/medium/dark" gray.
- **Relevance**: 5/5

---

## 3. Stripe Dashboard — stripe.com

- **URLs**: https://stripe.com, https://dashboard.stripe.com, https://stripe.com/blog/markdoc, https://stripe.press
- **What it is**: Payments infrastructure with admin dashboard.
- **Palette**: Light-first dashboard. Background `#F6F8FA` approx. Cards white. Brand purple `#635BFF` (Stripe purple). Secondary: blurple, mint, coral pastels for category coding. Mood: optimistic, warm-cool blend, premium-pastel.
- **Typography**: Söhne (proprietary, licensed) for marketing + dashboard. Body: 14px regular. Scale tight, generous line-height (1.5+). Numerals tabular for tables.
- **Sidebar / app shell**: Light sidebar ~240px, background `#FFFFFF`, subtle right border. 13px text, 16px icons. Multi-level nav with smooth expand. Account/mode switcher top with environment badge ("Test mode" amber pill).
- **Dashboard / cards**: Card-heavy. White cards on `#F6F8FA`, soft 1px border, 8-12px radius, subtle shadow `0 1px 2px rgba(0,0,0,0.04)`. Metric cards: large number (28-32px), label below, sparkline. Density medium.
- **Distinctive primitives**: Sparklines everywhere. "Test mode" amber environment chip. Metric deltas with up/down arrow + color. Modal stacking (recent shift to "side sheets" instead of center modals). Inline editing on tables. Tooltips with rich content.
- **Interaction polish**: Numbers count up on load. Cards lift on hover (2px shadow expand). Color-graded charts. Cmd+K search opens center modal. Tables: row hover = `#F6F8FA`, sticky headers.
- **Steal**: (a) Side-sheet pattern instead of center modals (course detail, lesson editor). (b) Metric card with sparkline for "courses progressed this week." (c) Environment-style colored pill — repurpose as "B2 Spring 2026" semester chip.
- **Relevance**: 5/5

---

## 4. Notion — notion.so

- **URLs**: https://notion.so, https://notion.com/blog
- **What it is**: All-in-one workspace docs + databases.
- **Palette**: Light-first. Background `#FFFFFF`, text `#37352F` (warm near-black, not pure black — signature). Hover backgrounds: cream/warm grays. Accent: soft blues, no brand color in product itself. Mood: warm, paper-like, calm.
- **Typography**: Inter / system stack. Body 16px. Headings 1.875rem / 1.5rem / 1.25rem. Generous line-height. Recent move: serif option for headers (Lyon) — gives editorial feel.
- **Sidebar / app shell**: Left sidebar `#F7F6F3` (warm gray, not blue-gray — distinctive). 14px text. Page-tree with expand chevrons. Drag handles appear on hover. Workspace switcher top.
- **Dashboard / cards**: Anti-card. Pages are documents. Gallery views show cards with 8px radius, very subtle shadow. Database views: table, board, gallery, calendar — same data, different render.
- **Distinctive primitives**: Slash commands (`/`) — gold standard for inline insertion menu. Block hover handle (drag dots + plus icon). Inline mentions (@person, @page). Toggle blocks. Callout blocks with emoji.
- **Interaction polish**: Smooth block reordering. Hover handles fade in. Cursor presence for collaborators. Cmd+P quick-switcher.
- **Steal**: (a) Warm near-black text `#37352F` instead of pure black — already lifts perceived quality. (b) Slash command for AI chat prompts inside notes. (c) Callout block pattern (colored left border, icon, content) — perfect for "key concept" or "exam tip" call-outs in course content.
- **Relevance**: 4/5

---

## 5. Arc (browser) — arc.net

- **URLs**: https://arc.net, https://browserco.notion.site, https://thebrowser.company
- **What it is**: Reimagined web browser with vertical tabs and spaces.
- **Palette**: Per-space gradients. User picks 2-3 colors that form a soft gradient sidebar. Default: pinks, purples, peaches. Mood: playful, warm, expressive.
- **Typography**: Inter. Display uses heavier weights with tight tracking. Marketing site uses serif accents (Tiempos-like).
- **Sidebar / app shell**: Left vertical "command bar" — tabs, spaces, folders all live there. Width ~240px. Gradient background. Tab favicons + titles. Pinned tabs above unpinned.
- **Dashboard / cards**: N/A (browser). Settings panel uses centered modal with left-rail sections — very Mac-native feel.
- **Distinctive primitives**: Command bar Cmd+T (mini Spotlight that replaces address bar). "Easels" (collaborative canvas). Per-space theming. Boost (CSS injection) UI.
- **Interaction polish**: Sidebar gradients animate slowly. Tab transitions smooth scale. Cmd+T opens as floating panel with backdrop blur. Heavy use of spring physics.
- **Steal**: (a) Per-context theme accent — let each course have its own gradient or accent color (Macro = blue, Marketing = pink). (b) Backdrop-blur floating command bar instead of inline. (c) Cmd+T-style "open anything" search as primary affordance.
- **Relevance**: 3/5

---

## 6. Raycast — raycast.com

- **URLs**: https://raycast.com, https://www.raycast.com/blog, https://developers.raycast.com
- **What it is**: macOS launcher / command bar / productivity layer.
- **Palette**: Dark by default. Background `#1C1C1C` approx with translucent backdrop-blur. Brand red `#FF6363`. Light mode is genuinely good. Mood: dark-glass, premium, focused.
- **Typography**: SF Pro / Inter. 13px UI text. Mono for keyboard shortcuts and IDs.
- **Sidebar / app shell**: N/A (it's a command bar). The bar itself is ~750px wide, ~480px tall, vertically stacked rows with icon + title + accessories on right (shortcut hint, type, badge).
- **Dashboard / cards**: Row-based, never cards. Each row: 16px icon, 14px title, 12px subtitle. Right side: keyboard hint or status badge.
- **Distinctive primitives**: THE gold standard for command bar UI. Keyboard hint pills (`⌘ ↵`) right-aligned. Action panel (Cmd+K within Cmd+K — second-level menu). Inline icons with subtle background tinting. Filter chips.
- **Interaction polish**: Instant fuzzy search. Spring animation on open. Arrow-key navigation with subtle row highlight `#2D2D2D`. Action panel slides in from bottom-right.
- **Steal**: (a) Action panel pattern (Cmd+K inside Cmd+K) — student presses K on a course, gets contextual actions (open notes, start quiz, ask AI). (b) Right-aligned keyboard hint pills on every row. (c) Row layout (icon + title + subtitle + accessory) for course list, lesson list, planner items.
- **Relevance**: 5/5

---

## 7. Pitch — pitch.com

- **URLs**: https://pitch.com
- **What it is**: Collaborative presentation software for teams.
- **Palette**: Dark-first editor. Background `#0E0E10` approx. Brand: vibrant green/yellow accent. Marketing site uses bold color blocks (orange, pink, lime). Mood: confident, design-forward, fashion-mag.
- **Typography**: Recently uses Söhne and custom display fonts. Big editorial type on marketing — 80-120px headings. Body Inter or similar.
- **Sidebar / app shell**: Slide thumbnails left, canvas center, properties right. Three-panel. Top toolbar minimal.
- **Dashboard / cards**: Workspace shows presentation grid — large thumbnails on dark background. 16:9 aspect, 12px radius.
- **Distinctive primitives**: Floating contextual toolbar (appears next to selection). Presence avatars stacked top-right. Comment threads pinned to slide positions.
- **Interaction polish**: Smooth zoom in/out. Selection handles in brand color. Live multi-cursor.
- **Steal**: (a) Three-panel layout (nav | content | properties) for course editor view. (b) Floating contextual toolbar instead of static. (c) Presence avatars stacked — for "3 classmates studying this lesson now."
- **Relevance**: 3/5

---

## 8. Superhuman — superhuman.com

- **URLs**: https://superhuman.com
- **What it is**: Premium email client built for speed.
- **Palette**: Light primary with deep purple/indigo brand `#5E2EFF` approx. Recently dark mode added. Mood: editorial, calm, expensive.
- **Typography**: Custom serif for marketing (Tiempos-ish). Product UI uses Inter. Generous line-height. Reading-optimized.
- **Sidebar / app shell**: Minimal left rail (inbox, splits, folders) with very light borders. Three-pane: list left, reading right.
- **Dashboard / cards**: N/A — inbox is the dashboard.
- **Distinctive primitives**: Keyboard-first everywhere. Cmd+K opens command bar. Single-letter shortcuts (J/K for next/prev). "Splits" — saved filtered views. Reminders pinned. Read statuses.
- **Interaction polish**: Sub-100ms response everywhere. Triage with keyboard only. Beautiful empty state ("Inbox zero"). Onboarding is concierge.
- **Steal**: (a) Single-letter shortcuts visible on hover (J/K, E to archive). (b) "Splits" pattern → saved views for "Due this week," "Failed quizzes," "Exam prep." (c) Inbox-zero style celebration empty state when daily tasks done.
- **Relevance**: 4/5

---

## 9. Height — height.app

- **URLs**: https://height.app
- **What it is**: AI-native project management (Linear competitor).
- **Palette**: Dark-first like Linear. Background `#0F0F11` approx. Accent: cyan/teal. More color usage than Linear — labels in multiple hues. Mood: cool, technical.
- **Typography**: Inter. Similar tight scale to Linear.
- **Sidebar / app shell**: Left rail with workspace switcher, nav, AI assistant pinned bottom.
- **Dashboard / cards**: List-first. Multi-select with bulk actions appearing as floating bar at bottom.
- **Distinctive primitives**: AI assistant ("Copilot") embedded as persistent right panel. Auto-categorization. Inline @-mention for any entity. Floating multi-select toolbar at bottom.
- **Interaction polish**: Subtle inline AI suggestions. Right-panel AI chat slides without modal.
- **Steal**: (a) Persistent right-side AI panel that can be collapsed — exactly the UNIFLOW AI chat pattern. (b) Floating bulk-action bar at bottom on multi-select. (c) AI chat that can take action ("schedule this lesson for Tuesday").
- **Relevance**: 5/5

---

## 10. Cron / Notion Calendar — calendar.notion.so

- **URLs**: https://calendar.notion.so (formerly cron.com)
- **What it is**: Premium calendar app, acquired by Notion.
- **Palette**: Dark-first. Near-black canvas. Event blocks use desaturated category colors (blue, green, amber, purple). Mood: minimal, focused, monochrome-with-accents.
- **Typography**: Inter. Tight scale. Mono for time labels (10:00, 14:30).
- **Sidebar / app shell**: Left rail with calendar list + month mini-cal. Right: main grid (week/day).
- **Dashboard / cards**: Event blocks: 6px radius, colored left bar, title + time, no shadows. Time grid with subtle horizontal lines.
- **Distinctive primitives**: Cmd+K to create event by natural language ("lunch with Sara tomorrow 1pm"). Time-zone overlay. Snap-to-grid drag. Conflict warnings inline.
- **Interaction polish**: Drag-to-create with live preview. Smooth zoom levels (day/week/month). Hover on event = quick preview popover.
- **Steal**: (a) Natural-language event creation for planner ("Quiz on Macro Friday 3pm"). (b) Colored left bar on event blocks instead of full color fill — more elegant. (c) Mono time labels.
- **Relevance**: 5/5 (planner directly maps)

---

## 11. Framer — framer.com

- **URLs**: https://framer.com
- **What it is**: No-code design + website builder.
- **Palette**: Marketing site is dark with vibrant gradient accents (purple, pink, blue). Editor is light by default. Mood: design-forward, kinetic.
- **Typography**: Custom display (geometric sans). Marketing uses massive type. Body Inter.
- **Sidebar / app shell**: Three-panel design editor — layers left, canvas center, properties right.
- **Dashboard / cards**: Template marketplace uses large image cards with hover-play preview.
- **Distinctive primitives**: Marketing site itself uses scroll-driven animations, sticky sections, transform-on-scroll. Templates with live previews.
- **Interaction polish**: Heavy motion. Springs everywhere. Scroll-driven transforms on marketing pages.
- **Steal**: (a) Marketing site motion language for UNIFLOW landing page (scroll-driven section reveals). (b) Live-preview cards for course library. (c) Properties panel pattern for any settings/config screen.
- **Relevance**: 3/5

---

## 12. Loom — loom.com

- **URLs**: https://loom.com
- **What it is**: Async video messaging for work.
- **Palette**: Brand purple/violet `#625DF5` approx. Light primary. Mood: friendly, approachable, prosumer.
- **Typography**: Inter or similar. Less distinctive than peers.
- **Sidebar / app shell**: Left rail with library folders. Video thumbnails grid main area.
- **Dashboard / cards**: Video thumbnails with overlay duration, view count, comment count. Card hover lifts.
- **Distinctive primitives**: Video player with reactions (emoji pinned to timestamp). Comment threads pinned to time. Transcript sidebar with click-to-jump.
- **Interaction polish**: Reactions animate. Transcript highlights current word.
- **Steal**: (a) Click-on-transcript-to-jump pattern for video lessons. (b) Emoji reactions pinned to timestamps in video lessons. (c) Comment threads tied to lesson timestamps.
- **Relevance**: 4/5 (UNIFLOW has videos)

---

## 13. Figma — figma.com

- **URLs**: https://figma.com, https://figma.com/blueprint (component library)
- **What it is**: Collaborative design tool.
- **Palette**: Dark editor default. Background `#1E1E1E`. Brand: red-purple-blue ("F-I-G" colors). Mood: technical, dense, neutral.
- **Typography**: Inter. 11/12px UI text — very dense. Mono for numerical inputs.
- **Sidebar / app shell**: Three-panel. Layers left, canvas, properties right. Top toolbar with tools.
- **Dashboard / cards**: File browser uses thumbnail cards. Recent files row at top. Team/project nav left.
- **Distinctive primitives**: Inspect panel. Component variants picker. Auto-layout indicator. Multiplayer cursors with name labels.
- **Interaction polish**: Multi-cursor presence (industry standard). Frame transitions. Smooth zoom.
- **Steal**: (a) 11/12px micro-text in property panels (when info-dense). (b) Auto-layout-style spacing visualizer (for showing course structure). (c) Multiplayer cursor presence is overkill but presence indicators for "tutor is reviewing this" applies.
- **Relevance**: 3/5

---

## 14. Resend — resend.com

- **URLs**: https://resend.com
- **What it is**: Developer email API + dashboard.
- **Palette**: Black & white. Pure `#000`, pure `#FFF`, gray ramp. Single accent: cool blue or amber on status. Mood: brutalist-minimal, dev-tool.
- **Typography**: Inter. Display weights for marketing very large (96px+). Mono for code blocks. Tight tracking everywhere.
- **Sidebar / app shell**: Left rail, ~220px, no fill differentiation from canvas. 13px text. Heavy reliance on borders.
- **Dashboard / cards**: White cards on white with 1px border. No shadows. Tables dominant. Mono numerals.
- **Distinctive primitives**: Email preview panel. Webhook event log with expandable rows. Status pills (delivered, bounced, complained) — colored dot + label.
- **Interaction polish**: Skeleton loaders. Toast confirmations. Hover row highlight `#F5F5F5`.
- **Steal**: (a) Borderless white-on-white card pattern (1px border only) — clean, modern. (b) Status pill with colored dot system. (c) Mono numerals for IDs, dates, scores.
- **Relevance**: 4/5

---

## 15. Cal.com — cal.com

- **URLs**: https://cal.com
- **What it is**: Open-source scheduling (Calendly alternative).
- **Palette**: Light primary. Brand: black accent. Subtle backgrounds `#F9FAFB`. Mood: clean, neutral, prosumer.
- **Typography**: Inter / Cal Sans (their custom display). Cal Sans is open-source — geometric, friendly.
- **Sidebar / app shell**: Left rail with bookings, event types, availability. 14px text.
- **Dashboard / cards**: Card-light. Booking type cards with toggle switch + color tag.
- **Distinctive primitives**: Time-slot picker (vertical scrollable). Timezone detector. Color-coded event types.
- **Interaction polish**: Smooth time-slot scroll. Inline edit on event types.
- **Steal**: (a) Cal Sans as a free, friendly display font option (it's open). (b) Color-coded event-type tag system for course types. (c) Vertical time-slot picker pattern for booking tutor sessions.
- **Relevance**: 4/5

---

## 16. Mercury — mercury.com

- **URLs**: https://mercury.com
- **What it is**: Business banking for startups.
- **Palette**: Light-primary with deep navy. Backgrounds near-white `#FAFAFA`. Navy text. Mint green accent for positive amounts. Mood: trust-forward, premium, calm.
- **Typography**: Polysans (custom) for marketing. Inter for product. Tabular nums everywhere. Tight tracking on display.
- **Sidebar / app shell**: Left rail light, narrow ~220px. Account switcher top. Heavy use of typographic hierarchy over color.
- **Dashboard / cards**: Card-light, table-heavy. Transactions list with mono amounts right-aligned. Account balance prominent at top.
- **Distinctive primitives**: Tabular numerals everywhere. Hover-reveal row actions. Animated balance count-up. Card art (custom designs for debit cards) — premium touch.
- **Interaction polish**: Numbers animate. Subtle hover row highlights. Modal stacking elegant.
- **Steal**: (a) Animated count-up on numbers (grade %, % course completed). (b) Tabular numerals for all numeric data. (c) Trust-forward navy + mint accent as alternative to brand blue.
- **Relevance**: 4/5

---

## 17. Attio — attio.com

- **URLs**: https://attio.com
- **What it is**: Customer relationship management (CRM) for modern teams.
- **Palette**: Light primary. Background `#FAFAFA`. Brand: deep blue/black. Accent colors used for category tags. Mood: spreadsheet-meets-Notion, premium.
- **Typography**: Inter. Numerical data in tabular mono. Tight, dense.
- **Sidebar / app shell**: Left rail with workspace nav, lists, recently viewed. ~240px.
- **Dashboard / cards**: Table-first like Airtable but more refined. Cards in board view. Rich cells (avatars, multi-select chips, dates).
- **Distinctive primitives**: Inline rich cells (multi-select chips inside table cell). Quick-look popover on hover. Multi-select chips with color coding.
- **Interaction polish**: Cell focus rings. Smooth column resize. Hover row.
- **Steal**: (a) Multi-select chip pattern inside content (tags like "Macroeconomics," "B2 Spring," "Exam-relevant"). (b) Quick-look popover on hover (preview lesson without leaving the list). (c) Rich-cell table pattern for course dashboard table view.
- **Relevance**: 4/5

---

# Synthesis — Top 5 Design Moves UNIFLOW Should Adopt

UNIFLOW currently reads as friendly-EdTech: Nunito body, Syne display, bright `#2F6FED` blue, navy sidebar. To shift toward "serious software," adopt these five moves drawn directly from the survey:

1. **Replace Nunito with Inter (or Geist/Cal Sans) and keep Syne only for hero marketing display, not in-product.** (Linear, Vercel, Mercury, Stripe). Nunito reads as consumer/playful. Inter is the universal premium-product standard. Keep Syne for landing-page headlines only.

2. **Adopt monospace numerals across all data — grades, deadlines, scores, percentages, timestamps.** (Vercel, Mercury, Stripe, Cron). Use Geist Mono or JetBrains Mono. This single change does more for "serious software" perception than almost anything else.

3. **Status-pill system: colored dot + label, not full color fill.** (Linear, Resend, Cron). Replace any "filled chip" badges with `[dot] Label` pattern. Apply to lesson status, quiz status, exam readiness, course progress.

4. **Command bar (Cmd+K) as primary navigation, with right-aligned keyboard hint chips on every row.** (Raycast, Linear, Superhuman). Make it the centerpiece of the demo — pressing `K` and watching the ESCP dean fuzzy-search "macro lesson 3" is the moment that sells "real product, not slideware."

5. **Persistent right-side AI panel that can issue commands, not just answer.** (Height). UNIFLOW's AI is currently a chat; upgrade so it can take actions ("schedule this for Tuesday," "generate a 10-question quiz from lesson 4"). Pair with side-sheets (Stripe) instead of center modals for detail views.

**Anti-patterns to avoid:**
- **Card shadows + filled-color tag chips** (typical EdTech look). Replace with 1px borders and dot-pill status. Shadows date a product faster than anything.
- **Pure-black `#000` on pure-white `#FFF`.** Use warm-near-black `#1A1A1F` and an off-white `#FAFAFA` or `#F7F9FF` background. Notion-`#37352F` proves how much warmth lifts perceived quality.
