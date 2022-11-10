import { Conta } from "../Atividade 5/conta";
import { Banco } from "../Atividade 5/banco";

let bancoInter: Banco = new Banco();
let newKaikeAccount: Conta = new Conta("1", 100);
let newKelsonAccount: Conta = new Conta("2", 200);

bancoInter.inserirConta(newKaikeAccount);
bancoInter.inserirConta(newKelsonAccount);

bancoInter.transferir("2", "1", 200);
console.log(newKaikeAccount.saldo);

// A classe Banco por usar objetos da classe Conta na sua implementação, acaba por receber os metodos
// invocados dessa mesma classe, assim recebendo e usando o metodo transferir, bem como as auterações
// feitas no mesmo. Acreditamos que seja uma implementação segura.
