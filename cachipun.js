

var op1= "piedra";
var op2 = "papel";
var op3 = "tijera";




resultado = function(usuario, cpu) {
    if (usuario != cpu) {
        if (usuario === op1 && cpu === op2) {
            console.log("cpu gana, " + op2 + " gana a " + op1)
        } else if (usuario === op1 && cpu == op3) {
            console.log("Usuario Gana " + op1 + " Gana a " + op3)
        }
        else if (usuario === op2 && cpu === op1) {
            console.log ("Usuario gana " + op2 + " gana a " + op1)
        }
        else if (usuario === op2 && cpu === op3) {
            console.log("Usuario pierde " + op2 + " pierde contra " + op3)
        } else if (usuario === op3 && cpu === op1) {
            console.log("Usuario pierde porque " + op3 + " pierde contra " + op1)
        } else if (usuario === op3 && cpu === op2 ) {
            console.log(" Usuario gana porque " + op3 + " le gana a " + op2 )
        }



    } else {
        console.log("Empate")
    }
}

resultado(op3, op3)
