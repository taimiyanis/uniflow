import { getAIResponse } from '@/lib/ai';

describe('getAIResponse', () => {
  it('returns gdp response for "gdp" keyword', () => {
    const result = getAIResponse('what is gdp', 0);
    expect(result).toContain('GDP measures the value');
  });

  it('returns islm response for "is-lm" keyword', () => {
    const result = getAIResponse('explain the is-lm model', 0);
    expect(result).toContain('IS-LM model links two markets');
  });

  it('returns contract response for "contract" keyword', () => {
    const result = getAIResponse('what is a contract', 0);
    expect(result).toContain('valid contract requires');
  });

  it('returns cycling default replies for unknown input', () => {
    const first = getAIResponse('something random', 0);
    const second = getAIResponse('something random', 1);
    const third = getAIResponse('something random', 2);
    const fourth = getAIResponse('something random', 3);
    expect(first).not.toBe(second);
    expect(fourth).toBe(first); // cycles back to index 0
  });
});
