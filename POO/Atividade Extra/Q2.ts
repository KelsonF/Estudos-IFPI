export class Pessoa {
    constructor(private _nome:string, private _sobrenome:string){}

    get nome(){
        return this._nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    public nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

let humano:Pessoa = new Pessoa("Kelson","Eduardo");
console.log(humano.nomeCompleto());