function bienvenida(nombre) {
  return "Bienvenido(a) a HOTEL CASA BLANCA, " + nombre + "!";
}
console.log(bienvenida("Francisco"));

// Flecha
var calcularSubtotal = (tarifa, noches) => tarifa * noches;
console.log("Subtotal 5x5:", calcularSubtotal(5, 5));


function mostrarPoliticas() {
  console.log("Check-in: 15h, Check-out: 12h");
  console.log("Desayuno incluido en Suite y Penthouse");
}
mostrarPoliticas();


function calcularTotalReserva(tarifa, noches, extras) {
  return tarifa * noches + extras;
}

function imprimirTotal(tarifa, noches, extras) {
  console.log("Total:", calcularTotalReserva(tarifa, noches, extras));
}

console.log("Total (tarifa 80, noches 3, extras 20):", calcularTotalReserva(80, 3, 20));
imprimirTotal(80, 2, 10);
