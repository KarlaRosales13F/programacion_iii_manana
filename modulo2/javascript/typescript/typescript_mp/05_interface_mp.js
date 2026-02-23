var reserva1 = {
  codigo: "CB-0001",
  huesped: { id: 1, nombre: "Luis Andrade" },
  noches: 2,
  tarifaNoche: 90,
  total: function () {
    return this.noches * this.tarifaNoche;
  },
};

console.log("Reserva:", reserva1.codigo);
console.log("Huésped:", reserva1.huesped.nombre);
console.log("Total:", reserva1.total());
