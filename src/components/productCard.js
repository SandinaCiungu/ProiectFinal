import "./style.css";

export const createProductCard = (product) => `
   <div class="card">
      <img src=${product.image} />
      <p>${product.name}</p>
      <span>${product.price} RON</span>
      <a href="/src/pages/details/details.html?id=${product.id}">VEZI DETALII</a>
   </div>
`;
