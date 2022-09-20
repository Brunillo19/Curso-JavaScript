let agregar = document.getElementById("agregar");
const reseteo = document.querySelector("#limpiar");
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
      limpiar.onclick = function (e){
        limpio();
      }
      function genero() {



        let div = document.getElementById("formulario");
        let form = document.createElement("form");
        form.className="contenedor";
        form.innerHTML=`<div>
        
        <p> Nombre del paciente</p> <input type="text" name="nombrePaciente" id="nombrePaciente"> 
        </div>
        <div>
        
        <p> Tratamiento a Realizar</p> <input type="text" name="tratamiento" id="tratamiento">    
        </div>
        <div>
        <p> Posee obra social? </p><input type="checkbox" name="obra" id="obra">
        </div>
        <div>
        
        <textarea name="comentario" id="comentario" cols="30" rows="10" placeholder="Comentario Adicional"></textarea>    
        </div>
        <div>
        
        <p> Costo del tratamiento </p><input type="number" name="costo" id="costo">    
        </div>
        <button onclick="agregar()" id="agregar" type="button" class="agregar">Generar Nuevo Turno</button>        `;
        formulario.append(form);
        e.preventDefault();
        div.innerHTML=" ";
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
      function limpio() {
        const div = document.getElementById("formulario");
        div.innerHTML= " ";
        formulario.append(div);
        e.preventDefault();
      }
      
      
      
      
        
        