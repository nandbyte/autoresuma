
import { CommonControllerConfig } from "../common/common.controllers.config";
import Bio from "../models/bio";
import {v4 as uuidv4} from "uuid";
import { Request,Response } from "express";


class BioController extends CommonControllerConfig{

   	async create(req: Request,res: Response){
		const id = uuidv4();
		try{
			const record = await Bio.create({...req.body,id});
			return res.json({status:201,msg: "OK",route:"/bio",record});
		}
		catch(e){
			return res.json({msg:e.message, status:500, route:"/v1/bio" });
		}
	}

	async getAll(req: Request,res: Response){
		const uid = req.params.userId;
		try{
			const record = await Bio.findAll({where: {
				userId : uid
			}});
			return res.json({status:200,msg:"OK",router:"/v1/bio",record});
		}catch(e){
			return res.json({status:500, msg: e.message, router:"/v1/bio"});
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
				return res.json({status:204,msg:"NO CONTENT",route:"/v1/bio/:userId/:bioId"});
			}

			return res.json({status:200,msg:"OK",route:"/v1/bio/:userId/:bioId",record});
		}
		catch(e){
			return res.json({status:500,msg:e.message , route:"v1/bio/:userId/:bioId"});
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
				return res.json({status:204,msg: "NO CONTENT",route:"/v1/bio/:userId/:bioId"});
			}

			const newRec = await record.update({...req.body});
			return res.json({status:200,msg:"OK",route:"/v1/bio/:userId/:bioId",newRec});

		}
		catch(e){
			return res.json({status:500, msg:e.message, source:"/v1/bio/:userId/:bioId"});
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
				return res.json({status:204, msg:"NO CONTENT", route:"/v1/bio/:userId/:bioId"});
			}

			const newRec = await record.update({...req.body});
			return res.json({status:200,msg:"OK",route:"/v1/bio/:userId/:bioId",newRec});


		 }
		 catch(e){
			 return res.json({status: 500, msg: e.message, route:"/v1/bio/:userId/:bioId"});
		 }
	 }

}



export default new BioController();
