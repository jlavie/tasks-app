export interface CalculatorData {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
}

export interface ResultsData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    totalInterest: number;
    totalAmountInvested: number;
  }