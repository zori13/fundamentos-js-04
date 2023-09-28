## Ejercicio 2: Recorriendo Propiedades con for...in

Define un objeto `car` con las propiedades `brand`, `model` y `year`. Asigna valores a estas propiedades y luego muestra la información completa del coche en la consola.

```javascript
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022
}

for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`)
}
```
