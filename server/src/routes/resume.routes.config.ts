


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


		this.app.route('/resume/:userId')
			.get(ResumeController.getAll)
			.post(ResumeController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/resume/:userId/:resumeId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				ResumeController.getById
			)
			.put((req,res)=>{
				res.status(200).send('Put requested for id PUT requested for id ${req.params.userID}');
			})
			.patch((req: express.Request , res:express.Response)=>{
				res.status(200).send("PATCH request for id $(req.params.userId)");
			})
			.delete((req:express.Request , res: express.Response)=>{
				res.status(200).send("delete requested for id ${req.params.userId}");
			});
		return this.app;
	}
}
