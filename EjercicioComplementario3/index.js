    class turno {
        constructor(nomPa, obra, trat, com, costo) {
          this.nomPa = nomPa;
          this.obra = obra;
          this.trat = trat;
          this.com = com;
          this.costo = costo;
        }
      }
    let nuevoturno=[];
        let nomPa = document.getElementsByClassName("nombrePaciente");
        let obra = document.getElementsByClassName("obra");
        let trat = document.getElementsByClassName("tratamiento");
        let com = document.getElementsByClassName("comentario");
        let costo = parseFloat(document.getElementsByClassName("costo"));
        if (obra==true) {costo=costo*0.6;}
         newTurno = new turno (
          nomPa,
          obra,
          trat,
          com,
          costo
          );
        function generarturno ();
        nuevoturno.push(newTurno);
/*         alert(`El turno N°: ${i} es:
                Nombre Paciente: ${nomPa}
                Tratamiento: ${trat}
                Comentario Adicional: ${com}
                Costo final: ${costo}`); */
        
        
                let div = document.createElement("div"); //creacion del elemento
                div.innerHTML = `<p>Nombre Paciente: ${nuevoturno.nomPa}
                                Tratamiento: ${nuevoturno.trat}
                                Comentario Adicional: ${nuevoturno.com}
                                Costo final: ${nuevoturno.costo}</p>`;
                                document.body.append(div);
        
      let busq=prompt("Desea buscar el nombre de algún paciente?").toLowerCase();              
        
         
        let producto = nuevoturno.find((item) => item.nomPa === busq);
        
                function local (producto) {
                  let numTurno = nuevoturno.findIndex((item) => item.nomPa === busq);
                let mensaje = `
                El turno N°: ${numTurno + 1} es:
                Nombre Paciente: ${producto.nomPa}
                Tratamiento: ${producto.trat}
                Comentario Adicional: ${producto.com}
                Costo final: ${producto.costo}`;
                alert(mensaje); 
        }
        local(producto);