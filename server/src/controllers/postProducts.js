const { handlerPostProducts } = require("../handlers/index");

const postProducts = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name)
      res.status(401).json({ message: "Todos los campos son obligatorios" });

    const data = await handlerPostProducts(name);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "No se pudo crear el producto" });
  }
};

module.exports = postProducts;
