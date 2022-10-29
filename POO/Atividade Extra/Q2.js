"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _sobrenome) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
exports.Pessoa = Pessoa;
let humano = new Pessoa("Kelson", "Eduardo");
console.log(humano.nomeCompleto());
