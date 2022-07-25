var alumnos = ["Maria" , "Javier", "Ignacia", "Valentina"];

function saludarAlumnos (alumno){
    console.log(`Hola, ${alumno}`)
}

while (alumnos.length > 0) {
    console.log(alumnos)
    var alumno = alumnos.shift();
    saludarAlumnos(alumno);
}