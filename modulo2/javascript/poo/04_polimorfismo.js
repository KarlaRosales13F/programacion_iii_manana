class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;  // Inicializamos 'salario' aquí.
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando...`);
    }

    calcularVacaciones() {
        return this.salario * 0.15;  // Cálculo estándar de vacaciones para un empleado.
    }

    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;  // Calculamos las horas extras.
    }
}

class Programador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;  // Vacaciones específicas para el Programador.
    }

    horasExtras(horas) {
        return ((this.salario / 30) / 8) * horas * 2;  // Mismo cálculo, pero para un programador.
    }
}

class Diseñador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;  // Vacaciones específicas para el Diseñador.
    }
}

const progPedro = new Programador("Pedro", 2000);
const diseJuan = new Diseñador("Juan", 1500);

progPedro.trabajar();
diseJuan.trabajar();

console.log(`Vacaciones de Pedro: ${progPedro.calcularVacaciones()}`);
console.log(`Vacaciones de Juan: ${diseJuan.calcularVacaciones()}`);

console.log(`Horas extras de Pedro por 5 horas: ${progPedro.horasExtras(5)}`);
console.log(`Horas extras de Juan por 3 horas: ${diseJuan.horasExtras(3)}`);