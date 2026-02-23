// HOTEL CASA BLANCA — Herencia básica

class Empleado {
  nombre: string;
  cargo: string;

  constructor(nombre: string, cargo: string) {
    this.nombre = nombre;
    this.cargo = cargo;
  }

  presentarse(): void {
    console.log(`Hola, soy ${this.nombre}, trabajo como ${this.cargo} en el HOTEL CASA BLANCA.`);
  }
}

class Recepcionista extends Empleado {
  idiomas: string[];

  constructor(nombre: string, idiomas: string[]) {
    super(nombre, "Recepcionista");
    this.idiomas = idiomas;
  }

  atenderCliente(): void {
    console.log(`${this.nombre} está atendiendo a un huésped en recepción.`);
    console.log(`Idiomas: ${this.idiomas.join(", ")}`);
  }
}

class Chef extends Empleado {
  especialidad: string;

  constructor(nombre: string, especialidad: string) {
    super(nombre, "Chef");
    this.especialidad = especialidad;
  }

  prepararPlato(): void {
    console.log(`${this.nombre} prepara su especialidad: ${this.especialidad}.`);
  }
}

// DEMO
const recepcionista1 = new Recepcionista("Andrea", ["Español", "Inglés"]);
const chef1 = new Chef("Roberto", "Mariscos gourmet");

recepcionista1.presentarse();
recepcionista1.atenderCliente();
chef1.presentarse();
chef1.prepararPlato();
