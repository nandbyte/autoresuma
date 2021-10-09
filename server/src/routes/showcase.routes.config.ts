
import {CommonRoutesConfig} from "../common/common.routes.config";
import  ShowcaseController  from "../controller/showcase.controller.config";

import express from "express";



export class ShowcaseRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'ShowcaseRoutes');
	}

	configureRoutes(){
		this.app.route('/v1/showcase/:userId')
			.get(ShowcaseController.getAll);
		return this.app;
	}
}
