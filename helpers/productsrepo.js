let products = require("../data/data.json");
let currentCategories = [];

export const productsRepo = {
  getAll: () => products,
  getById: (id) => products.find((x) => x.id.toString() === id.toString()),
  getCategories: () => Array.from(new Set(products.map((x) => x.category))),
  getByCategory,
  getByInput,
};

function getByCategory(category) {
  if (currentCategories.includes(category)) {
    var index = currentCategories.indexOf(category);
    currentCategories.splice(index, 1);
  } else {
    currentCategories.push(category);
  }

  if (currentCategories.length === 0) {
    return products;
  }

  const filteredProducts = products.filter((item) =>
    currentCategories.includes(item.category)
  );

  return filteredProducts;
}

function getByInput(input) {
  if (input === "") {
    return products;
  }

  const filteredProducts = products.filter(
    (i) =>
      i.title.includes(input) ||
      i.category.includes(input) ||
      i.description.includes(input)
  );

  return filteredProducts;
}
