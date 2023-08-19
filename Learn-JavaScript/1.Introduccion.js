//  Tipos de Variables:
/* 
        let     ==> Es la forma comun de declarar una variable
        var     ==> var es una forma antigua de declarar una variable, hoy en dia ya no es recomendable usarla
        const   ==> Esta es una variable constante, es decir que no se pueden reasignar 
*/
let myVarB = 'Esta es una variable de tipo let';

var myVarA = 'Esta es una variable de tipo var';

const myVarC = 'Esta es una varialble de tipo const';

console.log(myVarA);
console.log(myVarB);
console.log(myVarC);
 
//==================================================================================

// Tipos de Datos:
/* 
    Number      --> valor numerico (enteros, decimales, etc...) --> 24
    Bigitn      --> valor numerico grande --> 1249382387283182n
    String      --> valor de texto (cadenas de texto, caracteres, etc...) --> 'Hola'
    Boolean     --> valor boleano (verdadero o falso) --> true
    Null        --> no tiene valor --> null
    Undefined   --> valor sin definir (variable sin inicializar) --> undefined
    Symbol      --> Simbolo (valor unico) --> Symbol(1)
    Function    --> Funcion guardada en una cariable --> function(){}
    Object      --> Estructura compleja --> {}

    Usando la funcion typeof() se puede saber el tipo de dato de la variable
*/

let text = 'Hola';
let num = 23;
let bigNum = 12345453423;
let boolean = true;
let noDefinido = undefined;
let nulo = null;

// Usando typeof() podemos saber el tipo de dato de una variable ej:
console.log(typeof text); // 'string'
console.log(typeof num); // 'number'

// La funcion typeof() no sirve para variables de tipos de datos mas complejos y es mejor usar 'constructor.name'
console.log(boolean.constructor.name); // 'boolean'
console.log(noDefinido.constructor.name); // Error, solo funciona con variables definidas



