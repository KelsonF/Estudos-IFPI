#include <stdio.h>
#include "stack.h"

void main()
{
    char frase[15] = "apenas um teste";
    Pilha P = pilha(20);
    
    for(int i = 0; i < 15; i++){
        empilha(frase[i], P);
    }

    while(!pilhaVazia(P)){
        printf("%c",desempilha(P));
    }

    return 0;
}