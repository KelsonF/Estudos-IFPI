import { input } from '../ultilidades/io.utils.js'

function main(){
    let vetor = new Array(5)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Valor: "));

    }

    const resultado = ordenar_vetor_decrescente(vetor) 

    console.log(resultado)

}
function ordenar_vetor_decrescente(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] > vetor[j + 1]){
                auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
            
        }
    
        k++
    }

    return vetor
}


main()