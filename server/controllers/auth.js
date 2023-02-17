//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const {  User } = require("../orm");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
module.exports = {
  //method to fetch all posts from the blog database.
  logIn: async (req, res) => {
    const { email, password } = req.body;
    //check if user exist 
     try{ 
        const userWithEmail = await User.findOne({ where: { email } })
        // make sure that email and password match
      if (!userWithEmail){
        return res.status(409).send({ message: "Email or password does not match!" });
      }
    // make sure that password and email  match
    else {
        const comparedPassword = bcrypt.compareSync(password , userWithEmail.password)
    
         if (!comparedPassword){
            return res.status(409).send({ message: "Email or password does not match!" });
          }else {
        //verify the user 
        console.log(process.env.JWT_SECRET)
         const jwtToken = jwt.sign(
    
        { id: userWithEmail.id, email: userWithEmail.email },
        process.env.JWT_SECRET
      );
      console.log("jwt",jwt)
    //welcome 
      res.send({ message: "Welcome Back!", token: jwtToken });}}
         }
         catch(error){
            console.log (error)
        }
  },
  signUp: async (req, res) => {
    console.log("hi");

        const { fullName, email, password } = req.body;
      //check if email already exist
        try {
        const alreadyExistsUser = await User.findOne({ where: { email } })
      console.log(alreadyExistsUser)
      // if yes change ur email
        if (alreadyExistsUser) {
          return res.status(409).send({ message: "User with email already exists!" });
        }
      //if not creat a new user 
        else {
          
          const hashedPassword = bcrypt.hashSync(password,8);
        const newUser = new User({ fullName, email, password:hashedPassword });
       const user = await newUser.save()
        res.status (200).send(user)
      }
      }   catch(error){
        console.log (error)
      }
  
},

  //method to add a post to the database via the respective model function.
  signOut: async (req, res) => {
    try {
        res.status(200).json(" to the next login !");
          }catch (err) {
          return res.sendStatus(400);
        }
  },
}