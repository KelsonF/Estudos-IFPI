#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct lista{
	int mat;
	string nome;	
}Lista; 

Lista* array[30];


void incluirDesordenado(Lista* elemento, Lista* array[]){
    for(int i = 0; i < 30; i++){
        array[i] = elemento;
    }
}

//retorna a posicao do elemento procurado
int procura(int elemento, Lista* array[]){	
	for(int i = 0; i < 30; i++){
        if(array[i]->mat == elemento){
            return i;
        } else {
            cout << "O elemento não existe" << endl;
        }
    }
}

//recebe a posicao e imprime o elemento na tela
void mostrar(int posicao, Lista* array[]){
    for(int i = 0; i < 30; i++){
        if(i == posicao){
            cout << array[i]->mat << endl;
        }
    }
}

//procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int mat, Lista* array[]){
    int posicaoAluno = procura(mat, array);

    for(int i = 0; i < 30; i++){
        if(posicaoAluno != -1){
            mostrar(posicaoAluno,array);
        } else {
            cout << "O elemento não existe" << endl;
        }
    }
}

//estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00(){
	
}

//estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01(){
}

main(){
	
	
}

