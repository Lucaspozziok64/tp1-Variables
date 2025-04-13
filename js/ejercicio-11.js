//  Añadir al ejercicio anterior que nos diga
//  por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = prompt("Ingrese un número:");

document.writeln(`<p>${numero} es divisible por:</p>`);

if (numero % 2 === 0) document.writeln("<p>2</p>");
if (numero % 3 === 0) document.writeln("<p>3</p>");
if (numero % 5 === 0) document.writeln("<p>5</p>");
if (numero % 7 === 0) document.writeln("<p>7</p>");

if (!(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0)) {
    document.writeln("<p>No es divisible por 2, 3, 5 ni 7.</p>");
}