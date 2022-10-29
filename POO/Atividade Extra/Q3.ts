import { Pessoa } from './Q2'

export class Funcionario extends Pessoa {
    constructor(_nome: string, _sobrenome: string, private _matricula: string, private _salario: number) {
        super(_nome, _sobrenome);
    }

    get matricula() {
        return this._matricula;
    }

    get salario(){
        return this._salario;
    }

    calcularSalarioPrimeiraParcela(){
        return this.salario * 0.6
    }

    calcularSalarioSegundaParcela(){
        return this.salario * 0.4
    }
}

let trabalhador:Funcionario = new Funcionario("Kelson","Eduardo","0282",600)
console.log(trabalhador.calcularSalarioPrimeiraParcela());
console.log(trabalhador.calcularSalarioSegundaParcela());