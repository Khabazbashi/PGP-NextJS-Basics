let products = require("../data/data.json");

export const productsRepo = {
  getAll: () => products,
  getById: (id) => products.find((x) => x.id.toString() === id.toString()),
  getByCategory: (category) => products.filter((x) => x.category === category),
  getCategories: () => Array.from(new Set(products.map((x) => x.category))),
};
