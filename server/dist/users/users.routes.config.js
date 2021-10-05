"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        //we'll add the actual route config here next
        this.app.route('/users')
            .get((req, res) => {
            res.status(200).send("List of users");
        })
            .post((req, res) => {
            res.status(200).send("Post to users");
        });
        this.app.route('/users/:userId')
            .all((req, res, next) => {
            //this middleware function runs before any request to /user/:userid
            //but it doesn't accomplish anything just yet ---
            //it simplly passes control to the next applicatble function below using next();
            next();
        })
            .get((req, res) => {
            res.status(200).send("Get requested for id ${req.params.userId}");
        })
            .put((req, res) => {
            res.status(200).send('Put requested for id PUT requested for id ${req.params.userID}');
        })
            .patch((req, res) => {
            res.status(200).send("PATCH request for id $(req.params.userId)");
        })
            .delete((req, res) => {
            res.status(200).send("delete requested for id ${req.params.userId}");
        });
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
