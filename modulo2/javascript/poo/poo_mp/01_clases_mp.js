class Habitacion {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
    }

    ocupar() {
        console.log(`La habitación ${this.numero} (${this.tipo}) ha sido ocupada.`);
    }

    limpiar() {
        console.log(`La habitación ${this.numero} está siendo limpiada.`);
    }

    liberar() {
        console.log(`La habitación ${this.numero} ha sido liberada y está disponible.`);
    }
}

const habSuite = new Habitacion(305, 'Suite Deluxe');
habSuite.ocupar();
habSuite.limpiar();
habSuite.liberar();

console.log("Número:", habSuite.numero);
console.log("Tipo:", habSuite.tipo);
