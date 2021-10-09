"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const user_controller_config_1 = __importDefault(require("../controller/user.controller.config"));
const authmiddleware_1 = __importDefault(require("../middleware/authmiddleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route('/v1/profile')
            .get(user_controller_config_1.default.getAllUsers)
            .post(user_controller_config_1.default.create);
        this.app.route('/v1/profile/login')
            .post(user_controller_config_1.default.authUser);
        this.app.route('/v1/profile/:userId')
            .all((req, res, next) => { next(); })
            .get(authmiddleware_1.default, user_controller_config_1.default.getById)
            .put(authmiddleware_1.default, user_controller_config_1.default.update)
            .delete(authmiddleware_1.default, user_controller_config_1.default.delete);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
