interface producto {
    nombre: string;
    precio: number;
    oferta?: boolean;
}

const producto1: producto = {
    nombre: "armario",
    precio:  150
}

const producto2: producto = {
    nombre: "silla",
    precio: 50,
    oferta: true
}

function precioConIva (prod: producto) : number {
    return prod.precio * 1.21
}  

console.log(precioConIva(producto2));