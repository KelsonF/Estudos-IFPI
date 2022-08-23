//3. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
#include <stdio.h>

void main()
{
    float velocidade_quilometro, velocidade_metros ; 

    printf("Digite uma velocidade em km/h: ");
    scanf("%f", &velocidade_quilometro);

    printf("A sua velocidade seria de: %f", velocidade_quilometro / 3.6);
    return 0;
}