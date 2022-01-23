class Color {
    //que recibe el contructor??
    randomNumber() {
        return Math.floor(Math.random() * 256) 
    }

    setColor() :Array<Number> {
        const red: number = this.randomNumber()
        const green: number = this.randomNumber()
        const blue:number = this.randomNumber()

// esto podria ir en el contructor
        return [red,green,blue]
        
    }
}

const random = new Color()
console.log(random.setColor());