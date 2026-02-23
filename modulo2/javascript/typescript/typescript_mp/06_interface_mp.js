"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


var habitacion = {
    numero: 305,
    tipo: "Suite Deluxe",
    vista: "Ciudad",
    precioNoche: 120
};

var huesped = {
    id: 1,
    nombre: "María Pérez",
    correo: "maria.perez@example.com"
};

var pago = {
    metodo: "Tarjeta",
    monto: 240,
    procesar: function () {
        return `Pago de $${this.monto} mediante ${this.metodo} procesado exitosamente.`;
    }
};

var reserva = {
    codigo: "CB-RES-1001",
    huesped: huesped,
    habitacion: habitacion,
    noches: 2,
    pago: pago,
    total: function () {
        return this.habitacion.precioNoche * this.noches;
    }
};

function validarReserva(reserva) {
    if (!reserva.codigo || !reserva.huesped || !reserva.habitacion) {
        console.log("Reserva inválida. Faltan datos obligatorios.");
    } else {
        console.log("Reserva válida");
        console.log(`Código: ${reserva.codigo}`);
        console.log(`Huésped: ${reserva.huesped.nombre}`);
        console.log(`Habitación: ${reserva.habitacion.tipo}`);
        console.log(`Total: $${reserva.total()}`);
        console.log(reserva.pago.procesar());
    }
}

validarReserva(reserva);
