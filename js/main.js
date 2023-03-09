// variables globales
let listaProductos =[];
let listaVentas=[];
let venta =[];
// clase de productos.
class Producto {
    constructor(data){
        this.codigo = data.codigo,
        this.nombre = data.nombre,
        this.precio = data.precio,
        this.stock = data.stock
    }

    vender(){
        this.stock -= 1;
    }
}
//clase venta
class Venta {
    constructor(data){
        this.cliente = data.cliente,
        this.productos = data.productos,
        this.totalPagar = data.totalPagar
    }

 
}

// agregar productos,


const createProducto = ()=>{
    let codigo = (prompt("Ingrese Codigo  de producto")).toLowerCase();
    let nombre = (prompt("Ingrese Nombre  de producto")).toLowerCase();
    let precio = Number(prompt("Ingrese precio  de producto"));
    let stock = Number(prompt("Ingrese stock  de producto"));



    let data = {
        codigo,
        nombre,
        precio,
        stock
    }

    const producto = new Producto(data)
    listaProductos.push(producto);
    console.log('Producto Registrado: ',producto);
    let pregunta =(prompt("desea agregar otro producto? ingrese si o no "));
    if(pregunta=="si"){
        createProducto();
    }
    
}

// consultar productos agotados

const getAgotados=()=>{
    let agotados = listaProductos.filter((p)=>p.stock == 0);
    return agotados;
}

// buscar producto por codigo o nombre

const getProducto=(data)=>{
    let product = data.toLowerCase();
    let producto = listaProductos.find(p=> p.nombre == product |p.codigo == product)
    return producto;
}

const registrarVenta=()=>{
   
        let comprar = true;
        let productos =[];
        let cliente = (prompt("Ingrese Nombre de cliente")).toLowerCase();
        // agregar productos a la venta
        do {
            
            let buscado = (prompt("Ingrese nombre o codigo de producto")).toLowerCase();
            let producto = getProducto(buscado);

            if (producto){
                productos.push(producto)

                alert(`se agrego producto:${producto.nombre} precio:${producto.precio}`)
                let pregunta = (prompt("desia agregar otro producto ingrese si o no")).toLowerCase();
                if(pregunta == "no"){
                    comprar= false;
                }
            }
            else{
                alert("producto no existe")
                let pregunta = (prompt("desea agregar otro producto ingrese si o no")).toLowerCase();
                if(pregunta == "no"){
                    comprar= false;
                }
            }

        } while (comprar);

        // registar venta
        let totalventa =0
        let total = productos.map((producto)=>{
            
            totalventa = totalventa + producto.precio;
            
        })

        let totalPagar = Number(prompt(`Su monto total a pagar es:${totalventa} ingrese pago`));

        let data = {
            cliente,
            productos,
            totalPagar
        }
    
        let venta = new Venta(data);
        // Descontar stocks
        productos.map(producto=>producto.vender())
        console.log("venta registrada con exito:",venta);

    }

    
//registrar productos de prueba

    
const registrarproductos=()=>{
    const producto1 = new Producto({
        codigo:"p001",
        nombre:"laptop",
        precio:1500,
        stock:10
    })

    listaProductos.push(producto1);
    const producto2 = new Producto({
        codigo:"p002",
        nombre:"tablet",
        precio:800,
        stock:10
    })
    listaProductos.push(producto2);
    const producto3 = new Producto({
        codigo:"p003",
        nombre:"celular",
        precio:500,
        stock:1
    })
    listaProductos.push(producto3);
    console.log(listaProductos);
}

//createProducto();

/* 


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
 */