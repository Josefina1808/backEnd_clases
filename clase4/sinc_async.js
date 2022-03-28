//EJECUCIÓN SECUENCIAL: se va haciendo paso a paso

let funA = () => {
    console.log(1)
    funB()
    console.log(2)
}
let funB = () => {
    console.log(3)
    funA()
    console.log(4)
}

//ASINCRÓNICO
function async() {
    setTimeout(() =>{
        clearInterval(varInterval) //hace que se termine el setInterval
        console.log("EVERTYTHING DONE!")
    },7000)
}
/* Va a consologear DONE interval durante dos segundos */
let varInterval
function interval() {
    varInterval = setInterval(() =>{
        console.log("DONE interval!")
    },2000)
}


interval()
async()
console.log("HOLA HOLA")
