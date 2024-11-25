export interface InvestmentData {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
}

export interface InvestmentResultsData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    totalInterest: number;
    totalAmountInvested: number;
  }