let nocheS: number = 3;
let nombrehuesped: string = "María Pérez";
let checkInactivo: boolean = true;
let tarifanoche: number = 85;

if (noches > 0 && checkInActivo) {
  console.log(`Reserva activa para ${nombreHuesped}`);
} else {
  console.log("Reserva no activa");
}

let habitaciones: string[] = ["Individual", "Doble", "Suite", "Penthouse"];
for (let tipo of habitaciones) {
  console.log("Tipo de habitación:", tipo);
}

enum Estadoreserva {
  Pendiente,
  Confirmada,
  CheckIn,
  CheckOut,
  Cancelada,
}

console.log(EstadoReserva);
console.log(EstadoReserva.Confirmada);
console.log(EstadoReserva.Cancelada);
