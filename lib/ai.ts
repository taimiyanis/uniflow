import { aiResponses, defaultReplies } from '@/lib/data/ai-responses';

export function getAIResponse(text: string, defaultIndex: number): string {
  const lower = text.toLowerCase();

  if (lower.includes('gdp') || lower.includes('gnp')) return aiResponses.gdp;
  if (lower.includes('is-lm') || lower.includes('islm') || lower.includes('is lm')) return aiResponses.islm;
  if (lower.includes('inflation') || lower.includes('deflation') || lower.includes('phillips')) return aiResponses.inflation;
  if (lower.includes('fiscal') || lower.includes('multiplier') || lower.includes('government spending')) return aiResponses.fiscal;
  if (lower.includes('monetary') || lower.includes('money supply') || lower.includes('liquidity')) return aiResponses.monetary;
  if (lower.includes('quiz') || lower.includes('question') || lower.includes('practice')) return aiResponses.quiz;
  if (lower.includes('exam') || lower.includes('past') || lower.includes('january')) return aiResponses.exam;
  if (lower.includes('contract') || lower.includes('offer') || lower.includes('acceptance') || lower.includes('consideration')) return aiResponses.contract;
  if (lower.includes('breach') || lower.includes('damages') || lower.includes('remedy') || lower.includes('remedies')) return aiResponses.breach;
  if (lower.includes('liability') || lower.includes('tort') || lower.includes('delict') || lower.includes('strict liability')) return aiResponses.liability;
  if (lower.includes('balance sheet') || lower.includes('assets') || lower.includes('ifrs') || lower.includes('financial position')) return aiResponses.balance;
  if (lower.includes('revenue') || lower.includes('recognition') || lower.includes('income statement') || lower.includes('performance obligation')) return aiResponses.revenue;
  if (lower.includes('debit') || lower.includes('credit') || lower.includes('journal') || lower.includes('double entry') || lower.includes('bookkeeping')) return aiResponses.debit;
  if (lower.includes('derivative') || lower.includes('differentiat') || lower.includes('chain rule') || lower.includes('product rule')) return aiResponses.derivative;
  if (lower.includes('matrix') || lower.includes('matrices') || lower.includes('determinant') || lower.includes('linear system')) return aiResponses.matrix;
  if (lower.includes('optimiz') || lower.includes('lagrang') || lower.includes('constrained') || lower.includes('critical point')) return aiResponses.optimization;
  if (lower.includes('marketing') || lower.includes('4p') || lower.includes('four p') || lower.includes('stp')) return aiResponses.marketing;
  if (lower.includes('segment') || lower.includes('targeting') || lower.includes('demographic') || lower.includes('psychographic')) return aiResponses.segment;
  if (lower.includes('brand') || lower.includes('positioning') || lower.includes('cbbe') || lower.includes('brand equity')) return aiResponses.brand;

  return defaultReplies[defaultIndex % defaultReplies.length];
}
