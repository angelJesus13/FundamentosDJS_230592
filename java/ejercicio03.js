//Objetos
//const bb

const bg = "Linear-gradient(45deg, rgba(250,0,0,1)10%, rgba(234,54,33,3)55%,rgba(124,55,212,1)100%)";
const style_console = `background: ${bg}; 
                      color: white; 
                      border-radius: 12px; 
                      padding: 8px 12px; 
                      font-size: 1rem; 
                      font-weight: bold; 
                      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
                      text-shadow: 2px 2px 4px rgba(0,0,0,0.5); 
                      border: 1px solid rgba(255,255,255,0.3)`;
console.warn("Practica 4: Repaso de Objetos en java script");
//variables independientes
console.log("%c1-. Variables independientes", style_console)
//declaramos variables independientes relacionadas a un producto
let Producto_Nombre = 'Apple Iphone 16"';
let Producto_Marca = "Apple";
let Producto_Modelo = "Iphone";
let Producto_Precio = 25000.0;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("IOS787VV-HX9921W");
let Producto_Stock = 666;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = [
  "Electrónicos",
  "Celulares",
  "Ios",
  "Promociones CyberMonday",
  "Mejor Valorados",
];
//accedemos a los valores de las caracteristicas de del producto de manera independiente
console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre}, tipo de dato: <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, tipo de dato: <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, tipo de dato: <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, tipo de dato: <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, tipo de dato: <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, tipo de dato: <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, tipo de dato: <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, tipo de dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, tipo de dato <${typeof(Producto_Categorias)}>    
`);
console.log("En el caso del SKU al serl un symbol, no se puede concatenar a la cadena de la impresion anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));
//Ahora declaramos como un objeto
console.log("%c2.- Objeto", style_console);
let Producto = {
  Nombre: "Tenis Deportivos",
  Marca: "Hoka",
  Modelo: "SpeedGoat 6",
  Precio: 4000.0,
  Disponibilidad: false,
  Stock: 0,
  ID: 3216,
  SKU: "HK23525-S98",
  Imagen: ".",
  Barcode: null,
  Categorias: ["Deportes", "Running"],
};
// Ahora leemos el objeto completo
console.table(Producto);

console.log("Accediendo a propiedades específicas del PRODUCTO");
console.log(
  `Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`
);
console.log(`Precio: ${Producto.Precio}`);
if (Producto.Disponibilidad == 0) console.log(`Estatus: Agotado`);
else console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

// Desestructuración de Objetos.
