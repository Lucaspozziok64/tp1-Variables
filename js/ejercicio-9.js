// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase:");
let mensaje = `<p>Las vocales que aparecen en la frase son:</p>`;
let tieneVocales = false;

if (frase.includes("a") || frase.includes("A")) {
    mensaje += "<p>A</p>";
    tieneVocales = true;
}
if (frase.includes("e") || frase.includes("E")) {
    mensaje += "<p>E</p>";
    tieneVocales = true;
}
if (frase.includes("i") || frase.includes("I")) {
    mensaje += "<p>I</p>";
    tieneVocales = true;
}
if (frase.includes("o") || frase.includes("O")) {
    mensaje += "<p>O</p>";
    tieneVocales = true;
}
if (frase.includes("u") || frase.includes("U")) {
    mensaje += "<p>U</p>";
    tieneVocales = true;
}

if (!tieneVocales) {
    mensaje = "<p>No se encontraron vocales en la frase.</p>";
}

document.writeln(mensaje);