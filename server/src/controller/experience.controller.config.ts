
import { CommonControllerConfig } from "../common/common.controllers.config";
import Experience from "../models/experience";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class ExperienceController extends CommonControllerConfig{

   	 create = async(req: Request,res: Response) => {

		try{
			const id = uuidv4();
			const record = await Experience.create({...req.body,id});
			return res.json({status:200, msg:"OK", route:"/v1/experience",record});
		}
		catch(e){
			return res.json({status:500, msg: e.message , router:"/v1/experience"});
		}
	}


	getAll = async(req: Request,res: Response) => {

		try{
			const uid = req.params.userId;
			const record = await Experience.findAll({where: {
				userId: uid
			}});
			return res.json({status:200, msg:"OK",route:"/v1/experience",record});
		}catch(e){
			return res.json({status:500, msg: e.message , router:"/v1/experience"});
		}
	}


	getById = async(req: Request,res: Response)=>{

		try{
			const uid = req.params.userId;
			const expId = req.params.experinceId;
			const record = await Experience.findOne({where:{
				id : expId,
				userId: uid


			}});

			if(!record){
				return res.json({status:204,msg: "NO CONTENT",route:"/v1/experience/:userId/:experinceId"});
			}

			return res.json({status:200,msg:"OK",record,route:"/v1/experience/:userId/:experinceId"});
		}
		catch(e){
			return res.json({status: 500 ,msg:e.message ,route:"/v1/experience/:userId/:experinceId" });
		}
	}

	update = async(req: Request , res: Response)=>{

		try{
			const uid = req.params.userId;
			const expId =  req.params.experinceId;
			const record = await Experience.findOne({where:{

				id : expId,
				userId: uid

			}});

			if(!record){
				return res.json({ status:204,msg: "NO CONTENT",route:"/v1/experience/:userId/:experinceId"});
			}

			const newRec = await record.update({...req.body});
			return res.json({status:200,msg:"OK",route:"/v1/experience/:userId/:experinceId",newRec});
		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/experience/:userId/:experinceId"});
		}
	}

	delete = async(req: Request, res: Response)=>{


		try{
			const uid = req.params.userId;
			const expId = req.params.experienceId;
			const record = await Experience.findOne({where:{
				id: expId,
				userId: uid
			}});

			if(!record){
				return res.json({ status:204,msg: "NO CONTENT",route:"/v1/experience/:userId/:experinceId"});
			}
			await record.destroy();
			return res.json({status:200,msg:"OK",route:"/v1/experience/:userId/:experinceId"});
		}
		catch(e){
			return res.json({status:500,msg:e.message,route:"/v1/experience/:userId/:experinceId"});
		}
	}

}



export default new ExperienceController();
