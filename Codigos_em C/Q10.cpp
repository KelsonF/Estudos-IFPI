// 10. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

#include <iostream>
using namespace std;

int main()
{
    int lado, area;

    cout << "Informe o valor do lado: ";
    cin >> lado;

    area = lado * lado;

    cout << "Area: " << area;
}