const { Users } = require("../db");

const handlerPostUsers = async (name, email, password, typeUser) => {
  const data = await Users.create({
    name,
    email,
    password,
    typeUser,
  });
  console.log(data);
  return data;
};

module.exports = handlerPostUsers;
