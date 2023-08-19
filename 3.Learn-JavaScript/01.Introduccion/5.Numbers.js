// ¿Qué es una variable nuemérica?

/* En js, los números son uno de los datos basicos,para crearlos , simplemente basta con escrbirlos
literalmente, no obstante, como en js todo se puede representar con objetos, tambien se puede declarar
mediante la palabra clave 'new'.

     new Number(number) -> crea un objeto numerico a partir del número number pasado por parametro  Comprueba si number es un número
     number -> simplemente, el numero en cuestrion. (Notación preferida)

Sin embargo, aunque existan estas dos formas de declararlas, no se suele utilizar la notación new con números.*/

// Notacion Literal (preferida)
const number = 4;
const decimal = 15.8;
const legibleNumber = 5_000_000;
// Notacion con objetos (evitar)
const number1 = new Number(4);
const decimal2 = new Number(15.8);
const letter = new Number("A");

/* Para los decimales se usa el (.), mientras que de forma opcional podemos usar (_) para visualizar y 
reconocer las magnitudes que usamos.*/

5_000_000 === 5000000;   // true

/* Cualquier parametro pasado al new Number() que no sea número,dara como resultado NaN (Not A Number).
Tambien hay casos donde un numero muy grande (o pequeño) tenga un comportamiento extraño, ej: */
const incorrectNumber = 12893298427538741234;     // 12893298427538741000 (Diferente)
const bigNumber = 12893298427538741234n;          // 12893298427538741234n (El Mismo)

/* 
--x-- RANGOS NUMERICOS SEGUROS --x--
Algo que hay que tener muy en cuenta en JS (y en general), es que cuando trabajamos con datos numéricos,
es posible que no se puedan representar exactamente, y no sean tan precisos como nos gustarí, esto ocurre
porque se guardan en un formato llamado "coma flotante de doble precisión".
Existen una serie de constantes definidas, que marcan los límites mínimo o máximo. 

     - Number.MAX_VALUE  -> ~2^1024     -> Valor más grande.
     - Number.MIN_VALUE  -> ~5x10^-324  -> Valor más pequeño.
     - Number.MAX_SAFE_INTEGER  -> (2^53)-1    -> Valor seguro más grande
     - Number.MIN_SAFE_INTEGER  -> -((2^53)-1) -> Valor seguro más pequeño
     - Number.EPSILON    -> 2^-52  -> Número muy pequeño

--x-- VALORES NUMERICOS INFINITOS EN JS --x--
Si simplemente quieres representar un número muy alto, sin importar el valor en sí, puedes usar la
constante Infinity. De la misma forma, la constante -Infinity se puede utilizar pava valores muy bajos

     - Number.POSTIVE_INFINITY     -> Infinity    -> Infinito positivo
     - Number.NEGATIVE_INFINITY    -> -Infinity   -> Infinito negativo

Los valores infinitos se pueden operar con números, pero ten en cuenta las reglas de los infinitos, y que 
en algunos casos pueden resultar indeterminaciones por lo que nos dara como resultado NaN

--x-- COMPROBACIONES NUMERICAS --x--
Si se quiere conocer la naturaleza de una variable numérica (finito,entero o seguro), se las puede comprobar
con uno de los metodos estaticos de Number:

     - Number.isFinite(number)     -> Comprueba si number es un número finito
     - Number.isInteger(number)    -> Comprueba si number es un número entero
     - Number.isSafeInteger(number)-> Comprueba si number es un número seguro
*/
// Es Finito?
Number.isFinite(43);     // true
Number.isFinite(435.2);  // true
Number.isFinite(Infinity); // false
// Es Entero?
Number.isInteger(4);     // true
Number.isInteger(4.43);  // false, es decimal
// Es Seguro?
Number.isSafeInteger(1e15);   // true (valor en la franja verde)
Number.isSafeInteger(1e16);   // false(valor en la franja amarilla)

1e309 === Infinity;           // true
Number.isSafeInteger(1e309);  // false (valor en la franja roja)

/* --x-- REPRESENTACION NUMERICA --x--
En JS hay dos formas de representar los números: la notación exponencial (basada en potencias de 10) y la 
notacion de punto fijo (una cantidad de digitos para la parte entera y otra para la parte decimal).
Podemos cambiar entre ellas usando los sigts. metodos:

     - .toExponential(digits) -> Convierte el número a notacion exponencial con digits decimales
     - .toFixed(digits)       -> Convierte el número a notacion de punto fijo con digits decimales
     - .toPrecision(size)     -> Utiliza size digitos de precisión en el número
 */

// Notacion Exponencial
(1.25).toExponential(0);      // "1e+0"
(1.25).toExponential(2);      // "1.3e+0"
(1.25).toExponential(3);      // "1.25e+0"
(1.25).toExponential(4);      // "1.250e+0"

// Notacion Punto Fijo
(1.25).toFixed(0);            // "1"
(1.25).toFixed(1);            // "1.3"
(1.25).toFixed(2);            // "1.25"
(1.25).toFixed(3);            // "1.250"

// Cabiando de precision
(523.75).toPrecision(1);      // "53+2"
(523.75).toPrecision(2);      // "5.2e+2"
(523.75).toPrecision(3);      // "524"
(523.75).toPrecision(4);      // "523.8"
(523.75).toPrecision(5);      // "523.75"

/* ¿Que es NaN?
NaN (Not A Number). Sin embargo, no hay que dejarse llevar por su significado literal. El valor NaN a pesar 
de su significado, se usa para representar valores numéricos que son indeterminados o imposibles de representar
como número.
     - Indeterminación Matermática: por ejemplo, 0/0.
     - Valores imposibles: por ejemplo: 4 - 'a'
     - Operaciones con NaN: por ejemplo: NaN + 4
El segundo es uno de los mas frecuentes, ya que los datos de extraemos de una pagina web se obtienen como string, 
lo cual da como resultado operaciones de ese tipo, o concatenaciones inesperadas.

Estas son algunas propiedades y metodos relacionados con NaN que existen:
     - Number.NaN   -> Es equivaleste a NaN. Valor que no puede representarse como número
     - Number.isNaN(number) -> Comprueba si number no es un número
*/

// Todos los NaN son diferentes
NaN == NaN;    // false (El valor no es el mismo)
NaN === NaN;   // false (Ni el valor, ni el tipo de dato son el mismo)

Number.isNaN(NaN);  // true   (Forma correcta de comprobarlo)
Number.isNaN(5);    // false  (5 es un numero, no es un NaN)
Number.isNaN("A");  // false  ("A" es un string, no es un NaN)

// Recuerda que NaN significa Not A Number, pero NaN sí es un valor numerico
const num = NaN;
typeof num;              // "number"
num.constructor.name;     // "Number"

/* Conversiones de valores NaN: si intentamos convertir un valor NaN a otro tipo de dato primitivo
utilizando un typecast (forzar conversión explícita), no encontramos lo siguiente */
Boolean(NaN);  // false (convertimos a booleano)
String(NaN);   // "NaN" (convertimos a text)
Number(NaN);   // NaN (Ya estaba en contexto numerico)

// CONVERSIONES NUMERICAS
/*   --x-- Convertir text a numero --x-- 
     Se usan la funciones de parseo, .parseInt() y .parseFloat(),aunque son sencillas, tienen algunos detalles:
          - Number.parseInt(text) -> Convierte un string text en un number entero
          - Number.parseInt(text, radix) -> Idem, pero el string tiene un numero en base number radix
*/
Number.parseInt("43");   //43
Number.parseInt("43€");   //43 (descarta todo desde un caracter no numerico)
Number.parseInt("Num. 43") // NaN (empieza a descartar en Num, descarta tambien 42)
Number.parseInt("A");   //NaN (No se puede representar como numero)
Number.parseInt("43.13") // 43 (descarta los decimales)
/*  --x-- Numeros decimales--x-- 
          - Number.parseFloat(text) -> convierte un string text en un decimal
          - Number.parseFloat(text, radix) -> Idem, pero el string tiene un numero en base radix
*/
Number.parseFloat("45.43");    // 45.43 (Concerva decimales)
Number.parseFloat("45.43€");    // 45.43 (Concerva decimales)
Number.parseFloat("45");    // 45 (El numero es entero, convierte a entero)
Number.parseFloat("ABC");    // NaN 
// Convertir desde otra base: se usa el parametro radix, para comvertir el numero a cualquier base numerica.
     Number.parseInt("110",2);     // 110 en binario, es 6 decimal
     Number.parseInt("31",8);     // 31 en octal, es 25 decimal
     Number.parseInt("FF",16);     // FF en hexadecimal, es 225 decimal
     // Otra forma de representar estos numeros es usando la nomenclatura de la base mediante un prefijo 0b,0o o 0x.
     0b110;    // 6
     0o31;     // 25
     0xFF;     // 255
// Convertir desde decimal: lo ideal es usar el metodo .toString() de los string

(16).toString();    // "16" (Convierte a string)
(43.16).toString();    // "43.16" (Convierte a string)
(10).toString(2);    // "1010" (10 en decimal, es 1010 en binario)
(80).toString(8);    // "120" (120 en decimal, es 120 en octal)
(245123).toString(16);    // "3bd83" (245123 en decimal, es 3bd83 en hexadecimal)