
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


		this.app.route('/v1/education/:userId')
			.get(EducationController.getAll)
			.post(EducationController.create);
		this.app.route('/v1/education/:userId/:educationId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(EducationController.getById)
			.put(EducationController.update)
			.delete(EducationController.delete);
		return this.app;
	}
}
