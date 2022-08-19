import { Component } from '@angular/core';
import { MathService } from './services/math.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private mathService: MathService) {}

  result: string = '';
  options: string[] = [
    'AC',
    '(',
    ')',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '0',
    ',',
    '=',
  ];

  deleteLastChar() {
    if (this.result.length > 0) {
      this.result = this.result.slice(0, -1);
    }
  }

  onClickOption(option: string) {
    switch (option) {
      case 'AC': {
        this.result = '';
        break;
      }
      case '=': {
        const calculate = this.mathService.calculate(this.result);
        if (calculate.success) {
          this.result = calculate.result;
        } else {
          alert(calculate.result);
        }
        break;
      }
      default: {
        if (this.result.length < 16) {
          this.result += option;
        }
        break;
      }
    }
  }
}
