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
let entrada=true
while (entrada) {
let numeroUno = prompt("Ingrese un numero");
let numeroDos = prompt("Ingrese otro numero");
let Potencia = confirm("Querés saber la potencia?");
if (Potencia === true) {

let mensaje1 = parseInt(numeroUno) ** parseInt(numeroDos);
alert(mensaje1);}
let Suma = confirm("Querés saber la suma?");
if (Suma === true) {
let mensaje2 = parseInt(numeroUno) + parseInt(numeroDos);
alert(mensaje2);}
let Resta = confirm("Querés saber la resta?");
if (Resta === true) {
    let mensaje3 = parseInt(numeroUno) - parseInt(numeroDos);
    alert(mensaje3);}




let numero = prompt("Ingrese el número que quiere saber la tabla");
for(let i = 0; i <= 10; i++){
    let multiplicacion = numero * i;
    let mensaje = `${numero} * ${i} = ${multiplicacion}`;
  
    alert(mensaje);
  }
  
let salida = confirm("Quiere repetir?");
if (salida === flase) {
    break;}
}