#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

typedef char Itemp;

typedef struct pilha{
    int max;
    int topo;
    Itemp *item;
}Pilha;  

Pilha* createStack(int value){
    Pilha* new_stack = malloc(sizeof(struct pilha));
    new_stack->topo = -1;
    new_stack->max = value;
    new_stack->item = malloc(value*sizeof(Itemp));

    return new_stack;
}

bool stack_is_Empty(Pilha* new_stack){
    return new_stack->topo == -1;
}

bool stack_is_Full(Pilha* new_stack){    
    return new_stack->topo == new_stack->max-1;
}

void push(Pilha* new_stack, Itemp element){
    if(stack_is_Full(new_stack)){
        printf("Pilha cheia");
    }else{
        new_stack->topo++;
        new_stack->item[new_stack->topo] = element;
    }
}

Itemp pop(Pilha* new_stack){
    if(satck_is_Empty(new_stack)){
        printf("Pilha vazia");
    }else{
        Itemp x = new_stack->item[new_stack->topo];
        new_stack->topo--;
        return x;
    }
}

Itemp topo(Pilha* new_stack){
    if(stack_is_Empty(new_stack)){
        printf("Pilha vazia");
    }else{
        return new_stack->item[new_stack->topo];
    }
}

void destroy(Pilha* *Q){
    free((*Q)->item);
    free(*Q);
    *Q = NULL;
}   

void pushAll(Pilha* stack,Itemp* itens[]){
    for (int i = 0; itens[i]; i++){
        push(stack, itens[i]);
    }
    
}