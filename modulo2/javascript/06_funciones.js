console.log("Funciones");
console.log("Forma clasica");
function saludar(){
    console.log("hola desde una funcion clasica");
}
saludar();
saludar();


console.log("forma con pararametro remoto");
function sumar(a, b){
    return a + b;
}
let resultado = sumar(4, 9);
console.log("el resultado de la suma es: " + resultado);

console.log ("funciones flecha");
const resta = (a,b)=>{
    return a-b
}
let resultadoResta = resta(9,5)
console.log ("la resta es", resultado)

console.log("funcion retorno directo");
const cuadrado = x => x * x;
console.log("cuadrado de 5: ", cuadrado(5));

console.log ("funcion con parametros por defecto");
function saludar(nombre, saludo="hola"){
    return saludo + ", " + nombre;
}
let saludo1 = saludar ("Francisco");
let saludo2 = saludar ("Fracisco", "Buenos dias");
console.log(saludo1);
console.log(saludo2);


console.log("FUNCION PAR O IMPAR");
function determinarParImpar(numero) {
    if (numero % 2 === 0) {
        return "es par";
    } else {
        return "es impar";
    }
}

let num = 7;
console.log(`El número ${num} ${determinarParImpar(num)}`);

console.log("funcion area de un triangulo");
function area(base, altura) {
    return (base * altura) / 2;
}
let base = 5;
let altura = 8;
console.log(`el area del triangulo con base ${base} y altura ${altura} es: ${area(base, altura)}`);

