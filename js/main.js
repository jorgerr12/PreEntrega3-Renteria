let productos = JSON.parse(localStorage.getItem("Products"));
let cart = [];
let count = 0;
let container = document.getElementById("products");
const btnBuscar = document.getElementById("btnBuscar");
const textbuscar = document.getElementById("textbuscar");

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
                ${producto.stock > 0 ? '<button onclick="addProducts(${producto.id})" id="btnAdd${producto.id}" type="button" class="btn btn-warning btn-lg" >Agregar al Carrito</button>' : '<button onclick="addProducts(${producto.id})" id="btnAdd${producto.id}" type="button" class="btn btn-warning btn-lg" >Agotado</button>'}
                
            </article>
            `

        container.appendChild(product);
    }

};

const addProducts = (id) => {
    alert(id);
}

btnBuscar.addEventListener("click", () => {
    renderProducts(textbuscar.value)
})

// buscar producto por codigo o nombre
renderProducts('');