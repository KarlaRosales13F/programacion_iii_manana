
console.log("Funciones - HOTEL CASA BLANCA");

function bienvenidaHuesped(nombre) {
    console.log("Bienvenido a HOTEL CASA BLANCA, " + nombre + "!");
}
bienvenidaHuesped("Luis");

function sumarCargos(a, b) {
    return a + b;
}
let cargos = sumarCargos(20, 15); 
console.log("Cargos adicionales: $", cargos);

const descuentoEstancia = (noches) => {
    if (noches >= 7) return 0.15; 
    if (noches >= 3) return 0.05; 
    return 0;
};
console.log("Descuento para 5 noches:", descuentoEstancia(5));

const totalSinDescuento = (tarifaNoche, noches) => tarifaNoche * noches;
console.log("Total sin descuento (tarifa $80 x 4):", totalSinDescuento(80, 4));

function solicitarHabitacion(nombre, tipo = "Doble") {
    return `Solicitud: ${nombre} solicita una habitación ${tipo}.`;
}
console.log(solicitarHabitacion("Ana"));
console.log(solicitarHabitacion("Carlos", "Suite"));

function parOImpar(numeroReserva) {
    return (numeroReserva % 2 === 0) ? "par" : "impar";
}
console.log("Reserva #123:", parOImpar(123));

function precioFinal(tarifaNoche, noches) {
    let subtotal = tarifaNoche * noches;
    let descuento = descuentoEstancia(noches);
    return subtotal - (subtotal * descuento);
}
console.log("Precio final para 8 noches:", precioFinal(80, 8));
