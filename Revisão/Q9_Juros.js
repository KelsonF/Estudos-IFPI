import { input } from '../ultilidades/io.utils.js'

function main(){
    let valor = Number(input("Valor: "));
    let taxa = Number(input("Taxa: "));

    let vetor = new Array(12);
    
    let valor_com_juros = valor + valor * (taxa/100);
    
    for(let i = 0; i < 12; i++){
        vetor[i] = valor_com_juros.toFixed(2);
        valor_com_juros =  valor_com_juros + valor_com_juros * (taxa/100);
    }    

    console.log(vetor)
}

main()