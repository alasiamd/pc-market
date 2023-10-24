const { Products } = require("../db");

const handlerPostProducts = async (name) => {
  const data = await Products.create({
    name,
  });
  console.log(data);
  return data;
};

module.exports = handlerPostProducts;
