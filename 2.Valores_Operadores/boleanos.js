// ejemplos con operadores de comparacion 
console.log(5>6)
// esta operacion me generara un valor de tipo boleano

// Mayor igual que
console.log(6>=6)

// No es igual
console.log(5!=4)

// NaN == NaN
console.log(NaN == NaN)



// Averiguar la forma con que se realizan las comparaciones con cadenas de texto
// // todas las letras mayusculas seran menoras a las mayasculas
// Ardvark < Zoroaster
console.log("Ardvark" < "Zoroaster")
// Por lo tanto, como el primer carácter de "Ardvark" es menor que el primer carácter de "Zoroaster", la expresión completa es verdadera.

// Z>a
// por que js compara los codigos unicode de cada caracter
// !>=?
console.log("!">="?")

// en el caso del operador  && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)
console.log(true && true)

// en el caso del operador || produce verdadero si cualquiera de los valores dados es verdadero.
console.log(true || false)
console.log(false || false)
console.log(true || true)
console.log(0 || "")

// en el caso del operador ! invierte el valor dado
console.log(!true)
console.log(!false) 

//usando el operador relacional
//solo funciona en objetos
// averiguar por que sale falce 
console.log("hola" in ["hola","mundo"])

// js en un array no busca valores especificos sino que busca los valores por su indice y dea cuerdo a eso te muestra el resultado 
