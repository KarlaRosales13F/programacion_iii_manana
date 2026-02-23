console.log("OBJETOS - HOTEL CASA BLANCA");

let huesped = {
  nombre: "Ana Martinez",
  edad: 30,
  nacionalidad: "Ecuatoriana",
  reserva: {
    numero: 4521,
    habitacion: 201,
    noches: 3,
    llegada: "2025-11-10"
  }
};

console.log("Huésped:", huesped);
console.log("Nombre huésped:", huesped.nombre);
console.log("Habitación reservada:", huesped.reserva.habitacion);

huesped.nombre = "María Pérez";
huesped.email = "maria.perez@example.com";
console.log("Después de modificar:", huesped);

delete huesped.nacionalidad;
console.log("Después de eliminar nacionalidad:", huesped);

for (let clave in huesped) {
  console.log("Clave:", clave);
}

console.log("Claves:", Object.keys(huesped));
console.log("Valores:", Object.values(huesped));

let cliente = {
  nombre: "Pedro López",
  contacto: {
    correo: "pedro.lopez@correo.com",
    telefono: "0991234567"
  },
  servicios: [
    {nombre: "Desayuno incluido", precio: 0},
    {nombre: "SPA", precio: 35}
  ]
};

console.log("Cliente con servicios:", cliente);
