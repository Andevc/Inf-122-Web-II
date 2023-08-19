/* ¿Que es BigInt? 
BigInt es un tipo de dato de JS,que nace con la idea de permitir representar valores muy grandes
     - BigInt(number)    -> Devolvemos un número BigInt a partir de un numero pasado por parametro
     - number + n        -> Simplemente, añadir una n al final del número. Notacion Preferida

La problemática que existe actualmente, es que valores mas grandes de (2⁵³)-1 no pueden ser representado,
ya que supera el límite Number.MAX_SAFE_INTEGER y algunos resultados podrían perder precisión:*/
const number = 2 ** 53;
number.constructor.name;      // "number" 

number;       // 9007199254740992
number + 1;   // 9007199254740992
number + 5;   // 9007199254740996
number + 40;  // 9007199254741032

/* Para poder realizar estas tareas de forma segura, podemos utilizar el tipo de dato BigInt
simplemente añadiendo una n al final del número, */

const num = 2n ** 53n;
num.constructor.name;    // "BigInt"

num;       // 9007199254740992n
num + 1n;  // 9007199254740993n
num + 5n;  // 9007199254740997n
num + 40n; // 9007199254741032n

/* --x-- Mezclando tipos de dato --x--
En los ejemplos anterior no estamos mezclando los BigInt con datos de tipo Number. Hay que tener
en cuenta varios detalles a la hora de trabajar con BigInt, porque nos pueden surgir dudas: */

const numb = 5 + 5n;          // ERROR: Cannot mix BigInt and other types, use explicit conversions
const numb2 = BigInt(5) + 5n   // 10n (Ok, convierte a BigInt y realiza la operación)
const numb3 = 5 + Number(5n);  // 10 (Ok, convierte a Number y realiza la operación)

/* Ten muy en cuenta que no se recomienda hacer conversiones entre Number y BigInt salvo que tengas
muy controlado lo que vas a hacer, ya que podrías estar en una de esas situaciones: 
     - Pasas el Number a BigInt correctamente, pero en Number ya había perdido precisión previamente.
     - Pasas el BigInt a Number pero pierdes precisión en el proceso, porque Number no puede representarlo. 
Ten en cuenta lo sgte.: */
5n === 5;     // false (el valor es igual, el tipo de dato no)
5n == 5;      // true (el valor es igual)

String(2n ** 53n);        // "9007199254740992" (le quita la n)
(2n ** 53n).toString();   // "9007199254740992" (le quita la n)

/* --x-- Métodos de BigInt--x--
BigInt tiene dos métodos estáticos, que nos pueden servir para operar a nivel de bits.
     - BigInt.asIntN(bits, bigNumber)   -> Ajusta bigNumber a bits (devuelve entero con signo).
     - BigInt.asUintN(bits, bigNumber)  -> Ajusta bigNumber a bits (devuelve entero sin signo). */

// En primer lugar, .asIntN() significa as(Signed) Integer Number. 

// Con 2 bits con signo puedes representar desde (-2 hasta 1)
BigInt.asIntN(2, -3n);  // -3n (Representa el -3 con 2 bits) ❌
BigInt.asIntN(2, -2n);  // -2n (Representa el -2 con 2 bits) ✅ 10
BigInt.asIntN(2, -1n);  // -1n (Representa el -1 con 2 bits) ✅ 11
BigInt.asIntN(2, 0n);   // 0n (Representa el 0 con 2 bits) ✅ 00
BigInt.asIntN(2, 1n);   // 1n (Representa el 1 con 2 bits) ✅ 01
BigInt.asIntN(2, 2n);   // -2n (Representa el 2 con 2 bits) ❌
BigInt.asIntN(2, 3n);   // -1n (Representa el 3 con 2 bits) ❌ 

// En Segundo lugar, asUintN signidica as Unsigned Interger Number. 

// Con 2 bits sin signo puedes representar desde (0 hasta 4)
BigInt.asUintN(2, -2n);  // 2n (Representa el -2 con 2 bits) ❌
BigInt.asUintN(2, -1n);  // 3n (Representa el -1 con 2 bits) ❌
BigInt.asUintN(2, 0n);   // 0n (Representa el 0 con 2 bits) ✅ 00
BigInt.asUintN(2, 1n);   // 1n (Representa el 1 con 2 bits) ✅ 01
BigInt.asUintN(2, 2n);   // 2n (Representa el 2 con 2 bits) ✅ 10
BigInt.asUintN(2, 3n);   // 3n (Representa el 3 con 2 bits) ✅ 11
BigInt.asUintN(2, 4n);   // 0n (Representa el 4 con 2 bits) ❌
