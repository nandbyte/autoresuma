
// /models/resume.ts
//import User from './user';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface ResumeAttributes{
	id: string;
	htmlData: string;
	dateCreated: number;
	job: string;
	score: string;
	dateScored: string;
	templateId: string;
	userId: string;
}

interface ResumeCreationAttributes extends Optional<ResumeAttributes,'id'>{}

interface ResumeInstance extends Model<ResumeAttributes,ResumeCreationAttributes>,
ResumeAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Resume = sequelize.define<ResumeInstance>(
	'Resume',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		htmlData:{
			allowNull: true,
			type:DataTypes.NUMBER,
		},

		dateCreated:{
			allowNull: true,
			type: DataTypes.NUMBER,
		},
		job:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		score:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		dateScored:{
			allowNull: false,
			type: DataTypes.TEXT,
		},

		templateId:{
			allowNull: false,
			type: DataTypes.UUID,
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


export default Resume;
