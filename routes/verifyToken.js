const jwt = require('jsonwebtoken');



const verifyToken = (req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        const token = authHeader
        jwt.verify(token,process.env.JWT_KEY, (err,user)=>{
            if(err) return res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Your are not authenticated!")
    }
}

const verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not authorized!");
        }
    })
}


const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not authorized!");
        }
    })
}
module.exports = {
    verifyToken,
    verifyTokenAndAuth,
    verifyTokenAndAdmin
}