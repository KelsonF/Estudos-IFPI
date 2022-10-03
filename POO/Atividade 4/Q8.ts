class newPessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class newConta {
    numero: string;
    saldo: number;
    cliente: newPessoa;

    constructor(numero: string, saldo: number, cliente: newPessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor > 0) {
            this.saldo = this.saldo - valor;
            return true
        }

        return false
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferencia(contaDestino: newConta, valor: number): boolean {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true
        }

        return false
    }

    equals(conta: newConta): boolean {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}

let pessoa_1: newPessoa = new newPessoa("Kelson")
let pessoa_2: newPessoa = new newPessoa("Eduardo")

let conta1: newConta = new newConta('1', 100, pessoa_1)
let conta2: newConta = new newConta('2', 100, pessoa_2)

console.log(conta1.sacar(20));
console.log(conta2.sacar(300));
console.log(conta1.transferencia(conta2, 100));
console.log(conta1.transferencia(conta2, 50))
console.log(conta1.consultarSaldo());
console.log(conta1.consultarSaldo());

