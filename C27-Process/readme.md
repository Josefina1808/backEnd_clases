# Clase 27 - Proceso principal del servidor
## Temas trabajados
- Conocer el pasaje de parámetros al servidor y sus funciones.
- Pasar argumentos en la línea de comandos en Node mediante las librerías Minimist y Yargs.
- Presentar las variables de entorno y su uso.
- Aplicar la librería Dotenv.

## Ejercicios realizados
### ARGUMENTOS POR LÍNEA DE COMANDOS (mainjs)
1. Realizar una aplicación en Javascript ejecutada a través de Node.JS que al ejecutarse de la siguiente manera:
node main.js 1 2 3 -m dev -p 8080 -d
2. Construya y muestre por pantalla el siguiente objeto:
{ modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
Y con el siguiente llamado:
node main.js 1 2 3
3. Construya y muestre por pantalla el siguiente objeto:
{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }

## Reconocimientos
Equipo de CoderHouse