

import {CommonRoutesConfig} from "../common/common.routes.config";
import  ProjectController  from "../controller/project.controller.config";

import express from "express";
import protect from "../middleware/authmiddleware";
//let usercont = new UserController();

export class ProjectRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ExperienceRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/project/:userId')
			.get(protect,ProjectController.getAll)
			.post(protect,ProjectController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/v1/project/:userId/:projectId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				protect,ProjectController.getById
			)
			.put(protect,ProjectController.update)
			.delete(protect,ProjectController.delete);
		return this.app;
	}
}
