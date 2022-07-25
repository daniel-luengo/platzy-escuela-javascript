var auto = {
    marca : "chevrolet",
    annio: 2022,
    modelo: "ultimo modelo",
    detalleDelAuto: function() {
        console.log(`${auto.marca}, ${auto.annio}, ${auto.modelo}`)
    }
}

auto.detalleDelAuto();


function autoNuevo (marca, annio, modelo) {
    this.marca = marca,
    this.annio = annio,
    this.modelo =modelo
}


var auto1 = new autoNuevo ("toyota", 2019, "Tercel");
console.log(auto1)