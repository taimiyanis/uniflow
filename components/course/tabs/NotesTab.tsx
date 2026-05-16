import { StatusPill } from '@/components/ui/StatusPill';

interface Props {
  selectedChapterIndex: number;
}

export default function NotesTab({ selectedChapterIndex }: Props) {
  if (selectedChapterIndex === 3) {
    return (
      <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '28px 32px', boxShadow: 'var(--uniflow-shadow)' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <StatusPill tone="brand" label="Chapter 4" />
          <StatusPill tone="warn" label="Core concept" />
        </div>
        <h1 style={{ fontSize: 20, fontWeight: 900, color: 'var(--uniflow-text-1)', marginBottom: 20 }}>The IS-LM Model</h1>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>What is IS-LM?</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 16 }}>
          The IS-LM model describes short-run macroeconomic equilibrium by combining the goods market (IS curve) and the money market (LM curve). The intersection gives the equilibrium output (Y) and interest rate (r).
        </p>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>IS Curve — Goods Market</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 10 }}>
          The IS curve shows all (Y, r) pairs where the goods market is in equilibrium. It slopes <strong>downward</strong> — higher r reduces investment, which reduces Y.
        </p>
        <ul style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Shifts right:</strong> increase in G, decrease in taxes, rise in consumer confidence</li>
          <li><strong>Shifts left:</strong> decrease in G, tax increase, fall in exports</li>
        </ul>
        <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 8, padding: '10px 16px', fontFamily: 'monospace', fontSize: 13, color: 'var(--uniflow-blue-dark)', marginBottom: 16 }}>
          IS equilibrium: Y = C(Y−T) + I(r) + G
        </div>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>LM Curve — Money Market</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 10 }}>
          The LM curve shows all (Y, r) pairs where money demand equals money supply. It slopes <strong>upward</strong> — higher Y raises money demand, pushing up r.
        </p>
        <ul style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Shifts right:</strong> central bank increases money supply (Ms ↑)</li>
          <li><strong>Shifts left:</strong> central bank raises rates / reduces Ms</li>
        </ul>
        <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 8, padding: '10px 16px', fontFamily: 'monospace', fontSize: 13, color: 'var(--uniflow-blue-dark)', marginBottom: 16 }}>
          LM equilibrium: M/P = L(Y, r)
        </div>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>Policy Effects</h2>
        <ul style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Fiscal expansion (G ↑):</strong> IS shifts right → Y rises, r rises → partial crowding out</li>
          <li><strong>Monetary expansion (Ms ↑):</strong> LM shifts right → Y rises, r falls → no crowding out</li>
        </ul>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>The Liquidity Trap</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 16 }}>
          When interest rates approach zero, the LM curve becomes horizontal. Monetary policy loses traction — only fiscal policy can raise Y. This is the Keynesian liquidity trap.
        </p>
        <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 8, padding: '10px 16px', fontFamily: 'monospace', fontSize: 13, color: 'var(--uniflow-blue-dark)' }}>
          Multiplier effect: ΔY = (1 / (1−c)) × ΔG
        </div>
      </div>
    );
  }

  if (selectedChapterIndex === 2) {
    return (
      <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '28px 32px', boxShadow: 'var(--uniflow-shadow)' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <StatusPill tone="brand" label="Chapter 3" />
          <StatusPill tone="warn" label="Core concept" />
        </div>
        <h1 style={{ fontSize: 20, fontWeight: 900, color: 'var(--uniflow-text-1)', marginBottom: 20 }}>GDP, GNP and National Accounts</h1>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>Key Definitions</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 8 }}>
          <strong>GDP</strong> — total market value of all goods and services produced within a country&apos;s borders, regardless of who produces them.
        </p>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 16 }}>
          <strong>GNP</strong> — measures output produced by a country&apos;s residents, wherever they are located.
        </p>
        <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 8, padding: '10px 16px', fontFamily: 'monospace', fontSize: 13, color: 'var(--uniflow-blue-dark)', marginBottom: 16 }}>
          GNP = GDP + Net factor income from abroad
        </div>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>Three Approaches to Measuring GDP</h2>
        <ul style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.8, marginBottom: 16, paddingLeft: 20 }}>
          <li><strong>Expenditure approach:</strong> GDP = C + I + G + (X − M)</li>
          <li><strong>Income approach:</strong> sum of all incomes earned in production</li>
          <li><strong>Production approach:</strong> sum of value added at each stage</li>
        </ul>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>Real vs. Nominal GDP</h2>
        <p style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7, marginBottom: 16 }}>
          Nominal GDP uses current prices. Real GDP adjusts for inflation using a base-year price index.
        </p>
        <div style={{ background: 'var(--uniflow-blue-light)', border: '1px solid var(--uniflow-blue-border)', borderRadius: 8, padding: '10px 16px', fontFamily: 'monospace', fontSize: 13, color: 'var(--uniflow-blue-dark)', marginBottom: 16 }}>
          GDP deflator = (Nominal GDP ÷ Real GDP) × 100
        </div>
        <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>Limitations of GDP</h2>
        <ul style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.8, paddingLeft: 20 }}>
          <li>Does not capture income distribution or inequality</li>
          <li>Excludes non-market activity (household work, volunteering)</li>
          <li>Does not reflect environmental degradation or sustainability</li>
          <li>HDI (Human Development Index) is often used alongside GDP</li>
        </ul>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 14, padding: '40px', textAlign: 'center', boxShadow: 'var(--uniflow-shadow)' }}>
      <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--uniflow-text-2)', marginBottom: 6 }}>Notes in preparation</div>
      <div style={{ fontSize: 13, color: 'var(--uniflow-text-3)', fontWeight: 500, lineHeight: 1.6 }}>
        Study notes for this chapter are being finalized. Ask the AI Tutor for help.
      </div>
    </div>
  );
}
