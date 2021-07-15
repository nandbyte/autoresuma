

// /models/skill.ts
//import User from './user';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface SkillAttributes{
	id: string;
	type: string;
	description: string;
	level: string;
	userId: string;
}

interface SkillCreationAttributes extends Optional<SkillAttributes,'id'>{}

interface SkillInstance extends Model<SkillAttributes,SkillCreationAttributes>,
SkillAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Skill = sequelize.define<SkillInstance>(
	'Skill',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		type:{
			allowNull: true,
			type:DataTypes.TEXT,
		},

		description:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		level:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		userId:{
			allowNull: false,
			type: DataTypes.UUID,
		},
	},
);

/*.belongsTo(User,{
	foreignKey:'userId',
	as:'user'
});
*/


export default Skill;
