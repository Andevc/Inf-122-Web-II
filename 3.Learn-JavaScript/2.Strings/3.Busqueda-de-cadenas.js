
// Métodos de búsqueda de cadenas en JavaScript

// 1. indexOf()
const frase = "LenguajeJS, página de Javascript";
console.log(frase.indexOf("n"));          // 2
console.log(frase.indexOf("n", 3));       // 16
console.log(frase.indexOf("n", 17));      // -1

// 2. lastIndexOf()
console.log(frase.lastIndexOf("n"));          // 16
console.log(frase.lastIndexOf("n", 15));       // 2
console.log(frase.lastIndexOf("n", 1));        // -1

// 3. includes()
console.log(frase.includes("JS"));          // true
console.log(frase.includes("js"));          // false

// 4. startsWith()
console.log(frase.startsWith("Lenguaje"));          // true
console.log(frase.startsWith("lenguaje"));          // false

// 5. endsWith()
console.log(frase.endsWith("Javascript"));          // true
console.log(frase.endsWith("javascript"));          // false
