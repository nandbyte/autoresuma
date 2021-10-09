"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const book_1 = __importDefault(require("./book"));
;
const Author = db_config_1.sequelize.define('Author', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    firstName: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
});
Author.hasMany(book_1.default, {
    /*can omit the source key property since by default sequelize will use the primary key defined in the model*/
    sourceKey: 'id',
    foreignKey: 'authorId',
    as: 'books',
});
exports.default = Author;
