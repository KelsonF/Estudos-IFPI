#include <stdio.h>
#include "Pilha.c"

int main()
{
    Pilha P = createStack(100);
    pop(8, P);
    while (acessoTopo(P) > 0)
    {
        pop(acessoTopo(P) / 2, P);
    }

    while (!stack_is_Empty(P))
    {
        printf("%d\n", pop(P));
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