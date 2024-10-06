//Comentarios en una sola linea

/*
Comentario multilinea 
*/

//Ejercicio 01: Declaracion de variables

//a) VAR

var miNombre = "Angel de Jesus";
var misApellidos = "Baños Tellez";
var edad = 19;

//El objeto de cosole nos permite enviar datos a la terminal y poder visualizar el valor
//El console .warn nos permite crear tipo separadores en consola
console.warn("---Declaracion de Variables usando VAR---");
console.log("Intentando leer variables", miNombre,misApellidos);

misApellidos = "Baños Tellez";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas", miNombre,misApellidos);
//Una variable puede cambiar en el proceso de ejecucion del proceso

//b) const

console.warn("---Declaracion de Variables usando CONST---");
const miUniversidad = "Universidad Tecnologica de Xicotepec de Juarez";
const miMatricula = 230592;
console.log("Mi nombre es: ", miNombre," ", "Mis apellidos: ", misApellidos," ", "Mi universidad:", miUniversidad," ", "Mi matricula:", miMatricula, "Y tienes la edad de:", edad);
//Una vez declaradas estas variables estas no se les puede cambiar su valor 
//Para saber que tipo de dato tiene cada variable o constante podemos usar la funcion typeOf()

console.log("Analizando los datos puedo decir que:");
console.log("Mi nombre es del tipo de dato", typeof(miNombre));
console.log("Mis apellidos son del tipo de dato",typeof(misApellidos));
console.log("Mi universidad es del tipo de dato", typeof(miUniversidad));
console.log("Mi mattricula es del tipo de dato",typeof(miMatricula));
console.log("Mi edad es del tipo de dato", typeof(edad));

//c) let

let miFechaNacimiento = "2005-07-26";
let miColorFavorito = "blanco";

console.warn("---Declaracion de Variables de tipo LET---");
console.log("Genial te voy conociendo mejor, ahora que se que naciste en", miFechaNacimiento, "y tu color favorito es.... mmmm dejame pensarlo es:", miColorFavorito);

//Mostrar los tipos de datos de las variables let
console.log("Analizando los datos anteriores puedo deducir que:");
console.log("Mi fecha de nacimiento es del tipo de dato",typeof(miFechaNacimiento));
console.log("Mi color favorito es del tipo de dato", typeof(miColorFavorito));

