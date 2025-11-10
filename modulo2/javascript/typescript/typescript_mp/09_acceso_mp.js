"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
var Reserva = /** @class */ (function () {
    function Reserva(nombreHuesped, noches) {
        this.idGenerico = "CB-RES-" + Math.floor(Math.random() * 10000);
        this.nombreHuesped = nombreHuesped;
        this.noches = noches;
        this.generarCodigo();
    }
    Reserva.prototype.generarCodigo = function () {
        this.codigo = "HOTELCB-" + new Date().getTime();
    };
    Reserva.prototype.getCodigo = function () {
        return this.codigo;
    };
    Reserva.prototype.getDetalles = function () {
        return {
            huesped: this.nombreHuesped,
            noches: this.noches,
            codigo: this.codigo,
            id: this.idGenerico,
        };
    };
    return Reserva;
}());
exports.Reserva = Reserva;
