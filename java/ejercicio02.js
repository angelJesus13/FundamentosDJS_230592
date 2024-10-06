//Tipos de dato en JS

//1-. UNDEFINED
console.warn("---Tipo de dato: UNDEFINED---")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es:`, typeof(cliente));
cliente = "Angel";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es:`, typeof(cliente));
cliente = 21133;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es:`, typeof(cliente));
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializdas o no declaradas
//2-. BOOLEAN

console.warn("---Tipo de dato: BOOLEAN(True or False)---");
let esPremium = "No lo se";
console.log(`¿El cliente es premium? ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`Asigando el valor de "true" a la variable`);
//si se agregan "" comillas dobles al valor de true lo tomara como un string 
esPremium = true;
console.log(`¿El cliente es premium? ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`Asignando el valor de "False" a la variable`);
esPremium = false;
console.log(`¿El cliente es premium? ${esPremium}`);
console.log(`El tipo de dato de la variable es premium ${typeof(esPremium)}`);

if (esPremium){
    console.log("El cliente pago por usar el servicio premium")
} else {
    console.log("El cliente esta usando los servicios gratuitos")
}

//en el if dependiendo del valor que se le haya asignado a esPremium es el console que se mostrara, esto puede cambiar si en lugar de false al final ponemos true

//3-. NUMBER
console.warn("---Tipo de dato: NUMBER(Numero enteros,positivos,negativos,decimles, flotantes---");
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = 2000;
let monto_transaccion;

console.log(`Tu saldo a dia de hoy es de: ${saldo_cuenta}, Tipo de dato: ${typeof(saldo_cuenta)}`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, Tipo de dato: ${typeof(costo_producto)}`);
cantidad = 5;
console.log(`Has elegido comprar : ${cantidad} productos`);
console.log(`El importe de compra total es: ${cantidad*costo_producto}`);
monto_transaccion = cantidad*costo_producto;
if (saldo_cuenta < monto_transaccion){
    console.log("No te alcanza, abona dinero a tu cuenta o cambia el metodo de pago por uno valido")
} else{
    console.log("Pago aprobado de tus productos")
}
//haremos un abono a la cuenta para que el valor pueda cambiar y muestre mensaje de pago exitoso 

monto_transaccion = 3000;
console.log(`Se recibira un deposito con el monto de: ${monto_transaccion}`)
console.log(`El saldo de tu cuenta es de: ${saldo_cuenta} has recibido dinero en tu cuenta tu nuevo saldo es de: ${monto_transaccion+saldo_cuenta},  tipo de dato ${typeof(monto_transaccion)}`);

//4-. Strings o cadenas de texto
console.warn("---Tipo de dato: STRING---(o cadenas de texto)---") 
const alumno = "Angel de Jesus";
let producto;

console.log(`El nombre del alumno es: ${alumno}, y su tipo de dato es: ${typeof(alumno)}`);
producto = "Monitor Samsung\"";
console.log(`El nombre del producto es: ${producto}, y su tipo de dato es: ${typeof(producto)}`);
//Manipulacion de un STRING 

console.log(`Mas adelante podremos transformar los STRING a mayusculas con funciones especificas para el caso mencionado y la funcion es: ${alumno}=> ${alumno.toUpperCase()}`);
console.log(`En este caso se usara otra otra funcion para convertir a minusculas y la funcion es: ${producto}=> ${producto.toLowerCase()}`);

let numero = "30";
let numero2 = 40;
console.log(typeof numero);
console.log(typeof numero2);

//5-. BigInit (Enteros de dimensiones amplias, generalmente este se usa para obtener una precision numerica mas exacta)
console.warn("---Tipo de dato: BIGINIT---");
const numeroGrande = 151511231;
const numeroGrande2 = 7814567564645646545645;
let numeroGrande3 = 59689461616989145631619189;
let numeroGrande4 = 58155134997497979749495626912161;

console.log(`El experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El experimento de un numero grande es: ${numeroGrande3}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El experimento de un numero grande es: ${numeroGrande4}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande4)}`);
//para definir el tipo de dato BigInt debemos invocar la funcion BigInit o usar la letra "n" al final de un numero para asignacion de un valor
console.log("Declaramos los numeros de gran tamaño");
numeroGrande3 = BigInt(16484947897894949161949491616194);
numeroGrande4 = 16484947897894949161949491616194n;

console.log(`El segundo experimento de un numero grande es: ${numeroGrande3}, y su tipo de dato es: ${typeof(numeroGrande3)}`)  
console.log(`El segundo experimento de un numero grande es: ${numeroGrande4}, y su tipo de dato es: ${typeof(numeroGrande4)}`)
//hay que considerar que los tipo de dato bigint no son operables con los de tipo number

let numero1 = 238;
console.log(typeof(numeroGrande));
//si quitamos la asignacion de BIGINT a numero1, nos dara en consola un error de division porque los tipos de dato no son operables entre si 
console.log(`El resultado de la operacion de: numeroGrande4/numero1 es: ${numeroGrande4/BigInt(numero1)}`);

// 6. Symbol
console.warn("--- Tipo de Dato - SYMBOL (Simbolo o Forzar la Unicidad)")
// VID APUNTES
// const primerSymbol = Symbol(30);
// const segundoSymbol= Symbol(30);

// console.log(primerSymbol===segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());

// Marco APUNTES

// Declaramos diferentes variables con valores similares o iguales?
const numero3 = 2;
const numero4 = 2.0;
const numero5 = "2";
const numero6 = "2.0";
const numero7 = Symbol(2);
const numero8 = Symbol(2.0);
const numero9 = Symbol("2");
const numero10 = Symbol(2);
// Prueba de comparación 1: ¿Es 2 = 2.0?
console.log("Prueba de comparación 1:");
if(numero3 == numero4){
    console.log(`Se han comparado los valores de numero3 y numero4, confirmando que tienen el mismo valor.`)
} else {
    console.log(`Se han comparado los valores de numero3 y numero4, detectando que NO tienen el mismo valor.`)
}

// Prueba de comparación 2: ¿Es 2 = "2"?
console.log("Prueba de comparación 2:");
if(numero3 == numero5)
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 3: ¿Es 2 estrictamente = "2"?
/* 
= Es asignación 
== Igualdad de valor
=== Igualdad estricta (compara valor y tipo de dato)
*/
console.log("Prueba de comparación 3:");
if(numero3 === numero5)
    console.log(`Se han comparado los valores de numero3 y numero5, confirmando que tienen el mismo valor.`)
 else 
    console.log(`Se han comparado los valores de numero3 y numero5, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 4: ¿Es 2 = "2.0"?
console.log("Prueba de comparación 4:");
if(numero3 == numero6)
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores d enumero1 y numero4, detectando que NO tienen el mimso valor.`)

    
// Prueba de comparación 5: ¿Es 2 estrictamente = "2.0"?
console.log("Prueba de comparación 5:");
if(numero3 === numero6)
    console.log(`Se han comparado los valores de numero3 y numero6, confirmando que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores d enumero1 y numero6, detectando que NO tienen el mimso valor.`)

// Prueba de comparación 6: ¿Es 2 = Symbol(2)? 
console.log("Prueba de comparación 6")
if (numero1 == numero7)
    console.log(`Se han comparado los valores de numero1 y numero7, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero7, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 7: ¿Es 2 estrictamente = Symbol(2)? 
console.log("Prueba de comparación 7")
if (numero1 === numero7)
    console.log(`Se han comparado los valores de numero1 y numero7, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero7, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 8: ¿Es Symbol(2) = Symbol(2)? 
console.log("Prueba de comparación 8: ¿Es Symbol(2) = Symbol(2)?")
if (numero1 == numero10)
    console.log(`Se han comparado los valores de numero1 y numero10, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero10, detectando que NO tienen el mismo valor.`)

// Prueba de comparación 9: ¿Es Symbol(2) = Symbol(2)? 
console.log("Prueba de comparación 8: ¿Es Symbol(2) estrictamente = Symbol(2)?")
if (numero1 === numero10)
    console.log(`Se han comparado los valores de numero1 y numero10, confirmado que tienen el mismo valor.`)
else 
    console.log(`Se han comparado los valores de numero1 y numero10, detectando que NO tienen el mismo valor.`)
// 7. Null
const descuento = null;
console.log(typeof descuento);

// El symbol los hace unicos

//7. Null
console.warn("---Tipo de Dato- Null---");
//El tipo de dato nulo se asigna cuando el sistema o usuario saben de la variable pero prefieren dejarlo vacio, bajo su consentimiento
// a diferencia de undefinied que es un valor desconocido
let perfilUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;

//supongamos que estamos programando una red social, tipo faceboook en la parte superior de la informacion se publicara en el perfil del usuario

//si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web, puede explorar el contenido de acceso publico y no existira informacion para mostrar

//En la HU (Historia de usuario), que el usuario desea logearse debera ingresar su numero telefonico o correo electronico y una contraseña que debemos guardar en las variables previamente declaradas

nombreUsuario = "angel.jesu@gmail.com";
passUsuario = "pass1234";
fecha_ultimoPost = undefined
//En este momento de ejecucion del sistema no sabemos su genero, ni su estatus de relacion sentimental

console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`);
//Lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesion en la plataforma actualizando estos valores
//Dado que Angel del genero masculino y denota que sus estatus de relacion no ha sido capturado o lo mantiene privado esto genera la actualizacion de los valores de las variables
generoUsuario = "M";
estatusRelacionSentimental = null
console.log(`El usuario: ${nombreUsuario}, se a logeado exitosamente, al tener acceso a su informacion de perfil podemos deducir que s del genero ${generoUsuario} y que su estatus de relacion es: ${estatusRelacionSentimental} y su ultima publicacion que realizo fue: ${fecha_ultimoPost}`);

//comparando null vs UNDEFINIED
//si bien undefinied y NULL tienen el mismo valor, no tienen el mismo tipo de dato
console.log("Comparación de la identidad entre undefined y null:");
(fecha_ultimoPost == estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor (==)") :
    console.log("Las variables no tienen el mismo valor (==)");

console.log("Comparación estricta de la identidad entre undefined y null:");
(fecha_ultimoPost === estatusRelacionSentimental) ?
    console.log("Ambas variables tienen el mismo valor e identidad (===)") :
    console.log("Las variables no tienen el mismo valor o identidad (===)");
console.warn("---TIPO DE DATO-FUNCTION---")
//8. FUNCTION (funcion)

const saludar = function(nombre){return `HOLA,${nombre}!`}

console.log(saludar(`Angel`));
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}, y el nombres es: Angel`)


