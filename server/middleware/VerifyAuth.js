const jwt = require('jsonwebtoken')
const {  User } = require("../orm");
async  function verifyAuth(req,res,next){
    try{
        // console.log('in middleware');
        const token = req.cookies.Authorization;
        
        console.log('sDAFAFDAEFZAEFZEGFAEFAEFAEFF',token)
        //decoding the token 
        var decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log('sDAFAFDAEFZAEFZEGFAEFAEFAEFF',decoded)
        const findUser = decoded.user
        // checking the ExpirationTime
        // if (Date.now() > decoded.exp) return res.status(401).send('dkvklzd,c');
    //finding the user using decoded sub


    if(!findUser) return res.status(401).send('user not found')

    // attach user to req
   else {
  
    console.log("find user",findUser )
       req.findUser = findUser
       console.log('user',findUser)

   }


next()
}catch(err){
    return res.sendStatus(401)
}
}

module.exports = verifyAuth ; 

