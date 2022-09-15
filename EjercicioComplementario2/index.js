
    alert("Bienvenido al sistema de turnos temporales STT");
    let num = prompt("Ingrese el número de turnos que desea agendar");
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
    
        if(num>0){
              for (i = 1; i <= num ; i++) {
        
        let nomPa = prompt(`Ingrese el nombre del paciente número ${(i)}`).toLowerCase();
        let obra = confirm("Posee obra social?");
        let trat = prompt("Indique tratamiento o cirugía a realizar");
        let com = prompt("Agregue algún comentario adicional");
        let costo = parseFloat(prompt("Ingrese el costo del tratamiento y/o cirugía"));
        if (obra==true) {costo=costo*0.6;}
         nuevoturno.push(nomPa, trat, com, costo);
          alert(`El turno N°: ${i} es:
                Nombre Paciente: ${nomPa}
                Tratamiento: ${trat}
                Comentario Adicional: ${com}
                Costo final: ${costo}`);}

              }
              let busq=prompt("Desea buscar el nombre de algún paciente?").toLowerCase();

              let producto = nuevoturno.some(item => item.nomPa === busq);
                let mensaje = `
                El turno N°: ${producto.i} es:
                Nombre Paciente: ${producto.nomPa}
                Tratamiento: ${producto.trat}
                Comentario Adicional: ${producto.com}
                Costo final: ${producto.costo}`
                ;
                alert(mensaje); 
        