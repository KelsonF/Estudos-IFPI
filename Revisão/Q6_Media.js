import { input } from '../ultilidades/io.utils.js'

function main(){
    let lista = [];
    let media = 0
    let soma = 0
    let contador = 0
    let variancia = 0 
    let desvio_padrao = 0

    for (let i = 0; lista[i] !== -1; i++) {
        lista[i] = Number(input("Numeros: "));
        soma += lista[i]
        contador++
    }

    media = soma / contador

    for(let j = 0; j < lista.length; j++){
        variancia += (media - lista[j]) * (media - lista[j])
    }

    desvio_padrao = Math.sqrt(variancia / lista.length)

    console.log(`Soma: ${soma}`)
    console.log(`Media: ${media}`)
    console.log(`Desvio padrão: ${desvio_padrao}`)
}

main()