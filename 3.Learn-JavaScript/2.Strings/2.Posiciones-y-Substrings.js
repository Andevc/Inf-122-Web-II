/* Hay dos conceptos muy importantes: Substring y posción.
     
     - Un substring es un fragmento más pequeño que forma parte de un String. Tambien 
     se suele hacer referencia a ellos como subcadena o subcadena de texto

     - Una posición (indice) es un 'Number' que representa el lugar donde está ubicado un 
     substring, teniendo en cuenta que se empieza a contar en 0.

     Ej:
          "Hola amigos"       =>   "amigos" es un substring
          "Hola amigos"       =>    la posición o índice de "amigos" es 5
          ^0123456789
*/

//--------------------------------------------------------------------------------------------------------------
/* --x-- Obtener posición o índice --x-- 

Existen varios métodos que permiten darnos información sobre la posición o ubicación.
Veamos detalladamente dichos métodos:
     - .chartAt(pos)          -> Devuelve el carácter de la posición pos. Similar a [].
     - .indexIf(text)         -> Devuelve la primera posición del texto text.
     - .indexOf(text, from)   -> Idem al anterior, partiendo desde la posición from.
     - .lastIndexOf(text)     -> Devuelve la última posición del texto text. 
     - .lastIndexOf(text,from)-> Idem al anterior, partiendo desde from hacia el inicio.*/

/* --x-- Carácter en cierta posición --x--

El método .charAt(pos) nos permite comprobar que carácter se encuentra en la posición pos 
del texto. Este método devolverá un string con dicho carácter. En caso de pasarle una posición 
que no existe o imposible (negativa), simplemente nos devolverá un string vacío. El valor por 
defecto de pos es 0, por lo que si se omite el parámetro, obtendrá el primer elemento.

No obstante, es preferible utilizar el operador [] para obtener el carácter que ocupa 
una posición, ya que es más corto y rápido de utilizar y mucho más claro.
*/
const nom = "Andev";

// Utilizando .charAt
nom.charAt();      // 'A'
nom.charAt(0);     // 'A'
nom.charAt(1);     // 'n'
nom.charAt(10);    // ''

// Utilizando operador []
// nom[];             // ERROR
nom[0];            // 'A'
nom[1];            // 'n'
nom[10];           // undefined
     
/* --x-- Posicion de cierto carácter --x--
El método .indexOf(text, from) realiza la función «opuesta» a charAt(). 
El método .indexOf(text) buscará el subtexto text en el strinfy nos devolverá la posición 
de la primera aparición de dicho subtexto. En caso de no encontrarlo, devolverá -1. 
El parámetro from es opcional, y es la posición en la que empezará a buscar, 
que si no se suministra, es 0.*/
const frase = "LenguajeJS, página de Javascript";

frase.indexOf("n");          // 2
frase.indexOf("n", 3);       // 16
frase.indexOf("n", 17);      // -1

/* --x-- Posición desde el final --x--
El método lastIndexOf(text, from) funciona exactamente igual que el anterior, sólo que 
realiza la búsqueda partiendo desde el final de la cadena de texto hacia el principio, 
de modo que busca primero las últimas apariciones, en lugar de las primeras: */
const frase2 = "LenguajeJS, página de Javascript";

frase2.lastIndexOf("n");      // 16
frase2.lastIndexOf("n", 3);   // 2
frase2.lastIndexOf("n", 1);   // -1
//--------------------------------------------------------------------------------------------------------------
/* --x-- Obtener fragmentos (substrings) --x--

JS posee una serie de métodos mediante los cuales podemos crear substrings formados por un 
fragmento del string original.
     - .repeat(n)      -> Devuelve el string repetido n veces.
     - .substring(strat, end) -> devuelve el substring desde la posición start hasta end.
     - .substr(start, size)   -> devuelve el substring desde la posición start hasta start+size.
     - .slice(strat, end)     -> identico a .substr() con leves diferentes.
*/
// Ej: Repetir cadena de texto
const txt = "Hola";
txt.repeat(3);      // "HolaHolaHola"
/* --X--  Fragmento de texto (substring) --x--
Otras operaciones fundamentales es la posivilidad de extraer fragmentos de texto de un string,
para ello hay dos aproximaciones: substring() o substr()
     - substring(start, end) -> devuelve un string con el fragmento desde start hasta end, si se
     omite end, el subtexto abarcará desde start hasta el final.

     - substr(start, size) -> devuelve un fragmento del string desde la posición start, hasta la posición
     start+size. Dicho de otra forma, size será el tamaño del string resultant,si se
     omite size, el subtexto abarcará desde start hasta el final.
*/

const text = "Programación";

text.substring(3);  // "gramación"
text.substring(3,6);  // "gra"
text.substr(3 , 5);   // "amac"

/* --x-- Dividir un texto en partes (array) --x--
Un método muy útil y versátil es .split(text). Permite divider un string por el substring text
utilizandolo como separador las veces que haga falta. Como resultado devolvera un array con cada una
de las partes divididas. 
     - .split(text)      -> Separa el texto en varias partes, usando text como separador.
     - .split(text, limit) -> Identico al anterior, pero crea como maximo limit fragmentos.
     - .split(regexp)    -> Separa el texto usando la regexp como separador.
     - .split(regexp, limit) -> Identico al anterior, pero crea como máximo limit fragmentos.
 */


"88.12.44.123".split(".");    // ["88","12","44","123"] (4 elemtos)
"1.2.3.4.5".split(".");       // ["1","2","3","4","5"] (5 elemtos)
"Hola a todos".split(" ");    // ["Hola","a","todos"] (3 elemtos)
"A,B,C,D,E".split(",", 3);    // ["A","B","C"] (limitado a los 3 primeros elemtos)
"Codigo".split("");           // ["C","o","d","i","g","o"] (6 elemtos)


// Separa tanto por punto como coma
"88.12,44.123".split(/[.,]/); // ["88","12","44","123"] (4 elemtos)

