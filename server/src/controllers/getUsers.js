const { handlerGetUsers } = require("../handlers/index");

const getUsers = async (req, res) => {
  console.log("Controlador getUsers llamado desde afuera");
  try {
    console.log("Controlador getUsers llamado");
    const allUsers = await handlerGetUsers();
    console.log("Usuarios recuperados:", allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error en getUsers:", error);
    res.status(500).json({ error: "No se pudieron recuperar los usuarios." });
  }
};

module.exports = getUsers;
