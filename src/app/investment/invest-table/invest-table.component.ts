import { Component, Input, input } from '@angular/core';
import { InvestmentResultsData } from '../investment.model';

@Component({
  selector: 'app-invest-table',
  standalone: true,
  imports: [],
  templateUrl: './invest-table.component.html',
  styleUrl: './invest-table.component.scss'
})
export class InvestTableComponent {
  // results = input() => using signals
  @Input() results?: InvestmentResultsData[];

}
