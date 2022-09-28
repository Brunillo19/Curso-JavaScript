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
        location.href= `http://127.0.0.1:5500/EjercicioComplementario3/turnos.html`;
      };
      function generar() {
        let nomPa = document.getElementById("nombrePaciente").value;
        let hora = document.getElementById("hora").value;
        let comentario = document.getElementById("comentario").value;
        let tratamiento = document.getElementById("tratamiento").value;
        let obra = document.getElementById("obra").checked;
        let costo = parseFloat(document.getElementById("costo").value);
        obra? costo=costo*0.6:costo=costo;
        nuevoturno.push(new turno (nomPa,hora,comentario,tratamiento,costo));
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
        div.className="turnos";
        nuevoturno.forEach(turno => {
          div.innerHTML=`<p>Nombre Paciente: ${turno.nomPa}</p>
          <p>Horario del turno: ${turno.hora}</p>
          <p>Comentario Adicional: ${turno.comentario}</p>
          <p>Tratamiento: ${turno.tratamiento}</p>
          <p>Costo final: ${turno.costo}</p>
          <button id="eliminar" class="eliminar">Eliminar Turno</button>`;
        });
          contenido.append(div);
}
        genero.addEventListener("click", (e) => {
           e.preventDefault();
           generar();       
           creoturno();
  /* Hago función que recolecte los datos y en otra función genero la card */
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El turno se ha generado exitosamente!",
          showConfirmButton: false,
          timer: 5000,
        });
      });
      function elimino(){

      }
      let eliminar = document.getElementById("eliminar"); 
      /* eliminar.addEventListener("click", () => {
        Swal.fire({
          title: "Está seguro de eliminar el turno?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, seguro",
          cancelButtonText: "No, no quiero",
        }).then((result) => {
          if (result.isConfirmed) {
            //logica para eleminar del carrito
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El turno ha sido eliminado",
            });
          }
        });
      }); */
      /* function nuevo() {
        for (turnos of nuevoturno){
          div.className="turnos";
          div.innerHTML=`<p>Nombre Paciente: ${nomPa}</p>
          <p>Tratamiento: ${trat}</p>
          <p>Comentario Adicional: ${com}</p>
          <p>Horario del turno: ${hora}</p>
          <p>Costo final: ${costo}</p>
          <button>Eliminar Turno</button>`;
          contenido.append(div);
          
        }
        function muestro() {
          for (let item of nuevoturno){
            rojo += `${nomPa}`;
          }
          turnos.innerHTML=rojo;
        }
      } */
      /* generar.onclick = function (){
        genero();
      } ; 
      */
     
     /* for (let turnos of nuevoturno) {
       
       e.preventDefault();
     } */
     /*  generar.addEventListener("click", () => {
        Swal.fire({
          title: "Está seguro de eliminar el producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, seguro",
          cancelButtonText: "No, no quiero",
        }).then((result) => {
          if (result.isConfirmed) {
            //logica para eleminar del carrito
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El producto ha sido borrado",
            });
          }
        });
      }); */
      
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
            Swal.fire({
              title: "Borrado!",
              icon: "success",
              text: "El turno ha sido eliminado",
            });
          }
        });
      }); */
      
      /* for */