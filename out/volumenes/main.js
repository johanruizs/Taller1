import { Volumen } from "./calVolumen.js";
class Cubo extends Volumen {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcular() {
        this.vol = Math.pow((this.lado), 3);
    }
}
let cubo1 = new Cubo(4);
cubo1.calcular();
cubo1.imprimir();
class Prisma extends Volumen {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    calcular() {
        this.vol = this.lado1 * this.lado2 * this.lado3;
    }
}
let prisma1 = new Prisma(2, 3, 4);
prisma1.calcular();
prisma1.imprimir();
class Cilindro extends Volumen {
    constructor(radio, altura) {
        super();
        this.radio = radio;
        this.altura = altura;
    }
    calcular() {
        this.vol = Math.PI * (Math.pow(this.radio, 2)) * this.altura;
    }
}
let cilindro1 = new Cilindro(2, 4);
cilindro1.calcular();
cilindro1.imprimir();
class Esfera extends Volumen {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcular() {
        this.vol = Math.PI * (Math.pow(this.radio, 3)) * (4 / 3);
    }
}
let esfera1 = new Esfera(10);
esfera1.calcular();
esfera1.imprimir();
// abstract class Operacion {
//     public valor1!: number;
//     public valor2!: number;
//     public valor3: number = 0;
//     constructor(valor1: number, valor2: number){
//         this.valor1 = valor1;
//         this.valor2 = valor2
//     }
//     abstract operar(): void;
//     imprimir(){
//         console.log(`El volumen de la figura es ${this.valor3}`)
//     }
// }
// class Suma extends Operacion {
//     constructor(valor1: number, valor2: number){
//         super(valor1, valor2);
//     }
//     operar(){
//         this.valor3 = this.valor1 + this.valor2; 
//     }
// }
// let suma: Suma = new Suma(8, 4);
// suma.operar();
// suma.imprimir();
