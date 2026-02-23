var noches = 3;
var nombreHuesped = "María Pérez";
var checkInActivo = true;
var tarifaNoche = 85;


if (noches > 0 && checkInActivo) {
  console.log("Reserva activa para", nombreHuesped);
} else {
  console.log("Reserva no activa");
}


var habitaciones = ["Individual", "Doble", "Suite", "Penthouse"];
for (var i = 0; i < habitaciones.length; i++) {
  console.log("Tipo de habitación:", habitaciones[i]);
}


var EstadoReserva = Object.freeze({
  Pendiente: 0,
  Confirmada: 1,
  CheckIn: 2,
  CheckOut: 3,
  Cancelada: 4,
});

console.log("Estados:", EstadoReserva);
console.log("Confirmada =", EstadoReserva.Confirmada);
console.log("Cancelada =", EstadoReserva.Cancelada);
