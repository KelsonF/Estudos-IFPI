import { input } from '../ultilidades/io.utils.js'

function main(){
    let meses = [ 
        "Janeiro" , "Fevereiro" , "Março" , 
        "Abril" , "Maio", "Junho" , 
        "Julho" , "Agosto" , "Setembro" , 
        "Outubro" , "Novembro" , "Dezembro"
    ]

    let numero = Number(input("Numero: "))
    const mes = meses[numero - 1]
    const dias_cada_mes = dias_por_mes(numero)

    console.log(`${mes} : ${dias_cada_mes}`)
}

function dias_por_mes(numero){
    let dias = [ 
        31 , 28 , 31 , 30 ,
        31 , 30 , 31 , 30 , 
        31 , 30 , 31 , 30
    ]

    return dias[numero - 1]
    
}

main()