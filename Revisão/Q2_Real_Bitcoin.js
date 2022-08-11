import { input } from "../ultilidades/io.utils.js";

function main(){
    let real = Number(input("Valor: "))
    const bitcoin = 0.0000085 //o equivalente de 1 real em bitcoin
    const calculadora = real * bitcoin

    console.log(calculadora.toFixed(8))
}

main()