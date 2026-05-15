export const aiResponses: Record<string, string> = {
  gdp: "GDP measures the value of all goods/services produced within a country's borders — regardless of who produces them.\n\nGNP measures what residents produce — wherever they are. The key formula: GNP = GDP + Net factor income from abroad.\n\nThis distinction comes up directly in your Exercise 3.3 and in the January 2025 final.",

  islm: "The IS-LM model links two markets simultaneously:\n\nIS curve (goods market): higher r → lower investment → lower Y. Shifts right with G↑ or T↓.\nLM curve (money market): higher Y → higher money demand → higher r. Shifts right with money supply↑.\n\nEquilibrium is where both curves cross. Your Ch.4 notes have the full derivation with worked examples from the 2024 mock.",

  inflation: "Inflation has three main causes:\n\n1. Demand-pull — excess demand, economy overheating\n2. Cost-push — supply shocks (e.g. oil prices)\n3. Built-in — wage-price spiral\n\nThe Phillips Curve shows the short-run trade-off between inflation and unemployment. This appeared directly in your EC22 November mock — expect it in the final.",

  fiscal: "Fiscal policy uses G (spending) and T (taxes) to manage output.\n\nExpansionary: G↑ or T↓ → IS shifts right → Y↑, r↑.\n\nThe fiscal multiplier = 1 / (1 − MPC). If MPC = 0.8, multiplier = 5. But crowding-out (r↑ reduces private investment) limits the real effect — Chapter 5 covers this trade-off directly.",

  monetary: "Monetary policy controls the money supply via interest rates.\n\nExpansionary: money supply↑ → LM shifts right → Y↑, r↓.\n\nBut in a liquidity trap (r near zero), monetary policy loses traction — this is Keynes's core critique and a direct exam question in your EC22 finals.",

  quiz: "Here's a Chapter 3 question:\n\nNominal GDP = €600bn, GDP deflator = 110. What is real GDP?\n\nA) €545bn  B) €560bn  C) €600bn  D) €660bn\n\nTry it — I'll check your answer.",

  exam: "The January 2025 final had 4 questions. Q2 asked you to analyze a country where consumption fell 4% but investment rose 12%. The model answer walked through the expenditure approach and discussed whether the net effect was expansionary.",

  contract: "A valid contract requires three elements:\n\n1. Offer — a clear proposal by the offeror\n2. Acceptance — unconditional agreement\n3. Consideration — something of value exchanged\n\nUnder European contract law (PECL), there's also an implicit good faith obligation. This distinction from common law is a recurring LW22 exam question.",

  breach: "Breach of contract occurs when a party fails to perform their obligations.\n\nRemedies:\n- Specific performance — court orders the act\n- Damages — compensatory, expectation, or reliance\n- Rescission — contract voided ab initio\n\nUnder the CISG (international sales), the aggrieved party must mitigate their loss. Your LW22 case studies use this framework throughout.",

  liability: "Liability in European business law splits into three regimes:\n\n- Contractual: arises from breach of agreement\n- Tortious (delict): wrongful act, no contract needed\n- Strict: no fault required (e.g. EU Product Liability Directive 85/374)\n\nExams typically give a scenario and ask you to identify which regime applies and what remedies follow.",

  balance: "The balance sheet (Statement of Financial Position) follows one identity:\n\nAssets = Liabilities + Equity\n\nAssets: current (cash, receivables) and non-current (PPE, intangibles)\nLiabilities: current (<1yr) and non-current (long-term debt)\nEquity: share capital + retained earnings\n\nIFRS requires fair value measurement for financial instruments — a core AC22 distinction from national GAAP.",

  revenue: "Revenue recognition under IFRS 15 follows 5 steps:\n\n1. Identify the contract\n2. Identify performance obligations\n3. Determine the transaction price\n4. Allocate the price to obligations\n5. Recognize when each obligation is satisfied\n\nKey principle: recognize when control transfers to the customer, not when cash is received.",

  debit: "Double-entry bookkeeping: every transaction touches at least two accounts.\n\nDebits increase: Assets, Expenses\nCredits increase: Liabilities, Equity, Revenue\n\nExample — buy equipment for €10,000 cash:\n- Debit Equipment (asset ↑) €10,000\n- Credit Cash (asset ↓) €10,000\n\nThe trial balance verifies that total debits = total credits before preparing financial statements.",

  derivative: "Key differentiation rules for MA22:\n\n- Power rule: d/dx(xⁿ) = nxⁿ⁻¹\n- Product rule: d/dx(f·g) = f'g + fg'\n- Chain rule: d/dx(f(g(x))) = f'(g(x))·g'(x)\n\nFor optimization: set f'(x) = 0 to find critical points, then use f''(x) to confirm max (f'' < 0) or min (f'' > 0). This appears in every MA22 problem set.",

  matrix: "Matrix operations to know for MA22:\n\n- Addition: element-by-element (same dimensions required)\n- Multiplication: (m×n)·(n×p) = (m×p) result\n- Determinant (2×2): det(A) = ad − bc\n- Inverse: exists only if det(A) ≠ 0\n\nLinear systems use matrix form Ax = b, solved by x = A⁻¹b. Your problem sets 4 and 5 are built entirely around this.",

  optimization: "Unconstrained optimization:\n1. Solve f'(x) = 0 for critical points\n2. Second derivative test confirms max or min\n\nConstrained optimization (Lagrangian method):\nMaximize f(x,y) subject to g(x,y) = c\nForm L = f(x,y) − λ(g(x,y) − c)\nSolve ∂L/∂x = 0, ∂L/∂y = 0, ∂L/∂λ = 0\n\nThis is the most tested MA22 exam topic after differentiation.",

  marketing: "Marketing strategy starts with the STP framework:\n\n1. Segmentation — divide the market into distinct groups\n2. Targeting — choose which segments to serve\n3. Positioning — define how you want to be perceived\n\nThe 4Ps (Product, Price, Place, Promotion) are the tactical levers applied after STP.",

  segment: "Market segmentation uses four variable types:\n\n- Demographic: age, income, gender, occupation\n- Geographic: region, country, urban/rural\n- Psychographic: values, lifestyle, personality\n- Behavioral: usage rate, loyalty, purchase occasion\n\nA good segment passes the MSAA test: Measurable, Substantial, Accessible, Actionable.",

  brand: "Brand equity follows Keller's CBBE model (4 levels):\n\n1. Salience — do customers know the brand exists?\n2. Performance/Imagery — what do they associate with it?\n3. Judgements/Feelings — evaluations and emotional responses\n4. Resonance — loyalty, advocacy, community\n\nTypical MK21 exam question: apply CBBE to a real brand and suggest positioning improvements.",
};

export const defaultReplies: string[] = [
  "Good question. Based on your Chapter 4 notes (IS-LM model), the key insight is that in the short run, prices are sticky. That's what gives monetary policy its traction in the Keynesian framework.",
  "I can help with any of your B2 fall courses: EC22 Macroeconomics, AC22 Financial Accounting, LW22 Contract Law, MA22 Mathematics, or MK21 Marketing. What do you want to work on?",
  "Looking at your notes: this is covered in Chapter 3, section on the expenditure approach. The formula is GDP = C + I + G + (X − M). Let me know if you want a worked example.",
];
