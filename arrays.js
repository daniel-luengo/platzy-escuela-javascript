


var frutas = ["Manzana", "Pera", "Platano", "Frutilla"];


console.log(frutas)
console.log(frutas[2])
console.log(frutas.length)


var masFrutas = frutas.push ("Naranja")

console.log(frutas)

var ultimo = frutas.pop();
console.log(frutas);

var agregaElementoAlInicio = frutas.unshift("Uva-primera")
console.log(frutas)


var eliminaPrimerElemento = frutas.shift();
console.log(frutas);


var posicion = frutas.indexOf("Platano")
console.log(posicion)