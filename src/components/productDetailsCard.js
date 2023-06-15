import "./style.css";

export const createProductDetailsCard = (product) => `
   <div class="card-details">
      <div id="poza"> 
         <img src="${product.image}"/> 
      </div>
      
      <div id="description">
         <h1>${product.name}</h1> </br>
         <p>${product.continut}</p> </br>
         <p>Accesorii: ${product.accesorii}</p> </br>
         <p style="color:green; font-weight: 900">${product.price} lei</p><br />
         <button class="add-to-cart-btn">ADAUGA IN COS</button><br /><br />
         <p><strong>Descriere produs</strong></p><br />
         <p>${product.description}</p><br /> 
         <p><strong>Ingrijire floare</strong></p><br />
         <p>${product.ingrijire}</p>
      </div>
   </div>
`;
