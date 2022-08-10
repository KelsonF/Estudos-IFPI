import { input } from "./io.utils.js";

export function criar_vetor(tamanho_vetor){
    let vetor = new Array(tamanho_vetor);

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input("Valor: "));

    }

    return vetor;
}

export function vetor_aleatorio(tamanho, minimo, maximo){
    let vetor = new Array(tamanho)

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * (maximo - minimo)) + minimo
        
    }

    return vetor
}

export function ordenar_vetor_crescente(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] > vetor[j + 1]){
                auxiliar = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = auxiliar;
            }  
        }
         
        k++;
    }

    return vetor;
}

export function ordenar_vetor_decrecente(vetor){
    let tamanho = vetor.length;
    let auxiliar;
    let k = 0;

    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - 1 - k; j++) {
            if(vetor[j] < vetor[j + 1]){
                auxiliar = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = auxiliar;
            }  
        }
         
        k++;
    }

    return vetor;
}

export function inverter_vetor(vetor){
    const vetor_invertido = novo_vetor(vetor.length);

    let num = vetor.length-1 ;
    
    for(let i = 0; i < vetor.length; i++){
        vetor_invertido[i] = vetor[num];
        num--;
    }

    return vetor_invertido;
}

export function media_elementos_vetor(vetor){
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    const mediaElementos = soma / vetor.length;

    return mediaElementos;
}

export function push_vetor(vetor,elemento){
    let novo_vetor = novo_vetor(vetor.length+1);

    novo_vetor = vetor;
    novo_vetor[novo_vetor.length-1] = elemento;
    
    return novo_vetor;
}

export function mediana_vetor(vetor){
    let meio;
    let mediana;

    if(vetor.length % 2 === 0){
        meio = vetor.length/2;
        mediana = (vetor[meio] + vetor[meio-1])/2;
    }else{
        meio = (vetor.length-1)/2 + 1
        mediana = vetor[meio];
    }

    return mediana;
}

export function resetar_valores(vetor,elemento){
    let novo_vetor = []

    for(let i = 0; i < vetor.length; i++){
        novo_vetor[i] = elemento
    }

    return novo_vetor
}

export function quantidade_elementos_repetidos(vetor,elemento){
    let contador = 0
    for(let i = 0; i < vetor.length; i++){
        if(elemento === vetor[i]){
            cont++
        }
    }

    return contador
}

export function tamanho_vetor(vetor){
    return vetor.length;
}

export function somar_valores_vetor(vetor){
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    return soma
}

export function maior_e_posicao(vetor){
    let maior = vetor[0]
    let pos_maior

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            pos_maior = i
        }
    }

    return [maior,pos_maior]
}

export function menor_e_posicao(vetor){
    let menor = vetor[0]
    let pos_menor;

    for (let i = 0; i < array.length; i++) {
        if(vetor[i] < menor){
            menor = vetor[i]
            pos_menor = i
        }
        
    }

    return [menor,pos_menor]
}

export function positivos_e_quantidade(){
    let positivos = []
    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 0){
            contador++
            positivos[contador] = vetor[i]
        }
    }

    return [positivos,contador]
}

export function negativos_e_quantidade(){
    let negativos = []
    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0){
            contador++
            negativos[contador] = vetor[i]
        }
    }

    return [negativos,contador]
}

export function map_vetor(vetor,trabalho){
    let novo_vetor = new Array(vetor.length)

    for (let i = 0; i < vetor.length; i++) {
        novo_vetor[i] = trabalho(vetor[i])
    }

    return novo_vetor
}

export function filter_vetor(vetor,trabalho){
    let novo_vetor = []
    let j = 0

    for (let i = 0; i < vetor.length; i++) {
        if(trabalho(vetor[i])){
            novo_vetor[j] = vetor[i]
            j++
        }
    }

    return novo_vetor
}