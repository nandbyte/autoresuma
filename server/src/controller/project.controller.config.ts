import { CommonControllerConfig } from "../common/common.controllers.config";
import Project from "../models/project";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class ProjectController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Project.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Project.findAll({where: {
				userId: uid
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const projectId = req.params.projectId;
		try{

			const record = await Project.findOne({where:{
				id : projectId,
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

	update = async(req: Request, res: Response)=>{
		try{
			const uid = req.params.userId;
			const projectId = req.params.projectId;

			const record = await Project.findOne({where:{
				id: projectId,
				userId: uid
			}});

			if(!record){
				return res.json({msg: "No record with these credentials exists ."});
			}

			const newRec = await record.update({...req.body});
			return res.json({newRec,msg:"Updated succesfully . "});
		}
		catch(e){
			return res.json({msg: "Failed to Update", status:500 , route: "/project/:userId/:experienceId"});
		}
	}

	delete = async(req: Request,res: Response)=>{
		try{
			const uid = req.params.userId;
			const projectId = req.params.projectId;
			const record = await Project.findOne({where:{
				id: projectId,
				userId: uid
			}});

			if(!record){
				return res.json({msg: "No record with these credentials exist. "});
			}
			await record.destroy({...req.body});
			return res.json({msg: "Deleted Successfully.",status:200});
		}
		catch(e){
			return res.json({msg:"Failed to delete.", status:500 , route: "/project/:userId/:experienceId"});
		}
	}



}



export default new ProjectController();
