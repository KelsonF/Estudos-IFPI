var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    Calculadora.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    Calculadora.prototype.subtracao = function () {
        return this._operando1 - this._operando2;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(10, 5);
var soma = calculadora.soma();
var subtracao = calculadora.subtracao();
console.log("SOMA: ".concat(soma));
console.log("SUBTRA\u00C7AO: ".concat(subtracao));
