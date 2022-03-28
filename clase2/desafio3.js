class Contador {
    constructor(nombre) {
        this.nombre = nombre
        this.contador = 0
    }
    static contadorGlobal = 0

    obtenerResponsable() {
        return console.log("El responsable es: " + this.nombre)
    }

    obtenerCuentaIndividual() {
        return this.contador
    }

    obtenerCuentaGlobal() {
        return Contador.contadorGlobal
    }

    conteo(number) {
        this.contador += number
        Contador.contadorGlobal += number
    }
}