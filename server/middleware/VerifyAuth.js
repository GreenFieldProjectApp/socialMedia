const jwt = require('jsonwebtoken')
const {  User } = require("../orm");
async  function verifyAuth(req,res,next){
    try{
    // console.log('in middleware');
    const token = req.cookies.Authorization;
        //decoding the token 
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // checking the ExpirationTime
        if (Date.now() > decoded.exp) return res.sendStatus(401);
    //finding the user using decoded sub
   const findUser = await User.findById(decoded.sub)
    if(!findUser) return res.sendStatus(401)
    // attach user to req
req.findUser = findUser

next()
}catch(err){
    return res.sendStatus(401)
}
}
module.exports = verifyAuth ; 