import { Injectable } from '@angular/core';
import mexp from 'math-expression-evaluator';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

  calculate(expression: string) {
    let result = null;
    try {
      result = {
        success: true,
        result: mexp.eval(expression.replaceAll(',', '.')),
      };
    } catch (e) {
      result = { success: false, result: (e as any).message };
    }

    return result;
  }
}
