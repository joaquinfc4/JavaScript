/* let titulo = document.createElement("h1");
titulo.innerText = "Esto es un titulo";
document.body.append(titulo); */
/* `` */

const listaDeTragos = [
    {
        id: 1,
        nombre: "té verde helado al estilo moruno",
        costo: 100,
        conAlcohol: false
    },
    {
        id: 2,
        nombre: "limonada de frambuesa",
        costo: 150,
        conAlcohol: false
    },
    {
        id: 3,
        nombre: "smoothie de mango, piña y lima",
        costo: 200,
        conAlcohol: false
    },
    {
        id: 4,
        nombre: "café irlandes",
        costo: 150,
        conAlcohol: true
    },
    {
        id: 5,
        nombre: "white russian.",
        costo: 250,
        conAlcohol: true
    },
    {
        id: 6,
        nombre: "cosmopolitan",
        costo: 500,
        conAlcohol: true
    },
];

class Trago {
    constructor(id, nombre, costo, conAlcohol) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.conAlcohol = conAlcohol;
    }
}

let opcionElegida = parseInt(prompt(`Bienvenido a Drinkles, por favor indique una opción:
    
    1. Mostrar todos los cocteles.
    2. Mostrar cocteles con alcohol.
    3. Mostrar cocteles sin alcohol.
    4. Buscar coctel por nombre.
    5. Buscar coctel por costo.
    6. Agregar un coctel.

    Para salir, presione 0.`))

do {
    switch (opcionElegida) {
        case 0:
            alert("Gracias, vuelva pronto");
            break;
        case 1:
            console.log(listaDeTragos);
            alert("Los cocteles se mostrarán en la consola")
            deseaContinuar()
            break;
        case 2:
            conAlcohol(true);
            deseaContinuar();
            break;
        case 3:
            conAlcohol(false);
            deseaContinuar();
            break;
        case 4:
            buscarNombre();
            deseaContinuar()
            break;
        case 5:
            coctelPorPrecio();
            break;
        case 6:
            agregarcoctel();
            console.log(listaDeTragos);
            deseaContinuar();
            break;

        default:
            alert("Por favor indique una opción valida");
            opcionElegida = parseInt(prompt(`Bienvenido a Drinkles, por favor indique una opción:
    
    1. Mostrar todos los cocteles.
    2. Mostrar cocteles con alcohol.
    3. Mostrar cocteles sin alcohol.
    4. Buscar coctel por nombre.
    5. Buscar coctel por costo.
    6. Agregar un coctel.
                
    Para salir, presione 0.`))
            break;
    }
} while (opcionElegida != 0);