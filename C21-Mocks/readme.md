# Clase 20 - Trabajo con datos: Diseño de mocks 
## Temas trabajados
- Comprender la técnica TDD.
- Entender el concepto de API y Mocking.
- Utilizar Faker.js para la generación de Mocking de datos.
- Realizar un servidor mocking basado en Node.js y Faker.js.
## Ejercicios realizados
### TDD
Ejemplo de TDD diseñando una calculadora.
    Ubicación: TDD
### Desafío Mock
Desarrollar un servidor basado en Node.js y express que para la ruta '/test' responda con un array de 10 objetos, con el siguiente formato:
{
    nombre: '',
    apellido: '',
    color: ''
}
    Ubicación: Desafios/desafio_mock.js
### Desafio con faker
Crear un archivo test.csv con información de relleno
    Ubicación: Desafios/faker_desafio.js
### Proyecto en vivo
Servidor Mock REST API con Node.js y Faker.js
- El proyecto tiene cinco rutas:
    POST /api/usuarios/popular?cant=n : si no específico cant me genera 50 objetos mock
    GET /api/usuarios/:id? : con id me trae un mock; sin id devuelve todos los mocks
    POST /api/usuarios : incorpora un nuevo mock
    PUT /api/usuarios/:id : actualiza un mock total o parcialmente por campo
    DELETE /api/usuarios/:id : borra un mock específico
- Los usuarios tienen: nombre, email, website, e imagen.
- Cada una puede generar, listar, incorporar, actualizar y borrar mocks.
- Los datos son persistentes en memoria.
## Reconocimientos
Equipo de CoderHouse