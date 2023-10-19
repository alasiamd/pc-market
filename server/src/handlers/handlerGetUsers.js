const { Users } = require("../db");

const handlerGetUsers = async () => {
  try {
    console.log("Manejador handlerGetUsers llamado");
    const data = await Users.findAll();
    console.log("Datos recuperados:", data);
    return data;
  } catch (error) {
    console.error("Error al recuperar usuarios:", error);
    throw error;
  }
};

module.exports = handlerGetUsers;
