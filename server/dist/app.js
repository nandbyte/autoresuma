"use strict";
//importing dependencies
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const users_routes_config_1 = require("./users/users.routes.config");
const debug_1 = __importDefault(require("debug"));
//variable declaration
const app = express_1.default();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const routes = [];
const debugLog = debug_1.default('app');
//here we are adding middleware to parse all incoming requests as JSON
app.use(express_1.default.json());
//here we are adding middleware to allow cross-origin requests
app.use(cors_1.default());
//here we are preparing the expressWinston logging middleware
//configurationo
//which will automatically log all HTTP requests handled by Express.js
const loggerOption = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOption.meta = false; // when not debugging , log requests as one liners
}
// initializes the logger with above configuration
app.use(expressWinston.logger(loggerOption));
//here we are adding the UserRoutes to our array,
//after sending the express.js application object to have the routes
// added to our app
routes.push(new users_routes_config_1.UserRoutes(app));
//this is a simple route to make sure everything is working properly
const runningMessage = 'Serving running at http://localhost: ${port}';
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog("Route configured for ${route.getName()}");
    });
    //our only exception to avoiding console.log() , because we
    // always want to know when server is done starting up
    console.log(runningMessage);
});
