

import { CommonControllerConfig } from "../common/common.controllers.config";
import Experience from "../models/experience";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class ExperienceController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Experience.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Experience.findAll({where: {
				userId: uid
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const expId = req.params.experinceId;
		try{

			const record = await Experience.findOne({where:{
				id : expId,
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

	//update
	update = async(req: Request , res: Response)=>{
		//const uid = req.params.userId;
		//const eduId = req.params.eduId;

		try{
			const uid = req.params.userId;
			const expId =  req.params.experinceId;
			const record = await Experience.findOne({where:{

				id : expId,
				userId: uid

			}});

			if(!record){
				return res.json({ msg: "No record with these credentials exist."});
			}

			const newRec = await record.update({...req.body});
			return res.json({newRec, msg:"Updated successfully."});
		}
		catch(e){
			return res.json({error: e.message});
		}
	}


	//delete function

	delete = async(req: Request, res: Response)=>{

		const uid = req.params.userId;
		const expId = req.params.experienceId;

		try{
			const record = await Experience.findOne({where:{
				id: expId,
				userId: uid
			}});

			if(!record){
				return  res.json({msg: "No record with these credentials exist."});
			}
			await record.destroy();
			return res.json({msg:"Deleted Successfully."});
		}
		catch(e){
			return res.json({error: e.message});
		}
	}

}



export default new ExperienceController();
