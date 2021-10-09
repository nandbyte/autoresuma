"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /models/skill.ts
//import User from './user';
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Skill = db_config_1.sequelize.define('Skill', {
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
    description: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    level: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    serial: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
});
/*.belongsTo(User,{
    foreignKey:'userId',
    as:'user'
});
*/
exports.default = Skill;
