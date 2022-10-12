class Hora {
    constructor(private _hora: number, private _minuto: number, private _segundos: number) { }

    public horas(): number {
        return this._hora;
    }

    public minutos(): number {
        return this._minuto;
    }

    public segundos(): number {
        return this._segundos;
    }

    public horario() {
        return `${this.horas()}:${this.minutos()}:${this.segundos()}`
    }
}

let relogio: Hora = new Hora(12, 30, 20);
let horas = relogio.horas();
let minutos = relogio.minutos();
let segundos = relogio.segundos();
let horario = relogio.horario();

console.log(horas);
console.log(minutos);
console.log(segundos);
console.log(horario);