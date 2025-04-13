// Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar 
//una temperatura en grados Fahrenheit y convertirla a grados Celsius. 
// La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)?*(F?32)

let fahrenheit = parseInt(prompt("Ingrese la temperatura en Fahrenheit"));

let celsius = (5/9) * (fahrenheit - 32);

document.writeln(celsius);
