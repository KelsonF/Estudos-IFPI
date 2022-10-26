const input = require('prompt-sync')()

import { Banco } from '../../Atividade 5/banco'
import { Conta } from '../../Atividade 5/conta'
import { Poupanca } from '../../Atividade 7/Questao 4/poupanca'
import { ContaImposto } from '../../Atividade 7/Questao 4/conta_imposto'

let banco: Banco = new Banco()
let opcao: string = ''
let continuar: string

do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações 8 - Render Juros 9 - Ler arquivo de texto\n' +
        '0 - Sair\n');
    opcao = input("Opção: ");

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
            excluir()
            break
        case '6':
            transferir()
            break
        case '7':
            totalizacoes()
            break
        case '8':
            renderJuros()
            break
    }

    continuar = input("\nPress <ENTER> to continue")
    console.clear()
} while (opcao != '0')

function inserir(): void {
    let numero: string = input('Número da conta: ');
    let conta: Conta;
    conta = new Conta(numero, 0);
    banco.inserirConta(conta);
}

function consultar(): void {
    let numero: string = input('Numero da conta: ');
    console.log(banco.consultar(numero));
}

function sacar(): void {
    let numero: string = input('Numero da conta: ');
    let valor: number = Number(input('Valor que deseja sacar: '));
    banco.sacar(numero, valor);
}

function depositar(): void {
    let numero: string = input('Numero da conta: ');
    let valor: number = Number(input('Valor que deseja depositar: '));
    banco.depositar(numero, valor);
}

function transferir(): void {
    let numero: string = input("Digite o numero da conta: ")
    let numero2: string = input("Digite o numero da conta: ")
    let valor: number = Number(input('Valor que deseja transferir: '));
    banco.transferir(numero2, numero, valor);
}

function excluir(): void {
    let numero: string = input("Digite o numero da conta: ")
    banco.excluirConta(numero);
}

function renderJuros(): void {
    let numero: string = input("Digite o numero da conta: ")
    banco.renderJuros(numero);
}

function totalizacoes() {
    console.log(banco.totalDepositado());
}