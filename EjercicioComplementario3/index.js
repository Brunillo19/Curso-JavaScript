let agregar = document.getElementById("agregar");
const reseteo = document.querySelector("#reseteo");
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

      agregar.onclick = function (e) {
        agrego();
      };





        function agrego() {
            let nomPa = document.getElementById("nombrePaciente").value;
            let obra = document.getElementById("obra").value;
            let trat = document.getElementById("tratamiento").value;
            let com = document.getElementById("comentario").value;
            let costo = parseFloat(document.getElementById("costo").value);
            if (obra===true) {costo=costo*0.6;}
            nuevoturno.push(new turno (nomPa,trat,com,costo));
            document.getElementById("nombrePaciente").value="";
            document.getElementById("obra").value="";
            document.getElementById("tratamiento").value="";
            document.getElementById("comentario").value="";
            document.getElementById("costo").value="";
            alert(`
                Nombre Paciente: ${nomPa}
                Tratamiento: ${trat}
                Comentario Adicional: ${com}
                Costo final: ${costo}`);

        }
        

        
        
   