user = "papel";
cpu = "tijera"




switch (true) {
    case( user === "piedra" && cpu === "papel"):
        console.log(" Usuario pierde " + user + " le gana a " + cpu)
        break

    case (user === "piedra" && cpu === "tijera"):
        console.log("Usuario gana por que " + user + " le gana a " + cpu)
        break

    case (user === "papel" && cpu === "piedra"):
        console.log("Usuario gana porque " + user + " le gana a " + cpu)
        break

    case (user === "papel" && cpu === "tijera"):
        console.log("Usuario pierde porque " + user + " no le gana a " +cpu)
        break

    case (user === "tijera" && cpu === "piedra"):
        console.log("El usuario pierde porque " + user + " no le gana a " + cpu)
        break

    case (user === "tijera" && cpu ==="papel"):
        console.log(" El usuario gana porque " + user + " le gana a " + cpu)


        default:
            console.log("Empate");

} 