// Repaso de arreglos

//Estilizacion de mensajes de salida

const bg =
  "linear-gradient(135deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 50%, rgba(0,212,255,1) 100%)";
const style_console = `background: ${bg}; color: white; border-radius: 8px; padding: 6px; font-size: 1.1rem; font-weight: bold; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)`;

//Pesonalizacion de lss Salidas a Consola
console.warn("Practica 06: Arreglos en JavaScript");

//DECLARACION DE UN ARREGLO
console.log("%c1.- Declaracion de un Arreglo (Array)", style_console);
//Para declarar un arreglo (array) de datos en JS basta con agregar [], y dentro los datos contenidos del arreglo
const mesesAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo,",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
//VISUALIZACION DE OS ELEMENTOS DE UN ARREGLO
console.log(mesesAnio);
console.table(mesesAnio);
//ACCEDER A LOS VALORES DE UN ARREGLO DE DATOS PARA ACCEDER AL VALOR SOLO BASTA ENVIAR LAPOSICION DEL DATO QUE QUEREMOS DEBNTRO DE OS LIMITES ESTABLECIDOS, SIENDO EL LIMITE INFERIOR 0 Y EL SUPERIOR TAMANO -1

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log("El primer mes del año es:", mesesAnio[0]);
console.log("El ultimo mes del año es:", mesesAnio[mesesAnio.length - 1]);

//MP SE PUEDE ACCEDER A ELEMENTOS CON POSICIONES NEGATIVAS O POSICIONES SUPERIROES AL TAMANO DEFINIDO

console.log("El mes del año en la posicion -1 es:", mesesAnio[-1]);
console.log("El treceavo mes del anio en la posicion es:", mesesAnio[12]);
console.log("Que tipo de dato es un arreglo?:", typeof mesesAnio);

//AL SER JAVASCERIPT UN LENGUAJE DEBILMENTE TIPADO PODEMOS CREAR ARREGLOS MIXTOS DE TIPOS DE DATOS
console.log("Declaramos un Arreglo Mixto");
const saludar = function (nombre) {
  return `Hola, ${nombre}!`;
};

let arregloMixto = [
  "String",
  5,
  45.26,
  -200,
  -0.16854,
  Symbol("AFL"),
  `z`,
  false,
  BigInt(11122222333344444455555666667777),
  true,
  { latitud: "20°18'0\" N", longitud: "97°58'00\" W", altitud: 796 },
  saludar,
  null,
];

console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof arregloMixto);

console.log("Verificamos los tipos de datos de los elementos del arreglo: ");

console.log(
  `El dato en la posición[0]= ${
    arregloMixto[0]
  } y es del tipo: ${typeof arregloMixto[0]}`
);
console.log(
  `El dato en la posición[1]= ${
    arregloMixto[1]
  } y es del tipo: ${typeof arregloMixto[1]}`
);
console.log(
  `El dato en la posición[2]= ${
    arregloMixto[2]
  } y es del tipo: ${typeof arregloMixto[2]}`
);
console.log(
  `El dato en la posición[3]= ${
    arregloMixto[3]
  } y es del tipo: ${typeof arregloMixto[3]}`
);
console.log(
  `El dato en la posición[4]= ${
    arregloMixto[4]
  } y es del tipo: ${typeof arregloMixto[4]}`
);
console.log(
  `El dato en la posición[5]= ${
    arregloMixto[5].toString
  } y es del tipo: ${typeof arregloMixto[5]}`
);
console.log(
  `El dato en la posición[6]= ${
    arregloMixto[6]
  } y es del tipo: ${typeof arregloMixto[6]}`
);
console.log(
  `El dato en la posición[7]= ${
    arregloMixto[7]
  } y es del tipo: ${typeof arregloMixto[7]}`
);
console.log(
  `El dato en la posición[8]= ${
    arregloMixto[8]
  } y es del tipo: ${typeof arregloMixto[8]}`
);
console.log(
  `El dato en la posición[9]= ${
    arregloMixto[9]
  } y es del tipo: ${typeof arregloMixto[9]}`
);
console.log(
  `El dato en la posición[10]= ${
    arregloMixto[10]
  } y es del tipo: ${typeof arregloMixto[10]}`
);
console.log(
  `El dato en la posición[11]= ${
    arregloMixto[11]
  } y es del tipo: ${typeof arregloMixto[11]}`
);
console.log(
  `El dato en la posición[12]= ${
    arregloMixto[12]
  } y es del tipo: ${typeof arregloMixto[12]}`
);

console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

console.log("Declarando una matriz regular");
//UNA MATRIZ ES UNA ESTRUCTURA DE DATOS MULDIMENSIONAL (TABLA) DE N COLUMNAS O M FILAS

let matriz = [
  [1, 2, 3, 4],
  ["a", "b", "c", "d"],
];

//ESTE ES UN MATRIZ REGULAR DE 4X4

console.log(matriz);
console.table(matriz);

console.log("Declaramos una matriz irregular");

const matrizIrregular = [
  ["Juan", "Pedro", "Maria", "Inés"],
  [true, false, null],
  [9.2],
];

console.log(matrizIrregular);
console.table(matrizIrregular);

//ACCEDIENDO A LOS VALORES DE UNA MATRIZ

console.log("Leyendo las Propiedades de una Matriz Regular");

console.log(`Elementos en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elementos en la posición [1][2]: ${matriz[1][2]}`);

//ACCEDIENDO A LOS VALOFRES DE LA MATRIZ IRREGULAR
console.log("Leyendo las Propiedades de una Matriz Irregular");

console.log(`Elementos en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(
  `Elementos en la posición [1][2] (¿Es Maria mayor?): ${matrizIrregular[1][2]}`
);
console.log(
  `Elementos en la posición [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`
);

//FUNCIONES Y METODOS DE ARREGLOS
//los metodos de ubn objeto siempre son invocados usando un . y su termino se delimitan los parametros entre(), en caso de que no lleve(), no es un metodo, sino una propiedad.

//
console.log(
  "%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array functions)",
  style_console
);
console.log("¿cómo sabemos cuál es el tamaño de un arreglo?");
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`ArregloMixto es un arreglo de tamaño: ${arregloMixto.length}`);

console.log("¿Qué pasa con los multidimensionales?");
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`);
console.log(
  "mmmmmmmm dejame pensarlo, eso me da el tamaño de numero de las filas de la matriz, pero cómo saber el número de columna?"
);
console.log(`matriz regular tiene un numero de ${matriz[0].length}`);

console.log(`Y para la matrizIrregular?`);

//PARA SABER LA DEIMENSION DE UNA MATRIZ IRREGULAR PODEMOS HACER EL USO DEL CICLO

let numeroFilas = matrizIrregular.length;
for (let i = 0; i < numeroFilas; i++)
  console.log(
    `La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`
  );

console.log(
  "%c5.- Agregar un nuevo elemento a un arreglo (PUSH)",
  style_console
);

let estudiantes = [
  "Al Farias",
  "Richi Otero",
  "Angel de Jesus",
  "Carlos Chicontla",
  "Pepeyo Garcia",
];
console.log("Los elementos actuales del arreglo son: ");
console.table(estudiantes);
console.log("Agregamos a un nuevo estudiante llamado: Paco Olarte");
estudiantes.push("Paco Olarte");
console.log("Despues de agregar los elementos del arreglo son: ");
console.table(estudiantes);
console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);
console.log('Agregamos la palabra: "Hola", como nuevo elemento');
arregloMixto.push("Hola");
console.log(
  "Y también agregamos el numero -31215282838822828288251548.2959828288284949, siendo este un BigInt"
);
arregloMixto.push(BigInt(-31215282838822828288251548.2959828288284949));
console.log(
  "Después de estas dos operaciones el arreglo queda con los siguientes elementos: "
);
console.table(arregloMixto);

console.log(
  "%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT)",
  style_console
);

console.table(estudiantes);
console.log("Ahora agregamos a Angel de Jesus, al comienza del arreglo.");
estudiantes.unshift("Angel De Jesus");
console.log("La lista actual es: ");
console.table(estudiantes);

console.log(
  "%c7.- Eliminar elementos de un arreglo en la última posición (POP)",
  style_console
);
console.log("El arreglo tiene los siguientes elemntos: ");
console.table(estudiantes);
console.log("Para este caso eliminaremos a Paco Olarte en la posición última");
estudiantes.pop();
console.log(
  "Despues de eliminar el elemento el arreglo queda de la sig manera: "
);
console.table(estudiantes);

console.log(
  "%c8.- Eliminar elemento de un arreglo en la primera posición (SHIFT)",
  style_console
);
console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes);
console.log(
  "Para este caso eliminaremos a Angel de Jesus, en la posición última"
);
estudiantes.shift();
console.log(
  "Despues de eliminar el elemento el arreglo queda de la sig manera: "
);
console.table(estudiantes);

console.log(
  "%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)",
  style_console
);
console.log("El arreglo original tiene los elementos: ");
console.table(estudiantes);
console.log(
  "Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición "
);

/////

//Cuando la función splice recibe un solo parámetro eliminará los elementos de esa posición en adelante
estudiantes.splice(2);
console.table(estudiantes);

//Cuando la función splice recibe dos parámetros, se eliminan todos los elementos que no estes en ese rango

estudiantes.push("Raul Artiaga");
estudiantes.push("Richi Otero");
estudiantes.push("Angel de Jesus");
estudiantes.push("Carlos Chicontla");
estudiantes.push("Pepeyo Garcia");
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ");
console.table(estudiantes);
console.log(
  "Ahora ya tenemos los elementos suficientes para aplicar el metodo splice con dos parámetros que serán 3,5"
);
estudiantes.splice(3, 5);
console.log("Resultando en: ");
console.table(estudiantes);

//splice sirve tambien para insertar elementos en posiciones especificos, ahora necesitamos insertar a : "Michelle Wecs" entre "Al Farias" y "Richi Otero"
console.log(
  'Ahora vamos a insertar a "Michelle Wecs" en los elementos dela posición 0 y 1'
);
estudiantes.splice(1, 0, "Michelle Wecs");
console.log("Resultando en:");
console.table(estudiantes);

//También splice sirve para reemplazar elementos por otros, en este caso remplazaremos a "Tania Ibarra" por "Brandon Leon"

console.log(
  'Ahora vamos a remplazar a "Al Farias" en los elementos de la posición por "Carlos Chicontla"'
);
estudiantes.splice(0, 1, "Carlos Chicontla");
console.log("Resultando en:");
console.table(estudiantes);

console.log(
  "%c10.- Metodos para la manipulación de Arreglos INMUTABLES",
  style_console
);
let signosZodiacales = [
  "Aries",
  "Tauro",
  "Geminis",
  "Cáncer",
  "Leo",
  "Virgo",
  "Libra",
  "Escorpio",
  "Sagitario",
  "Capricornio",
  "Acuario",
  "Piscis",
];

//Desestructuración de Arreglos
let [signo1, , signo3, , , , signo7, , , ,] = signosZodiacales;
console.log(`EL PRIMER SIGNO ZODIACAL ES: ${signo1}`);
console.log(`EL TERCER SIGNO ZODIACAL ES: ${signo3}`);
console.log(`EL SEPTIMO SIGNO ZODIACAL ES: ${signo7}`);
//console.log(`EL CUARTO SIGNO ZODIACAL ES: ${signo4}`)

//congelamos el arreglo volviendolo INMUTABLE

Object.freeze(signosZodiacales);

//Ninguna se ejectuca porque nuestro arreglo es inmutable
// signosZodiacales.push("Ofiuco");
// signosZodiacales.unshift();
// signosZodiacales.splice(6, 2);

console.log(
  "%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER",
  style_console
);

console.table(estudiantes);
//antes de filtrqar datos llenemos el arreglo con 10 elementos
estudiantes.push("Raul Pazos");
estudiantes.push("Richi Otero");
estudiantes.push("Angel de Jesus");
estudiantes.push("Carlos Chicontla");
estudiantes.push("Pepeyo Garcia");
estudiantes.push("Daniela Lopez");
console.table(estudiantes);

Object.freeze(estudiantes);

//Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que pueda ser mutable.

console.log("Filtrando los primeros 5 elementos");
let nuevoEstudiantes = estudiantes.filter((estudiante, index) => index < 5);
console.table(nuevoEstudiantes);

console.table(filtraPrimeros5(estudiantes));

//filtrar a los estudiantes que su nombre tenga más de 15 carácteres
let nuevoEstudiantesNombre = estudiantes.filter(
  (estudiante) => estudiante.length > 15
);
console.table(nuevoEstudiantesNombre);

//Intentamos modificar el arreglo inmutable
/*estudiantes.pop()
console.table(estudiantes)*/

//Intentamos modificar el nuevo arreglo que no ha sido congelado

nuevoEstudiantes.unshift("Daniela Lopez");
console.table(nuevoEstudiantes);

function filtraPrimeros5(arregloEstudiantes) {
  let listaFiltrada = [];
  for (let i = 0; i < 5; i++) {
    listaFiltrada.push(arregloEstudiantes[i]);
  }
  return listaFiltrada;
}

//filtrado de datos -  Transformando los datos.
console.log(
  "%c12.- Filtrado de Elemento dentro de un arreglo utilizando el método MAP, en el que necesitamos transformarlos",
  style_console
);

console.log("Imprimimos los elementos actuales de signosZodiacales:");
console.log(signosZodiacales);

//que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYUSCULAS

console.table(
  signosZodiacales.map((signoZodiacal) => signoZodiacal.toUpperCase())
);

//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticos o cuantitativas a un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado.

const costosListaCompras = [15, 52.5, 16.9, 32.5, 28, 105, 45.2, 94.1];

//como podemos calcular el total de una lista de costos de un carrito de compras

console.log("Los precios son: ");
console.table(costosListaCompras);
console.log(
  `El total de la compra es: ${costosListaCompras
    .reduce((total, precio) => total + precio, 0)
    .toFixed(2)}`
);