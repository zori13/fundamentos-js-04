class Rectangulo{
    constructor(ancho,alto){
        this.ancho=ancho
        this.alto=alto

    }

calcularArea(){
    return this.ancho*this.alto 
 }
}

const rectangulo=new Rectangulo(5,10)
console.log('Area:', rectangulo.calcularArea())
