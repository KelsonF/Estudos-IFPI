var Hora = /** @class */ (function () {
    function Hora(_hora, _minuto, _segundos) {
        this._hora = _hora;
        this._minuto = _minuto;
        this._segundos = _segundos;
    }
    Hora.prototype.horas = function () {
        return this._hora;
    };
    Hora.prototype.minutos = function () {
        return this._minuto;
    };
    Hora.prototype.segundos = function () {
        return this._segundos;
    };
    Hora.prototype.horario = function () {
        return "".concat(this.horas(), ":").concat(this.minutos(), ":").concat(this.segundos());
    };
    return Hora;
}());
var relogio = new Hora(12, 30, 20);
var horas = relogio.horas();
var minutos = relogio.minutos();
var segundos = relogio.segundos();
var horario = relogio.horario();
console.log(horas);
console.log(minutos);
console.log(segundos);
console.log(horario);
