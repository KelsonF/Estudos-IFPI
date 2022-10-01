"use strict";
class Circulo {
    constructor(raio) {
        this.raio = 0;
        this.raio = raio;
    }
    calcularArea() {
        return (3.14 * this.raio ** 2);
    }
    calcularPerimetro() {
        return (2 * 3.14 * this.raio);
    }
}
let circunferencia = new Circulo(10);
let areaCircunferencia = circunferencia.calcularArea();
let perimetroCircunferencia = circunferencia.calcularPerimetro();
console.log(`Area: ${areaCircunferencia}`);
console.log(`Perimetro: ${perimetroCircunferencia}`);
