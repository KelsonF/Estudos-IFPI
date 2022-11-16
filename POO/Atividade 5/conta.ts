import { ValorInvalidoError } from '../Atividade 8 parte 2/Q4'

export class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    sacar(valor: number): void {
        if (this.saldo < valor) {
            throw new ValorInvalidoError("Valor incorreto !!!")
        }

        this._saldo = this.saldo - valor
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor incorreto !!!")
        }

        this._saldo = this.saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}