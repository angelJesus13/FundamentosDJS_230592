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
console.log(`Dado que nacio `)