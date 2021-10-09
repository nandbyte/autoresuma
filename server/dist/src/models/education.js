"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// /models/education.ts
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const Education = db_config_1.sequelize.define('Education', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    certificateName: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    passingYear: {
        allowNull: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    result: {
        allowNull: true,
        type: sequelize_1.DataTypes.FLOAT,
    },
    institution: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    serial: {
        allowNull: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
});
/*Education.belongsTo(User,{
    foreignKey:'userId',
    as:'users'
});*/
exports.default = Education;
