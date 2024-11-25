import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-invest-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './invest-form.component.html',
  styleUrl: './invest-form.component.scss'
})
export class InvestFormComponent {

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;

  onSubmit() {
    //
  }
}
