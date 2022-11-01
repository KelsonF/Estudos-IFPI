import { Conta } from "../Atividade 5/conta";

let conta1:Conta = new Conta("1",100);
let conta2:Conta = new Conta("2",100);
let conta3:Conta = new Conta("3",100);

conta1.sacar(150);
conta2.sacar(50);
conta3.sacar(200);

console.log(conta1.saldo)
console.log(conta2.saldo)
console.log(conta3.saldo)
