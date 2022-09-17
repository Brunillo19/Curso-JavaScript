/* localStorage.setItem("numero", "6");
localStorage.setItem("valor", "true");
localStorage.setItem("arreglo", [1,2,3,4,5]);
localStorage.setItem("objeto", {nombre: "camilo", edad: 56}); */
/* let nombre = localStorage.getItem("nombre");
console.log(nombre); */

// sessionStorage.setItem("edad", 50);

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);

  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
} */

/* localStorage.removeItem("nombre"); //eliminar un elemento del Storage
sessionStorage.removeItem("nombre");

localStorage.clear(); //eliminar el storage por completo
sessionStorage.clear(); */


/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */
/* let contenedor = document.getElementById("contenedor");
let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}

carrito.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;
  contenedor.append(div);
});

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  alert("carrito eliminado");
  contenedor.innerHTML = "";
  localStorage.clear();
}); */
