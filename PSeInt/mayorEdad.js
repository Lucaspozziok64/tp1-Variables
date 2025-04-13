// Pedir la edad y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y 
// determine si es mayor de edad (18 años o más).

let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    document.writeln("<h1>Es mayor de edad</h1>");
}
else {
    document.writeln("<h1>Es menor de edad</h1>");
}