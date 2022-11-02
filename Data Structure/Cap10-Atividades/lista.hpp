#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;
class No{
	public:
		int num;
		No *prox;
		No(int m){
			num=m;
			prox=NULL;
		}
};

class Lista{
	public:
		No *inicio;
		No *fim;
	
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	

		void addToFinal(int m){
			No *novo= new No(m);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				fim=novo;
			}
		}
		
			
		bool lista_vazia(){
			return inicio==NULL;
		}

		void adcionarInicio(int m){
			No *novoNo = new No(m);
			novoNo->prox = inicio;
			inicio = novoNo;
			
			if(this->lista_vazia()){
				fim = novoNo;
			}
		}

		void mostra(){
			if (lista_vazia()){
				cout<<"\nLista vazia!!!";
			}
			else{
				No *noAux = inicio;

				cout << "Lista:" << endl;

				while(noAux != NULL){
					cout << "Numero" << noAux->num << endl;
					noAux = noAux->prox;
				}
			}
		}
		
		bool remove(int num){
			 if(this->lista_vazia()){
				cout << "Lista vazia" << endl;
			 }else{
				No *noAux = inicio;
				No *anterior = NULL;

				while(noAux != NULL){
					if(noAux->num == num){
						if(fim == noAux){
							fim = anterior;
						}
						anterior->prox = noAux->prox;
						free(noAux);
						return true;
					}
					anterior = noAux;
					noAux = noAux->prox;
				}
				cout << "Elemento nao encontrado" << endl;
			 }

			 return false;
		}
		
		// auxiliar no metodo remove, vai 
		//retornar o endereco do anterior
		No *busca(int num){
			if(this->lista_vazia()){
				cout << "Lista vazia" << endl;
			 }else{
				No *noAux = inicio;

				while(noAux != NULL){
					if(noAux->num == num){
						return noAux;
					}
					noAux = noAux->prox;
				}
				cout << "Elemento nao encontrado" << endl;
			 }

			 return NULL;
		}
		
		void removeTodos(){
			No *atual=inicio;
			No *proximo=NULL;
			while (atual!=NULL){
					proximo=atual->prox;
					free(atual);
					atual=proximo;						
			}
			inicio=atual;
		}
		
		// criar uma nova lista que seja o inverso da primeira
		Lista* criaListaInversa(){
			if(this->lista_vazia()){
				cout << "Lista vazia" << endl;
			}else{
				Lista *lista2 = new Lista();

				No *atual = inicio;
				No *prox = inicio->prox;
				lista2->adcionarInicio(inicio->num);

				while(atual->prox != NULL){
					atual = prox;
					prox = atual->prox;
					lista2->adcionarInicio(inicio->num);
				}

				return lista2;
			}
		}
		
		//inverter a propria lista
		void listaInvertida(){
			if(this->lista_vazia()){
				cout << "Lista vazia" << endl;
			}else{
				No *atual = inicio;
				No *prox = atual->prox;

				No *anterior = NULL;
				atual->prox = NULL;
				fim = inicio;

				while(prox != NULL){
					anterior = atual;
					atual = prox;
					prox = atual->prox;

					atual->prox = anterior;

					if(prox == NULL){
						inicio = atual;
					}
				}
			}
		}
};