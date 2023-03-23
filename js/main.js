//inicializacion de variables globales
let productos = JSON.parse(localStorage.getItem("Products"));
let cart = JSON.parse(localStorage.getItem("Cart"))||[];
let count = 0;
let container = document.getElementById("products");
const btnBuscar = document.getElementById("btnBuscar");
const textbuscar = document.getElementById("textbuscar");
const spanCount = document.getElementById("count");
const cartBody = document.getElementById("cartBody");
const textTotal = document.getElementById("textTotal")

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
                <div class="col-md-2">
                    <strong style="
                    font-size: 1.3rem">S/${item.price}</strong>
                </div>
                <div class="col-md-2">
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
    renderCart();
}
//agregar producto a carrito
const addProducts = (id) => {
    let item = productos.find(item => item.id == id);
    cart.push(item);
    localStorage.setItem("Cart",JSON.stringify(cart));
    renderCart()
    console.log(cart);
}

btnBuscar.addEventListener("click", () => {
    renderProducts(textbuscar.value)
})


renderProducts('');
renderCart();