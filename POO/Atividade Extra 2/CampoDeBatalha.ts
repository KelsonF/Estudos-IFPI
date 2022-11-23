import { BaseMilitar } from './BaseMilitar';
import { Guerreiro } from './Guerreiro'

class CampoDeBatalha {
    avaliar(soldado: Array<Guerreiro>, bases: Array<BaseMilitar>) {
        if(soldado.length > bases.length){
            console.log("Soldados ganharam a batalha");
        } else {
            console.log("Os defensores ganharam a batalha")
        }
    }
}