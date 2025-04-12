// Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase:");
let vocales = [];

if (frase.includes("a")) vocales.push("a");
if (frase.includes("e")) vocales.push("e");
if (frase.includes("i")) vocales.push("i");
if (frase.includes("o")) vocales.push("o");
if (frase.includes("u")) vocales.push("u");

document.writeln(vocales.length > 0 ? "Las vocales encontradas son: " + vocales.join(", ") : "No se encontraron vocales.");