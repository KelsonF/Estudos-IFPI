#include <stdio.h>
#include <stdlib.h>

typedef char ItemFila;

typedef struct No{
    ItemFila dado;
    struct No *proximo;
}No;

