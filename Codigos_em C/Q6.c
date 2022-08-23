// Leia um valor em real (R$), calcule e escreva 70% deste valor.

#include <stdio.h>

void main(){
    float valor , resultado;

    printf("Informe um valor: ");
    scanf("%f", &valor);

    resultado = (valor * 0.7);

    printf("Resultado: %f", resultado); 
}