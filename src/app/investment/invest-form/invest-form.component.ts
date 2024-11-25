import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InvestmentData } from '../investment.model';

@Component({
  selector: 'app-invest-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './invest-form.component.html',
  styleUrl: './invest-form.component.scss'
})
export class InvestFormComponent {
  //@Output() calculate = new EventEmitter<InvestmentData>();
  calculate = output<InvestmentData>() // => angular > 17.3

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal<number>(10);

  onSubmit() {
    this.calculate.emit({
      initialInvestment: this.initialInvestment(),
			annualInvestment: this.annualInvestment(),
			expectedReturn: this.expectedReturn(),
      duration: this.duration()
    })
  }
}
