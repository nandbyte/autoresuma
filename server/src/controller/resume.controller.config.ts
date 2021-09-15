import { CommonControllerConfig } from "../common/common.controllers.config";
import Resume from "../models/resume";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class ResumeController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Resume.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Resume.findAll({where: {
				userId: uid
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const resumeId = req.params.resumeId;
		try{

			const record = await Resume.findOne({where:{
				id : resumeId,
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

	update = async(req: Request,res: Response)=>{
		try{
			const uid = req.params.userId;
			const resumeId = req.params.resumeId;
				const record = await Resume.findOne({where:{
					id: resumeId,
					userId: uid
				}});
				if(!record){
					return res.json({msg: "No record with these credentials exist."});
				}
				const newRec = await record.update({...req.body});
				return res.json({newRec,msg:"Updated Successfully.",status:200});

		}
		catch(e){
			return res.json({msg:"Can't update.",status:500, error:e.message});
		}
	}

	delete = async(req: Request , res: Response)=>{
		try{
			const uid = req.params.userId;
			const resumeId = req.params.resumeId;
			const record = await Resume.findOne({where:{
				id: resumeId,
				userId:uid
			}});

			if(!record){
				return res.json({msg:"No record with these credentials exists."});
			}
			await record.destroy();
			return res.json({msg:"deleted successfully",status:200});
		}
		catch(e){
			return res.json({msg:"Could Not Delete.",status:500,error:e.message});
		}
	}

}



export default new ResumeController();
