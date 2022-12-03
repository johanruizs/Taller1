"use strict";
const producto1 = {
    nombre: "armario",
    precio: 150
};
const producto2 = {
    nombre: "silla",
    precio: 50,
    oferta: true
};
function precioConIva(prod) {
    return prod.precio * 1.21;
}
console.log(precioConIva(producto2));
