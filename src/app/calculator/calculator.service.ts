import { Injectable } from '@angular/core';
import { CalculatorData } from './calculator.model';

@Injectable({providedIn: 'root'})
export class CalculatorService {

    calculInvestment(calculatorData: CalculatorData) {
        //calcul
        console.log(calculatorData)
    }
}