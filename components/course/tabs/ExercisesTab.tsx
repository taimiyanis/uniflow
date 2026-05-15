const exercises = [
  {
    number: 'Exercise 3.1',
    difficulty: 'Easy',
    title: 'GDP Calculation — Expenditure Approach',
    body: "A country reports: Consumption = €800bn, Investment = €200bn, Government spending = €300bn, Exports = €150bn, Imports = €180bn. Calculate GDP using the expenditure approach and identify which component drives output most.",
  },
  {
    number: 'Exercise 3.2',
    difficulty: 'Medium',
    title: 'Real vs. Nominal GDP',
    body: "Nominal GDP grew from €500bn to €560bn. The GDP deflator rose from 100 to 112. Calculate real GDP growth and explain what this reveals about the economy's actual productive output.",
  },
  {
    number: 'Exercise 3.3',
    difficulty: 'Hard',
    title: 'Open Economy — GDP vs GNP',
    body: "Country A has GDP of €1,200bn. Residents earn €80bn abroad; foreigners earn €60bn domestically. Calculate GNP. A company headquartered in A opens a factory in B — analyze the impact on each country's GDP and GNP.",
  },
];

const difficultyColor: Record<string, string> = {
  Easy: 'var(--uniflow-green)',
  Medium: 'var(--uniflow-amber)',
  Hard: 'var(--uniflow-red)',
};

export default function ExercisesTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {exercises.map((ex) => (
        <div key={ex.number} style={{ background: 'var(--uniflow-card)', border: '1px solid var(--uniflow-border)', borderRadius: 12, padding: '20px 24px', boxShadow: 'var(--uniflow-shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--uniflow-text-3)', textTransform: 'uppercase' }}>{ex.number}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: difficultyColor[ex.difficulty], background: `${difficultyColor[ex.difficulty]}1A`, padding: '2px 8px', borderRadius: 4 }}>{ex.difficulty}</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--uniflow-text-1)', marginBottom: 8 }}>{ex.title}</div>
          <div style={{ fontSize: 13, color: 'var(--uniflow-text-2)', lineHeight: 1.7 }}>{ex.body}</div>
        </div>
      ))}
    </div>
  );
}
