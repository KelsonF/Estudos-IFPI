class Postagem {
    id: number;
    texto: string;
    numeroCurtidas: number;

    constructor(id: number, texto: string, numeroCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.numeroCurtidas = numeroCurtidas;
    }

    curtir(): Number {
        return this.numeroCurtidas++;
    }

    toString(): string {
        return `ID: ${this.id}, POSTAGEM: ${this.texto}, CURTIDAS: ${this.numeroCurtidas}`
    }
}

class Microblogue {
    postagens: Postagem[] = [];

    inserirPostagens(postagem: Postagem) {
        return this.postagens.push(postagem);
    }

    excluirPostagens(id: number) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                this.postagens.splice(i, 1)
                break;
            }
        }
    }

    postagemMaisCurtida() {
        let maiorNumeroCurtidas: number = 0;
        let indice: number = 0;
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].numeroCurtidas > maiorNumeroCurtidas) {
                maiorNumeroCurtidas = this.postagens[i].numeroCurtidas;
                indice = i;
            }
        }

        return this.postagens[indice]
    }

    // curtirPostagem(id: number): void {
    //     this.postagens[id].curtir();
    // }

    toString() {
        let texto: string = ""

        for (let i = 0; i < this.postagens.length; i++) {
            texto += `ID: ${this.postagens[i].id}, POSTAGEM: ${this.postagens[i].texto}, CURTIDAS: ${this.postagens[i].numeroCurtidas} \n`
        }

        return texto;
    }
}

let blog: Microblogue = new Microblogue();
blog.inserirPostagens(new Postagem(1, "alguma coisa", 10));
blog.inserirPostagens(new Postagem(2, "outra coisa", 20));
blog.inserirPostagens(new Postagem(3, "mais uma coisa", 30));
console.log(blog.postagemMaisCurtida());
// blog.curtirPostagem(3);

console.log(blog.toString());
