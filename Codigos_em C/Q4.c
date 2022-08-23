//4. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
#include <stdio.h>

void main()
{
    int numero1 , numero2 ;
    float resto , quociente ; 

    printf("Digite um valor: ");
    scanf("%d", &numero1);
     
    printf("Digite um valor: ");
    scanf("%d", &numero2);

    resto = numero1 % numero2;
    quociente = numero1 / numero2;

    printf("O resto da sua divisao seria: %f \n",resto);
    printf("O quociente da dividao seria: %f \n",quociente);

}