# Clase 21 - Trabajo con datos: Normalización
## Temas trabajados
- Entender el concepto de normalización de datos.
- Comprender el uso de normalizr y su sistema de esquemas.
- Verificar el formato del objeto normalizado.
- Realizar la normalización y desnormalización de una estructura con redundancias. 
## Ejercicios realizados
### Desafío 1: POSTS
Normalización de posteo con Normalizr creadno las entidades author y comments. Que se encuentran contendias en la entidad posts
### Desafío 2: Normalizar JSON
#### Consigna
- Normalizar la estructura del objeto en formato JSON empresa.json (disponible en la carpeta de la clase) que describe el organigrama de una empresa. El gerente y el encargado figuran en el array de empleados de la empresa.
- Imprimir por consola el objeto normalizado y la longitud del objeto original y del normalizado. Comparar los resultados.
### Desafío 3: 
#### Tema 
Normalización y desnormalización de datos en formato JSON con redundancia
#### Consigna
1. Vamos a trabajar con el objeto del blog, pero ahora añadiéndole información redundante que va a ser optimizada por Normalizr.
2. Dispondremos de un array de artículos, donde habrá autores y comentadores.
3. El autor de un artículo puede ser comentador de otro y viceversa.
4. De esta manera habrá duplicación de información, lo que producirá que el objeto no posea información centralizada y sea más extenso.
5. Definiremos un conjunto de esquemas para quitar esas redundancias.
6. Primero mostraremos el objeto original y su longitud en bytes, luego normalizaremos y comprobaremos los datos.
7. Por último desnormalizaremos, verificando los datos originales.
## Reconocimientos
Equipo de CoderHouse