

import {CommonRoutesConfig} from "../common/common.routes.config";
import  ProjectController  from "../controller/project.controller.config";

import express from "express";

//let usercont = new UserController();

export class ProjectRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ExperienceRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/project/:userId')
			.get(ProjectController.getAll)
			.post(ProjectController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/project/:userId/:projectId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				ProjectController.getById
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
