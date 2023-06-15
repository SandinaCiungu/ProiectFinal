import { getProductById } from "../../api/getProductById";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  getProductQuantityFromLocalStorage,
  isProductAlreadyInCart,
} from "../../utils/cart";

const showProducts = async () => {
  const cart = localStorage.getItem("cart");
  const products = JSON.parse(cart);
  //const totalCos = 0;
  document.getElementById("cart").innerHTML = `<h2>COS DE CUMPARATURI</h2>`;
  document.getElementById("cart").innerHTML += `<div class="cant"> <h3>
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
            <img src=${productInfo.image} />
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
      //totalCos += Number(productInfo.price) * Number(product.quantity);
    });
  });
  /*document.getElementById("cart").innerHTML += `<div class="cant">
                    <h3>
                      <span id="h-titlu">Total comanda</span>
                      <span id="h-subttl">${totalCos} Lei</span>
                    </h3>
                  </div>`;*/
};
window.addEventListener("load", showProducts);
//document.querySelector("button").addEventListener("click", showTotal);

/*
function showTotal() {
  console.log("aici");
  const products = document.querySelectorAll(".cant");
  let total = 0;
  for (let i = 0; i <= products.length - 1; i++) {
    total +=
      Number(
        products.querySelector(".cart-pret").innerHTML.replace(" Lei", "")
      ) * Number(products.querySelector(".quantity").innerHTML);
  }
  console.log(total);
}
*/

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
}
