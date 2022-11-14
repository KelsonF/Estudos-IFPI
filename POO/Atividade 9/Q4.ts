abstract class FiguraGeometrica {
    abstract getArea(): number;

    abstract getPerimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    constructor(public lado: number) {
        super();
    }

    getArea(): number {
        return this.lado * this.lado;
    }

    getPerimetro(): number {
        return (this.lado * 2) + (this.lado * 2)
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(public lado: number, public base: number, public altura: number) {
        super();
    }

    getArea(): number {
        return this.base * this.altura / 2;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base;
    }
}

class Retangulo extends FiguraGeometrica {
    constructor(public lado: number, public base: number) {
        super();
    }

    getArea(): number {
        return this.lado * this.base;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base * 2
    }
}

let r1:FiguraGeometrica[] = new Array();