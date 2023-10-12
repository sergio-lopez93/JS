
/* ----------  ESTA FUE MI PRIMERA ENTREGA
const gorras = 1800

const calcularStock = (maxStock) => {
    let cantidadDeseada = parseInt (prompt(`Ingresa la cantidad deseada, actualmente contamos con un stock de ${maxStock} unidades`))
    validarMonto(cantidadDeseada)
    while (!(cantidadDeseada >= 1 && cantidadDeseada <= maxStock)){
        cantidadDeseada = parseInt (prompt(`Ingresa una unidad dentro de nuestro rango de stock. Stock actual: ${maxStock}`))
        validarMonto(cantidadDeseada)}
    calcularCostoTotal (cantidadDeseada)
}

const validarMonto = monto => {
    const isNotValid = isNaN(monto)
    if (isNotValid){
        alert("Dato invalido, favor ingrese un numero")
    } 
    return isNotValid
}

const calcularCostoTotal = (stock) => {
    const costoTotal = stock * gorras
    let dineroEntregado = parseFloat(prompt (`ingresa $${costoTotal} para recibir tu orden de Gorras`))
    validarMonto(dineroEntregado)
    while ( dineroEntregado < costoTotal || isNaN(dineroEntregado)){
        if (!isNaN(dineroEntregado))   {
            const dineroFaltante = costoTotal - dineroEntregado
            alert("dinero insuficiente, te faltan $" + dineroFaltante)
        }   
        dineroEntregado = parseFloat(prompt("ingresa el monto"))
        validarMonto(dineroEntregado)
    }
    const cambio = dineroEntregado - costoTotal
        alert("gracias por tu compra, tienes un cambio de $" + cambio)
}

calcularStock(5);  */


// ---------- SEGUNDA ENTREGA, FUNCIONA CON ALERT Y LA CONSOLA, UTILIZAR AMBOS. 

const Gorras = function (color, marca, precio, stock) {
    this.color = color
    this.marca = marca
    this.precio = precio
    this.stock = stock
}

let gorra1 = new Gorras("amarillo", "nike", 18000, 5 )
let gorra2 = new Gorras("blanco", "nike", 20000, 3 )
let gorra3 = new Gorras("negro", "nike", 20000, 10 )
let gorra4 = new Gorras("blanco", "adidas", 22000, 20 )
let gorra5 = new Gorras("gris", "adidas", 18000, 12 )
let gorra6 = new Gorras("rosado", "adidas", 15000, 5 )
let gorra7 = new Gorras("verde", "puma", 15000, 30 )
let gorra8 = new Gorras("azul", "puma", 15000, 7 )

let listaDeGorras = [gorra1,gorra2,gorra3,gorra4,gorra5,gorra6,gorra7,gorra8]

function calcularTotalAPagar(cantidad, precio) {
    return cantidad * precio;
}

function realizarCompra(gorraSeleccionada) {
    let cantidadIngresada = parseInt(prompt(`¿Cuántas gorras ${gorraSeleccionada.color} ${gorraSeleccionada.marca} deseas comprar?`));

    if (cantidadIngresada > gorraSeleccionada.stock) {
        alert(`No tenemos suficiente stock. El stock disponible es ${gorraSeleccionada.stock}.`);
        let pedidoEspecial = confirm("¿Desea realizar un pedido especial?");
        if (pedidoEspecial) {
            let colorEspecial = prompt("Especifique el color:");
            let marcaEspecial = prompt("Especifique la marca:");
            let cantidadEspecial = parseInt(prompt("Especifique la cantidad:"));

            let pedidoEspecialGorra = new Gorras(colorEspecial, marcaEspecial, 0, cantidadEspecial);
            listaDeGorras.push(pedidoEspecialGorra); 
            alert("Pedido especial registrado. Gracias por su pedido.");
            console.table(pedidoEspecialGorra)
        } else {
            alert("Compra cancelada.");
        }
        return; 
    }

    let totalAPagar = calcularTotalAPagar(cantidadIngresada, gorraSeleccionada.precio);
    let montoIngresado = parseFloat(prompt(`Total a pagar: ${totalAPagar}. Ingresa el monto:`));

    if (montoIngresado < totalAPagar) {
        let faltaPagar = totalAPagar - montoIngresado;
        alert(`Falta pagar ${faltaPagar} para completar la compra.`);
        realizarCompra(gorraSeleccionada); 
    } else if (montoIngresado > totalAPagar) {
        let cambio = montoIngresado - totalAPagar;
        alert(`Compra exitosa. Cambio: ${cambio}`);
    } else {
        alert("Compra exitosa. Gracias por su compra.");
    }
}

function mostrarListaGorras() {
    console.table(listaDeGorras);
}

function filtrarGorras() {
    let palabraIngresada = prompt("Ingresa el color/marca de gorra que deseas").trim().toUpperCase();
    let resultados = listaDeGorras.filter((x) => x.color.toUpperCase().includes(palabraIngresada) || x.marca.toUpperCase().includes(palabraIngresada));

    if (resultados.length > 0) {
        if (resultados.length === 1) {
            
            let gorraSeleccionada = resultados[0];
            realizarCompra(gorraSeleccionada);
        } else {
            
            console.table(resultados);
            let opcionPedidoEspecial = confirm("¿No encontraste la gorra que buscas? ¿Deseas hacer un pedido especial?");
            if (opcionPedidoEspecial) {
                let colorEspecial = prompt("Especifique el color:");
                let marcaEspecial = prompt("Especifique la marca:");
                let cantidadEspecial = parseInt(prompt("Especifique la cantidad:"));

                
                let pedidoEspecialGorra = new Gorras(colorEspecial, marcaEspecial, 0, cantidadEspecial);
                listaDeGorras.push(pedidoEspecialGorra); 
                alert("Pedido especial registrado. Gracias por su pedido.");
                return; 
            }

            let indiceGorra = parseInt(prompt("Selecciona el número de la gorra que deseas comprar:"));
            if (indiceGorra > 0 && indiceGorra <= resultados.length) {
                let gorraSeleccionada = resultados[indiceGorra - 1];
                realizarCompra(gorraSeleccionada);
            } else {
                alert("Selección inválida");
            }
        }
    } else {
        let opcionPedidoEspecial = confirm("No se encontraron gorras con ese color/marca. ¿Deseas hacer un pedido especial?");
        if (opcionPedidoEspecial) {
            mostrarListaGorras();
            let colorEspecial = prompt("Especifique el color:");
            let marcaEspecial = prompt("Especifique la marca:");
            let cantidadEspecial = parseInt(prompt("Especifique la cantidad:"));

            
            let pedidoEspecialGorra = new Gorras(colorEspecial, marcaEspecial, 0, cantidadEspecial);
            listaDeGorras.push(pedidoEspecialGorra); 
            alert("Pedido especial registrado. Gracias por su pedido.");
        } else {
            alert("Compra cancelada.");
        }
    }
}

filtrarGorras();

