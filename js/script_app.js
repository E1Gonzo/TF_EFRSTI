function showPopup() {
  let modalContainer = document.getElementById("modal-container");

  let popup = document.createElement("div");
  popup.className = "popup";
  popup.style.display = "flex";
  popup.style.flexDirection = "column"; 

  let closeButton = document.createElement("span");
  closeButton.className = "close-button";
  closeButton.innerText = "X";
  closeButton.style.cursor = "pointer";

  let message = document.createElement("p");
  message.innerText = "Usa está oferta en tu proxima compra";
  message.style.textAlign = "center";

  let image = document.createElement("img");
  image.src = "../img/POPUP.png";
  image.style.width = "350px";
  image.style.height = "450px";
  image.style.marginBottom = "12px";

  let button = document.createElement("button");
  button.innerText = "Registrarse";
  button.style.width = "130px";
  button.style.height = "35px";
  button.style.padding = "10px";
  button.src = "../paginas/register.html";
  button.style.margin = "auto";
  button.style.marginBottom = "5px";

  popup.appendChild(closeButton);
  popup.appendChild(message);
  popup.appendChild(image);
  popup.appendChild(button);

  modalContainer.appendChild(popup);

  button.addEventListener("click", () => {
    window.location.href = "../paginas/register.html";
  });

  closeButton.addEventListener("click", () => {
    modalContainer.removeChild(popup);
  });
}

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contadorCompras = 0; // Variable para contar las compras

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">S/. ${product.precio}</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    contadorCompras++; // Incrementar el contador de compras

    if (contadorCompras % 5 === 0) { // Mostrar el pop-up cada 5 compras
      showPopup();
    }

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });

      carritoCounter();
      saveLocal();
    }
  });
});

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item