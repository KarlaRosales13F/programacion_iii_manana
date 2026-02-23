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
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.calcularBonificacion = function () {
        return this.salario * 0.05;
    };
    Empleado.prototype.mostrarRol = function () {
        console.log("".concat(this.nombre, " trabaja en HOTEL CASA BLANCA."));
    };
    return Empleado;
}());
var Recepcionista = /** @class */ (function (_super) {
    __extends(Recepcionista, _super);
    function Recepcionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Recepcionista.prototype.calcularBonificacion = function () {
        return this.salario * 0.08;
    };
    Recepcionista.prototype.mostrarRol = function () {
        console.log("".concat(this.nombre, " atiende a los hu\u00E9spedes en la recepci\u00F3n."));
    };
    return Recepcionista;
}(Empleado));
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chef.prototype.calcularBonificacion = function () {
        return this.salario * 0.12;
    };
    Chef.prototype.mostrarRol = function () {
        console.log("".concat(this.nombre, " prepara los mejores platos para los clientes."));
    };
    return Chef;
}(Empleado));
var Mucama = /** @class */ (function (_super) {
    __extends(Mucama, _super);
    function Mucama() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mucama.prototype.calcularBonificacion = function () {
        return this.salario * 0.07;
    };
    Mucama.prototype.mostrarRol = function () {
        console.log("".concat(this.nombre, " mantiene las habitaciones limpias y ordenadas."));
    };
    return Mucama;
}(Empleado));
// Polimorfismo en acción
var empleados = [
    new Recepcionista("Andrea", 1000),
    new Chef("Roberto", 1500),
    new Mucama("Lucía", 900),
];
for (var _i = 0, empleados_1 = empleados; _i < empleados_1.length; _i++) {
    var emp = empleados_1[_i];
    emp.mostrarRol();
    console.log("Bonificaci\u00F3n mensual: $".concat(emp.calcularBonificacion().toFixed(2), "\n"));
}
