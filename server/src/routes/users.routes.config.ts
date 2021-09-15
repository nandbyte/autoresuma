import {CommonRoutesConfig} from "../common/common.routes.config";
import  UserController  from "../controller/user.controller.config";

import express from "express";

//let usercont = new UserController();

export class UserRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'UserRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/profile')
			.get(UserController.getAllUsers)
			.post(UserController.registration,(req,res)=>{
				res.status(200).send("Dhuke nai keno ?");
			});
		this.app.route('/profile/:userId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid

				next();
			})
			.get(

				UserController.getById
			)
			.put(
				UserController.update
			    )
			.patch(
				UserController.update
			)
			.delete(
				UserController.delete
			);
		return this.app;
	}
}
