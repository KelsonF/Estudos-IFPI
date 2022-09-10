#include <stdio.h>
#include "stack.h"

int main()
{
    Pilha P = pilha(100);
    empilha(8, P);
    while (acessoTopo(P) > 0)
    {
        empilha(acessoTopo(P) / 2, P);
    }

    while (!pilhaVazia(P))
    {
        printf("%d\n", desempilha(P));
    }

    return 0;
}

/*OUTPUT:
0
1
2
4
8
*/