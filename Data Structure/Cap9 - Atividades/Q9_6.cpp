#include <iostream>
#include "lista.hpp"
using namespace std;

void substituir(Item item, Item substituto, Lista lista) {
    if(lista == NULL) return;
    
    if(lista->item == item) lista->item = substituto;
    return substituir(item, substituto, lista->prox);
}

int main(){
    Lista lista = no(1, no(2, no(1, no(3, no(1, NULL)))));

    substituir(1,2,lista);

    exibir(lista);
    return 0;
}