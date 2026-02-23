import { Reserva } from "./09_acceso_mp";

const miReserva = new Reserva("Carlos Molina", 3);

console.log("Huésped:", miReserva.getDetalles()["huesped"]);
console.log("Código de reserva:", miReserva.getCodigo());
console.log("Detalles completos:", miReserva.getDetalles());
