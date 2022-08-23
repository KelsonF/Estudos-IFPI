//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

#include <stdio.h>

void main(){
    float salario_atual , salario_com_aumento ; 

    printf("Digite seu salario: ");
    scanf("%f", &salario_atual);

    salario_com_aumento = salario_atual + (salario_com_aumento * 0.25);

    printf("Seu novo salario seria de: %f", salario_com_aumento);
}