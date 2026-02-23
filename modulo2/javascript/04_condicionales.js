let temperature = 35;

if (temperature > 30) {
    console.log("Hace calor");
}

let password = "pass123";
if (password === "pass123"){
    console.log("Usuario logueado");
} else{
    console.log("Acceso denegado");
} 

let nota = 7;
if (nota >= 9){
    console.log("Sobresaliente");
} else if (nota >= 6){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tiene_licencia = true;
if (edad >= 18){
    if (tiene_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

//Estructura switch
let dia = Lunes;
switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");
}


let a = 30;
let b = 40;
let c = 50;

mayor=0;

if (a>b) {
    mayor=a;
} if (c>mayor) {
    mayor=c;
}   
console.log("El numero mayor es: ",  mayor);

