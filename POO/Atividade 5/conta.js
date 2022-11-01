"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            throw new Error("Saldo insuficiente.");
        }
        this._saldo = this.saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
