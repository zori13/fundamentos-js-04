class Person{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }

  introduce(){
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
 }
}
const persona=new Person('Andrés',37)
persona.introduce()