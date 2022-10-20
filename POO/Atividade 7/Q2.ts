export class Calculadora2 {
    private _operando1: number;
    private _operando2: number;

    constructor(_operando1: number, _operando2: number) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }

    public get operando1(): number {
        return this._operando1;
    }

    public get operando2(): number {
        return this._operando2;
    }

    public soma(): number {
        return this._operando1 + this._operando2;
    }
}

let calculator: Calculadora2 = new Calculadora2(10, 20);
let operacao = calculator.soma();
console.log(operacao);