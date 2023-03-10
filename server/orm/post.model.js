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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
 
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:0
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey:true
    },
  });

  return Post;
};