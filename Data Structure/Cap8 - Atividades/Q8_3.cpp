#include <iostream>
using namespace std;

#define troca(a,b) { int x=a; a=b; b=x;}

bool empurra(int vetor[], int numElementos){
    bool trocou = false;
    for(int i = 0; i < numElementos; i++){
        if(vetor[i] > vetor[i+1]){
            troca(vetor[i],vetor[i+1]);
            trocou = true;
        }
    }
    
    return trocou;
}

void bubbleSort(int vetor[], int numElementos){
    if(empurra(vetor,numElementos - 1)){
        bubbleSort(vetor, numElementos-1);
    }
}

int main(){
    int vetor[] = {1, 5, 8, 4, 35, 22, 38, 130, 200};
    int numElementos = (sizeof(vetor)) / sizeof(int);
    
    bubbleSort(vetor, numElementos);

    for (int i = 0; i < numElementos; i++) {
        cout << vetor[i] << endl;
    }

    return 0;
}