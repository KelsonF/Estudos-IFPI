#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		char valor;
		No *prox;
		No(char n){
			valor = n;
			prox = NULL;
		}
};

class Fila{
	public:
		No *inicio;
		No *fim;
		
		Fila(){
			inicio = NULL;
			fim = NULL;
		}
		
		void append(char n){
			if(isEmpty()){
				inicio = new No(n);
				fim = inicio;
			} else {
				No* novo_no = inicio;
				inicio = inicio->prox;
				fim = novo_no;	
			}
		}
		
		char pop(){
			if(!isEmpty()){
				char valor = inicio->valor;
				No* auxiliar = inicio;
				inicio = inicio->prox;
				free(auxiliar);
				return valor;
			} else {
				return '\0';
			}
		}
		
		bool isEmpty(){
			return (inicio == NULL);
		}
	
		void popAll(){
	    	while(!isEmpty()){
				pop();
			}
		}

};

int main(){
	Fila* nova_fila = new Fila;

	cout << "Inserir 3 valores: " << endl;
	
    for(int i = 0; i < 5; i++){
		char valor;
		cin >> valor;
		nova_fila->append(valor);
	}
	
	cout << "Quer remover quantos itens da fila ???: " << endl;

	int quantidade;
	cin >> quantidade;

	for(int i = 0; i < quantidade; i++){
		nova_fila->pop();	
	}

	cout << "Deseja remover todos os elementos da fila ???: " << endl;

	string resposta;
	cin >> resposta;

	if(resposta == "S" || resposta == "s"){
		nova_fila->popAll();
	} else {
		cout << "Obrigado pela compreensão" << endl;
	}

	return 0;
}
