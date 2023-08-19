/* MATH OBJECT
Cuando se trabaja con JS, se puede realizar gran cantidad de operaciones matematicas de forma nativa,
sin nicesidad de librerías externas, para ello se hace uso del objeto Math que tiene incorporadas ciertas
consttantes y metodos(funciones) para trabajar matematicamente.
--x-- Constantes de Math --x--
     - Math.E       -> Numero de Euler         
     - Math.LN2     -> Equivalente a Math.log(2)            
     - Math.LN10    -> Equivalente a Math.log(10)           
     - Math.LOG2E   -> Equivalente a Math.log2(Math.E)      
     - Math.LOG10E  -> Equivalente a Math.log10(Math.E)     
     - Math.PI      -> Numero PI                            
     - Math.SQRT1_2 -> Equivalente a Math.sqrt(1/2)         
     - Math.SQRT2   -> Equivalente a Math.sqrt(2)        

--x-- Métodos Matemáticos --x--
     - Math.abs(x)       -> Valor Absoluto de x.
     - Math.sign(x)      -> Devuelve el signo del número: 1 positivo, -1 negativo.
     - Math.exp(x)       -> Exponenciación. Devuelve e^x.
     - Math.expm1(x)     -> (e^x)-1.
     - Math.max(a,b,...) -> Devuelve el número más grande de los indicados por parámetro.
     - Math.min(a,b,...) -> Devuelve el número más pequeño de los indicados por parámetro.
     - Math.pow(base,exp)-> Potenciación. Devuelve base^exp.
     - Math.sqrt(x)      -> Devuelve la raíz cuadrada de x.
     - Math.cbrt(x)      -> Devuelve la raíz cúbica de x.
     - Math.imul(a,b)    -> Equivalente a a*b, pero a nivel de bits.
     - Math.clz32(x)     -> Devuelve el número de ceros a la izquierda de x en binario (32 bits).*/

Math.abs(-5);            // 5
Math.sign(-5);           // -1
Math.exp(1);             // e => 2.718281
Math.expm1(1);           // 1.718281
Math.max(1, 40, 5, 15);  // 40
Math.min(1, 10, -5, 0);  // -5
Math.pow(2,10);          // 1024 (Equivalente a 2**10)
Math.sqrt(9);            // 3
Math.cbrt(8);            // 2
Math.imul(0xffffffff, 7);// -7
// Ejemplo de clz32 (count leading zeros)
const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2);
// Devuleve "00000000000000000000000000000001"
/* --x-- Método Math.random() --x--
     - Math.random()     -> Devuelve un número al azar etre 0 y 1 con 16 decimales.
Normalmente, cuando queremos trabajar con números aleatorios, lo que buscamos es obtener un número
entero al azar entre a y b. Para ello, se suele hacer lo sigte:*/

let numRnd = Math.random();   // Obtenemos un número al azar entre [0,1] con 16 decimales.
numRnd = numRnd * 5;     // Multiplicamos dicho número por el valor máximo que buscamos.
x = Math.floor(x);  // Redondeamos inferiormente, quedandonos con la parte entera.

/* Este ejemplo nos dará en X un valor al azar entre 0 y 5. Tambien se puede realizar 
de forma directa como el sigte. ejemplo: */

// Número al azar entre 0 y 5 (no incluido)
const numRnd2 = Math.floor(Math.random() * 5);
// Equivalente al anterior
const numRnd3 = ~~(Math.random() * 5);
/*  Como se puede ver usamos el operador a nivel de bits ~~(doble negacion) como reeemplazo rapido de
Math.floor(), una funcion que realiza un redondeo inferior. */

/* --x-- Métodos de Logaritmos --x--
JS incorpora varios objetos Math para trabajar con logaritmos. Desde Logaritmos Neperianos
hasta Logaritmos Binarios a través de las sigts. funciones: 
     - Math.log(x)       -> Logaritmo Natural     -> ln X ó log_e X
     - Math.log10(x)     -> Logaritmo Decimal     -> log X ó log_10 X
     - Math.log2(x)      -> Logatitmo Binario     -> log_2 X
     - Math.log1p(x)     -> Logaritmo natural de (1+x) -> log_e (1+x) o ln 1+X
Ejemplos:  */
Math.log(2);
Math.log10(2);
Math.log2(2);
Math.log1p(2);

/*  --x-- Metodos de Redondeo --x--
Es muy comun necesitar métodos para redondear números y reducir el número de decimales o
aprozimar a una cifra concreta.
     - Math.round(x)     -> Devuelve x con redondeo (El entero más cercano)
     - Math.ceil(x)      -> Devuelve x con redondeo superior (El entero más alto)
     - Math.floor(x)     -> Devuelve x con redondeo inferior (El entero más bajo)
     - Math.fround(X)    -> Devuelve x con redondeo (flotante on precisión simple)
     - Math.trunc(x)     -> Trunca el número x (devuelve sólo la parte entera)
*/
// Redondeo natural, el más cercano
Math.round(3.75);           // 4
Math.round(3.25);           // 3

// Redondeo superior (el más alto)
Math.ceil(3.75);            // 4
Math.ceil(3.25);            // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75);           // 3
Math.floor(3.25);           // 3

// Redondeo con precisión
Math.round(3.123456789);    // 3
Math.fround(3.123456789);   // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75);           // 3
Math.round(-3.75);          // -4
Math.trunc(-3.75);          // -3

/* --x-- Métodos Trigonométricos --x--
El objeto Math nos proporciona de forma nativa unsa serie de métodos trigonométricos, que
nos permiten hacer cálculos con operaciones como seno, coseno, tangente y relacionados:
    
     - Math.sin(x)       -> Seno de x
     - Math.asin(x)      -> Arcoseno de x
     - Math.sinh(x)      -> Seno hiperbólico de x
     - Math.asinh(x)     -> Arcoseno hiperbólico de x
     - Math.cos(x)       -> Coseno de x
     - Math.acos(x)      -> Arcocoseno de x
     - Math.cosh(x)      -> Coseno hiperbólico de x
     - Math.acosh(x)     -> Arcocoseno hiperbólico de x
     - Math.tan(x)       -> Tangente de x
     - Math.atan(x)      -> Arcotangente de x
     - Math.tanh(x)      -> Tangente hiperbólica de x
     - Math.atanh(x)     -> Arcotangente hiperbólica de x
     - Math.atan2(x,y)   -> Arcotangente del conciente de x/y
     - Math.hypot(a,b...)     -> Devuelve la raíz cuadrada de a² + b² + ...
*/