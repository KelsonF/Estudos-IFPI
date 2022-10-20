class Veiculo {
    placa: string;
    ano: number;

    constructor(placa:string, ano:number){
        this.ano = ano;
        this.placa = placa;
    }
}

class Carro extends Veiculo {
    modelo: string;

    constructor(modelo:string, ano:number, placa:string){
        super(placa,ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(autonomiaBateria: number, modelo:string, ano:number, placa:string){
        super(modelo,ano,placa);
        this.autonomiaBateria = autonomiaBateria;
    }
}