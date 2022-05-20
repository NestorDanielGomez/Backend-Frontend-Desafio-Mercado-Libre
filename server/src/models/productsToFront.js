import author from "./author.js";

const productsToFront = (products) => {
  let searchResults = {};
  //array con los 4 productos
  const itemsFounded = products.results;
  //array con las categorias
  const categoriesFound = products.filters[0].values[0].path_from_root;

  searchResults.items = [];

  //array con los items de cada busqueda
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
    searchResults.items.push(item);
    return item;
  });

  //array con las categorias de los productos de la busqueda
  const arrayOfCategories = categoriesFound.map((categorie) => {
    return categorie.name;
  });

  searchResults.author = author;
  searchResults.categories = arrayOfCategories;
  searchResults.items = arrayOfItems;

  return searchResults;
};

export default productsToFront;
//
// nomb: producto.attributes.name,
// lastname: producto.attributes.value_name
