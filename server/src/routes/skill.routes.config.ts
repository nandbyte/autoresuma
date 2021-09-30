

import {CommonRoutesConfig} from "../common/common.routes.config";
import  SkillController  from "../controller/skill.controller.config";

import express from "express";

//let usercont = new UserController();

export class SkillRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'SkillRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/skill/:userId')
			.get(SkillController.getAll)
			.post(SkillController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/v1/skill/:userId/:skillId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				SkillController.getById
			)
			.put(SkillController.update)
			.delete(SkillController.delete);
		return this.app;
	}
}
