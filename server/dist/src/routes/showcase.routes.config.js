"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowcaseRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const showcase_controller_config_1 = __importDefault(require("../controller/showcase.controller.config"));
class ShowcaseRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ShowcaseRoutes');
    }
    configureRoutes() {
        this.app.route('/v1/showcase/:userId')
            .get(showcase_controller_config_1.default.getAll);
        return this.app;
    }
}
exports.ShowcaseRoutes = ShowcaseRoutes;
