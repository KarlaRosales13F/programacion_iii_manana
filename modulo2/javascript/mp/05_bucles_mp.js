for (let numero = 100; numero <= 110; numero++) {
    console.log("Habitación:", numero);
}

let ocupaciones = [12, 15, 14, 10, 9, 11, 13, 16, 14, 12]; // huéspedes por día
let totalHuespedes = 0;
for (let i = 0; i < ocupaciones.length; i++) {
    totalHuespedes += ocupaciones[i];
}
console.log("Total huéspedes en 10 días:", totalHuespedes);

let tarifaBase = 80; 
console.log("Tabla de precios (tarifa base = $80)");
for (let dias = 1; dias <= 7; dias++) {
    console.log(dias + " noche(s): $" + (tarifaBase * dias));
}

let nombreHotel = "HOTEL CASA BLANCA";
for (let i = 0; i < nombreHotel.length; i++) {
    console.log(nombreHotel[i]);
}

for (let i = 1; i <= 5; i++) {
    console.log("Servicios extra #" + i + " - código:", i**2);
}

let solicitudesPendientes = 3;
while (solicitudesPendientes > 0) {
    console.log("Procesando solicitud. Pendientes:", solicitudesPendientes);
    solicitudesPendientes--;
}

let estancias = [2, 5, 3, 7, 4]; 
let mayorEstancia = 0;
let idx = 0;
while (idx < estancias.length) {
    if (estancias[idx] > mayorEstancia) {
        mayorEstancia = estancias[idx];
    }
    idx++;
}
console.log("La mayor estancia registrada (noches):", mayorEstancia);

let habitacionesRevisadas = 0;
do {
    habitacionesRevisadas++;
    console.log("Habitaciones revisadas:", habitacionesRevisadas);
} while (habitacionesRevisadas < 5);

let n = 1;
while (n <= 5) {
    console.log("Precio por " + n + " noche(s): $" + (tarifaBase * n));
    n++;
}
