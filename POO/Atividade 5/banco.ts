import { Conta } from './conta'
import { Poupanca } from '../Atividade 7/Questao 4/poupanca'
import { ContaImposto } from '../Atividade 7/Questao 4/conta_imposto'

export class Banco {
    private _contas: Conta[] = [];

    get contas() {
        return this._contas;
    }

    public inserirConta(conta: Conta): void {
        let indiceConta: Conta = this.consultar(conta.numero)

        if (indiceConta == null) {
            this.contas.push(conta);
        } else {
            console.log('Essa conta ja existe')
        }
    }

    public consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    public alterarConta(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero);

        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    public excluirConta(numero: string): void {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            for (let i = 0; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    public depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);

        if (conta != null) {
            conta.depositar(valor);
        }
    }

    public sacar(numero: string, valor: number) {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            this.contas[indice].sacar(valor);
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number) {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    public quantidadeContas(): number {
        return this.contas.length;
    }

    totalDepositado(): number {
        let total: number = 0;
        for(let i = 0; i < this.contas.length; i++){
            total += this.contas[i].saldo;
        }
        return total;
    }

    public renderJuros(numero: string): void {
        let conta: Conta = this.consultar(numero);

        if (conta != null) {
            if (conta instanceof Poupanca) {
                conta.renderJuros();
            }
        }
    }

    public debitarContaImposto(numero: string, valor: number):void {
        let conta:Conta = this.consultar(numero);

        if(conta != null){
            if(conta instanceof ContaImposto){
                conta.debitar(valor);
            }
        }
    }
}