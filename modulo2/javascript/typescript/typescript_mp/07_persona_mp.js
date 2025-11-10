"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Huesped = void 0;
var Huesped = /** @class */ (function () {
    function Huesped(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Huesped.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y soy hu\u00E9sped del HOTEL CASA BLANCA."));
    };
    return Huesped;
}());
exports.Huesped = Huesped;
var huesped1 = new Huesped("María Pérez", 28);
huesped1.saludar();
