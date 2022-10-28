let genero = document.getElementById("generar");
let contenido = document.getElementById("contenido");
let muestro = document.getElementById("mostrar");
let eliminar = document.getElementById("eliminar"); 
let limpiar = document.getElementById("limpiar");
let turnos = document.getElementById("turnos");
let nuevoturno=[] && JSON.parse(localStorage.getItem("turnos"));
const muestreo = async () => {
turnos.append(JSON.stringify(nuevoturno));}
muestreo();
console.log(nuevoturno);



let contenedorHora = document.getElementById("contenedorHora");
const tiempo = async () => {
  let response = await axios("http://worldtimeapi.org/api/timezone/America/Argentina/Mendoza");
  let hora = response.data.datetime;
  const div = document.createElement("div");
  div.innerHTML = `<p>Hora: ${hora}</p>`;
  console.log(hora);
  contenedorHora.appendChild(div);
}
tiempo();
    class turno {
        constructor(nomPa, hora, comentario, tratamiento, obra, costo, dia,id) {
          this.nomPa = nomPa;
          this.hora = hora;
          this.comentario = comentario;
          this.tratamiento = tratamiento;
          this.obra = obra;
          this.costo = costo;
          this.dia = dia;
          this.id = id;
        }
      };
      function agrego() {
        location.href= `./turnos.html`;
      };
      function generar() {
        let nomPa = document.getElementById("nombrePaciente").value;
        let hora = document.getElementById("hora").value;
        let comentario = document.getElementById("comentario").value;
        let tratamiento = document.getElementById("tratamiento").value;
        let obra = document.getElementById("obra").checked;
        let costo = parseFloat(document.getElementById("costo").value);
        let dia = document.getElementById("dia").value;
        obra? costo=costo*0.6:costo=costo;
        nomPa==""||hora==""||tratamiento==""||costo==""||dia==""?prompt("Ingrese todos los datos solicitados"):
        localStorage.getItem('turnos',JSON.stringify(nuevoturno));
        nuevoturno.push(new turno (nomPa,hora,comentario,tratamiento,obra,costo,dia));
        document.getElementById("nombrePaciente").value="";
        document.getElementById("hora").value="";
        document.getElementById("comentario").value="";
        document.getElementById("tratamiento").value="";
        document.getElementById("obra").unchecked;
        document.getElementById("costo").value="";
        document.getElementById("dia").value="yyyy-MM-dd";
        console.log(nuevoturno);
      }
      function mostrar(){
        let turnos =document.getElementById("turnos");
        let prueba= JSON.parse(localStorage.getItem("turnos"));
        nuevoturno.forEach(item => {
          let div= document.createElement;        
          div.innertHTML = `${item.nomPa}`
        });
        div.innerHTML= JSON.stringify(nuevoturno);
        turnos.append(div.innerHTML);
      }
      
      
      function creoturno (){
        let div = document.createElement("div");
        let button = document.createElement("input");
        
        div.className="turnos";
        nuevoturno.forEach(item => {
          div.innerHTML+=`
          <div class="card-body text-bg-secondary">
          <h6 class="card-subtitle mb-2 ">Horario del turno: ${item.hora}</h6>
          <p>Nombre Paciente: ${item.nomPa}</p>
          <p>Comentario Adicional: ${item.comentario}</p>
          <p>Tratamiento: ${item.tratamiento}</p>
          <p>Costo final: ${item.costo}</p>
          <p>Día del turno: ${item.dia}</p>
          </div>
          `;      
          div.append(button);
        });
        contenido.append(div);
        
        localStorage.setItem('turnos',JSON.stringify(nuevoturno));
        button.type = 'button';
        button.id = 'eliminar';
        button.value = 'Eliminar Turno';
        button.className = 'eliminar btn btn-light text-bg-secondary';
        
        button.addEventListener("click", () => {
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
              let i = nuevoturno.findIndex(item => item )
              nuevoturno.splice(0);
              contenido.removeChild(div);
              
            }
          });
        });
        
        
}
function elimino(){
  let div = document.getElementById("turnos");
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
            turnos.removeChild(div);
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El turno ha sido eliminado",
            });
          }
        });
}
/* limpiar.addEventListener("click", (e) => {
      elimino();

      }); 
      
       muestro.addEventListener("click", (e) => {
        e.preventDefault();
        mostrar();
      })        */
      genero.addEventListener("click", (e) => {
        e.preventDefault();
        generar();       
        creoturno();
        setTimeout(() => {
          location.href="./index.html";
        }, 8000);  
        /* Hago función que recolecte los datos y en otra función genero la card  */
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El turno se ha generado exitosamente!",
          showConfirmButton: false,
          timer: 3000,
        });
      }); 