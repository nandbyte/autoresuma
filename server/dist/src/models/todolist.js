"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Todo = db_config_1.sequelize.define('Todo', {
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    userId: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUIDV4,
    },
});
Todo.belongsTo(user_1.default, {
    foreignKey: 'userId',
    as: 'user'
});
exports.default = Todo;
