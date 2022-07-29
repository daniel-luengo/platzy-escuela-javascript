// var auto = {
//     marca : "chevrolet",
//     annio: 2022,
//     modelo: "ultimo modelo",
//     detalleDelAuto: function() {
//         console.log(`${auto.marca}, ${auto.annio}, ${auto.modelo}`)
//     }
// }

// auto.detalleDelAuto();


// function autoNuevo (marca, annio, modelo) {
//     this.marca = marca,
//     this.annio = annio,
//     this.modelo =modelo
// }


// var auto1 = new autoNuevo ("toyota", 2019, "Tercel");
// console.log(auto1)






function auto (marca, modelo, annio) {
    this.marca = marca,
    this.modelo = modelo,
    this.annio = annio
}





for (i=0; i<3; i++) {
    
    var laMarca = prompt("Ingrese marca");
    var elModelo = prompt("Ingrese el modelo");
    var ElAnnio = prompt("Ingrese el año")
    var autonuevo = new auto (laMarca, elModelo, ElAnnio);
    console.log(autonuevo);
}












