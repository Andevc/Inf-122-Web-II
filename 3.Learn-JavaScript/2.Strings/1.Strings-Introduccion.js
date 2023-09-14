/* ¿ Qué es un String ?
es una variable que posee información de tipo texto, el tipo de dato que tiene es String.
A rasgos genereales, hay dos formas principales de hacer:
     - new String(text)  -> Crea un objeto de texto a partir del texto pasado por parametro. (Evitarlo)
     - "text"  -> simplemente, escribimos el texto entre comillas simples o dobles. (Notación Preferida)
Para englobar los textos, se pueden usar tres tipos de comillas:
     - Comillas simples: ' '
     - Comillas Dobles: " "
     - Backticks: ` `
* Se recomienda decantarse por uno de los dos estilos de comillas (dobles o simples) y no mezclarlos */

// Notación Preferida
const text = "¡Holaaaa!";
const message = 'Otro mensaje :) '
// Notación mediante objetos (Evitarlo)
const text2 = new String("Holaaaaaa!"); 
const message2 = new String('Otro mensaje :)');

// A diferencia de otros lenguajes JS no diferencia entre cadenas de texto (string) y carácteres (char).

//--------------------------------------------------------------------------------------------------------------

/* --x-- Propiedades de un String --x-- 
Al crear una variable con contenido de text, automáticamente pasa a terner a su disposición todas las 
propiedades/métodos disponibles para ese tipo de dato.
     - .length     -> Devuelve el número de carácteres totales del texto.
     Ej:
          "Hola".length;    // 4
          "Adiós".length;   // 5
          "".length;        // 0
          "¡Yeah!".length;  // 6
          
--x-- Acceso a un carácter --x--
Un string esta formado por carácteres, de la forma que el texto "Hola" -> "H","o","l","a".
Si queremos acceder a cada uno de ellos, podemos utilizar el operador [] indicando la posición
a la que queremos acceder. */

const texto = "Hola";
texto[0];      // "H"
texto[1];      // "o"
texto[2];      // "l"
texto[4];      // undefined

// Si intentamos acceder una posición (índice) que no existe, devuelve undefinded

//--------------------------------------------------------------------------------------------------------------

/* --x-- Métodos de un string --x--
El método .repeat() esta disponible en cualquier string, y basicamente repiete el texto en cuestion
las veces que se le indica por parametro. */

const textRepeat = "Javascript";
textRepeat.repeat(3);   // "JavascriptJavascriptJavascript"

//--------------------------------------------------------------------------------------------------------------

/* --x-- Interpolación de Variables --x-- 
En ECMAScript (ES2015) se introduce una interesante mejora para manipular los strings, sobre todo 
respecto a la legibilidad del código.
Si quieremos concatenar (unir) varias cadenas de texto, teniamos que hacer algo parecido a esto: */
const texto1 = "frase"
const texto2 = "concatenada"
const txtConcatenado = "Una " + texto1 + " bien " + texto2;  // "Una frase bien concatenada"

/* A medida que añadimos más variables o contenido, el código se puede hacer mas complejo de leer.
Para evitar complejidad se introducen los blackticks (comillas hacia atras), que permiten interpolar
el valor de las variables sin tener que cerrar, concatenar y abrir el string continuamente. */

const txt1 = "frase";
const txt2 = "concatenada";
const txtConcat = `Una ${txt1} mejor ${txt2}`; // "Una frase bien concatenada"

/* Esto a priori, es una funcionalidad muy simple, pero puede llegar a mejorar sustancialmente la 
legibiladad de código generado. Ademas aporta una seria de ventajas:
     - Permite múltiples líneas, algo que no se puede hacer con las demas comillas
     - Permite interpolar expresiones JavaScript (no solo variables)
     - Permite interpolar el valor de una variable
Todo esto hace ideal para crear plantillas reutilizables, por ejemplo con código HTML: */

const magicTxt = `<strong>Magic text</strong>`;
const template = `
     <div class="container"> 
          ${magicTxt}
     </div>
`;

/* Observa que template incluye el código HTML de magicTxt, algo que quizás no tiene mucho sentido 
aún, pero que puede tomar sentido si pensamos en crear funciones reutilizables: NicePage*/

function makeButton(className, text){
     return `<button class="${className}">${text}</button>`
}

makeButton("primary", "Aceptar");  // <button class="primary">Aceptar</button>
makeButton("warning", "Eliminar"); // <button class="warning">Eliminar</button>