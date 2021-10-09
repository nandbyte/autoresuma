"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BioRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const bio_controller_config_1 = __importDefault(require("../controller/bio.controller.config"));
const authmiddleware_1 = __importDefault(require("../middleware/authmiddleware"));
class BioRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "BioRoutes");
    }
    configureRoutes() {
        this.app
            .route("/v1/bio/:userId")
            .get(authmiddleware_1.default, bio_controller_config_1.default.getAll)
            .post(authmiddleware_1.default, bio_controller_config_1.default.create);
        this.app
            .route("/v1/bio/:userId/:bioId")
            .all((req, res, next) => {
            next();
        })
            .get(authmiddleware_1.default, bio_controller_config_1.default.getById)
            .put(authmiddleware_1.default, bio_controller_config_1.default.update)
            .delete(authmiddleware_1.default, bio_controller_config_1.default.delete);
        return this.app;
    }
}
exports.BioRoutes = BioRoutes;
