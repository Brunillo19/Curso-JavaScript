let genero = document.getElementById("generar");
let contenido = document.getElementById("contenido");
let mostrar = document.getElementById("mostrar");

let nuevoturno=[];

    class turno {
        constructor(nomPa, hora, comentario, tratamiento, obra, costo) {
          this.nomPa = nomPa;
          this.hora = hora;
          this.comentario = comentario;
          this.tratamiento = tratamiento;
          this.obra = obra;
          this.costo = costo;
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
        obra? costo=costo*0.6:costo=costo;
        nuevoturno.push(new turno (nomPa,hora,comentario,tratamiento,obra,costo));
        document.getElementById("nombrePaciente").value="";
        document.getElementById("hora").value="";
        document.getElementById("comentario").value="";
        document.getElementById("tratamiento").value="";
        document.getElementById("obra").unchecked;
        document.getElementById("costo").value="";
        console.log(nuevoturno); 
      }
      
      

      function creoturno (){
        let div = document.createElement("div");
        let button = document.createElement("input");

        div.className="turnos";
        nuevoturno.forEach(item => {
          div.innerHTML=`<p>Nombre Paciente: ${item.nomPa}</p>
          <p>Horario del turno: ${item.hora}</p>
          <p>Comentario Adicional: ${item.comentario}</p>
          <p>Tratamiento: ${item.tratamiento}</p>
          <p>Costo final: ${item.costo}</p>`;      
        });
        localStorage.setItem("turnos",JSON.stringify(nuevoturno));
        button.type = 'button';
        button.id = 'eliminar';
        button.value = 'Eliminar Turno';
        button.className = 'eliminar';
 
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
              nuevoturno.splice(0);
              contenido.removeChild(div);
              contenido.removeChild(button);
            }
          });
        });
        

          contenido.append(div);
          contenido.appendChild(button);
}
function elimino(){
  
}
let eliminar = document.getElementById("eliminar"); 
let limpiar = document.getElementById("limpiar");
/* limpiar.addEventListener("click", () => {
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
      }); */
      
      
      genero.addEventListener("click", (e) => {
         e.preventDefault();
         generar();       
         creoturno();
      /*             setTimeout(() => {
          location.href="./index.html";
         }, 8000);  */
      /* Hago función que recolecte los datos y en otra función genero la card */
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El turno se ha generado exitosamente!",
        showConfirmButton: false,
        timer: 3000,
      });
      });