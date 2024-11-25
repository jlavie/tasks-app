import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { InvestmentComponent } from './investment/investment.component';

export const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'investment', component: InvestmentComponent },
  ];