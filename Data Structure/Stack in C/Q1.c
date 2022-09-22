#include <stdio.h>
#include "stack.h"

int main(void)
{
    Pilha P = pilha(3);
    empilha(1, P);
    empilha(2, P);
    printf("%d\n", desempilha(P));
    printf("%d\n", desempilha(P));
    printf("%d\n", desempilha(P));

    return 0;
}

/*OUTPUT:
2
1
A pilha esta vazia !!
*/