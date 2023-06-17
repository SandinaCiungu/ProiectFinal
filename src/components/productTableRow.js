import "./style.css";

export const createProductTableRow = (product) => `
   <tr id="p${product.id}">
      <td><a href="../details/details.html?id=${product.id}"> <img src=${product.image} height="100px"/> </a></td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td><button class='delete-product'>X</button></td>
   </tr>
`;
