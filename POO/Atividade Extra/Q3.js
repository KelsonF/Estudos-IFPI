"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Q2_1 = require("./Q2");
class Funcionario extends Q2_1.Pessoa {
    constructor(_nome, _sobrenome, _matricula, _salario) {
        super(_nome, _sobrenome);
        this._matricula = _matricula;
        this._salario = _salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this.salario * 0.4;
    }
}
exports.Funcionario = Funcionario;
let trabalhador = new Funcionario("Kelson", "Eduardo", "0282", 600);
console.log(trabalhador.calcularSalarioPrimeiraParcela());
console.log(trabalhador.calcularSalarioSegundaParcela());
