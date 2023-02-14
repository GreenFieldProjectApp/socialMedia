module.exports = (sequelize, DataTypes) => {
   
    const CommentReply = sequelize.define("commentReply", {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return CommentReply;
  };
