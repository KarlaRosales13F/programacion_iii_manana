"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _09_acceso_mp_1 = require("./09_acceso_mp");
var miReserva = new _09_acceso_mp_1.Reserva("Carlos Molina", 3);
console.log("Huésped:", miReserva.getDetalles()["huesped"]);
console.log("Código de reserva:", miReserva.getCodigo());
console.log("Detalles completos:", miReserva.getDetalles());
