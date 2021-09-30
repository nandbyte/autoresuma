import { CommonControllerConfig } from "../common/common.controllers.config";
import Template from "../models/template";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class TemplateController extends CommonControllerConfig{

   	create = async(req: Request,res: Response)=>{
		const id = uuidv4();
		try{
			const record = await Template.create({...req.body,id});
			return res.json({status:201, msg:"OK" , route:"/template",record});
		}
		catch(e){
			return res.json({status:500, msg:e.message, route:"/template"});
		}
	}


	getAll = async(req: Request,res: Response)=>{

		try{
			const records = await Template.findAll({where: {}});
			return res.json({status:200, msg:"OK" , route:"/template",records});
		}catch(e){
			return res.json({status:500, msg:e.message, route:"/template"});
		}
	}


	getById = async(req: Request,res: Response)=>{

		const templateId = req.params.templateId;
		try{

			const record = await Template.findOne({where:{
				id : templateId,
			}});

			if(!record){
				return res.json({status:204, msg:"NO CONTENT", route:"/template/:templateId"});
			}

			return res.json({status:200, msg:"OK" , route:"/template",record});
		}
		catch(e){
			return res.json({status:500, msg:e.message, route:"/template"});
		}
	}

	 getByUserId = async(req: Request,res: Response)=>{

		try{

			const templateId = req.params.templateId;
			const userId = req.params.userId;

			const record = await Template.findOne({where:{
				id : templateId,
				userId: userId

			}});

			if(!record){
				return res.json({status:204, msg:"NO CONTENT", route:"/template/:templateId/:userId"});
			}

			return res.json({status:200, msg:"OK" , route:"/template/:templateId/:userId",record});
		}
		catch(e){
			return res.json({status:500, msg:e.message, route:"/template/:templateId/:userId"});
		}
	}


	update = async(req: Request, res: Response)=>{
		const templateId = req.params.templateId;
		const userId = req.params.userId;
		try{
			const record = await Template.findOne({where:{
				id: templateId,
				userId : userId
			}});

			if(!record){
				return res.json({status:204, msg:"NO CONTENT", route:"/v1/template/:templateId/:userId"});
			}

			const newRec = await record.update({...req.body});
			return res.json({status:200, msg:"OK" , route:"/v1/template/:templateId/:userId",newRec});
		}
		catch(e){
			return res.json({status:500, msg:e.message, route:"/v1/template/:templateId/:userId"});
		}
	}

	/*delete = async(req: Request, res: Response)=>{
	 	try{
			const templateId = req.params.templateId;
			//const userId = req.params.userId;

			const record = await Template.findOne({where:{
				id : templateId,
				//userId: userId
			}});
			/*if(!record){
				res.json({msg:"No record with these credentials exist."});
			}
			await record.destroy();
			return res.json({msg:"Record deleted successfully"});
		}
		catch(e){
			return res.json({msg:"Delete failed.",status:500,route:"/template/:userId/:templateId"});
		}
	}*/


}



export default new TemplateController();
