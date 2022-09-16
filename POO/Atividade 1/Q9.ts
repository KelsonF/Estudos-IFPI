class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacao = new SituacaoFinanceira(1000, 500);

console.log(`Saldo: ${situacao.saldo()}`);