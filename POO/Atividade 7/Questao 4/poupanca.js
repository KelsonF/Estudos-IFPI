"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const conta_1 = require("../../Atividade 5/conta");
class Poupanca extends conta_1.Conta {
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo * this._taxaJuros / 100);
    }
}
exports.Poupanca = Poupanca;
