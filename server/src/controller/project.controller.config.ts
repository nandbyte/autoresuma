
import { CommonControllerConfig } from "../common/common.controllers.config";
import UserMiddleware  from "../middleware/user.middleware";
import User from "../models/user";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class ProjectController extends CommonControllerConfig{

	async registration(req:Request,res: Response){
		return await UserMiddleware.create(req,res);
	}

	async getAllUsers(req: Request,res: Response){
		try{
			const record = await User.findAll({where: {}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getProfileById(req: Request , res: Response){
		return UserMiddleware.getUserDetails(req, res);
	}

//you need to "id" here and also in the route

	async getUserDetails(req: Request,res: Response){
		const uid = req.params.id;
		try{

			const record = await User.findOne({where:{id : uid }});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			return res.json({record,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details ",status: 500 , route:"/user/:userId" });
		}
	}



	async update(req: Request,res: Response){
		//const {id} = req.params;

		try{
			const {id} = req.params;
			const record = await User.findOne({where: {id}});

			if(!record){
				return res.json({msg: "no record found bout this user"});
			}

			const updatedRecord = await record.update({
				completed: !record.getDataValue('completed'),
			});
			return res.json({record: updatedRecord});
		}
		catch(e){
			return res.json({
				msg: "fail to read",
				status: 500,
				route:"/update/:userId",
			}
			);
		}
	}


	async userSearch(req : Request , res: Response){

		try{

		}catch(e){

		}
	}

 }



export default new ProjectController();
