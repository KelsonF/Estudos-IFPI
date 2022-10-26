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
        if(this.saldo > 0){
            this._saldo = this._saldo - valor;
        } else {
            console.log('Saldo Insuficiente')
        }
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}