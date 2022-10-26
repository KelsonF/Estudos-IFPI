import { Conta } from './conta'

export class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    get taxaJuros(): number {
        return this._taxaJuros
    }

    public renderJuros(): void {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
}