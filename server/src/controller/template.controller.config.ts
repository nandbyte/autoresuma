import { CommonControllerConfig } from "../common/common.controllers.config";
import Template from "../models/template";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class TemplateController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Template.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAll(req: Request,res: Response){

		try{
			const record = await Template.findAll({where: {
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getById(req: Request,res: Response){

		const templateId = req.params.templateId;
		try{

			const record = await Template.findOne({where:{
				id : templateId,
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

	async getByUserId(req: Request,res: Response){

		const templateId = req.params.templateId;
		const userId = req.params.userId;
		try{

			const record = await Template.findOne({where:{
				id : templateId,
				userId: userId
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



export default new TemplateController();
