"use strict";
exports.__esModule = true;
exports.Banco = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferencia = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var novaConta = new Conta(conta.numero, conta.saldo);
        if (conta == null) {
            this._contas.push(novaConta);
        }
        else {
            console.log("Essa conta ja esxite, tente novamente !!!");
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        this._contas.splice(indice, 1);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        return false;
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.transferencia = function (numeroOrigem, numeroDestino, valor) {
        var conta1 = this.consultar(numeroOrigem);
        var conta2 = this.consultar(numeroDestino);
        conta2.transferencia(conta1, valor);
    };
    Banco.prototype.quantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.depositoTotal = function () {
        var soma = 0;
        for (var i = 0; i < this.quantidadeContas(); i++) {
            soma += this._contas[i].saldo;
        }
        return soma;
    };
    return Banco;
}());
exports.Banco = Banco;
var novaConta = new Conta("1", 100);
var banco = new Banco();
banco.inserir(novaConta);
