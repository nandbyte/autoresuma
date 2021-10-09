"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const template_controller_config_1 = __importDefault(require("../controller/template.controller.config"));
//let usercont = new UserController();
class TemplateRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'TemplateRoutes');
    }
    configureRoutes() {
        //we'll add the actual route config here next
        this.app.route('/v1/template')
            .get(template_controller_config_1.default.getAll)
            .post(template_controller_config_1.default.create, (req, res) => {
            res.status(200).send("Dhuke nai keno ?");
        });
        this.app.route('/v1/template/:userId/:templateId')
            .all((req, res, next) => {
            //this middleware function runs before any request to /user/:userid
            next();
        })
            .get(template_controller_config_1.default.getById)
            .put(template_controller_config_1.default.update);
        return this.app;
    }
}
exports.TemplateRoutes = TemplateRoutes;
