
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
      }}).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
}

export default protect;
