// Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar
// el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son: Perímetro: P = 2*(largo+ancho)
// Área: A=largo×ancho

let largo = parseInt(prompt("Ingrese el largo del rectángulo"));

let ancho = parseInt(prompt("Ingrese el ancho del rectángulo"));

let perimetro = 2 * (largo + ancho);

let area = largo * ancho;

document.writeln("<p>El perímetro del rectángulo es: </p>" + perimetro);
document.writeln("<p>El área del rectángulo es: </p>" + area);
