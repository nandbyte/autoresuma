"use strict";
// /models/template.ts
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Template = db_config_1.sequelize.define('Template', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    htmlData: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    serial: {
        allowNull: true,
        type: sequelize_1.DataTypes.NUMBER,
    },
    userId: {
        allowNull: true,
        type: sequelize_1.DataTypes.UUID,
    }
});
exports.default = Template;
