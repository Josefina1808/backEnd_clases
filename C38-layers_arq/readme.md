# Clase 38 - Arquitectura de capas
## Temas trabajados
- Aprender acerca de npm más en profundidad
- Comprender la configuración de un proyecto en capas

## Summary
### Capas principales en Node
- Capa de ruteo (API):maneja la interfaz de programación de aplicaciones. Su únitco trabajo es recibir las peticiones del cliente, delegar la tarea de computar la respuesta, y una vez obtenido el resultado retornarlo como respuesta al cliente
- Capa de servicio/negocio: maneja la lógica de negocios del app. Significa que los datos son transformados o calculados para cumplir con los requerimientos del cliente. Accede a los datos (leer-guardar) sólo a través de la capa de persistencia.
- Capa de persistencia: tiene acceso a la base de datos para crear, editar, o borrar datos. Preferentemente, aquí no debemos encontrar lógica de negocio, sino mecanismos relacionados con la infraestructura del servidor.
### 5 componentes principales
- DAO (Data Access Object): contiene las funciones relacionadas con el acceso a la base de datos
- Service: contiene las funciones con la lógica de negocio relacionada a los recursos del sistema
- Controller: contiene las funciones que resolverán cada petición que llegue a cada una de las rutas definidas
- Router: que contiene los métodos disponibles para cada recurso de la aplicación, y sendas mediante las cuales se los accede
- Server: inicializa la aplicación, y carga los routers correspondientes.
## Reconocimientos
Equipo de CoderHouse