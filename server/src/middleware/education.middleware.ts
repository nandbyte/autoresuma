

import { CommonMiddlewareConfig } from "../common/common.middleware.config";
import Education from "../models/education";

import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";

 class EducationMiddleware extends CommonMiddlewareConfig{

	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Education.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAllEducation(req: Request,res: Response){
		try{
			const record = await Education.findAll({where: {}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/education/:userId"});
		}
	}




	async getEducationById(req: Request,res: Response){
		const uid = req.params.id;
		try{
			const record = await Education.findOne({where:{id : uid}});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			return res.json({record,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details",status: 500 , route:'/education/:userId/:educationId' });
		}
	}


	async update(req: Request,res: Response){
		//const {id} = req.params;

		try{
			const {id} = req.params;
			const record = await Education.findOne({where: {id}});

			if(!record){
				return res.json({msg: "no record found bout this user"});
			}



			return res.json({record: record});
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



 }



export default new EducationMiddleware();
