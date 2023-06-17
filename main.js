import "./style.css";
import { getProducts } from "./src/api/getProducts";
import { createProductCard } from "./src/components/productCard";

const spinnerHTML = `<div style="padding-left:40vw">
		<img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952zqmvf8hi0l60tc39bsamr2i6qhnu5r0918kcglsv&ep=v1_gifs_search&rid=200w.gif&ct=g" />
		</div>
		`;

async function loadCuOrdonareString(criteriu, ordonare) {
  /*const products = await getProducts();

  document.getElementById("products").innerHTML = products
    .sort((a, b) => (a.type.toUpperCase() < b.type.toUpperCase() ? 1 : -1))
    .map((product) => createProductCard(product))
    .join("");*/
  let isLoading = true;
  const productsContainer = document.getElementById("products");

  getProducts().then((products) => {
    isLoading = false;
    const productHTML = products
      .sort((a, b) =>
        a[criteriu].toUpperCase() < b[criteriu].toUpperCase()
          ? ordonare
          : -ordonare
      )
      .map((product) => createProductCard(product))
      .join("");
    productsContainer.innerHTML = productHTML;
  });

  if (isLoading) {
    productsContainer.innerHTML = spinnerHTML;
  }
}

async function loadCuOrdonareNumber(criteriu, ordonare) {
  let isLoading = true;
  const productsContainer = document.getElementById("products");

  getProducts().then((products) => {
    isLoading = false;
    const productHTML = products
      .sort((a, b) =>
        Number(a[criteriu]) < Number(b[criteriu]) ? ordonare : -ordonare
      )
      .map((product) => createProductCard(product))
      .join("");
    productsContainer.innerHTML = productHTML;
  });

  if (isLoading) {
    productsContainer.innerHTML = spinnerHTML;
  }
}

//incarcarea initiala
window.addEventListener("DOMContentLoaded", async () => {
  loadCuOrdonareString("type", 1);
});

//ordonare dupa nume crescator
document.getElementById("nume-cresc").addEventListener("click", async () => {
  loadCuOrdonareString("name", -1);
});

//ordonare dupa nume descrescator
document.getElementById("nume-desc").addEventListener("click", async () => {
  loadCuOrdonareString("name", 1);
});

//ordonare dupa pret crescator
document.getElementById("pret-cresc").addEventListener("click", async () => {
  loadCuOrdonareNumber("price", -1);
});

//ordonare dupa pret descrescator
document.getElementById("pret-desc").addEventListener("click", async () => {
  loadCuOrdonareNumber("price", 1);
});

const filtruTip = document.querySelectorAll(".tip");
const filtruFloare = document.querySelectorAll(".floare");
const filtruCuloare = document.querySelectorAll(".culoare");

async function loadCuSortare(camp, valoare) {
  /*const products = await getProducts();
    document.getElementById("products").innerHTML = products
      .filter(
        (product) =>
          product.type.toUpperCase() == e.target.innerHTML.toUpperCase().trim()
      )
      .map((product) => createProductCard(product))
      .join("");*/
  let isLoading = true;
  const productsContainer = document.getElementById("products");

  getProducts().then((products) => {
    isLoading = false;
    const productHTML = products
      .filter((product) => product[camp].toUpperCase() == valoare)
      .map((product) => createProductCard(product))
      .join("");
    productsContainer.innerHTML = productHTML;
  });

  if (isLoading) {
    productsContainer.innerHTML = spinnerHTML;
  }
}

async function loadCuSortareSearch(camp, valoare) {
  let isLoading = true;
  const productsContainer = document.getElementById("products");

  getProducts().then((products) => {
    isLoading = false;
    const productHTML = products
      .filter((product) => product[camp].toUpperCase().includes(valoare))
      .map((product) => createProductCard(product))
      .join("");
    productsContainer.innerHTML = productHTML;
  });

  if (isLoading) {
    productsContainer.innerHTML = spinnerHTML;
  }
}

//filtru dupa tip aranjament
for (let i = 0; i <= filtruTip.length - 1; i++) {
  filtruTip[i].addEventListener("click", async (e) => {
    loadCuSortare("type", e.target.innerHTML.toUpperCase().trim());
  });
}

//filtru dupa tip floare
for (let i = 0; i <= filtruFloare.length - 1; i++) {
  filtruFloare[i].addEventListener("click", async (e) => {
    loadCuSortare("category", e.target.innerHTML.toUpperCase().trim());
  });
}

for (let i = 0; i <= filtruCuloare.length - 1; i++) {
  filtruCuloare[i].addEventListener("click", async (e) => {
    loadCuSortare("color", e.target.innerHTML.toUpperCase().trim());
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
  loadCuSortareSearch("name", searchText.value.toUpperCase().trim());
}
