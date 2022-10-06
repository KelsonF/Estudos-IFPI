#include <stdio.h>
#include "Pilha.c"

int main() {
    int tam;
    Itemp* item;
    float aux;

    printf("Qtd de numeros: ");
    scanf("%d", &tam);

    Pilha* pilhaB = createStack(tam);
    Pilha* pilhaA = createStack(tam);

    printf("Itens: ");
    for(int i = 0; i < tam; i++) {
        scanf("%f", &item);
        push(item, pilhaB);
    }

    printf("Tranquilo \n");
    while(!stack_is_Empty(pilhaB)) {
        if (stack_is_Empty(pilhaA) || pilhaA->item[pilhaA->topo] >= pilhaB->item[pilhaB->topo]) {
            push(pop(pilhaB), pilhaA);
        } else {
            aux = popS(pilhaB);
            printf("aux: %.2f\n", aux);

            while (!satck_is_Empty(pilhaA) && pilhaA->item[pilhaA->topo] < aux) {
                pushS(popS(pilhaA), pilhaB);
            }
            pushS(aux, pilhaA);
            
        }
        
    }

    system("pause");
}

