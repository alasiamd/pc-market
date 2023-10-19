const { Users } = require("../db");

const handlerGetUsers = async () => {
  try {
    const data = await Users.findAll();
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = handlerGetUsers;
