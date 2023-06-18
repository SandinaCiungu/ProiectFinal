import "./style.css";

export const createProductTableRow = (product) => `
   <tr id="p${product.id}">
      <td>#${product.id}</td>
      <td><img src=${product.image} height="40px"/></td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.color}</td>
      <td>${product.type}</td>
      <td>${Number(product.price)} Lei</td>
      <td><button class='modify-product'>Editare</button></td>
      <td><button class='delete-product'>Stergere</button></td>
   </tr>
`;
