"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("../Atividade 5/conta");
const banco_1 = require("../Atividade 5/banco");
let bancoInter = new banco_1.Banco();
let newKaikeAccount = new conta_1.Conta("1", 100);
let newKelsonAccount = new conta_1.Conta("2", 200);
bancoInter.inserirConta(newKaikeAccount);
bancoInter.inserirConta(newKelsonAccount);
bancoInter.transferir("2", "1", 200);
console.log(newKaikeAccount.saldo);
// A classe Banco por usar objetos da classe Conta na sua implementação, acaba por receber os metodos
// invocados dessa mesma classe, assim recebendo e usando o metodo transferir, bem como as auterações 
// feitas no mesmo. 
