import { getProductById } from "../../api/getProductById";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  getProductQuantityFromLocalStorage,
  isProductAlreadyInCart,
} from "../../utils/cart";

const showProducts = async () => {
  document.getElementById("val-total").innerHTML = "0";
  const cart = localStorage.getItem("cart");
  const products = JSON.parse(cart);
  document.getElementById("cart").innerHTML = `<div class="cant"> <h3>
                      <span id="h-nume">Produs</span>
                      <span id="h-pret">Pret</span>
                      <span id="h-cant">Cantitate</span>
                      <span id="h-subttl">Subtotal</span>
                    </h3> </div>`;
  products.forEach((product) => {
    getProductById(product.id).then((productInfo) => {
      document.getElementById("cart").innerHTML += `<div class="cant" id="p${
        product.id
      }">
            <a href="../details/details.html?id=${
              productInfo.id
            }">  <img class="poza-prod" src=${productInfo.image} />  </a> 
            <span class="cart-nume">${productInfo.name}</span>
            <span class="cart-pret">${Number(productInfo.price)} Lei</span>
            <div class="cart-cantitate">
              <button id=${product.id} class="decrement-quantity">-</button>
              <span class="quantity">${product.quantity}</span>
              <button id=${product.id} class="increment-quantity">+</button>
            </div>
            <span class="cart-subtotal">${
              Number(productInfo.price) * Number(product.quantity)
            } Lei</span>
      </div>`;
      document.getElementById("val-total").innerHTML =
        Number(document.getElementById("val-total").innerHTML) +
        Number(productInfo.price) * Number(product.quantity);
    });
  });
};
window.addEventListener("load", showProducts);

document.getElementById("afis-total").addEventListener("click", showTotal);
document
  .getElementById("finalizeaza")
  .addEventListener("click", finalizeazaComanda);

function showTotal() {
  const productsSubttl = document.querySelectorAll(".cart-subtotal");
  let total = 0;
  for (let i = 0; i <= productsSubttl.length - 1; i++) {
    total += Number(productsSubttl[i].innerHTML.replace(" Lei", ""));
  }
  document.getElementById("val-total").innerHTML = total + " Lei";
}

function finalizeazaComanda() {
  window.alert("Va multumim pentru comanda plasata, va mai asteptam!");
  document.getElementById("cart").innerHTML = "";
  localStorage.removeItem("cart");
  document.getElementById("val-total").innerHTML = "0 Lei";
}

document.getElementById("cart").addEventListener("click", async (e) => {
  const cartArray = JSON.parse(localStorage.getItem("cart"));
  const productId = e.target.id;

  if (e.target.classList.contains("decrement-quantity")) {
    decrementProductQuantity(productId, cartArray);
  } else if (e.target.classList.contains("increment-quantity")) {
    incrementProductQuantity(productId, cartArray);
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));

  if (!isProductAlreadyInCart(productId, cartArray)) {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .remove();
  } else {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .querySelector(".quantity").innerHTML =
      getProductQuantityFromLocalStorage(productId, cartArray);
    refreshProductSubtotal(productId);
  }
});

function refreshProductSubtotal(id) {
  document
    .getElementById("cart")
    .querySelector("#p" + id)
    .querySelector(".cart-subtotal").innerHTML =
    Number(
      document
        .getElementById("cart")
        .querySelector("#p" + id)
        .querySelector(".cart-pret")
        .innerHTML.replace(" Lei", "")
    ) *
      Number(
        document
          .getElementById("cart")
          .querySelector("#p" + id)
          .querySelector(".quantity").innerHTML
      ) +
    " Lei";
  showTotal();
}
