// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
        fullName: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }, 
     picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
      
    
    }, 
     phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      
    }, 
     password: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

  });

  return User;
};
