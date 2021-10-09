"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const project_controller_config_1 = __importDefault(require("../controller/project.controller.config"));
const authmiddleware_1 = __importDefault(require("../middleware/authmiddleware"));
//let usercont = new UserController();
class ProjectRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ExperienceRoutes');
    }
    configureRoutes() {
        //we'll add the actual route config here next
        this.app.route('/v1/project/:userId')
            .get(authmiddleware_1.default, project_controller_config_1.default.getAll)
            .post(authmiddleware_1.default, project_controller_config_1.default.create, (req, res) => {
            res.status(200).send("Dhuke nai keno ?");
        });
        this.app.route('/v1/project/:userId/:projectId')
            .all((req, res, next) => {
            //this middleware function runs before any request to /user/:userid
            next();
        })
            .get(authmiddleware_1.default, project_controller_config_1.default.getById)
            .put(authmiddleware_1.default, project_controller_config_1.default.update)
            .delete(authmiddleware_1.default, project_controller_config_1.default.delete);
        return this.app;
    }
}
exports.ProjectRoutes = ProjectRoutes;