const db = require("./orm");

const { users, posts, comments } = require('./data.json');

(async () => {
  try {
    await db.sequelize.sync({ force: true });

    await db.User.bulkCreate(users);
    console.log("users saved");

    await db.Post.bulkCreate(posts);
    console.log("posts saved");

    await db.Comment.bulkCreate(comments);
    console.log("comments saved");
    await db.sequelize.close();
  } catch (error) {
    console.log("Error while saving data", error);
  }
})();
