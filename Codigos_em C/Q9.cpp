// 9. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

#include <iostream>
using namespace std;

int main()
{
    int base, altura, area;
    
    cout << "Informe a base e a altura do triangulo: ";
    cin >> base >> altura;

    area = (base * altura) / 2;

    cout << "Area: " << area << endl;

    return 0;
}