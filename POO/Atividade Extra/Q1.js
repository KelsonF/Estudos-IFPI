"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor() {
        this._salario = 500;
    }
    calcularSalario() {
        return this._salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
let trabalhador = new Empregado();
let trabalhador2 = new Diarista();
let trabalhador3 = new Horista();
console.log(trabalhador.calcularSalario().toFixed(2));
console.log(trabalhador2.calcularSalario().toFixed(2));
console.log(trabalhador3.calcularSalario().toFixed(2));
