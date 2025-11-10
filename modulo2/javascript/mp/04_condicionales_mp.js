// Ejemplos de condicionales aplicados a reservas de hotel


let temperaturaExterior = 18;
if (temperaturaExterior > 25) {
    console.log("Clima cálido — activar aire acondicionado en zonas comunes");
} else {
    console.log("Clima fresco — mantener ventanas abiertas donde corresponda");
}

let clave = "casaBlanca2025";
if (clave === "casaBlanca2025") {
    console.log("Acceso al panel de reservas: autorizado");
} else {
    console.log("Acceso al panel de reservas: denegado");
}

let puntuacionEncuesta = 8;
if (puntuacionEncuesta >= 9) {
    console.log("Huésped: Muy satisfecho");
} else if (puntuacionEncuesta >= 7) {
    console.log("Huésped: Satisfecho");
} else {
    console.log("Huésped: Insatisfecho — contactar para feedback");
}

let edadHuesped = 30;
let miembroClub = true;
if (edadHuesped >= 18) {
    if (miembroClub) {
        console.log("Check-in anticipado permitido (miembro CLUB)");
    } else {
        console.log("Check-in estándar — no es miembro CLUB");
    }
} else {
    console.log("Check-in no permitido: huésped menor de edad sin acompañante");
}

let tipoHabitacion = "Suite";
switch (tipoHabitacion) {
    case "Individual":
        console.log("Habitación Individual — cama single");
        break;
    case "Doble":
        console.log("Habitación Doble — dos camas o matrimonial");
        break;
    case "Suite":
        console.log("Suite — incluye desayuno y lounge VIP");
        break;
    default:
        console.log("Tipo de habitación no reconocido — verificar catálogo");
}

let habA = {numero: 101, camas: 1};
let habB = {numero: 202, camas: 2};
let habC = {numero: 303, camas: 3};

let mayorCamas = habA;
if (habB.camas > mayorCamas.camas) {
    mayorCamas = habB;
}
if (habC.camas > mayorCamas.camas) {
    mayorCamas = habC;
}
console.log("La habitación con más camas es la:", mayorCamas.numero, "con", mayorCamas.camas, "camas");
