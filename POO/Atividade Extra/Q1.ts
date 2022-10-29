import { log } from "console";

class Empregado {
    _salario: number = 500;
    calcularSalario(): number {
        return this._salario;
    }
}

class Diarista extends Empregado {
    calcularSalario(): number {
        return super.calcularSalario() / 30;
    }
}

class Horista extends Diarista {
    calcularSalario(): number {
        return super.calcularSalario() / 24;
    }
}

let trabalhador: Empregado = new Empregado();
let trabalhador2: Empregado = new Diarista();
let trabalhador3: Empregado = new Horista();

console.log(trabalhador.calcularSalario().toFixed(2));
console.log(trabalhador2.calcularSalario().toFixed(2));
console.log(trabalhador3.calcularSalario().toFixed(2));