

function main(){
    const frase = 'É o medo que dá asas ao homem' 
    const nova_frase = vogais_substituidas(frase)

    console.log(nova_frase)
}

function vogais_substituidas(frase){
    let nova_frase = ''
    const acentuadas = "ÁÂÀÃáâàãÉÊÈéêèÍÌíîìÓÔÒÕóôòõÚÛúûùÇç"
    const nao_acentuadas = "AAAAaaaaEEEeeeIIiiiOOOOooooUUuuuCc"
    
    let troca 

    for(let letra of frase){
        troca = false
        
        for(let i = 0; i < acentuadas.length; i++){
            if(letra === acentuadas[i]){
                nova_frase += nao_acentuadas[i]
                troca = true
            }
        }

        if(troca === false){
            nova_frase += letra
        }
    }

    return nova_frase
}

main()