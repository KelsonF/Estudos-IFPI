#include <stdio.h>
#include <stdlib.h>

typedef char *StackItem;

typedef struct stack{
    int max;
    int top;
    StackItem *item;
} *Stack;

int emptyStack(Stack stack){
    return stack->top == -1;
}

int fullStack(Stack stack){
    return stack->top == stack->max-1;
}

Stack createStack(int tamanho){
    Stack stack = (Stack)malloc(sizeof(struct stack));

    stack->max = tamanho;
    stack->top = -1;
    stack->item = (StackItem*)malloc(sizeof(StackItem) * tamanho);

    return stack;
}

void push(StackItem element, Stack stack){
    if( !fullStack(stack) ){
        stack->top++;
        stack->item[stack->top] = element;
    }

}

