const Zona = function (nombre, precio, duracion) {
        this.nombre = nombre,
        this.precio = precio,
        this.duracion = duracion
}
let zona1 = new Zona("cavado", 3000, 5)
let zona2 = new Zona("axilas", 2800, 2)
let zona3 = new Zona("piernas", 6000, 13)
let zona4 = new Zona("rostro", 5000, 10)
let zona5 = new Zona("brazos", 4000, 8)

let listaZona = [zona1, zona2, zona3, zona4, zona5]

function agregarZona() {
    let nombre = prompt("Ingresa zombre de la zona: ").trim()
    let precio = parseFloat(prompt("Ingresa el valor de la zona: "))
    let duracion = parseInt(prompt("Ingresa la duracion en minutos de la zona: "))

    if (isNaN(precio) || isNaN(duracion) || nombre === "") {
        alert("No ingresaste ningun dato.")
        return;
    }
    let zona = new Zona(nombre, precio, duracion)
    if (listaZona.some((z) => z.nombre === zona.nombre)) {
        alert("La zona ya existe, ingresa otra.")
        return;
    }

    listaZona.push(zona)
    console.table(listaZona)
}

let promociones = [];
function armaPromocion() {
    let precioTotal = 0;
    let zonasElegidas = [];
    const descuento = 0.9;

    while (true) {
        let nombreZona = prompt("Ingresa una zona a agregar o escribi 'fin' para terminar. Zonas disponibles: cavado, axilas, piernas, rostro,brazos");

        if (nombreZona.toLowerCase() === 'fin') {
            break;
        }

        if (nombreZona === "") {
            alert("No se registro ningun dato. Proba Otra vez. Zonas disponibles: cavado, axilas, piernas, rostro,brazos")
            return;
        }
        if (zonasElegidas.includes(nombreZona.toLowerCase())) {
            alert("Ya agregaste esa zona, por favor, elegi otra. Zonas disponibles: cavado, axilas, piernas, rostro,brazos")
            continue;
        }
        let zonaEncontrada = null;

        for (let i = 0; i < listaZona.length; i++) {

            if (listaZona[i].nombre.toLowerCase() === nombreZona.toLowerCase()) {

                zonaEncontrada = listaZona[i];
            }
        }
        if (zonaEncontrada) {
            precioTotal += zonaEncontrada.precio;
            precioTotal *= descuento;
            zonasElegidas += zonaEncontrada.nombre + '+';
        } else {
            alert("Zona no encontrada. Zonas disponibles: cavado, axilas, piernas, rostro,brazos ");
        }
    }
    const promocionActual = {
        zonas: zonasElegidas,
        precioTotal: precioTotal
    };

    promociones.push(promocionActual);

    console.log("Elegiste la promocion que incluye:", promocionActual, "que tiene", Math.round((1.0 - (descuento)) * 100), "% de descuento");
}

console.table(listaZona)
armaPromocion();
