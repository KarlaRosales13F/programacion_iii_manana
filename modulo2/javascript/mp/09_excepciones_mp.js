try {
    console.log(reservaNoDefinida);
} catch (error) {
    console.log("Error detectado al validar reserva:", error.message);
}

try {
    console.log("Intentando crear reserva ...");
    let habitacionDisponible = false;
    if (!habitacionDisponible) {
        throw new Error("No hay habitaciones disponibles para las fechas seleccionadas");
    }
    
    console.log("Reserva creada correctamente.");
} catch (error) {
    console.log("No se pudo crear la reserva:", error.message);
} finally {
    console.log("Proceso de intento de reserva finalizado (limpieza/registro).");
}
