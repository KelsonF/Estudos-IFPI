#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef char ItemStack;

typedef struct pilha{
    ItemStack value;
    struct pilha* proximo;
}Pilha;

Pilha* createItem(ItemStack valor){
    Pilha* item = (Pilha*)malloc(sizeof(Pilha));
    item->value = -1;
    item->proximo = NULL;

    return item;
}

Pilha* create_stack() {
	Pilha* new_stack = create_item(0);

	return new_stack;
}

bool isEmpty(Pilha* pilha){
    return pilha->proximo = NULL; 
}

void push(int new_value, Pilha* pilha) {
	Pilha* new_item = create_item(new_value);
	if(pilha->proximo == NULL) {
		pilha->proximo = new_item;
	} else {
		new_item->proximo
        
         = pilha->proximo;
		pilha->proximo = new_item;
	}
}

int pop(Pilha* pilha) {
	if(!stack_is_empty(pilha)) {
		Pilha* temp = pilha->proximo;
		int value = temp->value;
		pilha->proximo = pilha->proximo->proximo;
		free(temp);
		return value;
	}

	return '\0';
}