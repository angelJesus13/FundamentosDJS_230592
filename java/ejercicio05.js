// Estilización de mensajes de salida
const bg = "linear-gradient(11deg, rgba(44,89,199,45) 0%, rgba(213,25,77,9) 33%, rgba(21,192,88,7) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 5px; font-size: 1.0rem; font-weight: bold`;

// Personalización de las salidas de consola
console.warn("Práctica: 07 Arreglos en JavaScript");
console.log("%c1.- Condicionales - si/Entonces ... (IF)", style_console);

// Obtener la fecha actual
let fecha_actual = new Date();
console.log(`Hola, la fecha de hoy es: ${fecha_actual.toString()}`);

// Formato local
const fechaLocalMX = fecha_actual.toLocaleString(`es-MX`, {
    weekday: `long`,
    year: `numeric`,
    month: `long`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
    second: `numeric`,
    hour12: `false`,
});

console.log(`En formato local (México): ${fechaLocalMX}`);

// Saludo dependiendo de la hora
if (fecha_actual.getHours() < 12) {
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);
}

// Determinar si estamos en la primera o segunda mitad del año
if (fecha_actual.getMonth() < 6) {
    console.log(`Estás en la primera mitad del año`);
} else {
    console.log(`Estás en la segunda mitad del año`);
}

// Determinar la estación del año
const anio = fecha_actual.getFullYear();

let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtono = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

if (fecha_actual >= inicioPrimavera && fecha_actual < inicioVerano) {
    console.log("Estamos en PRIMAVERA");
    console.log("Inicia la floración de muchas plantas");
    console.log("Los días son más largos y las noches más cortas");
    console.log("Muchos animales despiertan de hibernación");
} else if (fecha_actual >= inicioVerano && fecha_actual < inicioOtono) {
    console.log("Estamos en VERANO");
    console.log("En esta temporada abundan los días soleados y calurosos");
    console.log("El índice de turismo sube");
    console.log("Mucha gente busca realizar actividades al aire libre");
} else if (fecha_actual >= inicioOtono && fecha_actual < inicioInvierno) {
    console.log("Estamos en OTOÑO");
    console.log("Los árboles suelen cambiar su follaje");
    console.log("Se registran normalmente temperaturas más templadas");
    console.log("Los animales comienzan con la recolección de alimento");
} else {
    console.log("Estamos en INVIERNO");
    console.log("Los días suelen ser más cortos y las noches más largas");
    console.log("En algunas regiones suele caer nieve");
    console.log("Se recomienda abrigarse debido a las bajas temperaturas");
}

console.log("%c2.- Operador Ternario (validacion? cumple]: no_cumple)", style_console);
//En java script existe una operacion simplificada que valida si una condicion se cumple o no, y que hacer en cada caso

const edadPersona = 19;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;
let pais;

let evaluarMayoriaEdad = (edad) =>
    edad = 18 ? "Eres mayor de edad .": "No eres mayor de edad"
console.log("Evaluando la mayoria de edad de una persona")
console.log(evaluarMayoriaEdad(edadPersona)); 
//sin emabargo tenemos que considerar que la mayoria de edad varias eb casa pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evaluacion

evaluarMayoriaEdad = (edad,paths) =>
    (edad >= 18 && pais==="MX")? `En ${pais} eres mayor de edad`: `En ${pais} no eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en Mexico")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Mexico")
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- Switch - CASE (Eleccion por valor definido)", style_console);

//calculando tu generacion en base a tu edad

let asignaGeneracion = (anioNacimiento) =>{
    switch(true)
    {
        case(anioNacimiento < 1968): //Baby Boomers
            return "Baby Boomers";
        case(anioNacimiento > 1968 && anioNacimiento <= 1968):
            return "Generacion X";
        case(anioNacimiento > 1980 && anioNacimiento <= 1994):
            return "Milenials";
        case(anioNacimiento >= 1994 && anioNacimiento <=2010):
            return "Centenials/Z"
        case(anioNacimiento > 2010):
            return "Krystal";
    }
}
console.log(`Dado que naci en el año 2005 soy de la generacion: ${asignaGeneracion(2005)} `)

console.log("%c4.- Manejo de Excepciones (TRY/CATCH)", style_console);
//En algunas ocaciones existiran errores que no son culpa del, programa si no del usuario, la red, incluso de midleware. pero que si duada debemos evitar controlar faltas de ejecucion

console.log("Intentamos dividir : 0/10, el resultado es: ")

try //intenta
{
    let result = 0/10; //intentamos dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: " +error.message);
}
console.log("Intentamos dividir : 10/0, el resultado es: ")
try //intenta
{
    let result = 10/0; //intentamos dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: " +error.message);
}
console.log("El resultado la variable a / 10, el resultado es: ")
try //intenta
{
    let result = "a"/10; //intentamos dividir un entero entre 0
    
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: " +error.message);
}
try //intenta
{
    let result = a/10; //intentamos dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: " +error.message);
}

console.log("Intentamos dividir : el valor de la variable x / entre el valor de la variable y, el resultado es: ")

try
{
    let x=8; y=2, result = x/y;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message)
}

console.log("%c5.- Control de ciclos (BREAK / CONTINUE)", style_console);
//En algunas ocaciones sera importante detener un ciclo de manera abrupta para controla casos especiales en un ciclo

console.log("Vamos a recorrer del 1 al 10....")
for (let num = 1;num <= 10; num++){
    console.log(num)
}
console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que es mala suerte que solo por hoy para")

for(let num = 1; num <=10; num++){
    if (num==8)
        break;
    else
    console.log(num);
}
console.warn("---Separacion---");

for(num =1; num <=10; num++){
    if(num==7)
    {
        continue;
    }
    console.log(num)
}

console.log("%c6.- Ciclo iterativo - (FOR)", style_console);
//Recorre de manera iterativa (i), de incrementa o decrementa

console.log("Los dias de la semana en orden ascendente son:")
let dias = ["Domingo","Lunes", "Martes", "Miercoles","Jueves","Viernes","Sabado"]
for (let i=0; i<dias.length;i++){
    console.log(dias[i])
}

console.log("Los meses del año en orden ascendente son:")
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=meses.length-1; i>=0;i--){
    console.log(meses[i])
}
console.log("%c7.- Ciclos condicionales - (WHILE)", style_console);
//Los ciclos (BUCLE) dependen de una condicion para continuar y seguir ejecutandose
let finDeSemana = false;
let mensaje = "";
let j = 0;
//usamos J para que coincida  con el indice
while (j < dias.length){
    switch(j)
    {
        case 0:
            finDeSemana = true;
            mensaje = "Domingo de Resurreccion";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "Maldito Lunes";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Martesito";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Miercolitrosss"
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Juevebes"
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Vebiernes"
            break;
        case 6:
            finDeSemana = false;
            mensaje = "Sabadito";
            break;
    }
        //Impirmi el nombre del dia y su mensaje
    if (!finDeSemana)
    {
        console.log(`Dia ${dias[j]}`)
        console.log(`Mensaje del dia ${mensaje}`)
    }
    j++;
}

console.log("%c8.- Ciclo condicionales, que se ejecuta al menos una vez - (DO WHILE)", style_console);
console.log("---SERIE---HEARTSTOPPER---")
let episodio = [
    "Episodio 1 : El encuentro",
    "Episodio 2 : La atraccion",
    "Episodio 3 : El beso",
    "Episodio 4 : El secreto",
    "Episodio 5 : El amigo",

];

let indice = 0;
let continuarViendo = true; //Esta variable simlua la desicion del usuario de continuar viendo
do {
    console.log(`Reproduciendo ${episodio[indice]}`)
    //simulamos la reproduccion del usuario
    indice++;

    //simulamos una pregunta al usuario si desea seguir viendo

    if (indice < episodio.length){
        continuarViendo = confirm("Deseas continuar con el siguiente episodio?")
    } else{
        continuarViendo = false; //cuando se acaba la lista de episodios
    }

} while (continuarViendo && indice < episodio.length);
console.log("Fin de la reproduccion")

console.log("%c9.- Ciclos para recprer elemntos finitos - (FOR...OF)", style_console);

let seriesTrending = [
    {nombre: "Heartstopper", temporadas: 3, totalViewers: "1.5M", totalReprods: "1.0M" },
    {nombre: "Loki", temporadas: 4, totalViewers: "2.5M", totalReprods: "2.0M" },
    {nombre: "The boys", temporadas: 2, totalViewers: "7.5M", totalReprods: "1.2M" },
    {nombre: "My Hero Academia", temporadas: 7, totalViewers: "12.5M", totalReprods: "4.0M" },
    {nombre: "The last time", temporadas: 4, totalViewers: "2.5M", totalReprods: "2.0M" },
];

//usando for...of para recorrer la lista

for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`)
}


console.log("%c10-. Ciclos para recorrer las propiedades de elementos finitos (FOR...IN)", style_console)
//usando for...in

for (let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}:`);

for (let propiedad in seriesTrending[i]){
    console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`)
    }
    console.log(`--------------`)
}

console.log("%c11-. Ciclos inenterrumpidos para el tamaño del arreglo (forEach)", style_console)

//lista de series de TV trending con temporadas, viewers y reproducciones
let seriesTrending2 = [
    {
      nombre: "La Casa de Papel",
      temporadas: "5",
      viewers: "800000",
      reproducciones: "25000000",
    },
    {
      nombre: "The Boys",
      temporadas: "5",
      viewers: "1200000",
      reproducciones: "1500000",
    },
    {
      nombre: "Los 100",
      temporadas: "7",
      viewers: "1600000",
      reproducciones: "80000000",
    },
    {
      nombre: "Bob Esponja",
      temporadas: "14",
      viewers: "20 M",
      reproducciones: "80 M",
    },
    {
      nombre: "Reacher",
      temporadas: "3",
      viewers: "400000000",
      reproducciones: "70000000000",
    },
  ];

// Usando forEach para recorrer cada serie y calcular la calificacion
seriesTrending2.forEach((serie, index) => {
    // Cambié 'Serie' a 'serie'
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);
    //Calcula la calificación y la redondea a 2 decimales
    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporadas: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viewers}:`);
    console.log(`Reproducciones: ${serie.reproducciones}:`);
    console.log(`Calificación: ${calificacion}:`);
    console.log(`--------------------`);
  });
  
  //Usando filter para filtrar y map para transformar la informacion
  //Lista de series que queremos verificar
  let seriesDeseasas = ["The Witcher", "The Boys", "Loki"];
  //Usando map e includes para filtrar y obtener los nombres de las series con 3 temporadas
  let seriesConTresTemporadas = seriesTrending2
    .filter((serie) => serie.temporadas <= 3)
    .map((serie) => serie.nombre)
    .filter((nombre) => seriesDeseasas.includes(nombre));
  
  //Mostrar los resultados
  console.log("Series con 3 temporadas que estan en la lista deseada");
  console.log(seriesConTresTemporadas);
