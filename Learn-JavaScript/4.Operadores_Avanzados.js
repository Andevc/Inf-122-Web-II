/* Operadores de Strings: Operaciones con variables y/o STRING 
     |> Concatenacion de Texto -> a + b -> Une el contenido de a con el de b
          - 2 + 2     ==> 4      (Número + Número)
          - "2" + "2" ==> "22"   (String + String)
          - "2" + 2   ==> "22"   (String + Número)
          - 2 + "2"   ==> "22"   (Número + String)
          - "a" + 2   ==> "a2"   (String + Número)

     |> Conversión a número (Suma Unaria) -> +a -> Si a no es un número, intenta convertirlo en un número     
          - +5     ==>  5     (El valor ya era numerico y positivo)
          - +-5    ==> -5     (El valor ya era numerico y negativo)
          - +"5"   ==>  5     (El valor era string y pasa a ser numérico)
          - +"-5"  ==> -5     (El valor era string y pasa a ser numérico)
          - +"a"   ==>  NaN   (El valor era string pero no es un número)
*/
//==========================================================================================================

/* Operadores Logicos: Como trabajar con valores BOOLEAN o similares.

     |> Operador lógico AND             =>   A && B    => Devuelve A si es false, si no devuelve B. 
     |> Operador lógico OR              =>   A || B    => Devuelve A si es true, si no devuelve B.
     |> Operador unario lógico NOT      =>   !A        => Invierte el valor. Si es true devuleve false y viceversa.
     |> Operador ternario ?:            =>   A ? B : C => Si A es true, devuelve B, sino devuelve C.
     |> Operador lógico Nullish coalescing        =>   A ?? B      => Devuelve B si A es null o undefined, si no devuelve A.
     |> Operador de asignacion lógico nula ??=    =>   A ??= B     => Es equivalente a A ?? (A = B).
     |> Operador de encadenamiento opcional ?.    =>   data?.name  => Permite intentar acceder a una propiedad, aunque su padre no exista.
     
*/
//--------------------------------------------------------------------------------
// And
     false && false // false  
     true && false  // false  
     false && true  // false  
     true && true   // true   

// De la misma forma que el anterior, se puede usar con otros tipos de datos. Ahora si importa el primer y segundo valor.
     0 && undefined // 0 (se evalua como false && false, devuelve el primero)
     undefined && 0 // undefined (se evalua como false && false, devuelve el primero)
     55 && null     // null (se evalua como true && false, devuelve el segundo)
     null && 55     // null (se evalua como false && true, devuelve el primero)
     44 && 20       // 20 (se evalua como true && true, devuelve el segundo)
/* este operador se puede usar a modo de if compactos y muy legibles. No obstante, ten en cuenta que 
este patron puede ser interesante en algunos casos simples, pero en otros puede complicar la legibilidad del codigo */

45 && "OK"     //"OK"
false && "OK"  // false

const doTask = () => "OK!"; // creamos funcion que devuelve "OK!"
isCorrect && doTask() // Si isCorrect es true, ejecuta doTask()

//--------------------------------------------------------------------------------
// OR
     false || false // false
     true || false  // true
     false || true  //true
     true || true   //true
// Eso no ocurre con otros tipos de datos, recuerda que cualquier valor superior a 0 es true y caulquier valor que sea 0 o falsy, es false.

     0 || null           // null (false || false)
     44 || undefined     // 44   (true || false)
     0 || 17             // 17   (false || true)
     4 || 10             // 4    (true || true)

/* El operador || nos viene bien para situaciones donde, por ejemplo tenemos una variable name que no sabemos a ciencia cierta si esta 
definida y queremos crear una nueva variable userName con el valor de name, o sino, un valor por defecto "Unknown name":*/
     const userName = nom || "Unknown name";
     "Andev" || "Unknown name"     //"Andev"
     null || "Unknown name"        // "Unknown name"
     false || "Unknown name"       // "Unknown name"
     undefined || "Unknown name"   // "Unknown name"
     0 || "Unknown name"           // "Unknown name"

/* OJO: en algunos casos es interesante usar esta funcionalidad, pero 0 es un valor valido, cosa que en este caso no se permite.
Para ello es mejor usar el operador ?? de union nula (Nullish coalescing) */

//--------------------------------------------------------------------------------
// NOT: Se usa para negar un valor, es decir invertir su valor booleano
     !true     // false
     !false    // true
     !!true    // true
     !!false   // false
     !!!true   // false
// Tambien se puede con otro tipo de datos:
     !44  // false (se evalua como !true)
     !0   // true  (se evaliua como !false)
     !''  // true  (se evalua como !0, que es !false)
     !(10 || 23)    // false (se evalua como !10, que es !true)

//--------------------------------------------------------------------------------
/* OPERADOR TERNARIO. es una especie de if compacto, donde en lugar de usar if/else tradicional, se puede usar un operador ternario. 
Su estructura es: (condicion) ? valor verdadero : valor falso */

// Sin operador ternario
let rol;
if( nom === "Andev"){ rol = "dev" }
else{ rol = "user" }

// Con operador ternario
const role = nom === "Andev" ? "Dev" : "user";

//--------------------------------------------------------------------------------
/* Operador Nullish coalescing: es un operador similar a OR, pero con ciertos matices y cambios. 
A grandes rasgos, se puede decir que el operador a ?? b devuleve b solo cuando a es undefined o null. Al contrario OR, 
con valores como false,0 o "", no devuelve b*/
     42 || 50       // 42
     42 ?? 50       // 42 (Ambos se comportan igual)
     false || 50    // 50 (false es falsy, devuelve el 2do)
     false ?? 50    // false (false no es un valor null ni undefined, devuelve el 1ro)
     0 || 50        // 50 (0 es un valor falsy, devuleve el 2do)
     0 ?? 50        // 0  (el 1ro no es null ni undefined, devuleve el 1ro)
     null || 50     // 50 (null es un valor falsy, devuelve el 2do)
     null ?? 50     // 50 (devuelve el 2do)
     undefined || 50     // 50 (undefined es un valor falsy, devuelve el 2do)
     undefined ?? 50     // 50 (devuelve el 2do)
/* Dependiendo del caso,se usa || o ??, Por ejemplo, tenemos un objeto data donde tenemos almacenado la cantidad de
balas de un pj. Si necesitamos mostrar al usuario visualmente nos podria interesar usar el operador ||, por otro lado, 
si queremos sumar la cantidad de balas, con la cantidad de proyectiles, podemos usar el operador ??  */

const data = { ammo: 0};
data.ammo || "Sin Balas";     // "Sin Balas"
data.ammo ?? "Sin Balas";     // 0

const data1 = {}
data1.ammo || "Sin balas";    // "Sin Balas"
data1.ammo ?? "Sin balas";    // "Sin Balas"
// En el segundo caso, la propiedad ammo es undefined

//--------------------------------------------------------------------------------
/* Asignacion Logica Nula: Existen ciertos casos donde, si una variable tiene valor null o undefined (valores nullish),
y solo en esos casos queremos cambiar su valor. */

// Sin asignacion logica nula
if( x === null || x === undefined){
     x = 50;
}
// Con asignacion logica nula
x ??= 50;
// Recuerda que a ??= b es a ?? (a = b). Esto puede ser util para casos como el siguiente:
const resetConfig = (data) =>{
     data.life ??= 100;
     data.level ??= 1;
     return data;
}

resetConfig({ life: 25, level: 4});     // { life: 25, level: 4}
resetConfig({ life: null, level: 2});   // { life: 100, level: 2}
resetConfig({});                        // { life: 100, level 1}
//--------------------------------------------------------------------------------
/* Encadenamiento Opcional: Este operdor nos permite acceder a propiedades, aunque su elemento padre no exista,
de forma que podamos evitar un error que es bastante frecuente. */
const user = {
     name: "Andev",
     role: "Developer",
     attrs: {
          life: 100,
          power: 25
     }
}

// Si quieremos acceder a una de sus propiedades en el interior de attrs lo haremos sin problema:
user.attrs.power    // 25
user.attrs.life     // 100

/* Imaginemos que attrs aun no existe en el objeto, pero se añadira en algun momento, Si intentamos acceder a una
propiedad sin que exista, ocurrila lo siguiente: */
user.attrs.life     // TypeError: Cannot read properties of undefined (reading 'life')

user.attrs && user.attrs.life // Evitamos el error (comprobando si existe attrs antes)

/*  Para evitar esto, hasta ahora teniamos que utilizar un if condicional, un AND o alguna forma similar.
Ahora podemos utilizar el Optional Chaining, que no es mas que añadir una ? anted del puntode la propiedad que queremos acceder. */

user.attrs?.power   // undefined
user.attrs?.life    // undefined
