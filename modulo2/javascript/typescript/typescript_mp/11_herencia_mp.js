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
var Empleado = /** @class */ (function () {
    function Empleado(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
    }
    Empleado.prototype.presentarse = function () {
        console.log("Hola, soy ".concat(this.nombre, ", trabajo como ").concat(this.cargo, " en el HOTEL CASA BLANCA."));
    };
    return Empleado;
}());
var Recepcionista = /** @class */ (function (_super) {
    __extends(Recepcionista, _super);
    function Recepcionista(nombre, idiomas) {
        var _this = _super.call(this, nombre, "Recepcionista") || this;
        _this.idiomas = idiomas;
        return _this;
    }
    Recepcionista.prototype.atenderCliente = function () {
        console.log("".concat(this.nombre, " est\u00E1 atendiendo a un hu\u00E9sped en recepci\u00F3n."));
        console.log("Idiomas: ".concat(this.idiomas.join(", ")));
    };
    return Recepcionista;
}(Empleado));
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef(nombre, especialidad) {
        var _this = _super.call(this, nombre, "Chef") || this;
        _this.especialidad = especialidad;
        return _this;
    }
    Chef.prototype.prepararPlato = function () {
        console.log("".concat(this.nombre, " prepara su especialidad: ").concat(this.especialidad, "."));
    };
    return Chef;
}(Empleado));
// DEMO
var recepcionista1 = new Recepcionista("Andrea", ["Español", "Inglés"]);
var chef1 = new Chef("Roberto", "Mariscos gourmet");
recepcionista1.presentarse();
recepcionista1.atenderCliente();
chef1.presentarse();
chef1.prepararPlato();
