import { createProductTableRow } from "../../components/productTableRow";
import { getProducts } from "../../api/getProducts";
import { deleteProductById } from "../../api/deleteProductById";

const tableBody = document.getElementById("products-table-body");

window.addEventListener("DOMContentLoaded", () => {
  let isLoading = true;

  const spinnerHTML = `<div style="padding-left:40vw">
  <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952zqmvf8hi0l60tc39bsamr2i6qhnu5r0918kcglsv&ep=v1_gifs_search&rid=200w.gif&ct=g" />
  </div>
  `;

  getProducts().then((products) => {
    isLoading = false;
    const tableRows = products
      .map((product) => createProductTableRow(product))
      .join("");
    tableBody.innerHTML = tableRows;
  });

  if (isLoading) {
    tableBody.innerHTML = spinnerHTML;
  }
});

tableBody.addEventListener("click", onClick);

async function onClick(e) {
  if (e.target.classList.contains("delete-product")) {
    // id format is p23, p34 we have to remove p and extract only the id value
    const id = e.target.parentNode.parentNode.id.substring(1);
    e.target.parentNode.parentNode.remove();
    const response = await deleteProductById(id);
    console.log(response);
  }
}
