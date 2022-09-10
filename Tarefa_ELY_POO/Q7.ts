class Retangulo {
    lado: number = 0;
    comprimento: number = 0;

    constructor(lado: number, comprimento: number) {
        this.lado = lado;
        this.comprimento = comprimento;
    }

    calcularArea() {
        return this.lado * this.comprimento;
    }

    calcularPerimetro() {
        return (this.lado * 2) + (this.comprimento * 2);
    }
}

let retangulo = new Retangulo(10, 20);

let areaRetangulo = retangulo.calcularArea();
let perimetroRetangulo = retangulo.calcularPerimetro();

console.log(`Area: ${areaRetangulo}`);
console.log(`Perimetro: ${perimetroRetangulo}`);