class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public soma(): number {
        return this._operando1 + this._operando2;
    }

    public subtracao(): number {
        return this._operando1 - this._operando2;
    }
}

let calculadora: Calculadora = new Calculadora(10, 5);
let soma = calculadora.soma();
let subtracao = calculadora.subtracao();

console.log(`SOMA: ${soma}`);
console.log(`SUBTRAÇAO: ${subtracao}`);

