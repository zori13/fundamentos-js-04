class Rectangulo{
    constructor(ancho,alto){
        this.ancho=ancho
        this.alto=alto

    }

calcularArea(){
    return this.ancho*this.alto 
 }
}
class Square extends Rectangulo{
    constructor(sideLength){
        super(sideLength,sideLength)
    }
}
const rectangulo=new Rectangulo(5,10)
const square =new Square(8)
console.log('Area:', rectangulo.calcularArea())
console.log('Área del cuadrado:', square.calcularArea() )

