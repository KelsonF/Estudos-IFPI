#include <stdio.h>
#include <stdlib.h>

typedef char itemStack;

typedef struct stack {
    int max;  // Capacidade da pilha
    int top; // Posição do topo
    itemStack *item // Itens da pilha

} *Stack;

Stack createStack (int length){
    Stack stack = malloc(sizeof(struct stack));  // aloca memoria

    stack->max = length; // capacidade pilha
    stack->top = -1; // pilha inicialmente vazia (index)
    stack->item = malloc(sizeof(itemStack)); 

    return stack;

}

int createEmptyStack (Stack stack){
    return stack->top == -1; 
}

int createFullStack (Stack stack){
    return stack->top == stack->max -1;
}
