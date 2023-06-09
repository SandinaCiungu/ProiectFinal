import "./style.css";
import { getProducts } from "./src/api/getProducts";
import { createProductCard } from "./src/components/productCard";

//incarcarea initiala
window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (a.type.toUpperCase() < b.type.toUpperCase() ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");
});

//ordonare dupa nume crescator
document.getElementById("nume-cresc").addEventListener("click", async () => {
  const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");
});

//ordonare dupa nume descrescator
document.getElementById("nume-desc").addEventListener("click", async () => {
  const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");
});

//ordonare dupa pret crescator
document.getElementById("pret-cresc").addEventListener("click", async () => {
  const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");
});

//ordonare dupa pret descrescator
document.getElementById("pret-desc").addEventListener("click", async () => {
  const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (Number(a.price) < Number(b.price) ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");
});

const filtruTip = document.querySelectorAll(".tip");
const filtruFloare = document.querySelectorAll(".floare");
const filtruCuloare = document.querySelectorAll(".culoare");

//filtru dupa tip aranjament
for (let i = 0; i <= filtruTip.length - 1; i++) {
  filtruTip[i].addEventListener("click", async (e) => {
    const products = await getProducts();
    document.getElementById("products").innerHTML = products
      .filter(
        (product) =>
          product.type.toUpperCase() == e.target.innerHTML.toUpperCase().trim()
      )
      .map((product) => createProductCard(product))
      .join("");
  });
}

//filtru dupa tip floare
for (let i = 0; i <= filtruFloare.length - 1; i++) {
  filtruFloare[i].addEventListener("click", async (e) => {
    const products = await getProducts();
    document.getElementById("products").innerHTML = products
      .filter(
        (product) =>
          product.category.toUpperCase() ==
          e.target.innerHTML.toUpperCase().trim()
      )
      .map((product) => createProductCard(product))
      .join("");
  });
}

for (let i = 0; i <= filtruCuloare.length - 1; i++) {
  filtruCuloare[i].addEventListener("click", async (e) => {
    const products = await getProducts();
    document.getElementById("products").innerHTML = products
      .filter(
        (product) =>
          product.color.toUpperCase() == e.target.innerHTML.toUpperCase().trim()
      )
      .map((product) => createProductCard(product))
      .join("");
  });
}

//cautare dupa parte din nume
const searchText = document.getElementById("search-text");
searchText.addEventListener("keydown", apasaEnterNume);

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", filtreazaDupaNume);

function apasaEnterNume(event) {
  if (event.key == "Enter") {
    filtreazaDupaNume();
  }
}

async function filtreazaDupaNume() {
  const products = await getProducts();
  document.getElementById("products").innerHTML = products
    .filter((product) =>
      product.name.toUpperCase().includes(searchText.value.toUpperCase().trim())
    )
    .map((product) => createProductCard(product))
    .join("");
}
