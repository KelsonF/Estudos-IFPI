// 2. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
#include <stdio.h>

void main()
{
    float dolar, real , valor_em_dolar;

    dolar = 5.00;
    printf("Digite um valor em dolar: ");
    scanf("%f",&valor_em_dolar);

    real = (dolar * valor_em_dolar);

    printf("Seu valor em real:%f",real);
    return 0;
}