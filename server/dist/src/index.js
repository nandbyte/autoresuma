"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const db_config_1 = require("./config/db.config");
db_config_1.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("App running");
    });
});
