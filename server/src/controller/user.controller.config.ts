import { CommonControllerConfig } from "../common/common.controllers.config";
import User from "../models/user";
import {v4 as uuidv4} from "uuid";
import generateToken from "../utils/generateToken";
import { Request,Response } from "express";
import Bio from "../models/bio";

class UserController extends CommonControllerConfig{

	authUser = async(req:Request,res:Response)=>{

		try{
		const email = req.body.email;
		const password = req.body.password;


		const record = await User.findOne({where: {email:email,password:password} });
		if(!record){
			return res.json({status:204, msg:"NOT FOUND",route:"/profile/login"});
		}else{
			const data = {
				id: record.id,
				email: record.email,
				token: generateToken(record.id)
			}
			return res.json({status:200,msg:"ok",route:"/v1/profile/login",data});

		}
		}catch(e){

			return res.json({status:500,msg:e.message,route: "/v1/profile/:userId"});
		}


	}

	create = async(req: Request, res: Response)=>{

		try{
			const id = uuidv4();
			const bioId = uuidv4();


			const duplicateErrs = await User.findOne({where: {email: req.body.email} })
			if(duplicateErrs){
				return res.json({status:400,msg:"mail duplicate error"});
			}
			const record = await User.create({...req.body,id});
			delete req.body.password;
			req.body.userId = id;

			const bioRecord = await Bio.create({...req.body,id:bioId});




			return res.json({status:201, msg:"OK", route:"/v1/profile/:userId", record,bioRecord});
		}
		catch(e){

			return res.json({status:500,msg:e.message,route: "/v1/profile/:userId"});
		}
	}

	getAllUsers = async(res: Response)=>{
		try{
			const record = await User.findAll({where: {}});

			if(!record){
				return res.json({status:204, msg:"NOT FOUND",route:"/profile"});
			}

			return res.json({status:200, msg:"OK", route:"/v1/profile", record });

		}
		catch(e){

			return res.json({status:500,msg: e.message, router:"/v1/profile"});
		}
	}

	getById = async(req: Request,res: Response)=>{

		try{

			const uid = req.params.userId;
			const record = await User.findOne({where:{id : uid }});

			if(!record){
				return res.json({status:204,msg: "NO CONTENT",route:"/v1/profile/:userId"});
			}

			const data = {
				id : record.id,
				firstName : record.firstName,
				lastName : record.lastName,
				email: record.email
			}

			return res.json({status:200, msg: "OK", route:"/v1/profile/:userId" ,data});
		}
		catch(e){
			return res.json({status:500, msg: e.message, route:"/v1/profile/:userId" });
		}
	}

	update = async(req: Request,res: Response)=>{
		try{
			const uid = req.params.userId;
			const record = await User.findOne({where: {id:uid}});

			if(!record){
				return res.json({status:204, msg: "NO CONTENT", route:"/v1/profile/:userId"});
			}


			const newRec = await record.update({...req.body});

			return res.json({status:200,msg:"OK", route:"/v1/profile/:userId", record: newRec});

		}
		catch(e){
			return res.json({status:500,msg: e.message,route:"/v1/profile/:userId"});
		}
	}

	 delete = async(req: Request , res: Response)=>{
		try{
			const uid = req.params.userId;
			const record = await User.findOne({where: {id:uid}});
			if(!record){
				return res.json({status:204, msg: "NO CONTENT", route:"/v1/profile/:userId"});
			}
			await record.destroy();
			return res.json({staus:200, msg:"OK",route:"/v1/profile/:userId"});
		}
		catch(e){
			return res.json({status:500,error: e.message,route:"/v1/profile/:userId"});
		}
	}
}
export default new UserController();
