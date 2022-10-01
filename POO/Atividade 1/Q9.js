"use strict";
class SituacaoFinanceira {
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacao = new SituacaoFinanceira(1000, 500);
console.log(`Saldo: ${situacao.saldo()}`);
