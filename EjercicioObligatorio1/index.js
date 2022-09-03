let moneda = prompt("Que tipo de divisa desea hacer una conversión? (USD, EUR, PEN, COP, CLP) Escriba ESC si desea cancelar").toUpperCase();

switch(moneda){
    case 'EUR':
          cambio = prompt("Como desea hacer la conversión? Escriba: A: AR$ a EUR | B: EUR a AR$").toUpperCase();
        switch(cambio){
            case 'A':
                 let valor=parseFloat(prompt("Ingrese el monto de AR$"));
                    div (valor,138.8,moneda);
                break;
            case 'B':
                 valor=parseFloat(prompt("Ingrese el monto de EUR"));
                mult (valor,138.8);
                break;
        }
        break;
    case 'USD':
          cambio = prompt ("Como desea hacer la conversión? Escriba: A: AR$ a U$D | B: U$D a AR$").toUpperCase();
        switch(cambio){
            case 'A':
                 valor=parseFloat(prompt("Ingrese el monto de AR$"));
                  div (valor,138.15,moneda);
                break;
            case 'B':
                 valor=parseFloat(prompt("Ingrese el monto de U$D"));
                mult (valor,138.15);
                break;
        }
        break;
    case 'PEN':
         cambio = prompt ("Como desea hacer la conversión? Escriba: A: AR$ a PEN | B: PEN a AR$").toUpperCase();
        switch(cambio){
            case 'A':
                 valor=parseFloat(prompt("Ingrese el monto de AR$"));
                 div (valor,35.63,moneda);
                break;
            case 'B':
                 valor=parseFloat(prompt("Ingrese el monto de PEN"));
                mult(valor,35.63);
                break;
        }
        break;
    case 'COP':
         cambio = prompt ("Como desea hacer la conversión? Escriba: A: AR$ a COP | B: COP a AR$").toUpperCase();
        switch(cambio){
            case 'A':
                 valor=parseFloat(prompt("Ingrese el monto de AR$"));
                div (valor,0.031,moneda);
                break;
            case 'B':
                 valor=parseFloat(prompt("Ingrese el monto de COP"));
                mult (valor,0.031);
                break;
        }
        break;
    case 'CLP':
         cambio = prompt ("Como desea hacer la conversión? Escriba: A: AR$ a CLP | B: CLP a AR$").toUpperCase();
        switch(cambio){
            case 'A':
                 valor=parseFloat(prompt("Ingrese el monto de AR$"));
                div (valor,0.156,moneda);
                break;
            case 'B':
                 valor=parseFloat(prompt("Ingrese el monto de CLP"));
                mult (valor,0.156);
                break;
        }
        break;
        case 'ESC':
            break;
}
function div (valormoneda,valorpeso,moneda) {
    let resultado = valormoneda/valorpeso;
    alert("El monto de " + moneda +  " es de " + resultado);
}
function mult (valormoneda,valorpeso) {
    let resultado = valormoneda*valorpeso;
    alert("El monto de AR$ es de " + resultado);
}