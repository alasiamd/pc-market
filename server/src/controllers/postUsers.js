const { handlerPostUsers } = require("../handlers/index");

const postUsers = async (req, res) => {
  const { name, email, password, typeUser } = req.body;
  try {
    if (!name || !email || !password || !typeUser)
      res.status(401).json({ message: "Todos los campos son obligatorios" });

    const data = await handlerPostUsers(name, email, password, typeUser);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "No se pudo crear el usuario" });
  }
};

module.exports = postUsers;
