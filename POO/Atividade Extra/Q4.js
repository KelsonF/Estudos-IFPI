"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Q3_1 = require("./Q3");
class Professor extends Q3_1.Funcionario {
    constructor(_nome, _sobrenome, _matricula, _salario, _titulacao) {
        super(_nome, _sobrenome, _matricula, _salario);
        this._titulacao = _titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
let teacher = new Professor("Kelson", "Eduardo", "0282", 600, "Matematica");
console.log(teacher.calcularSalarioPrimeiraParcela());
console.log(teacher.calcularSalarioSegundaParcela());
