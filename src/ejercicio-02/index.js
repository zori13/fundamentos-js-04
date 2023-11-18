// Escribe tu código aquí:
const car={
    brand:'Citroen',
    model:'C4',
    year:2013
}
for(let caracteristica in car){
    console.log(`${caracteristica}: ${car[caracteristica]}`)
}