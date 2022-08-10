import { input } from "../ultilidades/io.utils.js";

function main(){   
    let a = Number(input("Numero: "))
    let b = Number(input("Numero: "))
    let c = Number(input("Numero: "))
    let lista = [a,b,c]
    
    let menor = a
    let maior = a

    for(let numero of lista){
        if(numero > maior){
            maior = numero
        }

        if(numero < menor){
            menor = numero
        }

    }

    console.log(maior)
    console.log(menor)
    console.log(lista)
}

main()