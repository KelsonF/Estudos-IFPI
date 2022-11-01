"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("../Atividade 5/conta");
let contaKaike = new conta_1.Conta("1", 100);
let contaKelson = new conta_1.Conta("2", 200);
contaKaike.transferir(contaKelson, 200);
console.log(contaKaike.saldo);
// O metodo lançou um erro no terminal com a mensagem de Saldo Induficiente.
