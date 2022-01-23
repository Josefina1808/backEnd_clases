const fs = require('fs')

class Contenedor {
    constructor(filename="productos.json"){
        this.id = 0
        this.list = []
        this.filename = filename

        this.init()
    }

    init() {
        console.log(`Loading ${this.filename}...`);
        const data = fs.readFileSync(this.filename)
        const listaFormFile = JSON.parse(data)
        for(const obj of listaFormFile){
            this.insert(obj)
        }
        console.log("File loaded.");
    }

    find(id){
        return this.list.find(obj => obj.id == id)
    }

    insert(obj){
        obj.id = ++this.id
        this.list.push(obj)
        return obj
    }
    
    update(id, obj){
        const index = this.list.findIndex( objT => objT.id == id);
        obj.id = this[index].id
        this.list[index] = obj;
        return obj;
    }

    write() { 
       fs.writeFileSync(this.filename, JSON.stringify(this.list))
    }

    deleteById(id) {
        console.log(id);
        let result
        if (this.list !== []) {
            let newContent = this.list.filter(x => x.id !== id)
            this.list = newContent
            this.write()
            result = 'OK'
        } else {
            result = `El archivo está vacío`
        }
        return result
    }
}

module.exports = Contenedor