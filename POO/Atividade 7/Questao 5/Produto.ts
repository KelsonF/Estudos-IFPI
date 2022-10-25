export class Produto {
    private _identificador: string;
    private _descricao: string;
    private _estoque: number;
    private _valor: number;

    constructor(identificador: string, descricao: string, estoque: number, valor: number) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._estoque = estoque;
        this._valor = valor;
    }

    get identificador(): string {
        return this._identificador;
    }

    get descricao(): string {
        return this._descricao;
    }

    get valor(): number {
        return this._valor;
    }

    get estoque(): number {
        return this._estoque;
    }

    repor(quantidade: number){
        this._estoque += quantidade;
    }

    public darBaixa(quantidade:number){
        if(this._estoque < 0){
            this._estoque -= quantidade;
        } else {
            console.log("O estoque desse produto esta vazio !!!");
        }
    }
}