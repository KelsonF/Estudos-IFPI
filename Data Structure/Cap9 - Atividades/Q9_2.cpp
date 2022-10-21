#include <iostream>
#include "lista.hpp"
using namespace std;

int ocorrencias(Lista lista, Item item) {
    if(lista == NULL){
        return 0;
    } else {
        int contador = 0;

        while(lista != NULL){
            if(item == lista->item) contador++;
            lista = lista->prox;
        }
        return contador;
    }
}

int main(){
    Lista lista = no(1, no(2, no(1, no(4, no(1, NULL)))));

    cout << ocorrencias(lista,1) << endl;
    cout << ocorrencias(lista,2) << endl;
    cout << ocorrencias(lista,3) << endl;
    
    return 0;
}