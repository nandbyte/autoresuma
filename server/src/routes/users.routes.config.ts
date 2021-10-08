import {CommonRoutesConfig} from "../common/common.routes.config";
import  UserController  from "../controller/user.controller.config";
import protect from "../middleware/authmiddleware";
import express from "express";

export class UserRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'UserRoutes');
	}

	configureRoutes(){

		this.app.route('/v1/profile')
			.get(UserController.getAllUsers)
			.post(UserController.create);
		this.app.route('/v1/profile/login')
			.get(UserController.authUser)
		this.app.route('/v1/profile/:userId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{next();})
			.get(protect,UserController.getById)
			.put(protect,UserController.update)
			.delete(protect,UserController.delete);
		return this.app;
	}
}
