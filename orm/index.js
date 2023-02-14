const { Sequelize, DataTypes } = require("sequelize");
const config = require("config");

//Create a Sequelize instance and pass the appropriate parameters separately
//You should modify 'database', 'username' and 'password' to fit your own credentials.
const sequelize = new Sequelize(config.database, config.user, config.password,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user.model")(sequelize, DataTypes);
db.Post = require("./post.model")(sequelize, DataTypes);
db.Comment = require("./comment.model")(sequelize, DataTypes);

db.User.hasMany(db.Post, {
  foreignKey: "posterId",
});
db.User.hasMany(db.Comment, {
  foreignKey: "commenterId",
});

db.Post.belongsTo(db.User, {
  as: "poster",
  foreignKey: "posterId",
  onDelete: "CASCADE",
});
db.Post.hasMany(db.Comment, {
  foreignKey: "postId",
});

db.Comment.belongsTo(db.User, {
  as: "commenter",
  foreignKey: "commenterId",
  onDelete: "CASCADE",
});
db.Comment.belongsTo(db.Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;
