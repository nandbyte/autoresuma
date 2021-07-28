
import {CommonRoutesConfig} from "../common/common.routes.config";
import  EducationController  from "../controller/education.controller.config";

import express from "express";

//let usercont = new UserController();

export class EducationRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'EducationRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/education/:userId')
			.get(EducationController.getAll)
			.post(EducationController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/education/:userId/:educationId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				EducationController.getById
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
