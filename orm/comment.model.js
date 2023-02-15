// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
   
    const Comment = sequelize.define("comment", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type:DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
    });
  
    return Comment;
  };
