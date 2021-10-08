import { CommonRoutesConfig } from "../common/common.routes.config";
import BioController from "../controller/bio.controller.config";

import express from "express";

export class BioRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "BioRoutes");
    }

    configureRoutes() {
        this.app
            .route("/v1/bio/:userId")
            .get(BioController.getAll)
            .post(BioController.create);
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
            .get(BioController.getById)
            .put(BioController.update)
            .delete(BioController.delete);
        return this.app;
    }
}
