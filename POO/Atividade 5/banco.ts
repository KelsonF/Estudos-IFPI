import { Conta } from './conta'
import { Poupanca } from './poupanca'
import { ContaImposto } from './conta_imposto'

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

        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
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

        if (indice != null) {
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

    public renderJuros(numero: string): void {
        let conta: Conta = this.consultar(numero);

        if (conta != null) {
            if (conta instanceof Poupanca) {
                conta.renderJuros();
            }
        }
    }

    public debitar(numero: string, valor: number):void {
        let conta:Conta = this.consultar(numero);

        if(conta != null){
            if(conta instanceof ContaImposto){
                conta.debitar(valor);
            }
        }
    }
}