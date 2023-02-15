module.exports = (sequelize, DataTypes) => {
   
    const CommentReply = sequelize.define("commentReply", {
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
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
      },
    });
  
    return CommentReply;
  };
