"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora2 = void 0;
class Calculadora2 {
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
}
exports.Calculadora2 = Calculadora2;
let calculator = new Calculadora2(10, 20);
let operacao = calculator.soma();
console.log(operacao);
