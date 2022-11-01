"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const poupanca_1 = require("../Atividade 7/Questao 4/poupanca");
const conta_imposto_1 = require("../Atividade 7/Questao 4/conta_imposto");
class Banco {
    constructor() {
        this._contas = [];
    }
    get contas() {
        return this._contas;
    }
    inserirConta(conta) {
        let indiceConta = this.consultar(conta.numero);
        if (indiceConta == null) {
            this.contas.push(conta);
        }
        else {
            console.log('Essa conta ja existe');
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterarConta(conta) {
        let indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }
    excluirConta(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = 0; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            this.contas[indice].sacar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }
    quantidadeContas() {
        return this.contas.length;
    }
    totalDepositado() {
        let total = 0;
        for (let i = 0; i < this.contas.length; i++) {
            total += this.contas[i].saldo;
        }
        return total;
    }
    renderJuros(numero) {
        let conta = this.consultar(numero);
        if (conta != null) {
            if (conta instanceof poupanca_1.Poupanca) {
                conta.renderJuros();
            }
        }
    }
    debitarContaImposto(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            if (conta instanceof conta_imposto_1.ContaImposto) {
                conta.debitar(valor);
            }
        }
    }
}
exports.Banco = Banco;
