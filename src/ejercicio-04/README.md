## Ejercicio 4: Creación de Constructor de Objetos

Crea un constructor de objetos llamado `Product` que tenga propiedades como `name`, `price` y `quantity`. Luego, crea dos instancias de `Product` con diferentes valores y muestra sus detalles.

```javascript
function Product(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
}

const product1 = new Product('Laptop', 999.99, 5)
const product2 = new Product('Phone', 599.99, 10)

console.log(product1)
console.log(product2)
```
