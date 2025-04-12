//  Escribe un programa que pida un número y diga si es divisible por 2
let num = parseInt(prompt("Ingrese un número"));

if (num % 2 == 0) {
    document.writeln("<p>El número ingresado SI ES divisible por 2 </p>");
} else {
    document.writeln("<p>El número ingresado NO es divisible por 2 </p>");
}