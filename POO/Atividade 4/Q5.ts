class Saudacao{
    texto: string;
    destinatario: string;

    constructor(texto:string, destinatario:string){
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): void{
        console.log(`${this.obterSaudacao}, ${this.texto}`)
    }
}

let frase: Saudacao = new Saudacao("Bom dia", "Kelson");
console.log(frase.obterSaudacao());