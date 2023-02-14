// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
   
    const Comment = sequelize.define("comment", {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Comment;
  };
