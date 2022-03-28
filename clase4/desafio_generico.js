function mostrarLetras (string, time) {
    for(const char of string){
       setTimeout(() => {
           console.log(char)
           delay(time)
       }, time)
    }
}

mostrarLetras("Ejemplo",1000)