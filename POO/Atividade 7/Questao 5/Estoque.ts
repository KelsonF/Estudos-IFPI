import { Produto } from "./Produto";
import { ProdutoPerecivel } from "./ProdutoPerecivel";

class Estoque {
    private _produtos: Produto[] = [];

    get produtos(): Produto[] {
        return this._produtos;
    }

    inserirProduto(produto : Produto): void {
        let novoProduto: Produto = this.consultarProduto(produto.identificador);

        if (novoProduto == null) {
            this.produtos.push(novoProduto);
        } else {
            console.log("Esse produto ja existe no sistema")
        }
    }

    consultarProduto(idProdutoProcurado: string) {
        let produtoProcurado!: Produto;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].identificador == idProdutoProcurado) {
                produtoProcurado = this._produtos[i];
                break;
            }
        }
        return produtoProcurado;
    }

    excluirProduto(identificador: string): void {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].identificador == identificador) {
                this.produtos.splice(i, 1)
                break
            }
        }
    }

    reporProduto(identificador:string,quantidade: number){
        let produtoReposto : Produto = this.consultarProduto(identificador)

        if(produtoReposto != null){
            produtoReposto.repor(quantidade);
        }
    }

    darBaixaProduto(identificador:string,quantidade: number){
        let produtoReposto : Produto = this.consultarProduto(identificador)

        if(produtoReposto != null){
            produtoReposto.darBaixa(quantidade);
        }
    }

    listarProdutosVencidos(){
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos instanceof ProdutoPerecivel){
                if(!this.produtos.validadeProduto()){
                    console.log(this.produtos[i])
                }
            }
        }
    }
}

let produto: Produto = new Produto('1', 'Agua', 0, 2.00);
let produtoPerecivel1: ProdutoPerecivel = new ProdutoPerecivel('2', 'Coca-Cola', 0, 100, new Date("2022-10-24"));
let produtoPerecivel2: ProdutoPerecivel = new ProdutoPerecivel('3', 'Pepsi', 0, 100, new Date("2022-09-01"));
let produtoPerecivel3: ProdutoPerecivel = new ProdutoPerecivel('4', 'Fanta-Uva', 0, 100, new Date("2022-12-24"));
let produtoPerecivel4: ProdutoPerecivel = new ProdutoPerecivel('4', 'Fanta-Laranja', 0, 100, new Date("2022-05-10"));

let estoqueloja = new Estoque();
estoqueloja.inserirProduto(produto);
estoqueloja.inserirProduto(produtoPerecivel1);
estoqueloja.inserirProduto(produtoPerecivel2);
estoqueloja.inserirProduto(produtoPerecivel3);
estoqueloja.inserirProduto(produtoPerecivel4);

estoqueloja.reporProduto('1', 100);
estoqueloja.reporProduto('2', 150);
estoqueloja.reporProduto('3', 200);
estoqueloja.reporProduto('4', 250);
estoqueloja.reporProduto('5', 300);

estoqueloja.listarProdutosVencidos();