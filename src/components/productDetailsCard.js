import "./style.css";

export const createProductDetailsCard = (product) => `
   <div class="card details">
      <p>${product.name}</p>
      <img src=${product.image} />
      <p>${product.price}</p>      
      <p>${product.description}</p>
   </div>
`;
