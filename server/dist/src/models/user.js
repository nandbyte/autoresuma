"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const education_1 = __importDefault(require("./education"));
const experience_1 = __importDefault(require("./experience"));
const skill_1 = __importDefault(require("./skill"));
const resume_1 = __importDefault(require("./resume"));
const project_1 = __importDefault(require("./project"));
const bio_1 = __importDefault(require("./bio"));
;
const User = db_config_1.sequelize.define('User', {
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
    email: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    }
});
//education
User.hasMany(education_1.default, {
    //can omit the source key property since by default sequelize will use the primary key defined in the model
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'useredu'
});
education_1.default.belongsTo(User, {
    foreignKey: 'userId',
    as: 'useredu'
});
//Education ends
//experience
User.hasMany(experience_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'userexp'
});
experience_1.default.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userexp'
});
//experience ends
//skills
User.hasMany(skill_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'userSkill'
});
skill_1.default.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userSkill'
});
//skills ends
//projects
User.hasMany(project_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'userProject'
});
project_1.default.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userProject'
});
//projects ends
//resume
User.hasMany(resume_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'userRes'
});
resume_1.default.belongsTo(User, {
    foreignKey: "userId",
    as: "userRes"
});
//resume ends
//Bio
User.hasMany(bio_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'userBio'
});
bio_1.default.belongsTo(User, {
    foreignKey: "userId",
    as: "usrBio"
});
//Bio Ends
//template
/*
Template.hasMany(Bio,{
    sourceKey: 'id',
    foreignKey:'userId',
    as:
});
*/
//template
exports.default = User;
