## Ejercicio 7: Métodos Getters

Modifica la clase `Product` creada anteriormente para incluir un método getter llamado `totalPrice` que calcule el precio total (precio \* cantidad). Luego, crea una instancia de `Product` y muestra su precio total.

```javascript
class Product {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  get totalPrice() {
    return this.price * this.quantity
  }
}

const product = new Product('Shirt', 25.99, 3)

console.log('Total Price:', product.totalPrice)
```
