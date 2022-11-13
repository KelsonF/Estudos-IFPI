import {NewFiguraGeometrica,NewQuadrado,NewRetangulo,NewTriangulo} from './Q7'

class Teste { 
    quadrado:NewQuadrado = new NewQuadrado(10,10,10);
    retangulo:NewRetangulo = new NewRetangulo(20,10,20);
    triangulo:NewTriangulo = new NewTriangulo(15,15,15);
}

let novoTeste:Teste = new Teste();
novoTeste.quadrado.comparar(novoTeste.retangulo);
novoTeste.retangulo.comparar(novoTeste.quadrado);
novoTeste.triangulo.comparar(novoTeste.quadrado);
novoTeste.triangulo.comparar(novoTeste.retangulo);
novoTeste.quadrado.comparar(novoTeste.triangulo);
