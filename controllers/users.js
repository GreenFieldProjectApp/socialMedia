//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const { User } = require("../orm");

module.exports = {
  //method to fetch all users from the blog database.
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        order: [["createdAt", "ASC"]],
        attributes: { exclude: ['userId'] },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //method to add a user to the database via the respective model function.
  addUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //method to get one user by id.
  getOneUser: async (req, res) => {
    try {
      const user = await User.findByPk({
        where: {userId: req.params.id},
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateOneUser: async (req, res) => {
    try {
      const users = await User.update({
        where: {userId: req.params.id},
      }, req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteOneUser: async (req, res) => {
    try {
      const users = await User.destroy(req.params.id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};



//update and delete users (extra feature)
