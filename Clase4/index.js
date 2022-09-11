/* const array1 = [];
const numeros = [2, 3, 1, 5, 6, 7, 56, 7];
const nombres = ["andres", "camila", "mariano", "andrea"];
const valores = [true, false, false, true];
const varios = [1, true, "casa"]; */

/* console.log(nombres[3]);
console.log(numeros[3] + numeros[0]); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
for(let index = 0; index < nombres.length; index++){
  alert(nombres[index]);
} */

/* const nombres = ["andres", "camila"];
nombres.push("mariano"); //agrega elementos al final del arreglo
nombres.unshift("lucas"); //agrega elementos al principio del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.pop(); //para sacar elementos del final
nombres.shift(); //para sacar elementos del principio
console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.splice(2, 2); // para eleminar elemntos del arreglo (desde donde, cuantos elementos)
console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
console.log(nombres.join("++++++")); une en un unico string los elementos del arreglo separados por lo indicado
 */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const perritos = ["max", "firu", "zeus"];
const varios = perritos.concat(nombres); //concatena dos arreglos
console.log(varios); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const copia = nombres.slice(1, 4); //crea una copia de un fragmento del arreglo
console.log(copia); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.indexOf(nombre)); //busca la posicion de un elemento dentro de una arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.includes(nombre)); // valida si un elemento existe o no dentro del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.reverse();
console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.reverse();
console.log(nombres);
console.log(nombres[2]); */

/* const carrito = [];
carrito.push("televisor");
console.log(carrito); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const eliminarPersona = (nombre) => {
  let posicion = nombres.indexOf(nombre);
  if(posicion != -1){
    nombres.splice(posicion, 1);
  }
  console.log(nombres);
}
eliminarPersona("mariano"); */

//ARRAYS DE OBJETOS
/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
for(const item of productos){
  console.log(item.nombre);
  console.log(item.precio);
} */

/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  console.log(element);
} */
/* class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
let producto1 = new Producto(1, "camisa", 1000);
const productos = [
  new Producto(2, "pantalon", 1500),
  new Producto(3, "zapato", 700),
];
productos.push(producto1);
console.log(productos); */

/* class Persona{
  constructor(nombre){
    this.nombre = nombre;
  }
  hablar(){
    console.log("hola soy " + this.nombre);
  }
}
let persona = {
  nombre: "andres",
}
console.log(persona);
let persona1 = new Persona("andres")
console.log(persona1); */

//BLOQUE 2
/* function mayorQue(n){
  return m => m > n;
}
let mayorQueCinco = mayorQue(5); //m => m > 5;
let mayorQueDiez = mayorQue(10); //m => m > 10;
console.log(mayorQueDiez(9)); */

/* function operaciones(op){
  if(op === "sumar"){
    return (x, y) => x + y;
  }
  if(op === "restar"){
    return (x, y) => x - y;
  }
  if(op === "dividir"){
    return (x, y) => x / y;
  }
  if(op === "multiplicar"){
    return (x, y) => x * y;
  }
}
let suma = operaciones("sumar");
let resta = operaciones("restar");
console.log(suma(5,6)); */

/* function recorrer(array, funcion){
  for(const item of array){
    funcion(item);
  }
}
recorrer([2,3,4,5], console.log); */

//METODOS DE BUSQUEDA Y TRANSFORMACION
/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
//forEach recorre el arreglo como un for of o como un for tradicional
productos.forEach(item => console.log(item.precio)); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
//find encuentra el primer elemento del arreglo que cumpla la condicion
let nombre = prompt("ingrese el nombre del producto a buscar");
let producto = productos.find(item => item.nombre === nombre);
let mensaje = `
Id: ${producto.id}
Nombre: ${producto.nombre}
Precio: $${producto.precio}
`;
alert(mensaje); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
//filter filtra bajo al condicion indicada
let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = productos.filter(item => item.precio > precio);
filtrados.forEach(item => {
  let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
  `;
  alert(mensaje);
}) */

//some verifica si al menos uno de los productos cumple al condicion indicada
/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
console.log(productos.some(item => item.precio === 700)); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
]; */

//map crea un arreglo nuevo con la transformacion del arreglo original
/* let nombres = productos.map(item => item.nombre);
console.log(nombres); */
/* let nuevosProductos = productos.map(item => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio + item.precio * 0.21
  }
})
console.log(nuevosProductos); */

//reduce reduce un arreglo a un único valor
/* let numeros = [1, 2, 4, 3, 3, 7];
let total = numeros.reduce((acumulador, item) => acumulador + item, 0);
console.log(total); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];
let total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total); */

/* const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ] */

/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]
console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
  
    return 0;
  })
); */

//OBJETO MATH
/* console.log(Math.E);
console.log(Math.PI); */
/* console.log(Math.max(1,2,4,33434,56,7,5));
console.log(Math.min(1,2,4,33434,56,7,5)); */
/* console.log(Math.ceil(3.14));
console.log(Math.floor(3.14));
console.log(Math.round(3.14));
console.log(Math.round(3.51)); */

/* console.log(Math.sqrt(9)); */
// console.log(Math.random() * 10);

//DATE
// console.log(Date());
// console.log(new Date(2022, 1, 15, 23, 45, 4));
// console.log(new Date("September 3, 2022"));
/* let fecha = new Date("September 3, 2022"); */
/* console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDay()); */

/* console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString()); */

/* const hoy = new Date("September 3, 2022");
const navidad = new Date("December 25, 2022");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia); */