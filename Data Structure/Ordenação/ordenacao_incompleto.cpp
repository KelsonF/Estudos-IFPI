#include <iostream>

using namespace std;

typedef struct aluno {
	int matricula;
	string nome;
} Aluno;

void insere(Aluno item, Aluno vetor[], int tamanho) {
	while (tamanho > 0 && item.matricula < vetor[tamanho - 1].matricula)
	{
		vetor[tamanho] = vetor[tamanho - 1];
		tamanho--;
	}
	vetor[tamanho] = item;
}

void insertion_sort(Aluno vetor[], int tamanho, int i) {
	if (i == tamanho)
		return;
	insere(vetor[i], vetor, i);
	insertion_sort(vetor, tamanho, i + 1);
}

#define troca(a, b)    \
{                  \
		Aluno aux = a; \
		a = b;         \
		b = aux;       \
	}

int empurra(Aluno vetor[], int numElementos) {
	int trocou = 0;
	for (int i = 0; i < numElementos; i++)
	{
		if (vetor[i].matricula > vetor[i + 1].matricula)
		{
			troca(vetor[i], vetor[i + 1]);
			trocou = 1;
		}
	}
	return trocou;
}

void bubble_sort(Aluno vetor[], int numElementos) {
	if (empurra(vetor, numElementos - 1))
	{
		bubble_sort(vetor, numElementos - 1);
	}
	return;
}

int seleciona(Aluno vetor[], int tamanho) {
	int i = 0;
	for (int j = 1; j < tamanho; j++)
	{
		if (vetor[i].nome < vetor[j].nome)
		{
			i = j;
		}
	}
	return i;
}

void selection_sort(Aluno vetor[], int tamanho) {
	int posicao_maior_parcial = seleciona(vetor, tamanho);
	if (tamanho - posicao_maior_parcial <= 1)
		return;
	troca(vetor[posicao_maior_parcial], vetor[tamanho - 1]);
	selection_sort(vetor, tamanho - 1);
}

Aluno myarray[20];

int main() {

	Aluno aluno1;
	aluno1.matricula = 500;
	aluno1.nome = "Kelson";

	Aluno aluno2;
	aluno2.matricula = 20;
	aluno2.nome = "Eduardo";

	Aluno aluno3;
	aluno3.matricula = 200;
	aluno3.nome = "Claudia";

	myarray[0] = aluno1;
	myarray[1] = aluno2;
	myarray[2] = aluno3;

	insertion_sort(myarray, 3, 0);

	for (int i = 0; i < 3; i++) {
		cout << "mat " << i << ": " << myarray[i].matricula << endl;
	}

	selection_sort(myarray, 3);

	for (int i = 0; i < 3; i++) {
		cout << "nome " << i << ": " << myarray[i].nome << endl;
	}

	bubble_sort(myarray, 3);

	for (int i = 0; i < 3; i++) {
		cout << "mat " << i << ": " << myarray[i].matricula << endl;
	}

	return 0;
}