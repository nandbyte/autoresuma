"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /models/book.ts
const author_1 = __importDefault(require("./author"));
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Book = db_config_1.sequelize.define('Book', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    title: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    numberOfPapers: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    authorId: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    },
});
Book.belongsTo(author_1.default, {
    foreignKey: 'authorId',
    as: 'author'
});
exports.default = Book;
