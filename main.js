

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
        console.log ("hola")
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

calcularStock(5); 
