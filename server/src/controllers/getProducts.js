const { handleGetProducts } = require("../handlers/index");

const getProducts = async (req, res) => {
  try {
    const allProducts = await handleGetProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ error: "No se pudo recuperar los productos." });
  }
};

module.exports = getProducts;
