let genero = document.getElementById("generar");

let contenido = document.getElementById("contenido");
let muestro = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar");
let limpiar = document.getElementById("limpiar");

let nuevoturno = [] && JSON.parse(localStorage.getItem("turnos"));

class turno {
  constructor(nomPa, hora, comentario, tratamiento, obra, costo, dia, id) {
    this.nomPa = nomPa;
    this.hora = hora;
    this.comentario = comentario;
    this.tratamiento = tratamiento;
    this.obra = obra;
    this.costo = costo;
    this.dia = dia;
    this.id = id;
  }
}

function generar() {
  let nomPa = document.getElementById("nombrePaciente").value;
  let hora = document.getElementById("hora").value;
  let comentario = document.getElementById("comentario").value;
  let tratamiento = document.getElementById("tratamiento").value;
  let obra = document.getElementById("obra").checked;
  let costo = parseFloat(document.getElementById("costo").value);
  let dia = document.getElementById("dia").value;
  costo=obra ? (costo = costo * 0.6) : (costo = costo);
  localStorage.getItem("turnos", JSON.stringify(nuevoturno));
  nuevoturno.push(
    new turno(nomPa, hora, comentario, tratamiento, obra, costo, dia)
  );
  document.getElementById("nombrePaciente").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("comentario").value = "";
  document.getElementById("tratamiento").value = "";
  document.getElementById("obra").checked=false;
  document.getElementById("costo").value = "";
  document.getElementById("dia").value = "";
  /* console.log(nuevoturno); */
}


function creoturno() {
  let div = document.createElement("div");
  let button = document.createElement("input");
/* Formato TURNOS */
   div.className = "turnos";
  nuevoturno.forEach((item,idx) => {
    div.innerHTML = `
          <div class="card-body text-bg-secondary">
          <h6 class="card-subtitle mb-2 ">Horario del turno: ${item.hora}</h6>
          <p>Nombre Paciente: ${item.nomPa}</p>
          <p>Comentario Adicional: ${item.comentario}</p>
          <p>Tratamiento: ${item.tratamiento}</p>
          <p>Costo final: ${item.costo}</p>
          <p>Día del turno: ${item.dia}</p>
          <button class="eliminar btn btn-light text-bg-secondary" id="${idx}"> Eliminar Turno </button>
          </div>
          `;
  }); 

  localStorage.setItem("turnos", JSON.stringify(nuevoturno));
   button.type = "button";
  button.id = "eliminar";
  button.value = "Eliminar Turno";
  button.className = "eliminar btn btn-light text-bg-secondary"; 

  button.addEventListener("click", (idx) => {
    Swal.fire({
      title: "Está seguro de eliminar el turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, seguro",
      cancelButtonText: "No, no quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          icon: "success",
          text: "El turno ha sido eliminado",
        });
        nuevoturno.splice(idx);
        contenido.removeChild(div);
      }
    });
  });

   div.appendChild(button); 
  contenido.append(div);
}
function elimino() {}
limpiar && limpiar.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el turno?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, seguro",
          cancelButtonText: "No, no quiero",
        }).then((result) => {
          if (result.isConfirmed) {
            //logica para eleminar del carrito
            nuevoturno.splice(0);
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El turno ha sido eliminado",
            });
          }
        });
      });

genero && genero.addEventListener("click", (e) => {
  e.preventDefault();
  /* console.log(e.target); */
  generar();
  creoturno();
  //  setTimeout(() => {
  //    location.href="./index.html";
  //  }, 8000);
  // /* Hago función que recolecte los datos y en otra función genero la card */

  Swal.fire({
    position: "center",
    icon: "success",
    title: "El turno se ha generado exitosamente!",
    showConfirmButton: false,
    timer: 3000,
  });
});



eliminar && eliminar.addEventListener("click", e => {
  const id = e.target.id;
  console.log(e.target.id);
})
/* Genero una varible para mostrar los turnos en la página inicial */
let armado = async ()=> {
  let div = document.createElement("div");
  let button = document.createElement("input");
  let turnosGenerados = document.getElementById("turnosGenerados");
let base = JSON.parse(localStorage.getItem("turnos"));
base.forEach((item,idx) => {
  div.innerHTML = `
        <div class="card-body text-bg-secondary">
        <h6 class="card-subtitle mb-2 ">Horario del turno: ${item.hora}</h6>
        <p>Nombre Paciente: ${item.nomPa}</p>
        <p>Comentario Adicional: ${item.comentario}</p>
        <p>Tratamiento: ${item.tratamiento}</p>
        <p>Costo final: ${item.costo}</p>
        <p>Día del turno: ${item.dia}</p>
        <button class="eliminar btn btn-light text-bg-secondary" id="${idx}"> Eliminar Turno </button>
        </div>
        `;
        button.type = "button";
  button.id = "eliminar";
  button.value = "Eliminar Turno";
  button.className = "eliminar btn btn-light text-bg-secondary"; 

  button.addEventListener("click", (idx) => {
    Swal.fire({
      title: "Está seguro de eliminar el turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, seguro",
      cancelButtonText: "No, no quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          icon: "success",
          text: "El turno ha sido eliminado",
        });
        nuevoturno.splice(0);
        contenido.removeChild(div);
      }
    });
  });

   div.appendChild(button); 
  turnosGenerados.append(div);
console.log(base);
});}
armado();