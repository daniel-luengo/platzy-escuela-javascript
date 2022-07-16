

var nombres = ["Daniel", "Christian" , "Javiera", "Daniela" , "Karina"]


// for (i=0; i<nombres.length; i++) {
//     console.log("Hola " + nombres[i])
// }





function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}` )
}


for (i=0; i<nombres.length; i++) {
    saludarEstudiantes(nombres[i]);

}


for ( var estudiante of nombres) { 
    saludarEstudiantes(estudiante);

}