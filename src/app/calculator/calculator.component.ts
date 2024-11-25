import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ResultsComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;

  constructor(private calculatorService: CalculatorService) {}

  onSubmit() {
    this.calculatorService.calculInvestment({
			initialInvestment: this.initialInvestment,
			annualInvestment: this.annualInvestment,
			expectedReturn: this.expectedReturn,
      duration: this.duration
		});
  }
}
