for (let i = 1; i <= 10; i++) {
    console.log("Iteración número: " + i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma = suma + i;
}

console.log("Multiplicacion: ");
let multiplicacion = 4;
for (let i = 1; i <= 10; i++) {
    console.log(multiplicacion + " x " + i + " = " + (multiplicacion * i));
}

console.log("sumatoria indices: ", suma);
let nombre = "francisco";
for (let i = 0; i <=nombre.length; i++){
    console.log(nombre[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("cuadrado", i, "es", i**2);    
}

console.log("Bucle While");
let i=1
while (i <= 6) {
    console.log("Indice", i);
    i++;
}

let miArreglo = [-2,3,1,2,3];
let indice = 1;
while (indice < miArreglo.length) {
    console.log("Valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero=1
while (numero <= 10) {
    if (numero % 2 === 0) {
        console.log("numero", numero, "es par");
        numero++;
    }
}

let x = 5
do {
    console.log("x es: ", x);
    x--;
}while (x != 0);

let a = 1;
while (a <= 10){
    console.log( "5 x " + a + " = " + (a*5));
    a++;
}

let miArreglo2 = [-2,3,1,2,3];
let indice2= 0;
let mayor=0
while (indice2 < miArregl2o.length) {
    if (miArreglo2[indice2] > mayor) {
        mayor = miArreglo2[indice2];
    }
    indice2++;
}
console.log(mayor);

