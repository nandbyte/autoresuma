import { CommonControllerConfig } from "../common/common.controllers.config";
import Todo from "../models/todolist";
import User from "../models/user";
import { v4 as uuidv4 } from "uuid";
import { Request,Response } from "express";

//import bodyParser from "body-parser";
//const bodyparser = require("body-parser");

export class TodoController extends CommonControllerConfig{

	async create(req: Request , res: Response){
		const id = uuidv4();

		try{
		const record = await Todo.create({...req.body,id});
		return res.json({record,msg: "Successfully create todo"});
		}
		catch(e){
			return res.json({msg: "fail to create" , status: 500, route:"/create/:userIdi/posts/:id"});
		}
	}

	async readPagination(req: Request,res: Response){
		try{
			const limit = req.query?.limit as number | undefined;
			const offset = req.query?.offset as number | undefined;
			//need to add userid
			const records = await Todo.findAll({where: {} , limit , offset });
			return res.json(records);

		}
		catch(e){
			return res.json({msg: 'failed to send',status: 500, route: '/read/posts'});
		}
	}


	async readByID(req: Request,res: Response){
		try{
			const {id} = req.params;
			const {userId} = req.params;
			const record = await Todo.findOne({where: {id , userId}});

			if(!record){
				return res.json({msg: "failed to send"});
			}

			return res.json(record);

		}catch(e){
			return res.json({msg: "fail to read", status: 500 , router:'/read/:userId/posts/:id'});
		}
	}

	async getUserPosts(req: Request,res: Response){

		try{
		const {userId} = req.params;

		const record = await Todo.findAll({where: {userId}});
		return res.json({record,msg: " successfully got user id's post "});
		}
		catch(e){
			return res.json({msg:"failed to get this user ids all posts",status:500,router: "/read/:userId/posts"});
		}

	}

	async update(req: Request, res: Response){
		try{
			const {id} = req.params;
			const {userId} = req.params;

			const record = await Todo.findOne({where: {id,userId}});

			if(!record){
				return res.json({msg: 'Can not find existing record'});
			}

			const updateRecord = await record.update({
				completed: !record.getDataValue('completed'),
			}
			);

			return res.json({ record : updateRecord });


		}catch(e){
			return res.json({msg: 'fail to read', status: 500,route: '/update/:userId/posts/:id' });
		}
	}

}
