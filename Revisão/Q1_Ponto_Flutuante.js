//1. Escreva um programa que possua uma variável com um número ponto flutuante e
// mostre seu antecessor e sucessor, ambos inteiros.

import { input } from '../ultilidades/io.utils.js'

function main(){
    const numero = Number(input("Numero: "))
    const sucessor = Math.floor(numero) + 1
    const antecessor = sucessor - 1

    console.log(sucessor)
    console.log(numero)
    console.log(antecessor)
}

main()