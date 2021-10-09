"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /models/project.ts
//import User from './user';
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Project = db_config_1.sequelize.define('Project', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    type: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    title: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    description: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    date: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    githubLink: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    language: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    serial: {
        allowNull: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    },
});
/*Project.belongsTo(User,{
    foreignKey:'userId',
    as:'user'
});
*/
exports.default = Project;
