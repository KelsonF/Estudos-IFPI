// Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

#include <iostream>
using namespace std;

int main()
{
    int peso1, peso2, peso3 ;
    double nota1, nota2, nota3 , media_ponderada ;

    cout << "Digite sua nota: " ;
    cin >> nota1 ;
    cout << "Digite sua nota: " ; 
    cin >> nota2 ; 
    cout << "Digite sua nota: " ;
    cin >> nota3 ; 

    cout << "Peso: " ; 
    cin >> peso1 ;
    cout << "Peso: " ;
    cin >> peso2 ;
    cout << "Peso: " ;
    cin >> peso3 ;

    media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3) ;

    cout << "Sua media ponderada: " << media_ponderada ; 
}