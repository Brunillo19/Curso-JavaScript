let agregar = document.getElementById("agregar");
const reseteo = document.querySelector("#reseteo");
let contenido = document.getElementById("contenido");
let nuevoturno=[];

    class turno {
        constructor(nomPa, obra, trat, com, costo) {
          this.nomPa = nomPa;
          this.obra = obra;
          this.trat = trat;
          this.com = com;
          this.costo = costo;
        }
      }
    generar.onclick = function (e){
        genero();
      } 
      agregar.onclick = function (e) {
        agrego();
      };
      
      function genero() {

      }
      
      
      
      function agrego() {
        let nomPa = document.getElementById("nombrePaciente").value;
        let obra = document.getElementById("obra").value;
        let trat = document.getElementById("tratamiento").value;
        let com = document.getElementById("comentario").value;
        let costo = parseFloat(document.getElementById("costo").value);
        if (obra==="true") {costo=costo*0.6;}
        nuevoturno.push(new turno (nomPa,trat,com,costo));
        document.getElementById("nombrePaciente").value="";
        document.getElementById("obra").value="1";
        document.getElementById("tratamiento").value="";
        document.getElementById("comentario").value="";
        document.getElementById("costo").value="";
        console.log(costo);
        
        for (const turnos of nuevoturno) {
          const div = document.createElement("div");
          div.className="turnos";
          div.innerHTML=`<p>Nombre Paciente: ${nomPa}</p>
          <p>Tratamiento: ${trat}</p>
          <p>Comentario Adicional: ${com}</p>
          <p>Costo final: ${costo}</p>
          <button>Eliminar Turno</button>`;
          contenido.append(div);
          e.preventDefault();
          }
      }
      
      
      
      
        
        