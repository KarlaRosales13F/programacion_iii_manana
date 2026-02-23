interface Huesped {
  id: number;
  nombre: string;
  correo?: string;
}

interface Reserva {
  codigo: string;
  huesped: Huesped;
  noches: number;
  tarifaNoche: number;
  total(): number;
}

export const reserva1: Reserva = {
  codigo: "CB-0001",
  huesped: { id: 1, nombre: "Luis Andrade" },
  noches: 2,
  tarifaNoche: 90,
  total() {
    return this.noches * this.tarifaNoche;
  },
};

console.log(reserva1.codigo, reserva1.huesped.nombre, reserva1.total());
