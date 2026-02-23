var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Reserva = /** @class */ (function () {
    function Reserva(nombreHuesped, noches, tarifaBase) {
        this.codigo = "CB-" + Math.floor(Math.random() * 10000);
        this.nombreHuesped = nombreHuesped;
        this.noches = noches;
        this.tarifaBase = tarifaBase;
    }
    Reserva.prototype.calcularTotal = function () {
        return this.noches * this.tarifaBase;
    };
    Reserva.prototype.mostrarResumen = function () {
        console.log("Reserva ".concat(this.codigo, " a nombre de ").concat(this.nombreHuesped, ". Total: $").concat(this.calcularTotal()));
    };
    return Reserva;
}());
var ReservaSuite = /** @class */ (function (_super) {
    __extends(ReservaSuite, _super);
    function ReservaSuite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extraServicio = 50;
        return _this;
    }
    ReservaSuite.prototype.calcularTotal = function () {
        return _super.prototype.calcularTotal.call(this) + this.extraServicio;
    };
    ReservaSuite.prototype.mostrarResumen = function () {
        console.log("Reserva ".concat(this.codigo, " (Suite) \u2014 Huesped: ").concat(this.nombreHuesped, ", Total con servicio adicional: $").concat(this.calcularTotal()));
    };
    return ReservaSuite;
}(Reserva));
var ReservaPenthouse = /** @class */ (function (_super) {
    __extends(ReservaPenthouse, _super);
    function ReservaPenthouse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.desayunoIncluido = true;
        _this.impuestoLujo = 0.15;
        return _this;
    }
    ReservaPenthouse.prototype.calcularTotal = function () {
        var subtotal = _super.prototype.calcularTotal.call(this);
        return subtotal + subtotal * this.impuestoLujo;
    };
    ReservaPenthouse.prototype.mostrarResumen = function () {
        console.log("Reserva ".concat(this.codigo, " (Penthouse) \u2014 Desayuno incluido: ").concat(this.desayunoIncluido ? "Sí" : "No"));
        console.log("Total con impuestos: $".concat(this.calcularTotal()));
    };
    return ReservaPenthouse;
}(Reserva));
var reserva1 = new Reserva("Juan López", 3, 90);
var reserva2 = new ReservaSuite("María Pérez", 4, 120);
var reserva3 = new ReservaPenthouse("Luis Andrade", 2, 200);
reserva1.mostrarResumen();
reserva2.mostrarResumen();
reserva3.mostrarResumen();
