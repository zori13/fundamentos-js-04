// Escribe tu código aquí:
class Product{  
    constructor(name,price,quantity){
      this.name=name
      this.price=price
      this.quantity=quantity
   }
   get quantity(){
      return this._quantity
   }
   set quantity(newQuantity){
    this._quantity=newQuantity
   }
   get totalPrice(){
    return this.price+this._quantity
   }
  }
  //const product1= new product('colchon', 239,8)
  //const product2= new product('almohada',59,2)
  const product= new Product('Sábanas', 29.99,4)
  //console.log(product1)
  //console.log(product2)
  console.log('Precio total:',product.totalPrice)
  product.quantity=3
  console.log('Nuevo precio total:',product.totalPrice)