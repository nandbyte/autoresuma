"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const models_1 = require("./models");
models_1.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("App running");
    });
});
