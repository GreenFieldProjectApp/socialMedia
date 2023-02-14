// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, sequelize) => {
  const User = sequelize.define("users", {
    userName: {
      type: sequelize.STRING,
      unique: true,
    },
    email: {
      type: sequelize.STRING,
      unique: true,
    },
    password: {
      type: sequelize.INT ,
    },
  });

  return User;
};
