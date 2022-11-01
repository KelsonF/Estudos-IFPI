"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = void 0;
const conta_1 = require("../../Atividade 5/conta");
class ContaImposto extends conta_1.Conta {
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    get taxaDesconto() {
        return this._taxaDesconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}
exports.ContaImposto = ContaImposto;
