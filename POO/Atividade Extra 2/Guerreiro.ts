import { BaseMilitar } from './BaseMilitar';
import { Defensivel } from './Defensivel'

export class Guerreiro implements Defensivel {
    constructor(public id: number, public descricao: string,
        public ataque: number, public life: number = 10) {
    }


    defenderAtaque(valorAtaque: number): void {
        this.life = this.life - valorAtaque;
    }

    estaEliminado(): boolean {
        if (this.life <= 0) {
            return true;
        } else {
            return false;
        }
    }

    atacar(inimigo: Guerreiro) {
        if(inimigo.estaEliminado()){
            throw new JaEliminadoException("Esse inimigo ja esta morto !!!")
        } else {
            inimigo.defenderAtaque(this.ataque);
        }
    }
}
