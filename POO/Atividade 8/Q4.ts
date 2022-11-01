import { Conta } from "../Atividade 5/conta";

let contaKaike = new Conta("1",100);
let contaKelson = new Conta("2",200);

contaKaike.transferir(contaKelson,200);
console.log(contaKaike.saldo);

// O metodo lançou um erro no terminal com a mensagem de Saldo Induficiente.