// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt("Ingrese el primer número"));

let num2 = parseInt(prompt("Ingrese el segundo número"));

let num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 > num2 && num1 > num3) {
    document.writeln("<p>El numero mayor es: </p>" + num1);
} else if (num2 > num1 && num2 > num3) {
    document.writeln("<p>El numero mayor es: </p>" + num2);
}
else {
    document.writeln("<p>El numero mayor es: </p>" + num3);
}