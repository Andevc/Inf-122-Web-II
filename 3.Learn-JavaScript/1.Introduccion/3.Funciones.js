/* Creacion de Funciones: Hay varias formas de crear funciones en JS:
     - Declaracion --> function nombre(p1,p2,...) { }
     - Expresion --> const nombre = function(p1,p2,...) { }
     - constructor de Objeto --> new Function(p1,p2..., code)
*/
//--------------------------------------------------------------------------------

// Funciones por Declaración: Es la forma mas popular de crear una variable

function saludar(){
     return 'Hola!';
};
saludar(); // 'Hola!'

//--------------------------------------------------------------------------------

// Funciones por Expresión: Es una funcion guardada dentro de una variable
// La segundo "despedida" (nombre de la función) se suele omitir: es redundante

const despedida = function despedida(){ 
     return 'Adios!'
};
despedida(); // 'Adios!'

//--------------------------------------------------------------------------------

// Funciones como Objetos: este enfoque no suele ser muy usado en produccion

const saludo2 = new Function('return "Hola!"; ');

saludo2(); // "Hola!"
//--------------------------------------------------------------------------------

// Funciones Anonimas: Las funciones anonimas o funciones lambda
// son un tipo de funciones que se declaran sin nombre y se alojan en una variable

const despedida2 = function(){
     return 'Adios!';
};
despedida2; // f (){ return 'Adios!';}
despedida2(); // 'Adios!'

//--------------------------------------------------------------------------------

// Callbacks/Retrollamadas. A grandes rasgos, un callback(llamada hacia atras).
// es pasar una funcion B por parametro a una funcion A

const funcionB = function(){
     console.log("Funcion B ejecutada");
};
const funcionA = function( callback ){
     callback();
};
funcionA(funcionB);

/* Esto nos puede permitir crear varias dunciones para utilizar el modo callback y   
reutilizarlas posteriormente con varios propositos. De hecho los callbacks se usan como 
primera estrategia para trabajar con la asincronía. */

const funcionError = function(){ console.log('Error'); };
const funcionA2 = function( callback, callbackError){
     const n = ~~(Math.random()*5);
     if( n > 2) callback();
     else callbackError();
};
funcionA2(funcionB, funcionError); //Si ejecutamos varias veces, algunas daran error y otras no.

/* En caso de que las funciones callbacks sean muy cortas, muchas veces utilizamos 
directamente la funcion anonima, sin necesidad de guardarla en una variable */
funcionA2(
     function(){console.log("Funcion B Ejecutada."); },
     function(){ console.error("Error"); }
);
/* Aunque se suele evitar para facilitar la legibilidad del codigo, y solo
se utiliza en casos muy especificos donde estas seguro que no vas a reutilizar la funcion callback 
o no te intereza guardarla en una variable */

//--------------------------------------------------------------------------------

// Funciones Autoejecutables
/* Pueden existir casos en los que necesites crear una funcion y ejecutarla sobre la 
marcha. Basicamente, solo tenemos que envolver entre parentesis la funcion anonima */

(function () { console.log("Hola!!!"); })();
// Funcion Autoejecutable con parametros
(function (name){ console.log(`¡Hola, ${name}!`); })('Andev');

/* Ten en cuenta, que si la funcion autoejecutable devuelve algun valor 'return',
a diferencia de las funciones por expresion, en este caso se almacena en una variable */
const f = (function(name){ return `¡Hola, ${name}!`; })("Andev");

f; // '¡Hola, Andev!'
typeof f; // 'string'

//--------------------------------------------------------------------------------

/* Clausuras: A grandes rasgos, una clausura o cierre se define como una funcion que 
<<encierra>> variables en su propio ámbito( y que continuan existiendo aún habiendo terminado la funcion).
*/
const increment = (function (){
     let num = 0;
     return function(){
          num++;
          return num;
     };
})();

increment(); // 1
increment(); // 2
increment(); // 3
/* La <<magia>> de las clasuras es que en el interior de la funcion autoejecutable 
estamos creando una variable num que se guardara en el ambito de dicha funcion, por 
lo tanto existira con el valor declarado:0*/

//--------------------------------------------------------------------------------
/* Arrow Functions/Funciones en flecha: son una forma corta de escribir funciones,
basicamente se trata de reemplazar/eliminar la palabra 'function' y añadir => 
antes de abrir las llaves.*/
const funcNormal = function(){
     return "Funcion tradicional";
};
const funcArrow = () =>{
     return "Funcion Flecha";
};

/* Sin embargo, las Arrow Functions tienen algunas ventajas a la hora de simplificar el codigo.

     - Si el cuerpo de la funcion solo tiene una linea, podemos omitir las llaves ({}).
     - Ademas, automaticamente se hace un return de esa unica linea, por lo que podemos omitir el return.
     - En el caso de que la funcion no tenga parametros, se indica como en el ejemplo anterior: () => .
     - En caso de que tenga un solo parametro, se puede indicar simplemente el nombre del mismo: e => . 
     - En el caso de que la funcion tenga mas parametros se indica de la siguiente forma: (a, b) => .
     - Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, sepuede englobar en parentesis: ({name: 'Andev'}). */

     const fun = () => "Funcion flecha.";
const fun2 = ( e ) => e + 1;
const fun3 = ( a, b ) => a + b;

//--------------------------------------------------------------------------------
/* Ambito lexico de this: Una de las diferenci(as principales de las funciones en flecha
respecto a las funciones tradicionales, es el valor de la palabra clave 'this', que no siempre es la misma */

// Si las funciones son globales, no notaremos ninguna diferencia

const a = function(){
     console.log(this);
};

const b = () => {
     console.log(this);
};

a(); // Window
b(); // Window

// Sin embargo, si la usamos una funcion en el interior de un objeto(el caso mas habitual) si encontraremos diferencias.
padre ={
     a: function (){
          console.log(this);
     },
     b: () =>{
          console.log(this);
     }
};
padre.a(); // padre
padre.b(); // Window

/* Esta es una diferencia clave que hay que tener en cuenta a la hora de usar 
las funciones en flecha, Una buena practica es utilizar funciones tradicionales como las 
de primer nivel y luego en su interior o en callbacks, usar las funciones en flecha */
