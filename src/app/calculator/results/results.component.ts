import { Component, computed, Input } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { ResultsData } from '../calculator.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  constructor(private calculatorService: CalculatorService) {}

  // get resultsData() {
  //   return this.calculatorService.resultsData;
  // }
  // same as
  // 
  // resultsData = this.calculatorService.resultsData.asReadonly();
  // or
  resultsData = computed(() => this.calculatorService.resultsData());
}
