import author from "./author.js";

const productToFront = (product, description) => {
  const myProduct = {};

  const pictures = [];

  const imgProducts = product.pictures.map((picture) => picture.secure_url);
  console.log("pictures", imgProducts);
  pictures.push(imgProducts);

  const itemProduct = {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: "00",
    },
    picture: pictures,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: product.sold_quantity,
  };

  myProduct.author = author;
  myProduct.item = itemProduct;
  myProduct.description = description.plain_text;

  return myProduct;
};

export default productToFront;
