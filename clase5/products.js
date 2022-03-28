const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

function lista() {
    let array = productos.map(x => x.nombre).join(" , ")
    return array
}
function precioTotal(){
    let preciofinal = 0
    productos.map(x => preciofinal+=x.precio)
    return Math.floor(preciofinal)
}
function promedio(){
    return Math.floor(precioTotal()/productos.length)
}

function menorPrecio() {
    let menor = productos.map(x => x.precio)
    menor = Math.min(...menor)
    return productos.find(product => product.precio === menor)

}

function mayorPrecio() {
    let mayor = productos.map(x => x.precio)
    mayor = Math.max(...mayor)
    return productos.find(product => product.precio === mayor)
}

function datos() {
    let object = {
        list: lista(),
        total: precioTotal(),
        promedio: promedio(),
        menorPrecio: menorPrecio(),
        mayorPrecio: mayorPrecio(),
    }
    return object
}
console.log(datos());
