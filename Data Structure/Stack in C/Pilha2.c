#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef char ItemStack;

typedef struct pilha{
    ItemStack item;
    struct pilha* proximo;
}Pilha;

Pilha* createItem(ItemStack valor){
    Pilha* stack = (Pilha*)malloc(sizeof(Pilha));
    stack->item = -1;
    stack->proximo = NULL;

    return stack;
}

Pilha* create_stack() {
	Pilha* new_stack = create_item(0);

	return new_stack;
}
