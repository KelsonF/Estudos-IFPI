import Comparavel from './Q8'

export interface NewFiguraGeometrica {
    lado: number;
    altura: number;
    base: number;

    getArea(): number;

    getPerimetro(): number;
}

export class NewQuadrado implements NewFiguraGeometrica, Comparavel {
    constructor(public lado: number, public altura: number, public base: number) { }

    getArea(): number {
        return this.lado * this.base;
    }

    getPerimetro(): number {
        return (this.lado * 2) + (this.lado * 2)
    }

    comparar(figura: NewFiguraGeometrica): number {
        if (this.getArea() < figura.getArea()){
            return -1;
        } else if(this.getArea() > figura.getArea()){
            return 1;
        }else {
            return 0;
        }
    }
}

export class NewTriangulo implements NewFiguraGeometrica,  Comparavel {
    constructor(public lado: number, public altura: number, public base: number) { }

    getArea(): number {
        return this.base * this.altura / 2;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base;
    }

    comparar(figura: NewFiguraGeometrica): number {
        if (this.getArea() < figura.getArea()){
            return -1;
        } else if(this.getArea() > figura.getArea()){
            return 1;
        }else {
            return 0;
        }
    }
}

export class NewRetangulo implements NewFiguraGeometrica,  Comparavel {
    constructor(public lado: number, public altura: number, public base: number) { }

    getArea(): number {
        return this.lado * this.base;
    }

    getPerimetro(): number {
        return this.lado * 2 + this.base * 2
    }

    comparar(figura: NewFiguraGeometrica): number {
        if (this.getArea() < figura.getArea()){
            return -1;
        } else if(this.getArea() > figura.getArea()){
            return 1;
        }else {
            return 0;
        }
    }
}
