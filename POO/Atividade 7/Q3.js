"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q2_1 = require("./Q2");
class CalculadoraCientifica extends Q2_1.Calculadora2 {
    constructor(_operando1, _operando2) {
        super(_operando1, _operando2);
    }
    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}
let cientificCalculator = new CalculadoraCientifica(10, 20);
let resultado = cientificCalculator.exponenciar();
console.log(resultado);
