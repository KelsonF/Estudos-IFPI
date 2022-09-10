#include <stdio.h>

typedef char ItemPilha;

typedef struct pilha
{
    int max;         // Capacidade da pilha
    int top;         // Posição do topo
    ItemPilha *item; // Itens da pilha

} * Pilha;

Pilha pilha(int m)
{
    Pilha P = malloc(sizeof(struct pilha));  // aloca memoria para a pilha P
    P->max = m;                              // define o maximo tamanho da pilha como m
    P->top = -1;                             // define a pilha, inicialmente, como vazia
    P->item = malloc(m * sizeof(ItemPilha)); // aloca espaço para os futuros itens da pilha

    return P;
}

int pilhaVazia(Pilha P)
{
    if (P->top == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int pilhaCheia(Pilha P)
{
    if (P->top == P->max - 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void empilha(ItemPilha x, Pilha P)
{
    if (pilhaCheia(P))
    {
        puts("A pilha esta cheia !!");
        abort();
    }
    else
    {
        P->top++;
        P->item[P->top] = x;
    }
}

Pilha desempilha(Pilha P)
{
    if (pilhaVazia(P))
    {
        puts("A pilha esta vazia !!");
        abort();
    }
    else
    {
        ItemPilha x = P->item[P->top];
        P->top--;
        return x;
    }
}

ItemPilha acessoTopo(Pilha P)
{
    if (pilhaVazia(P))
    {
        puts("Pilha vazia !!");
    }
    else
    {
        return P->item[P->top];
    }
}
