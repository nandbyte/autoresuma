
import jwt from "jsonwebtoken";
import User from "../models/user";

const protect = async(req, res)=>{
	let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, "secret")

      req.user = await User.findOne({where:{
	      userId: decoded.id
      }});

      next()
    } catch (error) {

      return res.json({
	      status:401,
	      msg:"Authorization failed",

      });
    }
  }

  if (!token) {

      return res.json({
	      status:401,
	      msg:"NO TOKEN",
      });
  }
}

export default protect;
