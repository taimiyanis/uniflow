import Link from 'next/link';
import {
  products,
  directions,
  topMoves,
  antiPatterns,
  type Product,
  type DesignDirection,
} from '@/lib/data/design-research';

export const metadata = {
  title: 'UNIFLOW — Design Research',
};

const categoryLabel: Record<Product['category'], string> = {
  'b2b-saas': 'B2B SaaS',
  edtech: 'EdTech',
  'design-system': 'Design system',
  lms: 'University LMS',
  'study-tool': 'Study tool',
};

const categoryColor: Record<Product['category'], string> = {
  'b2b-saas': '#2F6FED',
  edtech: '#10B981',
  'design-system': '#8B5CF6',
  lms: '#EF4444',
  'study-tool': '#F59E0B',
};

const recColor: Record<DesignDirection['recommendationForUniflow'], string> = {
  recommended: '#10B981',
  viable: '#2F6FED',
  risky: '#F59E0B',
  avoid: '#EF4444',
};

const recLabel: Record<DesignDirection['recommendationForUniflow'], string> = {
  recommended: 'Recommended',
  viable: 'Viable',
  risky: 'Risky',
  avoid: 'Avoid',
};

const effortColor: Record<'XS' | 'S' | 'M' | 'L', string> = {
  XS: '#10B981',
  S: '#22C55E',
  M: '#F59E0B',
  L: '#EF4444',
};

const impactColor: Record<'low' | 'medium' | 'high' | 'critical', string> = {
  low: '#9CA3AF',
  medium: '#3B82F6',
  high: '#8B5CF6',
  critical: '#EF4444',
};

export default function DesignResearchPage() {
  const productsByCat = products.reduce<Record<string, Product[]>>((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});

  const counts = {
    total: products.length,
    b2b: productsByCat['b2b-saas']?.length || 0,
    edtech: productsByCat['edtech']?.length || 0,
    lms: productsByCat['lms']?.length || 0,
    study: productsByCat['study-tool']?.length || 0,
    directions: directions.length,
    moves: topMoves.length,
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 96 }}>
      {/* === HERO === */}
      <header style={{ marginBottom: 56 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '4px 10px',
            background: 'var(--uniflow-blue-light)',
            border: '1px solid var(--uniflow-blue-border)',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-blue)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: 999,
              background: 'var(--uniflow-blue)',
            }}
          />
          Internal — Design Research
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.05,
            color: 'var(--uniflow-text-1)',
            margin: '0 0 16px',
            letterSpacing: '-1px',
          }}
        >
          UNIFLOW Design System Research
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            color: 'var(--uniflow-text-2)',
            maxWidth: 720,
            margin: 0,
          }}
        >
          A survey of {counts.total} reference products plus {counts.directions} candidate
          design directions for the UNIFLOW student portal. Output ahead of the ESCP demo
          freeze (May 19) and the May 22 demo.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 12,
            marginTop: 32,
          }}
        >
          {[
            { label: 'Products surveyed', value: counts.total },
            { label: 'B2B SaaS', value: counts.b2b },
            { label: 'EdTech + LMS', value: counts.edtech + counts.lms + counts.study },
            { label: 'Design directions', value: counts.directions },
            { label: 'Top moves', value: counts.moves },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                background: 'var(--uniflow-card)',
                border: '1px solid var(--uniflow-border)',
                borderRadius: 12,
                padding: '16px 18px',
              }}
            >
              <div
                style={{
                  fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                  fontSize: 32,
                  fontWeight: 700,
                  color: 'var(--uniflow-text-1)',
                  lineHeight: 1,
                  letterSpacing: '-1px',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--uniflow-text-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginTop: 6,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* === EXEC RECOMMENDATION === */}
      <Section
        eyebrow="Recommendation"
        title="The opinionated call"
        subtitle="If we ship one direction for the ESCP demo, this is it."
      >
        <div
          style={{
            background:
              'linear-gradient(135deg, var(--uniflow-sidebar) 0%, #2A3F7B 100%)',
            borderRadius: 16,
            padding: '32px 36px',
            color: '#fff',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 12,
            }}
          >
            Direction · Premium Academic, light mode
          </div>
          <div
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 28,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 16,
              letterSpacing: '-0.5px',
            }}
          >
            Brilliant&apos;s warmth + Linear&apos;s discipline + Khanmigo&apos;s
            AI rail.
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.8)',
              margin: 0,
              maxWidth: 720,
            }}
          >
            Keep the warm light bg the prototype already has. Shift body from Nunito to
            Inter for credibility (keep Syne for hero display). Add mono numerals,
            dot-status pills, and Cmd+K command bar. Ship the AI tutor as a persistent
            right rail that can take actions (Khanmigo × Height). Adopt a familiar
            left-rail LMS shell so faculty mental models work (Canvas), but deliver
            radically better interior. This is the most credible direction for a B2B
            premium product targeting ESCP&apos;s dean.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginTop: 24,
              flexWrap: 'wrap',
            }}
          >
            {[
              'Brilliant',
              'Notion',
              'Linear',
              'Khanmigo',
              'Stripe Dashboard',
              'Canvas (shell only)',
            ].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '5px 10px',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 999,
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* === TOP MOVES === */}
      <Section
        eyebrow="High-leverage moves"
        title="7 changes that lift UNIFLOW the most"
        subtitle="Ranked by impact-to-effort. Items 1, 2, 5 are XS effort and ship before May 19."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {topMoves.map((m, i) => (
            <div
              key={m.title}
              style={{
                background: 'var(--uniflow-card)',
                border: '1px solid var(--uniflow-border)',
                borderRadius: 12,
                padding: '20px 22px',
                display: 'grid',
                gridTemplateColumns: '32px 1fr auto',
                gap: 18,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--uniflow-text-3)',
                  paddingTop: 2,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-1)',
                    marginBottom: 4,
                  }}
                >
                  {m.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--uniflow-text-2)',
                    lineHeight: 1.5,
                    marginBottom: 8,
                  }}
                >
                  {m.rationale}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--uniflow-text-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                  }}
                >
                  Source · {m.source}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  alignItems: 'flex-end',
                }}
              >
                <Pill color={effortColor[m.effort]} label={`${m.effort} effort`} />
                <Pill color={impactColor[m.impact]} label={`${m.impact} impact`} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* === DESIGN DIRECTIONS === */}
      <Section
        eyebrow="Candidate directions"
        title="Five forks in the road"
        subtitle="If we don&apos;t pick a direction this week, we&apos;ll ship the demo as a hybrid that reads as none of them."
      >
        <div style={{ display: 'grid', gap: 16 }}>
          {directions.map((d) => (
            <DirectionCard key={d.id} d={d} />
          ))}
        </div>
      </Section>

      {/* === PROPOSED TOKENS === */}
      <Section
        eyebrow="Proposed token system"
        title="Design tokens, opinionated"
        subtitle="Built on the existing --uniflow-blue (#2F6FED). 12-step Radix-style brand scale + semantic surface roles + dedicated sidebar tokens."
      >
        <TokenPalette />
        <div style={{ height: 16 }} />
        <TokenTypography />
        <div style={{ height: 16 }} />
        <TokenRadii />
        <div style={{ height: 16 }} />
        <TokenShadows />
        <div style={{ height: 16 }} />
        <TokenStatus />
      </Section>

      {/* === PRODUCT MATRIX === */}
      <Section
        eyebrow="Survey"
        title={`All ${products.length} products`}
        subtitle="Grouped by category. Each card includes palette, mood, and what UNIFLOW should steal."
      >
        {(['b2b-saas', 'edtech', 'lms', 'study-tool'] as const).map((cat) => {
          const list = productsByCat[cat];
          if (!list?.length) return null;
          return (
            <div key={cat} style={{ marginBottom: 32 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: categoryColor[cat],
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'var(--uniflow-text-1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                  }}
                >
                  {categoryLabel[cat]} · {list.length}
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: 14,
                }}
              >
                {list
                  .sort((a, b) => b.relevance - a.relevance)
                  .map((p) => (
                    <ProductCard key={p.name} p={p} />
                  ))}
              </div>
            </div>
          );
        })}
      </Section>

      {/* === ANTI-PATTERNS === */}
      <Section
        eyebrow="Avoid"
        title="Anti-patterns we will not ship"
        subtitle="The fast ways to make UNIFLOW read as a 2018 EdTech product."
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {antiPatterns.map((a) => (
            <div
              key={a.title}
              style={{
                background: 'var(--uniflow-card)',
                border: '1px solid #FECACA',
                borderLeft: '4px solid #EF4444',
                borderRadius: 12,
                padding: '16px 18px',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--uniflow-text-1)',
                  marginBottom: 6,
                }}
              >
                {a.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--uniflow-text-2)',
                  lineHeight: 1.55,
                }}
              >
                {a.why}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* === NEXT STEPS === */}
      <Section
        eyebrow="Next"
        title="Decision points before May 19 freeze"
        subtitle=""
      >
        <ol
          style={{
            margin: 0,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--uniflow-text-2)',
          }}
        >
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Pick a direction</strong>
            {' '}— Premium Academic is the recommendation. If you want to reconsider, the
            other 4 are documented above with explicit trade-offs.
          </li>
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Ship the 3 XS moves first</strong>
            {' '}— mono numerals, warm near-black text, dot-status pills. Each is a one-day
            change that lifts perceived quality before the demo.
          </li>
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Replace Nunito with Inter for product UI</strong>
            {' '}— biggest single signal of &quot;serious B2B software.&quot; Keep Syne for hero
            display only (welcome banner, countdown, page H1).
          </li>
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Build Cmd+K command bar</strong>
            {' '}— the demo moment. Show the dean fuzzy-search jumping into Macro lesson 3.
          </li>
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Upgrade AI tutor to take actions</strong>
            {' '}— Khanmigo × Height pattern. Persistent right rail, knows context, can
            schedule/generate quizzes/explain.
          </li>
          <li>
            <strong style={{ color: 'var(--uniflow-text-1)' }}>Adopt the 12-step OKLCH brand scale</strong>
            {' '}— retires ad-hoc --uniflow-blue / --uniflow-blue-dark / etc. Future-proofs
            the system for dark mode later.
          </li>
        </ol>

        <div
          style={{
            marginTop: 28,
            padding: '20px 22px',
            background: 'var(--uniflow-blue-light)',
            border: '1px solid var(--uniflow-blue-border)',
            borderRadius: 12,
            fontSize: 14,
            color: 'var(--uniflow-text-2)',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: 'var(--uniflow-blue-dark)' }}>Source basis caveat.</strong>
          {' '}WebFetch and WebSearch were denied this session. This research was
          synthesized from training-data knowledge of these products through early 2026.
          Patterns, philosophies, and &quot;what to steal&quot; recommendations are reliable;
          specific hex values flagged &quot;approx&quot; should be confirmed against the live
          products before shipping. Full raw notes live in{' '}
          <code style={{ fontFamily: 'ui-monospace, monospace' }}>
            /docs/design-research/raw/
          </code>
          .
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <Link
            href="/"
            style={{
              padding: '10px 18px',
              background: 'var(--uniflow-blue)',
              color: '#fff',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Back to dashboard
          </Link>
        </div>
      </Section>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────────────────── */

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 64 }}>
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-blue)',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            marginBottom: 8,
          }}
        >
          {eyebrow}
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 32,
            fontWeight: 700,
            color: 'var(--uniflow-text-1)',
            margin: '0 0 8px',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 15,
              color: 'var(--uniflow-text-2)',
              margin: 0,
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function Pill({ color, label }: { color: string; label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 9px',
        background: `${color}14`,
        border: `1px solid ${color}33`,
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        color,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: 6,
          height: 6,
          borderRadius: 999,
          background: color,
        }}
      />
      {label}
    </span>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: 'var(--uniflow-text-1)',
                textDecoration: 'none',
              }}
            >
              {p.name}
            </a>
            <span
              style={{
                fontSize: 11,
                color: 'var(--uniflow-text-3)',
                fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
              }}
            >
              ↗
            </span>
          </div>
          <div
            style={{
              fontSize: 12,
              color: 'var(--uniflow-text-2)',
              marginTop: 2,
              lineHeight: 1.4,
            }}
          >
            {p.oneLine}
          </div>
        </div>
        <div
          style={{
            fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            flexShrink: 0,
            paddingTop: 2,
          }}
        >
          {p.relevance}/5
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4 }}>
        {p.palette.map((c) => (
          <div
            key={c.hex}
            title={`${c.label} · ${c.hex}`}
            style={{
              flex: 1,
              height: 24,
              background: c.hex,
              borderRadius: 4,
              border:
                c.hex.toLowerCase() === '#ffffff' || c.hex.toLowerCase() === '#fff'
                  ? '1px solid var(--uniflow-border)'
                  : 'none',
            }}
          />
        ))}
      </div>

      <div
        style={{
          fontSize: 12,
          color: 'var(--uniflow-text-2)',
          lineHeight: 1.5,
          fontStyle: 'italic',
        }}
      >
        {p.mood}
      </div>

      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            marginBottom: 4,
          }}
        >
          Steal
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 16,
            fontSize: 12,
            color: 'var(--uniflow-text-2)',
            lineHeight: 1.5,
          }}
        >
          {p.steal.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DirectionCard({ d }: { d: DesignDirection }) {
  const color = recColor[d.recommendationForUniflow];
  const label = recLabel[d.recommendationForUniflow];
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderLeft: `4px solid ${color}`,
        borderRadius: 12,
        padding: '24px 26px',
        display: 'grid',
        gridTemplateColumns: '1fr 220px',
        gap: 32,
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 22,
              fontWeight: 700,
              color: 'var(--uniflow-text-1)',
              margin: 0,
              letterSpacing: '-0.3px',
            }}
          >
            {d.name}
          </h3>
          <Pill color={color} label={label} />
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--uniflow-blue-dark)',
            marginBottom: 10,
          }}
        >
          {d.tagline}
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: 'var(--uniflow-text-2)',
            margin: '0 0 16px',
          }}
        >
          {d.description}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#10B981',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: 6,
              }}
            >
              Pros
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 12,
                color: 'var(--uniflow-text-2)',
                lineHeight: 1.55,
              }}
            >
              {d.pros.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#EF4444',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: 6,
              }}
            >
              Cons
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 16,
                fontSize: 12,
                color: 'var(--uniflow-text-2)',
                lineHeight: 1.55,
              }}
            >
              {d.cons.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
          }}
        >
          References · {d.reference.join(' · ')}
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--uniflow-text-3)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: 8,
          }}
        >
          Vibe
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 4,
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid var(--uniflow-border)',
          }}
        >
          {d.vibeHex.map((h) => (
            <div
              key={h}
              style={{
                height: 64,
                background: h,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '6px 8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                  fontSize: 10,
                  fontWeight: 700,
                  color: isLight(h) ? '#1A1A1F' : '#fff',
                  background: isLight(h)
                    ? 'rgba(255,255,255,0.6)'
                    : 'rgba(0,0,0,0.35)',
                  padding: '1px 5px',
                  borderRadius: 3,
                }}
              >
                {h}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function isLight(hex: string): boolean {
  const m = hex.replace('#', '');
  if (m.length !== 6) return false;
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 160;
}

function TokenPalette() {
  const brandScale = [
    { token: '--uniflow-1', oklch: 'oklch(0.992 0.004 263)', role: 'page bg tint' },
    { token: '--uniflow-2', oklch: 'oklch(0.975 0.012 263)', role: 'subtle bg' },
    { token: '--uniflow-3', oklch: 'oklch(0.945 0.028 263)', role: 'hover surface' },
    { token: '--uniflow-4', oklch: 'oklch(0.910 0.045 263)', role: 'active surface' },
    { token: '--uniflow-5', oklch: 'oklch(0.870 0.065 263)', role: 'selected' },
    { token: '--uniflow-6', oklch: 'oklch(0.820 0.085 263)', role: 'subtle border' },
    { token: '--uniflow-7', oklch: 'oklch(0.750 0.115 263)', role: 'border' },
    { token: '--uniflow-8', oklch: 'oklch(0.680 0.150 263)', role: 'strong border' },
    { token: '--uniflow-9', oklch: 'oklch(0.595 0.207 263)', role: 'SOLID BRAND' },
    { token: '--uniflow-10', oklch: 'oklch(0.545 0.215 263)', role: 'solid hover' },
    { token: '--uniflow-11', oklch: 'oklch(0.470 0.190 263)', role: 'low-contrast text' },
    { token: '--uniflow-12', oklch: 'oklch(0.245 0.085 263)', role: 'high-contrast text' },
  ];

  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--uniflow-text-1)',
            marginBottom: 4,
          }}
        >
          Brand scale (Radix-style 12 steps, OKLCH)
        </div>
        <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>
          Step 9 = solid brand (#2F6FED). Step 12 = sidebar navy (#1B2B5E). Every other
          step has a defined role.
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 4,
        }}
      >
        {brandScale.map((s, i) => (
          <div key={s.token}>
            <div
              style={{
                height: 64,
                background: s.oklch,
                borderRadius: 6,
                border: i < 3 ? '1px solid var(--uniflow-border)' : 'none',
                marginBottom: 6,
              }}
            />
            <div
              style={{
                fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                fontSize: 9,
                fontWeight: 700,
                color: 'var(--uniflow-text-2)',
                textAlign: 'center',
              }}
            >
              {i + 1}
            </div>
            <div
              style={{
                fontSize: 9,
                color: 'var(--uniflow-text-3)',
                textAlign: 'center',
                lineHeight: 1.3,
                marginTop: 2,
              }}
            >
              {s.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenTypography() {
  const scales = [
    { name: '--text-xs', size: '12px', sample: 'The quick brown fox' },
    { name: '--text-sm', size: '13px', sample: 'The quick brown fox' },
    { name: '--text-base', size: '15px', sample: 'The quick brown fox' },
    { name: '--text-md', size: '16px', sample: 'The quick brown fox' },
    { name: '--text-lg', size: '18px', sample: 'The quick brown fox' },
    { name: '--text-xl', size: '22px', sample: 'The quick brown fox' },
    { name: '--text-2xl', size: '28px', sample: 'The quick brown fox' },
    { name: '--text-3xl', size: '36px', sample: 'The quick brown fox' },
  ];
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--uniflow-text-1)',
            marginBottom: 4,
          }}
        >
          Type scale
        </div>
        <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>
          Proposed: shift body from Nunito to Inter. Keep Syne for display only.
          Add JetBrains Mono for tabular data.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {scales.map((s) => (
          <div
            key={s.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 60px 1fr',
              alignItems: 'baseline',
              gap: 16,
              paddingBottom: 6,
              borderBottom: '1px dashed var(--uniflow-border)',
            }}
          >
            <div
              style={{
                fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--uniflow-text-2)',
              }}
            >
              {s.name}
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, "JetBrains Mono", monospace',
                fontSize: 11,
                color: 'var(--uniflow-text-3)',
              }}
            >
              {s.size}
            </div>
            <div
              style={{
                fontSize: s.size,
                fontWeight: 500,
                color: 'var(--uniflow-text-1)',
                lineHeight: 1.2,
              }}
            >
              {s.sample}
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: '1px solid var(--uniflow-border)',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--uniflow-text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: 10,
            }}
          >
            Display (Syne — hero only)
          </div>
          <div
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-3px',
              color: 'var(--uniflow-text-1)',
            }}
          >
            10 DAYS
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--uniflow-text-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginTop: 6,
            }}
          >
            --display-lg · 88px · 0.95 leading
          </div>
        </div>
      </div>
    </div>
  );
}

function TokenRadii() {
  const r = [
    { name: 'sm', value: '6px' },
    { name: 'md', value: '10px' },
    { name: 'lg', value: '14px' },
    { name: 'xl', value: '20px' },
    { name: '2xl', value: '28px' },
  ];
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)' }}>
          Radii
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
        {r.map((x) => (
          <div key={x.name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 80,
                height: 80,
                background: 'var(--uniflow-blue-light)',
                border: '2px solid var(--uniflow-blue)',
                borderRadius: x.value,
              }}
            />
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--uniflow-text-1)',
                marginTop: 8,
              }}
            >
              {x.name}
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 10,
                color: 'var(--uniflow-text-3)',
              }}
            >
              {x.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenShadows() {
  const shadows = [
    {
      name: 'xs',
      val: '0 1px 2px 0 oklch(0.245 0.085 263 / 0.04)',
    },
    {
      name: 'sm',
      val: '0 1px 3px 0 oklch(0.245 0.085 263 / 0.06), 0 1px 2px -1px oklch(0.245 0.085 263 / 0.04)',
    },
    {
      name: 'md',
      val: '0 4px 12px -2px oklch(0.245 0.085 263 / 0.08), 0 2px 4px -2px oklch(0.245 0.085 263 / 0.05)',
    },
    {
      name: 'lg',
      val: '0 12px 24px -6px oklch(0.245 0.085 263 / 0.10), 0 4px 8px -4px oklch(0.245 0.085 263 / 0.06)',
    },
    {
      name: 'xl',
      val: '0 24px 48px -12px oklch(0.245 0.085 263 / 0.14), 0 8px 16px -8px oklch(0.245 0.085 263 / 0.08)',
    },
  ];
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)' }}>
          Shadow / elevation
        </div>
        <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>
          Branded depth — shadows tinted with sidebar navy at 4–14% rather than pure black.
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 20,
          padding: '24px 0 12px',
        }}
      >
        {shadows.map((s) => (
          <div key={s.name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                height: 64,
                background: '#fff',
                borderRadius: 10,
                boxShadow: s.val,
              }}
            />
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--uniflow-text-1)',
                marginTop: 14,
              }}
            >
              shadow-{s.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenStatus() {
  const status = [
    { label: 'Active', color: '#22C55E' },
    { label: 'In progress', color: '#2F6FED' },
    { label: 'Pending', color: '#F59E0B' },
    { label: 'Overdue', color: '#EF4444' },
    { label: 'Locked', color: '#9CA3AF' },
    { label: 'Mastered', color: '#8B5CF6' },
  ];
  return (
    <div
      style={{
        background: 'var(--uniflow-card)',
        border: '1px solid var(--uniflow-border)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--uniflow-text-1)' }}>
          Status pills (dot + label, never filled)
        </div>
        <div style={{ fontSize: 12, color: 'var(--uniflow-text-2)' }}>
          Linear / Resend / Notion Calendar pattern. Replace all existing filled badges.
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {status.map((s) => (
          <Pill key={s.label} color={s.color} label={s.label} />
        ))}
      </div>
    </div>
  );
}
