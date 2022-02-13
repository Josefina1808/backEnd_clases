//Trae la ruta en dónde estoy trabajando
console.log(process.cwd());

//ID del proceso
console.log(process.pid);

//Versión de NodeJs
console.log(process.version);

//Título del proceso
console.log(process.title);

//Sistema operativo en dónde está corriedno
console.log(process.platform);

//Memoria que utilizo
console.log(process.memoryUsage());

//Deja de ejecutarse el programa
process.exit()