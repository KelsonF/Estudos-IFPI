import { input } from '../ultilidades/io.utils.js'

function main(){
    const milisegundo = Number(input('Valor em milissegundos: '))/1000

    const [dias, horas, minutos, segundos] = converter(milisegundo)

    console.log(`${dias}:${horas}:${minutos}:${segundos}`)
}

function converter(milisegundo){

    const dias = Math.trunc(milisegundo/86400)
    let resto = milisegundo % 86400
    const horas = Math.trunc(resto/3600)
    resto = resto % 3600
    const minutos = Math.trunc(resto/60)
    resto = resto % 60
    const segundos = resto

    return [dias, horas, minutos, segundos]
}

main()