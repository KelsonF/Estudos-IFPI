#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct lista{
	int matricula;
	string nome;	
}Aluno; 

Aluno lista[30];

//retorna a posicao do elemento procurado
int procura(int matricula){
    int counter = -1;

    for(int i = 0; i <= counter; i++) {
		if (lista[i].matricula == matricula) {
			return i;
		}
	}
	return -1;
}

void incluirDesordenado(Aluno novo_aluno){
    int counter = -1;

    if (procura(novo_aluno.matricula) == -1) {
		counter++;
		lista[counter] = novo_aluno;
	} else {
		cout << "Aluno ja cadastrado!" << endl;
	}
}

//recebe a posicao e imprime o elemento na tela
void mostrar(int posicao){
    cout << "INFORMAÇÕES" << endl;
    cout << "Nome: " << lista[posicao].nome << endl;
    cout << "Matricula: " << lista[posicao].matricula << endl;
}

//procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int matricula){	
    int posicaoElemento = procura(matricula);

    if(posicaoElemento != -1){
        mostrar(posicaoElemento);
    } else {
        cout << "O elemento em questão não existe" << endl;
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
