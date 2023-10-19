const { handlerGetUsers } = require("../handlers/index");

const getUsers = async (req, res) => {
  try {
    const allUsers = await handlerGetUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron recuperar los usuarios." });
  }
};

module.exports = getUsers;
