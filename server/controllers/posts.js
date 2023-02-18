//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { Comment, Post, User, CommentReply } = require("../orm");

module.exports = {
  //method to fetch all posts from the blog database.
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
     
        order: [["createdAt", "ASC"]],
        // attributes: { exclude: ['userId'] },
        include: [
          { model: User, as: "user", attributes: ["fullName"] },
          {
            model: Comment,
        //     separate: true, whyyyyy whyy ????????
            order: [["date", "ASC"]],
            // attributes: { exclude: ['postId', 'userId'] },
            include: [
              { model: User, as: "user", attributes: ["fullName"] },
            ],
          },
          
          // { model: User, as: "user", attributes: [["fullName", "author"]] }
                  

        ]
      })
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
        
        include: [
        //   { model: User,
        // include: [
        //       { model: User, as: "user", attributes: ["fullName"] },
        //     ],
        //      },


          {
            model: Comment,
            separate: true,
            order: [["createdAt", "ASC"]],
            // attributes: { exclude: ['postId', 'userId'] },
            include: [
              { model: User, as: "user", attributes: ["fullName"] },
            ],
          },
         
        ],
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
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
      const post = await Post.update(req.body,{
        where : {id : req.params.id}
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  deleteOnePost: async (req, res) => {
    try {
      const post = await Post.destroy({
        where : {id : req.params.id},
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
