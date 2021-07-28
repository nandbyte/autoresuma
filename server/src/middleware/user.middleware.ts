
import { CommonMiddlewareConfig } from "../common/common.middleware.config";
import User from "../models/user";

import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";

 class UserMiddleware extends CommonMiddlewareConfig{

	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await User.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAllUsers(req: Request,res: Response){
		try{
			const record = await User.findAll({where: {}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}




	async getUserDetails(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await User.findOne({where:{id : uid}});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			return res.json({record,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details",status: 500 , route:'/users/:id' });
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

	async login(req: Request , res: Response){
		try{
			const email = req.params.email;
			const password = req.params.password;

			const record = await User.findOne({where: {email: email, password: password}});

			if(!record){
				return res.json({msg: "no user exists in this mail or password",status: 500});
			}
			return res.json({
				id: record.id,
				status: 200
			});
		}
		catch(e){
			return res.json({
				msg: "failed to read",
				status: 500,
				route: "/login",
			});
		}

	}


 }



export default new UserMiddleware();
