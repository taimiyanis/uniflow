export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ec22Quiz: QuizQuestion[] = [
  {
    question: 'If nominal GDP grows by 8% and inflation is 3%, what is the approximate real GDP growth rate?',
    options: ['11%', '5%', '8%', '3%'],
    correctIndex: 1,
    explanation: 'Real GDP growth ≈ Nominal − Inflation = 8% − 3% = 5%. This is the Fisher approximation.',
  },
  {
    question: 'Which of the following is NOT included in GDP?',
    options: [
      'Government spending on services',
      'Business investment in machinery',
      'Transfer payments (unemployment benefits)',
      'Net exports of goods and services',
    ],
    correctIndex: 2,
    explanation: 'Transfer payments are not included in GDP because they do not represent production of goods or services — they are simply redistribution.',
  },
  {
    question: "Country A's GDP = €1,000bn. Residents earn €60bn abroad; foreigners earn €40bn domestically. What is GNP?",
    options: ['€900bn', '€1,000bn', '€1,020bn', '€1,060bn'],
    correctIndex: 2,
    explanation: 'GNP = GDP + Net factor income = €1,000 + (€60 − €40) = €1,020bn.',
  },
  {
    question: 'The GDP deflator rises from 100 to 115. Nominal GDP grows from €500bn to €600bn. What is real GDP?',
    options: ['€521bn', '€575bn', '€600bn', '€690bn'],
    correctIndex: 0,
    explanation: 'Real GDP = (Nominal GDP ÷ Deflator) × 100 = (600 ÷ 115) × 100 ≈ €521bn.',
  },
  {
    question: 'According to the Phillips Curve, what typically happens when unemployment falls below its natural rate (NAIRU)?',
    options: [
      'Inflation decreases',
      'Inflation increases',
      'Real GDP decreases',
      'Interest rates fall automatically',
    ],
    correctIndex: 1,
    explanation: 'Below NAIRU, labour markets tighten, wages rise, and firms pass costs to consumers — driving inflation upward. This is the core trade-off of the Phillips Curve.',
  },
  {
    question: 'If the Marginal Propensity to Consume (MPC) is 0.75, what is the Keynesian fiscal multiplier?',
    options: ['0.75', '1.33', '3', '4'],
    correctIndex: 3,
    explanation: 'Multiplier = 1 ÷ (1 − MPC) = 1 ÷ 0.25 = 4. A €1 increase in government spending raises equilibrium GDP by €4.',
  },
  {
    question: 'In the IS-LM model, which event shifts the IS curve to the RIGHT?',
    options: [
      'The central bank raises interest rates',
      'Government increases spending',
      'Households increase their savings rate',
      'The money supply contracts',
    ],
    correctIndex: 1,
    explanation: 'Higher government spending raises aggregate demand, shifting IS right — increasing equilibrium output at every interest rate level.',
  },
  {
    question: 'When the central bank tightens monetary policy (reduces money supply), what happens to the LM curve?',
    options: [
      'It shifts right — output rises',
      'It shifts left — output falls',
      'It rotates around equilibrium',
      'It remains unchanged',
    ],
    correctIndex: 1,
    explanation: 'Reducing money supply shifts LM left (upward), raising equilibrium interest rates and reducing output. This is contractionary monetary policy.',
  },
  {
    question: 'A country runs a current account surplus. Which of the following must be true?',
    options: [
      'It is net borrowing from abroad',
      'Its imports exceed its exports',
      'It is net lending to the rest of the world',
      'Its capital account is also in surplus',
    ],
    correctIndex: 2,
    explanation: 'A current account surplus means exports exceed imports — the country earns more from abroad than it spends, effectively lending the difference internationally.',
  },
  {
    question: 'The "crowding out" effect occurs when government borrowing:',
    options: [
      'Reduces consumer confidence directly',
      'Raises interest rates, reducing private investment',
      'Lowers tax revenues over time',
      'Causes the exchange rate to depreciate',
    ],
    correctIndex: 1,
    explanation: 'Government borrowing competes for loanable funds, pushing up interest rates. This raises the cost of capital for private firms, reducing private investment.',
  },
];
