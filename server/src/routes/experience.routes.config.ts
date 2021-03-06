

import {CommonRoutesConfig} from "../common/common.routes.config";
import  ExperienceController  from "../controller/experience.controller.config";
import protect from "../middleware/authmiddleware";
import express from "express";

//let usercont = new UserController();

export class ExperienceRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ExperienceRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/v1/experience/:userId')
			.get(protect,ExperienceController.getAll)
			.post(protect,ExperienceController.create);
		this.app.route('/v1/experience/:userId/:experienceId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(protect,ExperienceController.getById)
			.put(protect,ExperienceController.update)
			.delete(protect,ExperienceController.delete);

		return this.app;
	}
}
