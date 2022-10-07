#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct lista{
	int matricula;
	string nome;	
}Lista; 

Lista* array[30];

//retorna a posicao do elemento procurado
int procura(int elemento, Lista* array[]){	
	for(int i = 0; i < 30; i++){
        if(array[i]->matricula == elemento){
            return i;
        }
    }
    return -1;
}

void incluirDesordenado(Lista* array[], Lista* aluno){
    int counter = -1;
    
    if (procura(aluno->matricula, array) == -1) {
		counter++;
		array[counter] = aluno;
	} else {
		cout << "Lista ja cadastrado!" << endl;
	}
}

//recebe a posicao e imprime o elemento na tela
void mostrar(int posicao, Lista* array[]){
    for(int i = 0; i < 30; i++){
        if(i == posicao){
            cout << array[i]->matricula << endl;
        }
    }
}

//procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int matricula, Lista* array[]){
    int posicaoAluno = procura(matricula, array);

    for(int i = 0; i < 30; i++){
        if(posicaoAluno != -1){
            mostrar(posicaoAluno,array);
        } else {
            cout << "O elemento não existe" << endl;
        }
    }
}

//estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00(int matricula, Lista* array[]){
	int posicao = procura(matricula, array);
    int counter = -1;

    array[posicao] = array[counter];
    free(&array[counter]);
    counter--;
}

//estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01(int matricula, Lista* array[]){
    int posicao = procura(matricula, array);
	int counter = -1;

	if (posicao != -1) {
		for(int i = posicao; i <= counter; i++) {
			array[i] = array[i+1];
		}
		free(&array[counter]);
		counter--;
	}
}

void mostrarAluno(Lista* array[]){
    for(int i = 0; i < 30; i++){
        cout << array[i]->matricula << endl;
        cout << array[i]->nome << endl;
    }
}

main(){
    Lista* array[30];

    Lista* aluno1;
	aluno1->matricula = 1;
	aluno1->nome = "Joao";

	Lista* aluno2;
	aluno2->matricula = 2;
	aluno2->nome = "Jose";

	Lista* aluno3;
	aluno3->matricula = 3;
	aluno3->nome = "Josias";

	Lista* aluno4;
	aluno4->matricula = 4;
	aluno4->nome = "Joana";

	Lista* aluno5;
	aluno5->matricula = 5;
	aluno5->nome = "Joselia";

	Lista* aluno6;
	aluno6->matricula = 6;
	aluno6->nome = "Josiana";

	incluirDesordenado(array,aluno1);
	incluirDesordenado(array,aluno2);
	incluirDesordenado(array,aluno3);
	incluirDesordenado(array,aluno4);
	incluirDesordenado(array,aluno5);
	incluirDesordenado(array,aluno6);

    mostrarAluno(array);
}

