import { Calculadora2 } from './Q2'

class CalculadoraCientifica extends Calculadora2 {
    constructor(_operando1: number, _operando2: number) {
        super(_operando1,_operando2)
    }

    public exponenciar(){
        return this.operando1 ** this.operando2;
    }
}

let cientificCalculator : CalculadoraCientifica = new CalculadoraCientifica(10,20);
let resultado: number = cientificCalculator.exponenciar();
console.log(resultado)