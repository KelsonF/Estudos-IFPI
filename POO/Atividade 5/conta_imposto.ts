import { Conta } from './conta'

export class ContaImposto extends Conta{
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number){
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    
    get taxaDesconto(): number{
        return this._taxaDesconto
    }

    debitar(valor: number): void{
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}