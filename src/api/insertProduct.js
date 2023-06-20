import { productsURL } from "../constans";

export const insertProduct = async (
  name1,
  category1,
  image1,
  price1,
  type1,
  description1,
  color1,
  ingrijire1,
  continut1,
  accesorii1
) => {
  const response = await fetch(productsURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name1,
      category: category1,
      image: image1,
      price: price1,
      type: type1,
      description: description1,
      color: color1,
      stock: 0,
      ingrijire: ingrijire1,
      continut: continut1,
      accesorii: accesorii1,
    }),
  });
  const product = await response.json();
  return product;
};
