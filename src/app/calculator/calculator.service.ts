import { Injectable } from '@angular/core';
import { CalculatorData, ResultsData } from './calculator.model';

@Injectable({providedIn: 'root'})
export class CalculatorService {
    resultsData?: ResultsData[];

    calculInvestment(calculatorData: CalculatorData) {
        const investment = [];
        let investmentValue = calculatorData.initialInvestment;

        calculatorData.expectedReturn
        for (let i = 0; i < calculatorData.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (calculatorData.expectedReturn / 100);
            investmentValue += interestEarnedInYear + calculatorData.annualInvestment;
            const totalInterest =
              investmentValue - calculatorData.annualInvestment * year - calculatorData.initialInvestment;
            investment.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: calculatorData.annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: calculatorData.initialInvestment + calculatorData.annualInvestment * year,
            });
          }
        
          this.resultsData = investment;
    }
}