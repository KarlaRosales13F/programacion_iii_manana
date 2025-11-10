let habitaciones = [
    {num: 101, tipo: "Individual", disponible: true},
    {num: 102, tipo: "Doble", disponible: false},
    {num: 201, tipo: "Suite", disponible: true},
    {num: 202, tipo: "Doble", disponible: true},
];

console.log("Lista inicial de habitaciones:", habitaciones);

console.log("Primera habitación:", habitaciones[0]);
habitaciones[0].disponible = false; 
console.log("Después de reservar 101:", habitaciones[0]);


habitaciones.push({num: 301, tipo: "Suite", disponible: true});
console.log("Agregada habitación 301:", habitaciones);


habitaciones.unshift({num: 99, tipo: "Penthouse", disponible: false});
console.log("Después de unshift:", habitaciones);

habitaciones.pop();
console.log("Después de pop:", habitaciones);

habitaciones.shift();
console.log("Después de shift:", habitaciones);


let i = 0;
console.log("Iteración con while - habitaciones disponibles:");
while (i < habitaciones.length) {
    if (habitaciones[i].disponible) {
        console.log("Habitación disponible:", habitaciones[i].num, "-", habitaciones[i].tipo);
    }
    i++;
}

console.log("Iteración con for:");
for (let j = 0; j < habitaciones.length; j++) {
    console.log(habitaciones[j].num, habitaciones[j].tipo, "Disponible:", habitaciones[j].disponible);
}


console.log("Iteración con for...of:");
for (let hab of habitaciones) {
    console.log(hab.num, hab.tipo);
}


habitaciones.forEach(function(hab, idx) {
    console.log("Índice", idx, "Habitación", hab.num);
});
