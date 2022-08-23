//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

#include <stdio.h>

void main()
{
    float velocidade , velocidade2;
    printf("Digite uma velocidade em m/s: ");
    scanf("%f", &velocidade);

    velocidade2 = (velocidade * 3.6);

    printf("%f",velocidade2);
    return 0;
}