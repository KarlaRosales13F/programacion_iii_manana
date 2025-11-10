export class Huesped {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy huésped del HOTEL CASA BLANCA.`);
  }
}


const huesped1 = new Huesped("María Pérez", 28);
huesped1.saludar();
