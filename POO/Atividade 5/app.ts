var input = require('prompt-sync')();
import { Banco, } from './banco'
import { Conta } from './conta'

let b: Banco = new Banco();
let opcao: String = '';

do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Iserir/Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");

    switch (opcao) {
        case '1':
            inserir()
            break

        case '2':
            consultar()
            break

        case '3':
            sacar()
            break
        case '4':
            depositar()
            break
        case '5':
            //excluir()
            break
        case '6':
            transferir()
            break
        case '7':
            totalizacoes()
            break
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    let numero: string = input('Número da conta: ');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserirConta(conta);
}

function consultar(): void {
    let numero: string = input('Numero da conta: ');
    console.log(b.consultar(numero));
}

function sacar(): void {
    let numero: string = input('Numero da conta: ');
    let valor: number = Number(input('Valor que deseja sacar: '));
    b.sacar(numero, valor);
}

function depositar(): void {
    let numero: string = input('Numero da conta: ');
    let valor: number = Number(input('Valor que deseja depositar: '));
    b.depositar(numero, valor);
}

function transferir(): void {
    let numero: string = input('Numero da conta que vai transferir: ');
    let numero2: string = input('Numero da conta destino: ');
    let valor: number = Number(input('Valor que deseja transferir: '));
    b.transferir(numero2, numero, valor);
}

function totalizacoes(): void {
    console.log(b.totalDepositado());
}