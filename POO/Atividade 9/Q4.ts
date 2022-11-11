abstract class FiguraGeometrica {

    protected base: number;
    protected altura: number;
    protected lado: number

    constructor(base: number, altura: number, lado: number) {
        this.altura = altura;
        this.base = base;
        this.lado = lado;
    }

    abstract getArea(): number;

    abstract getPerimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    getArea(): number {
        return this.lado * this.lado;
    }

    getPerimetro(): number {
        return (this.lado * 2) + (this.lado * 2)
    }
}

class Triangulo extends FiguraGeometrica {
    getArea(): number {
        return this.base * this.altura / 2;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base;
    }
}

class Retangulo extends FiguraGeometrica {
    getArea(): number {
        return this.lado * this.base;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base * 2
    }
}

// let r1:FiguraGeometrica = new FiguraGeometrica[10]
// console.log(r1.getArea());
// console.log(r1.getPerimetro());