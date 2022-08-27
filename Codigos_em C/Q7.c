#include <stdio.h>

void main(){
    int numero, centena, dezena, unidade, novo_numero ; 

    printf("Digite seu numero:  ");
    scanf("%d",&numero);

    centena = numero / 100;
    dezena = (numero % 100) / 10 ;
    unidade = numero % 10;

    novo_numero = (unidade * 100) + (dezena * 10) + centena;

    printf("Seu numero invertido seria: %d \n", novo_numero); 
}