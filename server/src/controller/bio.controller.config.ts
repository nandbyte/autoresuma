

import { CommonControllerConfig } from "../common/common.controllers.config";
import Bio from "../models/bio";
import {v4 as uuidv4} from "uuid";

import { Request,Response } from "express";


class BioController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Bio.create({...req.body,id});
			return res.json({record,msg: "Successfully created user"});
		}
		catch(e){
			return res.json({msg: "failed to create bio", status:500, route:"/bio" });
		}
	}



	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Bio.findAll({where: {
				userId : uid
			}});
			return res.json({record,msg:"list of all bio"});
		}catch(e){
			return res.json({msg: "failed to get list of all bio", status: 500 , router:"/bio"});
		}
	}

	async getById(req: Request,res: Response){
		const uid = req.params.userId;
		const bioId = req.params.bioId;
		try{

			const record = await Bio.findOne({where:{
				id : bioId,
				userId: uid


			}});

			if(!record){
				return res.json({msg: "No User with this email exists!"});
			}

			return res.json({record,msg: "user details got successfully"});
		}
		catch(e){
			return res.json({msg: "failed to get user details ",status: 500 , route:"/bio/:userId/:bioId"});
		}
	}

	update = async(req: Request, res: Response)=>{
		try{

			const uid = req.params.userId;
			const bioId = req.params.bioId;

			const record = await Bio.findOne({where:{
				id: bioId,
				userId: uid
			}});

			if(!record){
				return res.json({msg: "No records with these credentials exist."});
			}

			const newRec = await record.update({...req.body});
			return res.json({newRec,msg:"Updated Successfully."});

		}
		catch(e){
			return res.json({msg: "failed to update user bio .",status: 500 , source:"/bio/:userId/:bioId",error: e.message});
		}
	}

	 delete = async(req: Request , res: Response)=>{

		 try{
		  	const uid = req.params.userId;
		 	const bioId = req.params.bioId;
			const record = await Bio.findOne({where:{
				id: bioId,
				userId: uid
			}});

			if(!record){
				return res.json({msg:"No record with these credentials exist."});
			}

			const newRec = await record.update({...req.body});
			return res.json({newRec, msg:"Updated successfully."});


		 }
		 catch(e){
			 return res.json({msg:"failed to delete user bio.",status: 500, source:"bio/:userId/:bioId",error: e.message});
		 }
	 }

}



export default new BioController();
