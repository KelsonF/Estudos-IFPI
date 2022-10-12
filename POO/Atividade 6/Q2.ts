class Hora {
    constructor(private _hora: number, private _minuto: number, private _segundos: number) { }

    public get horas(): number {
        return this._hora;
    }

    public get minutos(): number {
        return this._minuto;
    }

    public get segundos(): number {
        return this._segundos;
    }

    public horario(): string {
        return `${this.horas}:${this.minutos}:${this.segundos}`
    }
}

let relogio: Hora = new Hora(12, 30, 20);
let horas = relogio.horas;
let minutos = relogio.minutos;
let segundos = relogio.segundos;
let horario = relogio.horario();

console.log(horas);
console.log(minutos);
console.log(segundos);
console.log(horario);