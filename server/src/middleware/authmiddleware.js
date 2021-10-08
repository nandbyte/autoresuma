
import jwt from "jsonwebtoken";
import User from "../models/user";
// auth middleware added
const protect = async(req, res)=>{
	let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]


      const decoded = jwt.verify(token, "secret")


	if(decoded.id != req.body.id){
		return res.json({status:500,msg:"Unauthorized access will not be granted."});
	}

      req.user = await User.findOne({where:{
	      id: decoded.id
      }});


	return res.json({
		id: decoded.id,
		status:200,
		msg:"ok"
	})

    } catch (error) {

      return res.json({
	      status:401,
	      msg:"Authorization failed",
		error_msg:error.message

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
