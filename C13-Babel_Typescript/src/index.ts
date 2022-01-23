/*
COMPILAR
./node_modules/.bin/tsc ./index.ts -w

INICIALIZAR

*/

const x:string = "Hola Ronald"
const lista: Array<number> = [2, 3, 5, 7];
lista.map((x:number) => x*x).forEach( (x:number) => console.log(x));

//Seegunda parte clase
import * as operaciones from './libs/operaciones'

const mensaje:string = "Gracias!"
console.log(mensaje);

let num1:number = 10, num2:number = 5;

console.log(`La suma de ${num1} y ${num2} es ${operaciones.sumar}`);

