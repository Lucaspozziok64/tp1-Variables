//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número
// y determinar si es par o impar. Mostrar el resultado.

let num = parseInt(prompt("Ingrese un número"));

if (num % 2 == 0) {
    document.writeln("<h1>El número es par</h1>");
}
else {
    document.writeln("<h1>El número es impar</h1>");
}