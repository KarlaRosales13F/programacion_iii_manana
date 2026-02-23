class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }

    realizarTarea() {
        console.log(`${this.nombre} está realizando su tarea en el hotel.`);
    }
}

class Recepcionista extends Empleado {
    realizarTarea() {
        console.log(`${this.nombre} está atendiendo a los huéspedes en recepción.`);
    }
}

class Mucama extends Empleado {
    realizarTarea() {
        console.log(`${this.nombre} está limpiando las habitaciones.`);
    }
}

const emp1 = new Recepcionista('Carlos López');
const emp2 = new Mucama('Lucía Torres');

emp1.realizarTarea();
emp2.realizarTarea();
