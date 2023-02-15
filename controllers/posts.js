//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { Comment, Post, User, CommentReply } = require("../orm");

module.exports = {
  //method to fetch all posts from the blog database.
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        
        order: [["createdAt", "ASC"]],
        attributes: { exclude: ['userId'] },
        include: [
          {
            model: Comment,
            separate: true,
            order: [["date", "ASC"]],
            attributes: { exclude: ['postId', 'userId'] },
            include: [
              { model: User, as: "user", attributes: ["fullname"] },
            ],
          },
          //{ model: User, as: "user", attributes: [["fullname", "author"]] },
        ]
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
    }
  },
  getUserPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        where : {userId : req.params.id},
        order: [["createdAt", "ASC"]],
        attributes: { exclude: ['userId'] },
        include: [
          {
            model: Comment,
            separate: true,
            order: [["date", "ASC"]],
            attributes: { exclude: ['postId', 'userId'] },
            include: [
              { model: User, as: "user", attributes: ["username"] },
            ],
          },
          { model: User, as: "user", attributes: [["username", "author"]] },
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
    }
  },
  //method to get one post by id.
  getOnePost: async (req, res) => {
    try {
      const post = await Post.findByPk( {
        where : {postId: req.params.id},
        include: [{ model: User, as: "user", attributes: ["username"] }],
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //method to add a post to the database via the respective model function.
  addPost: async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  updatePost: async (req, res) => {
    try {
      const post = await Post.update({
        where : {postId : req.params.id}
      }, req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  deleteOnePost: async (req, res) => {
    try {
      const post = await Post.destroy({
        where : {postId : req.params.id},
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  deleteAllPosts: async (req, res) => {
    try {
      const post = await Post.destroy({
        where: {},
        truncate: true
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
