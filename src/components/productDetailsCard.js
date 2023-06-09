import "./style.css";

export const createProductDetailsCard = (product) => `
   <div class="card details">
      <p>${product.name}</p>
      <img src=${product.image} />
      <p>${product.price}</p>      
      <p>${product.description}</p>
      <button class="add-to-cart-btn">Add To Cart</button>
   </div>
`;
