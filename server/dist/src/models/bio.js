"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
;
const Bio = db_config_1.sequelize.define('Bio', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    address: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    zip: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    country: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    jobTitle: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    githubLink: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    linkedInLink: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT
    },
    userId: {
        allowNull: false,
        autoIncrement: false,
        type: sequelize_1.DataTypes.UUID,
    }
});
exports.default = Bio;
