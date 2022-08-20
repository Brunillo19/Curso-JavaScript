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
switch (salida){
    case true:
    break;
    case false:
        entrada = false;
        break;
}
}