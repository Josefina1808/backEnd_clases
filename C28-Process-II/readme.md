# Clase 28 - Global and Child process
## Temas trabajados
- Conocer acerca del objeto process
- Aplicar child_process y sus métodos
- Comprender los procesos en NodeJS

## Ejercicios realizados
### CHILD_PROCESS CON FORK (en la carpeta "fork")
1. Realizar un servidor en express que contenga una ruta raíz '/' donde se represente la cantidad de visitas totales a este endpoint (no usar session).
2. Se implementará otra ruta '/calculo-bloq', que permita realizar una suma incremental de los números del 0 al 100000.
3. Comprobar que al alcanzar esta ruta en una pestaña del navegador, el proceso queda en espera del resultado. Constatar que durante dicha espera, la ruta de visitas no responde hasta terminar este proceso.
4. Luego crear la ruta '/calculo-nobloq' que hará dicho cálculo forkeando el algoritmo en un child_process, comprobando ahora que el request a esta ruta no bloquee la ruta de visitas. Asegurarse de que una vez finalizado el proceso, el worker se cierra correctamente.

## Reconocimientos
Equipo de CoderHouse