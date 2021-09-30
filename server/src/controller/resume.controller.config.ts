

import { CommonControllerConfig } from "../common/common.controllers.config";
import Resume from "../models/resume";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class ResumeController extends CommonControllerConfig{

   	create = async(req: Request,res: Response)=>{

		try{
			const id = uuidv4();
			const record = await Resume.create({...req.body,id});
			return res.json({status:201,msg:"OK",route:"/v1/resume",record});
		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/resume"});
		}
	}


	getAll = async(req: Request,res: Response)=>{
		try{
			const uid = req.params.userId;
			const record = await Resume.findAll({where: {
				userId: uid
			}});
			return res.json({status:200,msg:"OK",route:"/v1/resume/:userId",record});

		}catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/resume/:userId"});
		}
	}


	getById = async(req: Request,res: Response)=>{
		try{

			const uid = req.params.userId;
			const resumeId = req.params.resumeId;

			const record = await Resume.findOne({where:{
				id : resumeId,
				userId: uid
			}});

			if(!record){
				return res.json({status:204,msg:"NO CONTENT",route:"/v1/resume/:userId/:resumeId" });
			}

			return res.json({status:200,msg:"OK",route:"/v1/resume/:userId/:resumeId",record});
		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/resume/:userId/:resumeId"});
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
				return res.json({status:204,msg:"NO CONTENT",route:"/v1/resume/:userId/:resumeId" });
			}
			const newRec = await record.update({...req.body});
			return res.json({status:200,msg:"OK",route:"/v1/resume/:userId/:resumeId",newRec});

		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/resume/:userId/:resumeId"});
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
				return res.json({status:204,msg:"NO CONTENT",route:"/v1/resume/:userId/:resumeId" });
			}
			await record.destroy();
			return res.json({status:200,msg:"OK",route:"/v1/resume/:userId/:resumeId"});
		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/resume/:userId/:resumeId"});
		}
	}

}

export default new ResumeController();
