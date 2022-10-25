import { Produto } from './Produto'

export class ProdutoPerecivel extends Produto {
    private _dataValidade: Date;

    constructor(identificador: string, descricao: string, estoque: number, valor: number, validade: Date) {
        super(identificador, descricao, estoque, valor);
        this._dataValidade = validade;
    }

    validadeProduto(): boolean {
        if (this._dataValidade.getDate() > Date.now()) {
            return true;
        } else {
            return false;
        }
    }

    public repor(quantidade: number): void {
        if (this.validadeProduto()) {
            super.repor(quantidade)
        } else {
            console.log("Impossivel realizar a reposiçao")
        }
    }

    public darBaixa(quantidade: number): void {
        if (this.validadeProduto()) {
            super.darBaixa(quantidade)
        } else {
            console.log("Impossivel dar baixa no produto")
        }
    }
}