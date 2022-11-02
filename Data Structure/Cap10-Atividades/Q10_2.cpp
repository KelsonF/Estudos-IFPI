#include <iostream>
#include "lista.hpp"

int main(){
    Lista* lista = new Lista();
    int qtd;

    cout << "Quantos numeros vai digitar: ";
    cin >> qtd;

    int num;

    for(int i = 0; i < qtd; i++){
        cout << "Numero " << i+1 << ":";
        cin >> num;
        lista->addToFinal(num);
    }

    lista->mostra();
    lista->listaInvertida();
    lista->mostra();

    return 0;
}