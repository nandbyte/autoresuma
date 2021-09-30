import {CommonRoutesConfig} from "../common/common.routes.config";
import  TemplateController  from "../controller/template.controller.config";

import express from "express";

//let usercont = new UserController();

export class TemplateRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'TemplateRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/template')
			.get(TemplateController.getAll)
			.post(TemplateController.create,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/v1/template/:userId/:templateId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				TemplateController.getById
			)
			.put(TemplateController.update);

		return this.app;
	}
}
