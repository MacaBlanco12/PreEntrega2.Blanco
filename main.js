/* 
co: condicional si o no para ejecturar el bucle
z:zona que ingresa el cliente
zonas: devuelve un string con las zonas elegidas por el cliente */

let co= ("");
let z= "";
let zonas=[];
let comienzo =  confirm ("Queres armar tu sesion?")
if (comienzo === true){
    do {
        z = prompt("Por favor, elegi las zonas que quieras realizarte: axilas, piernas, rostro, brazos");
        co = prompt ("Queres elegir otra zona?");
        zonas.push(z) ;
    }while (co === "si");
    alert("Elegiste las zonas" + " " + zonas)
}


/*funcion que devuelve el precio de cada zona 
let zona = prompt("Ingresa la zona que quieras saber el precio");*/
function precio(zona) {
    let axilas = 2800;
    let rostro = 5000;
    let piernas = 6000;
    let bozo = 3000;
    let resultado = 0;
    let z =zona;
    switch (z) {
        case "axilas":
            resultado = (axilas)
            alert(axilas)
            break;
        case "rostro":
            resultado = (rostro)
            alert (rostro)
            break;
        case "piernas":
            resultado = (piernas)
            alert(piernas)
            break;
        case "bozo":
            resultado = (bozo)
            alert (bozo)
            break;
        default:
            alert("La zona ingresada no se encuentra registrada, por favor ingresa otra")
    }
    return resultado;
}
/* devuelve el precio de cada zona utilizando la funcion
*/
let confirmacion="si";
while (confirmacion === "si") {
    let zona = prompt("Ingresa la zona que quieras saber el precio");
    switch (zona) {
        case "axilas":
            precio(zona);
            break;
        case "rostro":
            precio(zona);
            break;
        case "piernas":
            precio(zona);
            break;
        default:
            alert("Ups, hubo un error! Ingresa otra zona")
    }
    confirmacion=prompt("¿Queres saber otro precio? si / no")
}
alert("Gracias, vuelva prontos!!")




