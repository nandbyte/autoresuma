import { CommonRoutesConfig } from "../common/common.routes.config";
import BioController from "../controller/bio.controller.config";

import express from "express";
import protect from "../middleware/authmiddleware";


export class BioRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "BioRoutes");
    }

    configureRoutes() {
        this.app
            .route("/v1/bio/:userId")
            .get(protect,BioController.getAll)
            .post(protect,BioController.create);
        this.app
            .route("/v1/bio/:userId/:bioId")
            .all(
                (
                    req: express.Request,
                    res: express.Response,
                    next: express.NextFunction
                ) => {
                    next();
                }
            )
            .get(protect,BioController.getById)
            .put(protect,BioController.update)
            .delete(protect,BioController.delete);
        return this.app;
    }
}
