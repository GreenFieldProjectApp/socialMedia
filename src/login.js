const express = require("express");
const {User} = require("../orm");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

const router = express.Router();

router.post("/login", async (req, res) => {
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
 
});


module.exports = router;
