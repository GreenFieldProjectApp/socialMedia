// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
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
    });
  
    return Post;
  };