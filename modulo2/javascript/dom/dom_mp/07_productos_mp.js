const productos = [
  { nombre: "Habitación Individual", descripcion: "Cama individual, TV, Wi-Fi", precio: 65,  existencia: 8,  ubicacion: "Piso 1" },
  { nombre: "Habitación Doble",      descripcion: "Matrimonial o 2 camas, Wi-Fi", precio: 85,  existencia: 10, ubicacion: "Piso 2" },
  { nombre: "Suite Deluxe",          descripcion: "Sala + dormitorio, desayuno",  precio: 140, existencia: 4,  ubicacion: "Piso 3" },
  { nombre: "Penthouse",             descripcion: "Vista ciudad, lounge VIP",     precio: 220, existencia: 1,  ubicacion: "Piso 4" },
  { nombre: "Desayuno Buffet",       descripcion: "Incluye bebidas calientes",    precio: 12,  existencia: 40, ubicacion: "Restaurante" },
  { nombre: "SPA",                   descripcion: "Sauna + masajes (1h)",         precio: 35,  existencia: 12, ubicacion: "Nivel -1" },
  { nombre: "Traslado Aeropuerto",   descripcion: "Ida o retorno",                precio: 25,  existencia: 6,  ubicacion: "Recepción" },
  { nombre: "Parqueadero",           descripcion: "Cupo por noche",               precio: 6,   existencia: 20, ubicacion: "Subsuelo" },
  { nombre: "Sala de Reuniones",     descripcion: "Capacidad 12 pax",             precio: 50,  existencia: 2,  ubicacion: "Piso 2" },
  { nombre: "Late Check-out",        descripcion: "Hasta 14h",                    precio: 15,  existencia: 10, ubicacion: "Recepción" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
