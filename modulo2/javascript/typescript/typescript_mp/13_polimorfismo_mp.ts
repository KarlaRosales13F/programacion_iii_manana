class Empleado {
  nombre: string;
  salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  calcularBonificacion(): number {
    return this.salario * 0.05;
  }

  mostrarRol(): void {
    console.log(`${this.nombre} trabaja en HOTEL CASA BLANCA.`);
  }
}

class Recepcionista extends Empleado {
  calcularBonificacion(): number {
    return this.salario * 0.08;
  }

  mostrarRol(): void {
    console.log(`${this.nombre} atiende a los huéspedes en la recepción.`);
  }
}

class Chef extends Empleado {
  calcularBonificacion(): number {
    return this.salario * 0.12;
  }

  mostrarRol(): void {
    console.log(`${this.nombre} prepara los mejores platos para los clientes.`);
  }
}

class Mucama extends Empleado {
  calcularBonificacion(): number {
    return this.salario * 0.07;
  }

  mostrarRol(): void {
    console.log(`${this.nombre} mantiene las habitaciones limpias y ordenadas.`);
  }
}

// Polimorfismo en acción
const empleados: Empleado[] = [
  new Recepcionista("Andrea", 1000),
  new Chef("Roberto", 1500),
  new Mucama("Lucía", 900),
];

for (const emp of empleados) {
  emp.mostrarRol();
  console.log(`Bonificación mensual: $${emp.calcularBonificacion().toFixed(2)}\n`);
}
