import { Tributavel, ContaCorrente, SeguroDeVida } from './Q10'

class AuditoriaInterna {
    tributaveis:Tributavel[] = []

    adcionar(tributavel:Tributavel): void{
        this.tributaveis.push(tributavel);
    }

    calcularTributos():number{
        let soma = 0;

        for(let i = 0; i < this.tributaveis.length;i++){
            soma += this.tributaveis[i].calcularTributos();
        }

        return soma;
    }
}

class Teste {
    contaCorrente01: ContaCorrente = new ContaCorrente("Kelson",1000);
    contaCorrente02: ContaCorrente = new ContaCorrente("Kaike",500);
    seguroDeVida01: SeguroDeVida = new SeguroDeVida();
    seguroDeVida02: SeguroDeVida = new SeguroDeVida();
}

let testagem: Teste = new Teste();

let auditoria:AuditoriaInterna = new AuditoriaInterna();
auditoria.adcionar(testagem.contaCorrente01);
auditoria.adcionar(testagem.contaCorrente02);
auditoria.adcionar(testagem.seguroDeVida01);
auditoria.adcionar(testagem.seguroDeVida02);


console.log(auditoria.calcularTributos());