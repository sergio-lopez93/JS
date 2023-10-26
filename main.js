


const Gorras = function (color, marca, precio, stock) {
    this.color = color;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
};

let listaDeGorras = [
    new Gorras("amarillo", "nike", 18000, 5),
    new Gorras("blanco", "nike", 20000, 3),
    new Gorras("negro", "nike", 20000, 10),
    new Gorras("blanco", "adidas", 22000, 20),
    new Gorras("gris", "adidas", 18000, 12),
    new Gorras("rosado", "adidas", 15000, 5),
    new Gorras("verde", "puma", 15000, 30),
    new Gorras("azul", "puma", 15000, 7)
];


const localGorras = localStorage.getItem('gorras');
if (localGorras) {
    listaDeGorras = JSON.parse(localGorras);
} else {
    localStorage.setItem('gorras', JSON.stringify(listaDeGorras));
}

document.getElementById('filtroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    filtrarGorras();
});

document.getElementById('agregarForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const marca = document.getElementById('marcaInput').value;
    const color = document.getElementById('colorInput').value;
    const precio = parseFloat(document.getElementById('precioInput').value);
    const cantidad = parseInt(document.getElementById('cantidadInput').value);

    if (marca && color && !isNaN(precio) && precio > 0 && !isNaN(cantidad) && cantidad > 0) {
        const nuevaGorra = new Gorras(color, marca, precio, cantidad);
        listaDeGorras.push(nuevaGorra);
        localStorage.setItem('gorras', JSON.stringify(listaDeGorras));
        mostrarListaGorras(listaDeGorras);
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});

function filtrarGorras() {
    const palabraIngresada = document.getElementById('filtroInput').value.trim().toUpperCase();
    const resultados = listaDeGorras.filter((x) => x.color.toUpperCase().includes(palabraIngresada) || x.marca.toUpperCase().includes(palabraIngresada));
    mostrarListaGorras(resultados);
}

function mostrarListaGorras(resultados) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (resultados.length === 0) {
        resultadoDiv.textContent = 'No se encontraron gorras con ese color/marca.';
    } else {
        resultados.forEach(function (gorra, index) {
            resultadoDiv.innerHTML += `<p>${index + 1}. Color: ${gorra.color}, Marca: ${gorra.marca}, Precio: ${gorra.precio}, Stock: ${gorra.stock}</p>`;
        });
    }

    mostrarAgregarGorraForm();
}

function mostrarAgregarGorraForm() {
    const agregarGorraForm = document.getElementById('agregarGorraForm');
    agregarGorraForm.style.display = 'block';
}