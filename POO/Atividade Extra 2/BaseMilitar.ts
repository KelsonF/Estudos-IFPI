import { Defensivel } from './Defensivel'

export class BaseMilitar implements Defensivel{
    constructor(public id: number, public locX: number, 
        public locY: number, public damage: number = 0) { 
    }

    defenderAtaque(valorAtaque: number): void {
        this.damage += valorAtaque;
    }

    estaEliminado(): boolean {
        if (this.damage > 90) {
            return true;
        } else {
            return false;
        }
    } 
}