import {CommonRoutesConfig} from "../common/common.routes.config";
import  BioController  from "../controller/bio.controller.config";

import express from "express";

export class BioRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'BioRoutes');
	}

	configureRoutes(){
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
			.get(BioController.getById)
			.put(BioController.update)
			.delete(BioController.delete);
		return this.app;
	}
}
