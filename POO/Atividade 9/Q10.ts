class Conta2 {
    constructor(private _nome: string, private _saldo: number) { }

    get Nome() {
        return this._nome;
    }

    set Nome(nome: string) {
        this.Nome = nome;
    }

    get Saldo() {
        return this._saldo;
    }

    set Saldo(saldo: number) {
        this.Saldo = saldo;
    }
}

export interface Tributavel {
    calcularTributos(): number;
}

export class ContaCorrente extends Conta2 implements Tributavel {
    calcularTributos(): number {
        return this.Saldo * 0.1
    }
}

export class SeguroDeVida implements Tributavel {
    calcularTributos(): number {
        return 50.00
    }
}