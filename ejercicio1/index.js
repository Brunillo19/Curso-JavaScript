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