export class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    get Numero(){
        return this._numero;
    }

    get Saldo(){
        return this._saldo
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    get consultarSaldo(): number {
        return this._saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}



export class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta): void {
        let novaConta = this.consultar(conta.Numero)

        if (conta == null) {
            this._contas.push(novaConta)
        } else {
            console.log("Essa conta ja esxite, tente novamente !!!")
        }

    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta

        for (let conta of this._contas) {
            if (conta.Numero == numero) {
                contaProcurada = conta
                break
            }
        }

        return contaProcurada
    }

    consultarIndice(numero: string): number {
        let indice = -1

        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].Numero == numero) {
                indice = i
                break
            }
        }

        return indice
    }

    alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.Numero)

        if (indice != -1) {
            this._contas[indice] = conta
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero);

        this._contas.splice(indice,1);
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
        return this._contas.length;
    }

    depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.quantidadeContas(); i++){
            soma += this._contas[i].Saldo
        }

        return soma
    }
}