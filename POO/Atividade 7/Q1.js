"use strict";
class Veiculo {
    constructor(placa, ano) {
        this.ano = ano;
        this.placa = placa;
    }
}
class Carro extends Veiculo {
    constructor(modelo, ano, placa) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(autonomiaBateria, modelo, ano, placa) {
        super(modelo, ano, placa);
        this.autonomiaBateria = autonomiaBateria;
    }
}
