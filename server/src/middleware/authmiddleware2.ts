
import jwt from "jsonwebtoken";
import User from "../models/user";
import { Request, Response } from "express";
import express from "express";
// auth middleware added
const protect = async(req:Request, res:Response,next:express.NextFunction)=>{
	let token;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]


      const decoded = jwt.verify(token, String(process.env.JWT_TOKEN));


	if((<any>decoded).id !== req.params.userId){
		return res.json({status:500,msg:"Unauthorized access will not be granted."});
	}

      (<any>req).user = await User.findOne({where:{
	      id: (<any>decoded).id
      }});


	next();

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
