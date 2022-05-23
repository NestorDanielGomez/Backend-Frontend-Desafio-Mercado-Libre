import author from "./author.js";

class searchResultados {
  constructor(items, author, categories) {
    this.items = items;
    this.author = author;
    this.categories = categories;
  }
}

const productsToFront = (products) => {
  let results = new searchResultados();
  const itemsFounded = products.results;

  const categorieToInspect = products.filters;

  const arrayOfItems = itemsFounded.map((product) => {
    let item = {};
    item.id = product.id;
    item.title = product.title;
    item.price = {
      currency: product.currency_id,
      amount: product.price,
      decimals: "00",
    };
    item.picture = product.thumbnail;
    item.condition = product.condition;
    item.free_shipping = product.shipping.free_shipping;
    return item;
  });

  results.author = author;
  results.categories =
    categorieToInspect.length === 0
      ? false
      : products.filters[0].values[0].path_from_root;

  results.items = arrayOfItems;

  return results;
};

export default productsToFront;
