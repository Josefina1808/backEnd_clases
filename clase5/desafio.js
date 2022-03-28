function createNumber() {
    let object = {}
    for (let i = 0; i<9999; i++){
        let number = Math.floor(Math.random()*20+1)
        if (object[number]) {
            object[number]++
        } else{
            object[number]=1
        } 
    }
    console.log(object);    
}
createNumber()