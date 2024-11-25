import { Component } from '@angular/core';
import { InvestHeaderComponent } from "./invest-header/invest-header.component";
import { InvestFormComponent } from "./invest-form/invest-form.component";
import { InvestTableComponent } from "./invest-table/invest-table.component";
import { InvestmentData, InvestmentResultsData } from './investment.model';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [InvestHeaderComponent, InvestFormComponent, InvestTableComponent],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.scss'
})
export class InvestmentComponent {
  resultsData?: InvestmentResultsData[];

  calculInvestment(investmentData: InvestmentData) {
    const investment = [];
    let investmentValue = investmentData.initialInvestment;

    investmentData.expectedReturn
    for (let i = 0; i < investmentData.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);
        investmentValue += interestEarnedInYear + investmentData.annualInvestment;
        const totalInterest =
          investmentValue - investmentData.annualInvestment * year - investmentData.initialInvestment;
        investment.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: investmentData.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
        });
      }
    
      this.resultsData = investment;
}
}
