function agregarcoctel() {
    const id = listaDeTragos.length + 1;
    const nombre = prompt("Ingrese el nombre del coctel");
    const costo = parseInt(prompt("Ingrese el costo del coctel"));
    const conAlcohol = confirm("Tiene alcohol?");

    const nuevoTrago = new Trago(id, nombre, costo, conAlcohol);
    listaDeTragos.push(nuevoTrago);

    alert(`Se agregó ${nombre} correctamente`)
    opcionElegida = 0;
}

function deseaContinuar() {
    let deseaContinuar = confirm("Desea continuar?")
    if (deseaContinuar) {
        opcionElegida = parseInt(prompt(`Bienvenido a Drinkles, por favor indique una opción:
    
            1. Mostrar todos los cocteles.
            2. Mostrar cocteles con alcohol.
            3. Mostrar cocteles sin alcohol.
            4. Buscar coctel por nombre.
            5. Buscar coctel por costo.
            6. Agregar un coctel.
        
            Para salir, presione 0.`))

    } else {
        opcionElegida = 0;
    }
}

function conAlcohol(conAlcohol) {
    if (conAlcohol) {
        const conAlcohol = listaDeTragos.filter(el => el.conAlcohol) /* seria lo mismo que poner el.alcohol === true,  ya que ya está implicito*/
        console.log(conAlcohol);
        alert("Los cocteles se mostrarán en la consola")
    } else {
        const sinAlcohol = listaDeTragos.filter(el => !el.conAlcohol) /* se podria poner el.conAlcohol === false, pero queda mejor con una negación*/
        console.log(sinAlcohol);
        alert("Los cocteles se mostrarán en la consola");
    }
}

function buscarNombre() {
    const buscarNombre = prompt("Ingrese el nombre del coctel que busca").toLowerCase();
    const coctelPorNombre = listaDeTragos.find(el => el.nombre === buscarNombre);
    console.log(coctelPorNombre);
    alert("El coctel se mostrará en la consola");
}

function coctelPorPrecio() {
    const precio = prompt(`Ingrese un precio, y se le mostrarán cocteles por debajo de ese precio
(el precio minimo es de $100)`);
    if (precio >= 100 && precio !== NaN) {
        const coctelPorPrecio = listaDeTragos.filter(el => el.costo <= precio);
        console.log(coctelPorPrecio);
        alert("Los cocteles se mostrarán en la consola");
        deseaContinuar();
    } else {
        alert("Por favor indique una opción valida")
        opcionElegida = 5;
    }
}