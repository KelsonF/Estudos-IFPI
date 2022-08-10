import { input } from '../ultilidades/io.utils.js'

function main(){
    let primeiro = Number(input("Numero: "))
    let ultimo = Number(input("Numero: "))

    for(let i = primeiro; i <= ultimo; i++){
        console.log(i)
    }
}

main()