// programa que pida dos números y escriba en pantalla cual es el mayor.
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

if (num1 > num2) {
    document.writeln("<p>El numero mayor es: </p>" + num1);
} else {
    document.writeln("<p>El numero mayor es: </p>" + num2);
}
