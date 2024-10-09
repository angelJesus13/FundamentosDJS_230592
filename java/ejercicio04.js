// Repaso de Arreglos

// Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

// Personalización de las Salidas a Consola
console.warn("Práctica 06: Arreglos en JavaScript");

// 1.- DECLARACIÓN DE UN ARREGLO
const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("%c1.- Declaración de un Arreglo (Array)", style_console);
console.log(mesesAnio);
console.table(mesesAnio);

// 2.- LEER O RECUPERAR LOS DATOS DE UN ARREGLO
console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`);
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length-1]}`);
console.log(`¿Qué tipo de dato es un arreglo? : ${typeof(mesesAnio)}`);

// 3.- ARREGLOS MULTIDIMENSIONALES (MATRICES)
console.log("%c3.- Arreglos Multidimensionales (Matrices)", style_console);
let matriz = [[1,2,3,4], ['a','b','c','d']];
console.log("Declarando una matriz regular.");
console.table(matriz);

let matrizIrregular= [["Juan", "Pedro", "María", "Inés"], [true, false, null], [9.2]];
console.log("Declarando una matriz irregular.");
console.table(matrizIrregular);
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elemento en la posición [2][0]: ${matrizIrregular[2][0]}`);

// 4.- FUNCIONES O MÉTODOS DE LOS ARREGLOS
console.log("%c4.- Funciones o métodos de los arreglos (Array Methods)", style_console);
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`matriz tiene un número de filas de: ${matriz.length} y columnas: ${matriz[0].length}`);
let numeroFilas = matrizIrregular.length;
for(let i = 0; i < numeroFilas; i++) {
    console.log(`La longitud de la fila ${i} es = ${matrizIrregular[i].length}`);
}

// 5.- AGREGAR NUEVO ELEMENTO A UN ARREGLO (PUSH)
let estudiantes = ["Angel de Jesus", "Valeria Martinez", "Jesus Baños", "Michelle", "Al Farias Leyva"];
console.log("%c5.- Agregar nuevo elemento a un arreglo (PUSH)", style_console);
console.table(estudiantes);
estudiantes.push("Daniel Garcia");
console.log("Después de agregar a Daniel Garcia:");
console.table(estudiantes);

// 6.- AGREGAR NUEVO ELEMENTO AL INICIO DEL ARREGLO (UNSHIFT)
console.log("%c6.- Agregar un nuevo elemento al inicio del arreglo (UNSHIFT)", style_console);
estudiantes.unshift("Edwin Luna");
console.log("Después de agregar a Edwin Luna:");
console.table(estudiantes);

// 7.- ELIMINAR ELEMENTO DE LA ÚLTIMA POSICIÓN (POP)
console.log("%c7.- Eliminar elementos de un arreglo en la última posición (POP)", style_console);
estudiantes.pop();
console.log("Después de eliminar el último elemento:");
console.table(estudiantes);

// 8.- ELIMINAR ELEMENTO DE LA PRIMERA POSICIÓN (SHIFT)
console.log("%c8.- Eliminar elementos de un arreglo en la primera posición (SHIFT)", style_console);
estudiantes.shift();
console.log("Después de eliminar el primer elemento:");
console.table(estudiantes);

// 9.- MODIFICAR UN ARREGLO CON SPLICE
console.log("%c9.- Modificar un arreglo con SPLICE", style_console);
console.log("Dividir el arreglo eliminando elementos con SPLICE:");
estudiantes.splice(2, 1); // Elimina 1 elemento desde la posición 2
console.table(estudiantes);
estudiantes.push("Natalia Baños", "Mauricio", "Marco", "Arturo", "Jose", "Juan");
console.table(estudiantes);
estudiantes.splice(0, 5); // Elimina los primeros 5 elementos
console.table(estudiantes);

// 10.- ARREGLOS INMUTABLES (CONGELAR UN ARREGLO)
console.log("%c10.- Arreglos inmutables", style_console);
let signosZodiacales = ["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Capricornio", "Acuario", "Piscis"];
Object.freeze(signosZodiacales);
console.log("El primer signo zodiacal es: " + signosZodiacales[0]);
console.log("El tercer signo zodiacal es: " + signosZodiacales[2]);

// 11.- FILTRADO DE ELEMENTOS CON FILTER
console.log("%c11.- Filtrado de Elementos dentro de un arreglo utilizando el método FILTER", style_console);
estudiantes = ["Angel Baños", "Valeria Martinez", "Marco Ramirez", "Farias Ly", "Jhoana Maldonado", "Rene Martinez", "Juan Ramirez", "Farias utecs"];
let nuevosEstudiantes = estudiantes.filter((estudiante, index) => index < 5);
console.log("Filtrando los primeros 5 estudiantes:");
console.table(nuevosEstudiantes);

// Filtrar nombres con más de 15 caracteres
let estudiantesNombreLargo = estudiantes.filter((estudiante) => estudiante.length > 15);
console.log("Estudiantes con nombres largos:");
console.table(estudiantesNombreLargo);

// 12.- TRANSFORMACIÓN CON MAP
console.log("%c12.- Transformación de elementos con MAP", style_console);
console.log("Signos zodiacales transformados a mayúsculas:");
console.table(signosZodiacales.map(signo => signo.toUpperCase()));

// Cálculo de la lista de compras con reduce
const costosListaCompras = [15, 52.50, 16.90, 32.50, 28, 105, 42.2, 94.10];
console.log("Precios de la lista de compras:");
console.table(costosListaCompras);
const totalCompra = costosListaCompras.reduce((total, precio) => total + precio, 0).toFixed(2);
console.log(`El total de la compra es: ${totalCompra}`);
