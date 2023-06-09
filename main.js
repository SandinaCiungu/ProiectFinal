import "./style.css";
import { getProducts } from "./src/api/getProducts";
import { createProductCard } from "./src/components/productCard";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  //console.log(products.sort((a, b) => a.name - b.name));
  document.getElementById("products").innerHTML = products
    //.sort((a, b) => a.name - b.name)
    .map((product) => createProductCard(product))
    .join("");
});

const filtruTip = document.querySelectorAll(".tip");
const filtruFloare = document.querySelectorAll(".floare");
const filtruCuloare = document.querySelectorAll(".culoare");

for (let i = 0; i <= filtruTip.length - 1; i++) {
  filtruTip[i].addEventListener("click", filterTip);
}
for (let i = 0; i <= filtruFloare.length - 1; i++) {
  filtruFloare[i].addEventListener("click", filterFloare);
}
for (let i = 0; i <= filtruCuloare.length - 1; i++) {
  filtruCuloare[i].addEventListener("click", filterCuloare);
}

async function filterTip(event) {
  const products = await getProducts();
  document.getElementById("products").innerHTML = products
    .filter((product) =>
      product.type.includes("Ghiveci" /*event.target.innerHTML*/)
    )
    .map((product) => createProductCard(product))
    .join("");
}

async function filterFloare(event) {
  const products = await getProducts();
  document.getElementById("products").innerHTML = products
    .filter((product) =>
      product.category.includes("Bujor" /*event.target.innerHTML*/)
    )
    .map((product) => createProductCard(product))
    .join("");
}
async function filterCuloare(event) {
  const products = await getProducts();
  document.getElementById("products").innerHTML = products
    .filter((product) =>
      product.color.includes("Roz" /*event.target.innerHTML*/)
    )
    .map((product) => createProductCard(product))
    .join("");
}
