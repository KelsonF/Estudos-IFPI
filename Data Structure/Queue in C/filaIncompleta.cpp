#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		char nome;
		No *prox;
		No(char n){
			nome = n;
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
			No* novo_no = new No(n);
			novo_no->prox = inicio;
		}
		
		char pop(){
			No* auxiliar;
			auxiliar = inicio;
			inicio = auxiliar->prox;
			return ;
		}
		
		bool isEmpty(){
			return (inicio == NULL);
		}
	
		void popAll(){
	    	No* auxiliar;
			while (inicio != NULL){
				auxiliar = inicio;
	    		inicio = auxiliar->prox;
				delete auxiliar;
			}

			fim = NULL;
		}

};

int main(){
	
	
    
	

	
}
