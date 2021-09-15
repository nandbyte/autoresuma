import { CommonControllerConfig } from "../common/common.controllers.config";
import UserMiddleware  from "../middleware/user.middleware";
import User from "../models/user";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";
import {where} from "sequelize/types";


class UserController extends CommonControllerConfig{

	registration = async(req:Request,res: Response)=>{
		return await UserMiddleware.create(req,res);
	}

	getAllUsers = async(req: Request,res: Response)=>{
		try{
			const record = await User.findAll({where: {}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


/*	async getProfileById(req: Request , res: Response){
		return UserMiddleware.getUserDetails(req, res);
	}
*/
//you need to "id" here and also in the route

	 getById = async(req: Request,res: Response)=>{
		const uid = req.params.userId;
		try{

			const record = await User.findOne({where:{id : uid }});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			const data = {
				id : record.id,
				username : record.username,
				firstName : record.firstName,
				lastName : record.lastName,
				email: record.email,
				title: record.title,
				github: record.github,
				linkedin: record.linkedin,
			}

			return res.json({data,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details ",status: 500 , route:"/user/:userId" });
		}
	}



	async update(req: Request,res: Response){
		//const {id} = req.params;

		try{
			const uid = req.params.userId;
			const record = await User.findOne({where: {id:uid}});
			console.log("ok");
			if(!record){
				return res.json({msg: "no record found bout this user"});
			}
			console.log(req.body);




			const newRec = await record.update({...req.body}
			);




		      	//const newRec2 = await record.update(newRec,{where: {id:uid}});
			return res.json({msg:"puts done",record:newRec});

		}
		catch(e){
			return res.json({
				error: e.message
			}
			);
		}
	}

	 delete = async(req: Request , res: Response)=>{
		try{
			const uid = req.params.userId;
			const record = await User.findOne({where: {id:uid}});
			if(!record){
				return res.json({msg: "no record found about this user"});
			}
			await record.destroy();
		}
		catch(e){
			return res.json({
				error: e.message
			});
		}
	}

	async userSearch(req : Request , res: Response){

		try{

		}catch(e){

		}
	}

 }



export default new UserController();
