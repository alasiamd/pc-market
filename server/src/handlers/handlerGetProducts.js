const { Products } = require("../db");

const handlerGetProducts = async (req, res) => {
  try {
    const data = await Products.findAll();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = handlerGetProducts;
