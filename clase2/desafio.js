(function mostrarLista(array) {
    if (array.length == 0) {
        console.log("Lista vacía")
    } else {
        console.log(array)
    }
})([]);

function crearMultiplicador(multiplicador) {
    return (number) => {
        console.log(number*multiplicador)
    }
}

let duplicar = crearMultiplicador(2)
console.log("Duplicando")
duplicar(9)
let triplicar = crearMultiplicador(3)
console.log("Triplicando...")
triplicar(4)
let cuatriplicar = crearMultiplicador(4)
console.log("Cuatriplicando...")
cuatriplicar(5)