import author from "./author.js";

class itemDescription {
  constructor(items, author, description) {
    this.items = items;
    this.author = author;
    this.description = description;
  }
}

const productToFront = (product, description) => {
  const item = new itemDescription();

  const itemProduct = {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: "00",
    },
    picture: product.pictures[0].url,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: product.sold_quantity,
  };

  item.author = author;
  item.item = itemProduct;
  item.description = description.plain_text;

  return item;
};

export default productToFront;
