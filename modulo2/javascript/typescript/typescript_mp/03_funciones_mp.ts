function Bienvenida(nombre: string): string {
  return `Bienvenido(a) a HOTEL CASA BLANCA, ${nombre}!`;
}
console.log(Bienvenida("Francisco"));

const calcularsubtotal = (tarifa: number, noches: number): number => tarifa * noches;
console.log("Subtotal 5x5:", calcularSubtotal(5, 5));

function mostrarpoliticas(): void {
  console.log("Check-in: 15h, Check-out: 12h");
  console.log("Desayuno incluido en Suite y Penthouse");
}
mostrarpoliticas();

function calculartotalReserva(tarifa: number, noches: number, extras: number = 0): number {
  return tarifa * noches + extras;
}

function imprimirtotal(tarifa: number, noches: number, extras: number = 0): void {
  console.log("Total:", calcularTotalReserva(tarifa, noches, extras));
}

console.log("Total (80, 3, 20):", calcularTotalReserva(80, 3, 20));
imprimirtotal(80, 2, 10);
