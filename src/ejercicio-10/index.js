class Person{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    introduce(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}
class Student extends Person{
    constructor(nombre,edad,grado){
        super(nombre,edad)
        this.grado=grado
    }
  introduce(){
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y estoy en el grado ${this.grado}.`)
 }
}

const persona=new Person('Andrés',37)
persona.introduce()
const student=new Student('Carla', 25,3)
student.introduce()