
import { CommonControllerConfig } from "../common/common.controllers.config";
import Education from "../models/education";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class EducationController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Education.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create education", status:500, route:"/users" });
		}
	}



	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Education.findAll({where: {
				userId : uid
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}





	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const eduId = req.params.educationId;
		try{

			const record = await Education.findOne({where:{
				id : eduId,
				userId: uid


			}});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			return res.json({record,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details ",status: 500 , route:"/user/:userId" });
		}
	}

}



export default new EducationController();
