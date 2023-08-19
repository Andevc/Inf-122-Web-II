/*   Operadores Aritmeticos: 

     |>   + -> Suma  =>  a + b
     |>   - -> Resta =>  a - b
     |>   * -> Multiplicacion =>  a * b
     |>   / -> Division =>  a / b
     |>   % -> Modulo =>  a % b
     |>   ** -> Exponente =>  a ** b
*/
let a = 12, b = 3;
console.log(a + b); // 15
console.log(a / b); // 4
console.log(a ** b); // 1728
//==================================================================================

/*   Operadores de Asignacion: 

     |>   a += b  ==> a = a + b
     |>   a -= b  ==> a = a - b
     |>   a *= b  ==> a = a * b
     |>   a /= b  ==> a = a / b
     |>   a %= b  ==> a = a % b
     |>   a **= b ==> a = a ** b
*/

console.log(a -= b); // 9
console.log(a *= b); // 27
console.log(b %= a); // 3

//==================================================================================

/*   Operadores Unarios:

     |>     a++  ==> Usa el valor de a y lo incrementa. Tambien llamado postincremento 
     |>     a--  ==> Usa el valor de a y lo decrementa. Tambien llamado postdecremento 
     |>     ++a  ==> Incrementa el valor de a y luego lo usa. Tambien llamdo preincremento
     |>     --a  ==> Decrementa el valor de a y luego lo usa. Tambien llamdo predecremento
     |>     -a   ==> Cambia de signo (niega) a A
*/
console.log(a, a++, a); // 0 0 1
console.log(b, ++b, b); // 3 4 4
//==================================================================================

/*   Operadores de Comparacion: 

     |>   >   : a > b    -> Comprueba si el valor de A es Mayor que B
     |>   <   : a < b    -> Comprueba si el valor de A es Menor que B
     |>   >=  : a >= b   -> Comprueba si el valor de A es Mayor o Igual que B
     |>   <=  : a <= b   -> Comprueba si el valor de A es Menor o Igual que B
     |>   ==  : a == b   -> Comprueba si el valor de A es Igual al de B
     |>   !=  : a != b   -> Comprueba si el valor de A es Distinto al de B
     |>   === : a === b  -> Comprueba si el valor y el tipo de dato de A es Igual que B
     |>   !== : a !== b  -> Comprueba si el valor y el tipo de dato de A es Distinto que B

     Cabe decir que hay diferencia entre '==' (igualdad) y '===' (identidad), el primero solo comprueba
     el valor de la comparación, el otro comprueba el valor y tipo de dato de la comparacion.
*/
console.log( 5 == 5 ); // true
console.log( '5' == 5 ); // true
console.log( 5 === 5 ); // true
console.log( '5' === 5 ); // false

//==================================================================================

/*   Operadores Binarios: 

     Se trata de una serie de operadores que nos permiten realizar operaciones basicas trabajando
     a nivel binario, donde los operandos solo pueden tomar valores de 0 o 1 
     
          |>   Operador AND                |=>   a & b       |=> Devuelve 1 si ambos operandos son 1.
          |>   Operador OR                 |=>   a | b       |=> Devuelve 1 si al menos un operador es 1.
          |>   Operador XOR                |=>   a ^ b       |=> Devuelve 1 si ambos operadores son diferentes.
          |>   Operador NOT                |=>   ~a          |=> Invierte los bits del operando (ej: 000101 pasa a 111010). Trunca a 32 bits.
          |>   Operador LEFT SHIFT         |=>   a << b      |=> Desplazamiento de bits hacia la izquierda. Ej: 11 (3) pasa a 110 (6).
          |>   Operador RIGHT SHIFT        |=>   a >> b      |=> Desplazamiento de bits hacia la derecha. Ej: 11 (3) pasa a 1 (1).
          |>   Operador RIGHT LEFT SHIFT   |=>   a >>> b     |=> Desplazamiento de bits hacia la derecha, como un operador sin signo

     Por ejemplo, los 3 primeros son los mas habituales, donde podriamos crear las llamadas "Tablas de Verdad",
     sin embargo, tambien podemos combinarlo con el NOT y conseguir variaciones

     * Asignacion a nivel de bit: de la misma manera que los operadores de asignacion

          |>   Desplazamiento a la izquierda y asignación           |=>  A <<= B    |=> Es equivalente a A = A << B  
          |>   Desplazamiento a la derecha y asignación             |=>  A >>= B    |=> Es equivalente a A = A >> B
          |>   Desplazamiento a la derecha sin signo y asignación   |=>  A >>>= B   |=> Es equivalente a A = A >>> B
          |>   Operacion AND y asignación                           |=>  A &= B     |=> Es equivalente a A = A & B
          |>   Operacion OR y asignación                            |=>  A |= B     |=> Es equivalente a A = A | B
          |>   Operacion XOR y asignación                           |=>  A ^= B     |=> Es equivalente a A = A ^ B
          |>   Operacion AND lógico y asignación                    |=>  A &&= B    |=> Es equivalente a A = A && (A = B)
          |>   Operacion OR lógico y asignación                     |=>  A ||= B    |=> Es equivalente a A = A || (A = B)
*/


