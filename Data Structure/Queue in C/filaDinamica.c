#include <stdio.h>
#include <stdlib.h>

typedef char ItemFila;

typedef struct fila{
    int maximo; // Tamanho maximo da fila
    int total;  // Quantidades de itens na fila
    int inicio; // Posição de inicio da fila
    int final; // Posição de termino da fila
    ItemFila *item; // Itens da fila
}Fila;

Fila* create_queue(int x){
    Fila* queue = (Fila*)malloc(sizeof(Fila));
    queue->maximo = x;
    queue->total = 0;
    queue->inicio = 0;
    queue->final = 0;
    queue->item = (ItemFila*)malloc(sizeof(ItemFila));

    return queue;
}

int isEmpty(Fila* queue){
    return queue->total = 0;
}

int isFull(Fila* queue){
    return queue->total = queue->maximo;
}

void pushQueue(Fila* queue, ItemFila x){
    if(isFull(queue)){
        printf("Fila Cheia !!");
    } else {
        queue->item[queue->final] = x;
        queue->final++;
        queue->total++;
    }
}

ItemFila* popQueue(Fila* queue){
    if(isEmpty(queue)){
        printf("Fila esta vazia !!");
    } else {
        ItemFila* itemRevovido = queue->item[queue->inicio];
        queue->total--;
        return itemRevovido;
    }
}

void destroyQueue(Fila* *auxiliar){
    free((*auxiliar)->item);
    free(*auxiliar);
    *auxiliar = NULL;
}