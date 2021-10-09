"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /models/resume.ts
//import User from './user';
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Resume = db_config_1.sequelize.define('Resume', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    htmlData: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    dateCreated: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    job: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    score: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    dateScored: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    templateId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
});
exports.default = Resume;
