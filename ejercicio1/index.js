let numero = prompt ("Ingrese un numero");
if (numero <1000){
    alert("Su número es menor a 1000");
}else if(numero == 1000) {
    alert("Su número es 1000");
}else {
    alert("Su número es mayor a 1000");
}
let mensaje = prompt("Adivine la palabra").toLowerCase();
if (mensaje === "hola") {
    alert("Felicitaciones, ha adivinado la palabra");
}else {
    alert("Palabra erronea. Siga intentando");
}

let intervalo = prompt("Ingrese un numero del 1 al 100");
if (intervalo >=10 && intervalo<=50) {
    alert("Su número está entre 10 y 50");
}else if (intervalo < 10) {
    alert("Su número es menor a 10");
}else {
    alert ("Su número es mayor a 50");
}


/* comentario de linea */
/* Comentario de bloque */
/* Declaracion de variable
let nombre;

Definición de variable
nombre = "andres";


let edad = 5; */
/* Cuando aplicamos const, el valor quedará fijo, mientras que con let no habrá problema */
/* Todas las variables es conveniente declarar en minúscula */
/* Declarar utilizando camelCase */
/* let EDAD = 5;

let numeroUnoBonito
 */

/* let numeroUno = 3;

let numeroDos = 7;

let suma = numeroUno + numeroDos;
console.log(suma); */
/* let saludo = "Hola";
let nombre = "Gonza";
let mensaje = saludo + " " + nombre;
/* En string el + funciona como concatenación */
/*console.log("===================================", mensaje); */

/* let edad = 10;
let nombre = "andres";
console.log("Bienvenido señor " + nombre + " tienes " + edad + " años"); */
/* let nombre = prompt("Ingrese el nombre");
console.log("Hola " + nombre); */

/* Typeof nos muestra el tipo de variable que usamos */
/* let nombre = "andres";
let edad = 8;
console.log(typeof(nombre, edad)); */

/* let nombre = prompt ("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

let mensaje = "Bienvenid@ " + nombre + " tienes " + edad + " años";
alert(mensaje); */

/* let entrada = prompt("Ingresar una letra");
let salida = entrada + " " + "Ingresada";
alert(salida); */