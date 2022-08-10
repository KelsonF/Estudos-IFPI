import { input } from '../ultilidades/io.utils.js'

function main(){
    let meses = [ 
        "Janeiro" , "Fevereiro" , "Março" , 
        "Abril" , "Maio", "Junho" , 
        "Julho" , "Agosto" , "Setembro" , 
        "Outubro" , "Novembro" , "Dezembro"
    ]

    let numero = Number(input("Numero:"))

    if (numero){
        console.log(meses[numero - 1])
    }
}

main()