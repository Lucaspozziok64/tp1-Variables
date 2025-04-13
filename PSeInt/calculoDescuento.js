//Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto
// y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

let precio = parseInt(prompt("Ingrese el precio del producto"));

if (precio > 1000) {
    let descuento = precio * 0.15;
    let precioFinal = precio - descuento;
    document.writeln("El precio final con descuento es: $" + precioFinal);
} else {
    document.writeln("El precio final es: $" + precio);
}