import {Banco,Conta} from '../Atividade 5/banco'

let novaConta: Conta = new Conta("1", 100)
let banco: Banco = new Banco();
banco.inserir(novaConta)