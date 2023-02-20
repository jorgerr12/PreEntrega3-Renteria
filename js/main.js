const productos = [{
    nombre: "computadora",
    precio: 1500
},
{
    nombre: "impresora",
    precio: 500
},
{
    nombre: "laptop",
    precio: 2000
},
{
    nombre: "telefono",
    precio: 1500
},]
var comprar = true;



do {

    var encontrado = false;
    const seleccion = prompt("ingrese un producto");
    var productoSeleccionado = {};

    for (let index = 0; index < productos.length; index++) {

        if (productos[index].nombre == seleccion) {
            encontrado = true;
            productoSeleccionado = productos[index];
        }
        ;

    }

    if (encontrado) {
        alert("producto encontrado");
        var cantidad = prompt("ingrese cantidad");
        var total = cantidad * productoSeleccionado.precio;
        alert("su monto a pagar es:" + total);
    }
    else {
        alert("no se encontro el producto")
    }

    const seguir = prompt("Desea seguir comprando ingrese si o no");
    
    if (seguir == "no") {
        comprar = false;
    }

} while (comprar);
