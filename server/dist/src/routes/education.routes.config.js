"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const education_controller_config_1 = __importDefault(require("../controller/education.controller.config"));
const authmiddleware_1 = __importDefault(require("../middleware/authmiddleware"));
//let usercont = new UserController();
class EducationRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'EducationRoutes');
    }
    configureRoutes() {
        //we'll add the actual route config here next
        this.app.route('/v1/education/:userId')
            .get(authmiddleware_1.default, education_controller_config_1.default.getAll)
            .post(authmiddleware_1.default, education_controller_config_1.default.create);
        this.app.route('/v1/education/:userId/:educationId')
            .all((req, res, next) => {
            //this middleware function runs before any request to /user/:userid
            next();
        })
            .get(authmiddleware_1.default, education_controller_config_1.default.getById)
            .put(authmiddleware_1.default, education_controller_config_1.default.update)
            .delete(authmiddleware_1.default, education_controller_config_1.default.delete);
        return this.app;
    }
}
exports.EducationRoutes = EducationRoutes;
