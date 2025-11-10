class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando en el hotel.`);
    }

    calcularBonificacion() {
        return this.salario * 0.10; 
    }

    calcularHorasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2; 
    }
}

class Recepcionista extends Empleado {
    calcularBonificacion() {
        return this.salario * 0.12; 
    }
}

class Chef extends Empleado {
    calcularBonificacion() {
        return this.salario * 0.15; 
    }

    calcularHorasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2.5; 
    }
}

const recepAna = new Recepcionista("Ana Martínez", 1200);
const chefPedro = new Chef("Pedro Ramírez", 2000);

recepAna.trabajar();
chefPedro.trabajar();

console.log(`Bonificación de Ana: $${recepAna.calcularBonificacion()}`);
console.log(`Bonificación de Pedro: $${chefPedro.calcularBonificacion()}`);

console.log(`Horas extras de Ana (4 horas): $${recepAna.calcularHorasExtras(4).toFixed(2)}`);
console.log(`Horas extras de Pedro (6 horas): $${chefPedro.calcularHorasExtras(6).toFixed(2)}`);
