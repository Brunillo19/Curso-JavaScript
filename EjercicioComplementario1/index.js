let entrada=true
while (entrada) {
let numeroUno = parseFloat(prompt("Ingrese un numero"));
if (isNaN(numeroUno) || numeroUno=="") {
    alert("Ingrese un numero");
    let numeroUno = parseFloat(prompt("Ingrese un numero"));
}
let numeroDos = parseFloat(prompt("Ingrese otro numero"));
if (isNaN(numeroDos) || numeroDos=="") {
    alert("Ingrese un numero");
    let numeroDos = parseFloat(prompt("Ingrese un numero"));
}

let Potencia = confirm("Querés saber la potencia?");
if (Potencia === true) {

let mensaje1 = parseFloat(numeroUno) ** parseFloat(numeroDos);
alert(mensaje1);}
let Suma = confirm("Querés saber la suma?");
if (Suma === true) {
let mensaje2 = parseFloat(numeroUno) + parseFloat(numeroDos);
alert(mensaje2);}
let Resta = confirm("Querés saber la resta?");
if (Resta === true) {
    let mensaje3 = parseFloat(numeroUno) - parseFloat(numeroDos);
    alert(mensaje3);}




let numero = prompt("Ingrese el número que quiere saber la tabla");
if (numero === "ESC"){alert("Ingrese un número");
let numero = prompt("Ingrese el número que quiere saber la tabla");}
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