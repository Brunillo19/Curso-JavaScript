const turnos = [
    { id: 1, nombre:"Raúl García", horario:"12:30", tipo:" Rinoscopía", quiro:1},
    {id: 2,nombre:"Martín Gonzalez",horario:"14:30",tipo:"Operación por Apendicitis",quiro:2},
    {id: 3,nombre:"Rodolfo Weinert",horario:"18:30",tipo:"Biopsia",quiro:3},
    {id: 4,nombre:"Mariela Schmidt", horario: "21:00",tipo:"Cirugía por Rotura de ligamentos",quiro:4},
];

let busq=prompt("Que dato desea buscar? (nombre,horario,tipo").toLowerCase();
switch(busq){
    case "nombre":
        let nombre =prompt("Que paciente busca?");
        let ciru=turnos.find(item => item.nombre === nombre);
        let mensaje= `Al paciente ${nombre} se le realizará una ${ciru.tipo} a las ${ciru.horario} en el quirófano ${ciru.quiro}`;
        alert(mensaje);
    }
