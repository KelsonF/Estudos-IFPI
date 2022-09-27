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

class Pilha{
	public:
	No *topo;
		
	Pilha(){
		topo = NULL;
	}
		
	void push(char n){
		topo->nome = n;
			
	}
		
	char pop(){
			
	}
		
	bool isEmpty(){
		return topo->nome == -1;
	}
	
	bool isFull(){

	}
};

int main(){
	
	

	
}
