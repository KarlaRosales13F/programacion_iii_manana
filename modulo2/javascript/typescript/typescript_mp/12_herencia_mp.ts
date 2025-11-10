
class Reserva {
  codigo: string;
  nombreHuesped: string;
  noches: number;
  tarifaBase: number;

  constructor(nombreHuesped: string, noches: number, tarifaBase: number) {
    this.codigo = "CB-" + Math.floor(Math.random() * 10000);
    this.nombreHuesped = nombreHuesped;
    this.noches = noches;
    this.tarifaBase = tarifaBase;
  }

  calcularTotal(): number {
    return this.noches * this.tarifaBase;
  }

  mostrarResumen(): void {
    console.log(
      `Reserva ${this.codigo} a nombre de ${this.nombreHuesped}. Total: $${this.calcularTotal()}`
    );
  }
}

class ReservaSuite extends Reserva {
  private extraServicio = 50;

  calcularTotal(): number {
    return super.calcularTotal() + this.extraServicio;
  }

  mostrarResumen(): void {
    console.log(
      `Reserva ${this.codigo} (Suite) — Huesped: ${this.nombreHuesped}, Total con servicio adicional: $${this.calcularTotal()}`
    );
  }
}

class ReservaPenthouse extends Reserva {
  private desayunoIncluido = true;
  private impuestoLujo = 0.15;

  calcularTotal(): number {
    const subtotal = super.calcularTotal();
    return subtotal + subtotal * this.impuestoLujo;
  }

  mostrarResumen(): void {
    console.log(
      `Reserva ${this.codigo} (Penthouse) — Desayuno incluido: ${this.desayunoIncluido ? "Sí" : "No"}`
    );
    console.log(`Total con impuestos: $${this.calcularTotal()}`);
  }
}


const reserva1 = new Reserva("Juan López", 3, 90);
const reserva2 = new ReservaSuite("María Pérez", 4, 120);
const reserva3 = new ReservaPenthouse("Luis Andrade", 2, 200);

reserva1.mostrarResumen();
reserva2.mostrarResumen();
reserva3.mostrarResumen();
