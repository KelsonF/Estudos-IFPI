export class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}


export class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        let novaConta: Conta = new Conta(conta.numero, conta.saldo)

        if (conta == null) {
            this.contas.push(novaConta)
        } else {
            console.log("Essa conta ja esxite, tente novamente !!!")
        }

    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta
                break
            }
        }

        return contaProcurada
    }

    consultarIndice(numero: string): number {
        let indice = -1

        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i
                break
            }
        }

        return indice
    }

    alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero)

        if (indice != -1) {
            this.contas[indice] = conta
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero);

        this.contas.splice(indice,1);
    }

    sacar(numero: string, valor: number): boolean {
        let conta: Conta = this.consultar(numero)

        if (conta != null) {
            conta.sacar(valor)
            return true
        }

        return false

    }

    depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar(numero)

        if (conta != null) {
            conta.depositar(valor)
        }

    }

    transferencia(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let conta1: Conta = this.consultar(numeroOrigem);
        let conta2: Conta = this.consultar(numeroDestino);

        conta2.transferencia(conta1, valor);
    }

    quantidadeContas() : number {
        return this.contas.length;
    }

    depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.quantidadeContas(); i++){
            soma += this.contas[i].saldo
        }

        return soma
    }
}