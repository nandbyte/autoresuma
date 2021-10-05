
import { CommonControllerConfig } from "../common/common.controllers.config";
import Education from "../models/education";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class EducationController extends CommonControllerConfig{

   	create = async (req: Request,res: Response)=>{
		try{
			const id = uuidv4();
			const record = await Education.create({...req.body,id});
			return res.json({status:200, msg:"OK", route:"/v1/education", record});
		}
		catch(e){
			return res.json({status:500,msg:e.message, route:"/v1/education" });
		}
	}


	getAll = async(req: Request,res: Response)=>{
		try{
			const uid = req.params.userId;
			const record = await Education.findAll({where: {userId : uid}});
			return res.json({status:200,msg:"OK",route:"/v1/education",record});
		}catch(e){
			return res.json({status: 500 ,msg:e.message, router:"/v1/education"});
		}
	}


	getById = async(req: Request,res: Response)=>{
		try{

			const uid = req.params.userId;
			const eduId = req.params.educationId;
			const record = await Education.findOne({where:{
				id : eduId,
				userId: uid
			}});

			if(!record){
				return res.json({status:204, msg:"NO CONTENT",route:"/v1/education/:userId/:educationId"});
			}

			return res.json({status:200, msg:"OK", route:"/v1/education/:userId/:educationId"});
		}
		catch(e){
			return res.json({status:500, msg: e.message, route:"/v1/education/:userId/:educationId" });
		}
	}

	update = async(req: Request , res: Response)=>{

		try{
			const uid = req.params.userId;
			const eduId =  req.params.educationId;
			const record = await Education.findOne({where:{

				id : eduId,
				userId: uid

			}});

			if(!record){
				return res.json({ status:204,msg: "NO CONTENT",route:"/v1/education/:userId/:educationId"});
			}

			const newRec = await record.update({...req.body});
			return res.json({status:200,msg:"OK",route:"/v1/education/:userId/:educationId",newRec});
		}
		catch(e){
			return res.json({status:500, msg: e.message, route:"/v1/education/:userId/:educationId"});
		}
	}

	delete = async(req: Request, res: Response)=>{

		try{
			const uid = req.params.userId;
			const eduId = req.params.educationId;
			const record = await Education.findOne({where:{
				id: eduId,
				userId: uid
			}});

			if(!record){
				return  res.json({status:204,msg:"NO CONTENT",route:"/v1/education/:userId/:educationId"});
			}
			await record.destroy();
			return res.json({status:200,msg:"OK",route:"/v1/education/:userId/:educationId"});
		}
		catch(e){
			return res.json({status:500, msg: e.message, route:"/v1/education/:userId/:educationId"});
		}
	}

}



export default new EducationController();
