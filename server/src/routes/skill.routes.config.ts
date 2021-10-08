

import {CommonRoutesConfig} from "../common/common.routes.config";
import  SkillController  from "../controller/skill.controller.config";

import express from "express";
import protect from "../middleware/authmiddleware";
//let usercont = new UserController();

export class SkillRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'SkillRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/skill/:userId')
			.get(protect,SkillController.getAll)
			.post(protect,SkillController.create)
		this.app.route('/v1/skill/:userId/:skillId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(protect,SkillController.getById)
			.put(protect,SkillController.update)
			.delete(protect,SkillController.delete);
		return this.app;
	}
}
