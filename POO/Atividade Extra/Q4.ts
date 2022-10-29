import { Pessoa } from './Q2'
import { Funcionario } from './Q3'

class Professor extends Funcionario {
    constructor(_nome: string, _sobrenome: string, _matricula: string, _salario: number,
        private _titulacao: string) {
        super(_nome, _sobrenome, _matricula, _salario);
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

let teacher: Professor = new Professor("Kelson", "Eduardo", "0282", 600, "Matematica");
console.log(teacher.calcularSalarioPrimeiraParcela());
console.log(teacher.calcularSalarioSegundaParcela());