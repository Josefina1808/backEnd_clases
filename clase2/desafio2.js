// CLASES

class Client {
    constructor(id, name, lastname, age, adress) {
        this.id = Client.contador
        this.name = name
        this.lastname = lastname
        this.age = age
        this.adress = adress
    }
    
    static contador = 0

    birthYear() {
        return console.log(`El año de nacimiento es: " ${2021 - this.edad}`)
    }
}

let client1 = new Client("Juan", "Pérez", 29, "Quintana 24 CABA")
let client2 = new Client("Pedro", "Esnaola", 26, "Viamonte 1090 Mendoza")