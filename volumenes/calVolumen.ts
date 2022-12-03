export abstract class Volumen {

    vol: number = 0;

    abstract calcular(): void;

    imprimir(){
        console.log(`El volumen de la figura es ${this.vol}`);
    }
}
