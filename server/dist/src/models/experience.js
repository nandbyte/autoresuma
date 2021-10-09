"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /models/experience.ts
//import User from './user';
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Experience = db_config_1.sequelize.define('Experience', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    workplace: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    location: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    dateFrom: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    dateTo: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    designation: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    description: {
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
/*Experience.belongsTo(User,{
    foreignKey:'userId',
    as:'user'
});
*/
exports.default = Experience;
