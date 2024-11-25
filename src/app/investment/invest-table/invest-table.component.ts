import { Component, Input, input } from '@angular/core';
import { InvestmentResultsData } from '../investment.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invest-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invest-table.component.html',
  styleUrl: './invest-table.component.scss'
})
export class InvestTableComponent {
  // results = input() => using signals
  @Input() results?: InvestmentResultsData[];

}
