import {CommonRoutesConfig} from "../common/common.routes.config";
import  BioController  from "../controller/bio.controller.config";

import express from "express";

//let usercont = new UserController();

export class BioRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'BioRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/bio/:userId')
			.get(BioController.getAll)
			.post(BioController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/bio/:userId/:bioId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				BioController.getById
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
