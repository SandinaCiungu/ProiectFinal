import "./style.css";

export const createProductCard = (product) => `
   <div class="card">
      <a href="src/pages/details/details.html?id=${product.id}">  <img src=${product.image} />  </a> 
      <p>   ${product.name}</p>           </a>
      <span>${product.price} RON</span>   </a>    
   </div>
`;
