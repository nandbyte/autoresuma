

import {CommonRoutesConfig} from "../common/common.routes.config";
import  ExperienceController  from "../controller/experience.controller.config";

import express from "express";

//let usercont = new UserController();

export class ExperienceRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ExperienceRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/experience/:userId')
			.get(ExperienceController.getAll)
			.post(ExperienceController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/experience/:userId/:experienceId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				ExperienceController.getById
			)
			.put(ExperienceController.update)
			.delete(ExperienceController.delete);

		return this.app;
	}
}
