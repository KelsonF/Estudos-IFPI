#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No
{
public:
	char nome;
	No *prox;
	No(char n)
	{
		nome = n;
		prox = NULL;
	}
};

class Pilha
{
public:
	No *topo = NULL;

	void push(char n)
	{
		No *novo_no = new No(n);
		novo_no->prox = topo;
		topo = novo_no;
	}

	char pop()
	{
		if (!isEmpty())
		{
			char item = topo->nome;
			topo = topo->prox;
			return item;
		}
	}

	int isEmpty()
	{
		return topo == NULL;
	}
};

int main()
{
	Pilha pilha;
	pilha.push('k');
	pilha.push('e');
	pilha.push('l');
	pilha.push('s');
	pilha.push('o');
	pilha.push('n');

	cout << pilha.pop() << endl;
	cout << pilha.pop() << endl;
	cout << pilha.pop() << endl;
}
