//inicializacion de variables globales
let productos =[]
let cart = JSON.parse(localStorage.getItem("Cart"))||[];
let count = 0;
let container = document.getElementById("products");
const btnBuscar = document.getElementById("btnBuscar");
const textbuscar = document.getElementById("textbuscar");
const spanCount = document.getElementById("count");
const cartBody = document.getElementById("cartBody");
const textTotal = document.getElementById("textTotal")

fetch('./js/products.json')
    .then ((resp) => resp.json())
    .then ((data) => {
        productos = data
        renderProducts('');
    })

//renderizar contenido de productos
const renderProducts = (value) => {
    container.innerHTML = '';
    productoBuscar = value.toLowerCase();
    let products = productos.filter(item => item.description.toLowerCase().includes(productoBuscar))
    for (const producto of products) {
        let product = document.createElement('div');
        product.className = 'card col-md-3 m-3';
        product.innerHTML = `
            <article class="p-3" >
                <img src="${producto.img}" alt="">
                <spam>${producto.description}
                </spam>
                <h2>S/${producto.price}</h2>
                ${producto.stock > 0 ? `<button onclick="addProducts(${producto.id})" id="btnAdd${producto.id}" type="button" class="btn btn-warning btn-lg" >Agregar al Carrito</button>` : `<button onclick="addProducts(${producto.id})" id="btnAdd${producto.id}" type="button" class="btn btn-outline-secondary" disabled >Producto Agotado</button>`}               
            </article>
            `
             container.appendChild(product);
    }
};
//renderizar carrito
const renderCart = () => {
    spanCount.innerHTML = cart.length;
    cartBody.innerHTML='';
    textTotal.innerHTML="S/0.00";
    cart.forEach(item => {
        let product = document.createElement('div');
        product.className = 'row me-2 p-3 cartItem';
        product.innerHTML = `
                <div class="col-md-3">
                    <img src="${item.img}" alt="">
                </div>
                <div class="col-md-5">
                    <span>${item.description}</span>
                </div>
                <div class="col-md-1 row">
                    <button onClick="addCantidad(${item.id})" class="btn btn-outline-secondary">+</button>
                    <span>${item.cantidad}</span>
                    <button onClick="restCantidad(${item.id})" class="btn btn-outline-secondary">-</button>
                </div>
                <div class="col-md-2">
                    <strong style="
                    font-size: 1.3rem">S/${item.priceTotal}</strong>
                </div>
                <div class="col-md-1">
                    <button onClick="deleteProduct(${item.id})" class="btn"><span class="fas fa-trash"></span></button>
                </div>   
    `
    cartBody.appendChild(product);
    textTotal.innerHTML = `S/${cart.reduce((acc,item)=>acc+item.price,0)}`
    })
}
//eliminar producto de carrito
const deleteProduct =(id)=>{
    let item = cart.findIndex(item =>item.id ==id);
    cart.splice(item,1);
    localStorage.setItem("Cart",JSON.stringify(cart));
    Notificacion("Se Elimino Producto del Carrito")
    renderCart();
}
//agregar producto a carrito
const addProducts = (id) => {
    let item = productos.find(item => item.id == id);
    let exist = cart.find(e =>e.id==item.id)
    exist
     ? 
    (exist.cantidad++,
    exist.priceTotal = item.price*exist.cantidad)
     : 
     cart.push({...item,cantidad:1,priceTotal:item.price})
    console.log("exist",exist)
   
    localStorage.setItem("Cart",JSON.stringify(cart));
    renderCart()
    Notificacion("Se Agrego Producto al Carrito")
}

btnBuscar.addEventListener("click", () => {
    renderProducts(textbuscar.value)
})

//agregar cantidades
const addCantidad=(id)=>{
  let item = cart.find(item => item.id == id)
   item.cantidad++
   item.priceTotal= item.cantidad * item.price
  renderCart()
}

//restar cantidad
const restCantidad = (id)=>{
    let item = cart.find(item =>item.id == id)
    item.cantidad == 1
    ?
    deleteProduct(id)
    :
    item.cantidad--
    item.priceTotal= item.cantidad * item.price
    renderCart()
}

function Notificacion(text){
    Toastify({
        text: text,
        duration: 3500,
        newWindow: false,
        close: true,
        gravity: "bottom",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
    }).showToast();
}
renderCart();