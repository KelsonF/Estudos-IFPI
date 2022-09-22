#include <stdio.h>
#include "Pilha.c"

int main(void)
{
    Pilha P = createStack(3);
    push(1, P);
    push(2, P);
    printf("%d\n", pop(P));
    printf("%d\n", pop(P));
    printf("%d\n", pop(P));

    return 0;
}

/*OUTPUT:
2
1
A pilha esta vazia !!
*/