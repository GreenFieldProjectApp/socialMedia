const express = require("express");
const {User} = require("../orm");
const bcrypt = require('bcryptjs')
const router = express.Router();

router.post("/register", async (req, res) => {
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


});


module.exports = router;
