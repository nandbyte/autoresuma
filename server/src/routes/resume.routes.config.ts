


import {CommonRoutesConfig} from "../common/common.routes.config";
import  ResumeController  from "../controller/resume.controller.config";

import express from "express";

//let usercont = new UserController();

export class ResumeRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ResumeRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/resume/:userId')
			.get(ResumeController.getAll)
			.post(ResumeController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/v1/resume/:userId/:resumeId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				ResumeController.getById
			)
			.put(ResumeController.update)
			.delete(ResumeController.delete);
		return this.app;
	}
}
