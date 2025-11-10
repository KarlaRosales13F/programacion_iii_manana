class Huesped {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarMayorEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad y puede hacer el check-in.`);
        } else {
            console.log(`${this.nombre} es menor de edad y requiere acompañante.`);
        }
    }

    mostrarDatos() {
        console.log(`Huésped: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const huesped1 = new Huesped('María Pérez', 25);
huesped1.mostrarDatos();
huesped1.verificarMayorEdad();

const huesped2 = new Huesped('Lucas Saavedra', 12);
huesped2.mostrarDatos();
huesped2.verificarMayorEdad();