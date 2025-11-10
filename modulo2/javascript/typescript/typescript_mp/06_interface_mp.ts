interface Habitacion {
  numero: number;
  tipo: string;
  vista: string;
  precioNoche: number;
}

interface Huesped {
  id: number;
  nombre: string;
  correo: string;
}

interface Pago {
  metodo: string;
  monto: number;
  procesar(): string;
}

interface Reserva {
  codigo: string;
  huesped: Huesped;
  habitacion: Habitacion;
  noches: number;
  pago: Pago;
  total(): number;
}

const habitacion: Habitacion = {
  numero: 305,
  tipo: "Suite Deluxe",
  vista: "Ciudad",
  precioNoche: 120
};

const huesped: Huesped = {
  id: 1,
  nombre: "María Pérez",
  correo: "maria.perez@example.com"
};

const pago: Pago = {
  metodo: "Tarjeta",
  monto: 240,
  procesar() {
    return `Pago de $${this.monto} mediante ${this.metodo} procesado exitosamente.`;
  }
};

export const reserva: Reserva = {
  codigo: "CB-RES-1001",
  huesped,
  habitacion,
  noches: 2,
  pago,
  total() {
    return this.habitacion.precioNoche * this.noches;
  }
};

function validarReserva(reserva: Reserva): void {
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
