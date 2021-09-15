import { CommonControllerConfig } from "../common/common.controllers.config";
import Skill from "../models/skill";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class SkillController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Skill.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create", status:500, route:"/users" });
		}
	}


	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Skill.findAll({where: {
				userId: uid
			}});
			return res.json({record,msg:"list of all users"});
		}catch(e){
			return res.json({msg: "failed to get list of all users", status: 500 , router:"/users"});
		}
	}


	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const skillId = req.params.skillId;
		try{

			const record = await Skill.findOne({where:{
				id : skillId,
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
			const skillId = req.params.skillId;
			const record = await Skill.findOne({where:{
				id: skillId,
				userId: uid
			}});

			if(!record){
				return res.json({msg:"No records with such credentials exists."});
			}
			const newRec = await record.update({...req.body});
			return res.json({newRec,msg:"Updated successfully",status:200});

		}catch(e){
			return res.json({msg:"Couldn't Update.",error:e.message});
		}
	}

	delete = async(req: Request, res: Response)=>{
		try{
			const uid = req.params.userId;
			const skillId = req.params.skillId;

			const record = await Skill.findOne({where:{
				id: skillId,
				userId:uid
			}});
			if(!record){
				return res.json({msg:"No records with such credentials exist."});
			}
			await record.destroy();
			return res.json({msg:"Deleted successfully."});
		}
		catch(e){
			res.json({msg:"Couldn't delete .", error:e.message});
		}
	}

}



export default new SkillController();
