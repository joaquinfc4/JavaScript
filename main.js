let opcionBebida;
let opcionTrago;
let presupuesto;
let saldoSuficiente;

function comprobarPresupuesto() {

    if (presupuesto >= 100) {
        /* alert(`su saldo disponible es de ${presupuesto}`) */
        saldoSuficiente = true;
    } else if (presupuesto < 100) {
        alert(`El presupuesto minimo es de $100, muchas gracias vuelva pronto`)
        saldoSuficiente = false;
    } else if (isNaN(presupuesto)) {
        alert("Su presupuesto debe ir en digitos")
        presupuesto = null;
        presupuesto = parseInt(prompt("Bienvenido a drinkles, por favor ingrese su presupuesto"));
        comprobarPresupuesto()
    }

}

function saldo() {
    if (opcionTrago == 1) {
        if (presupuesto >= 100) {
            presupuesto = presupuesto - 100
        } else {
            alert("saldo insuficiente")
        }
    } else if (opcionTrago == 2) {
        if (presupuesto >= 150) {
            presupuesto = presupuesto - 150
        } else {
            alert("saldo insuficiente")
        }
    } else if (opcionTrago == 3) {

        if (presupuesto >= 200) {
            presupuesto = presupuesto - 200
        } else {
            alert("saldo insuficiente")
        }

    } else if (opcionTrago == 0) {
        alert("Muchas gracias, vuelva pronto");

    } else {
        alert("Por favor indique una opción valida")
    }

    return presupuesto;
}

function saldo2() {
    if (opcionTrago == 4) {
        if (presupuesto >= 150) {
            presupuesto = presupuesto - 150
        } else {
            alert("saldo insuficiente")
        }
    }
    else if (opcionTrago == 5) {

        if (presupuesto >= 250) {
            presupuesto = presupuesto - 250
        } else {
            alert("saldo insuficiente")
        }

    } else if (opcionTrago == 6) {

        if (presupuesto >= 500) {
            presupuesto = presupuesto - 500
        } else {
            alert("saldo insuficiente")
        }

    } else if (opcionTrago == 0) {
        alert("Muchas gracias, vuelva pronto");

    } else {
        alert("Por favor indique una opción valida")
    }

    return presupuesto;
}

presupuesto = parseInt(prompt("Bienvenido a drinkles, por favor ingrese su presupuesto"));
comprobarPresupuesto()

if (saldoSuficiente == true) {
    do {
        alert(`su saldo disponible es de ${presupuesto}`)
        opcionBebida = parseInt(prompt("eliga una opción por favor\n\n1. bebidas sin alcohol\n2. bebidas con alcohol\n\n0. salir"));


        switch (opcionBebida) {
            case 0:
                alert("Muchas gracias, vuelva pronto");
                break;
            case 1:
                opcionTrago = parseInt(prompt("eliga su bebida\n\n1.Té verde helado al estilo moruno   $100\n2.Limonada de frambuesa   $150\n3.Smoothie de mango, piña y lima   $200\n\n0. salir"))
                saldo()
                if (presupuesto < 100) {
                    alert("Muchas gracias, vuelva pronto")
                } else {
                    let continuar = parseInt(prompt("Desea continuar comprando?\n\n1.Si, deseo agregar mas bebidas a mi compra\n2.No, así está bien"))
                    switch (continuar) {
                        case 2:
                            opcionBebida = 0;
                            break;

                        default:
                            break;
                    }
                }
                break;

            case 2:
                opcionTrago = parseInt(prompt("eliga su bebida\n\n4.Café irlandes   $150\n5.White russian   $250\n6.Cosmopolitan   $500\n\n0. salir"))
                saldo2()
                if (presupuesto < 0) {
                    alert("Saldo insuficiente")

                } else if (presupuesto < 100) {
                    alert("Muchas gracias, vuelva pronto")
                }
                else {
                    /* alert(`su saldo disponible es de ${presupuesto}`) */
                    let continuar = parseInt(prompt("Desea continuar comprando?\n\n1.Si\n2.No"))
                    switch (continuar) {
                        case 2:
                            opcionBebida = 0;
                            break;
                        default:
                            break;
                    }
                }
                break

            default:

                break;
        }

    } while (presupuesto >= 100 && opcionTrago !== 0 && opcionBebida !== 0);
}


