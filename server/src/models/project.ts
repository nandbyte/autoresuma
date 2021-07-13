
// /models/project.ts
//import User from './user';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface ProjectAttributes{
	id: string;
	type: string;
	title: number;
	description: number;
	date: string;
	githubLink: string;
	language: string;
	serial:number;
	userId: string;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes,'id'>{}

interface ProjectInstance extends Model<ProjectAttributes,ProjectCreationAttributes>,
ProjectAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Project = sequelize.define<ProjectInstance>(
	'Project',
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
			type:DataTypes.NUMBER,
		},
		title:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		description:{
			allowNull: true,
			type: DataTypes.NUMBER,
		},
		date:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		githubLink:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		language:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		serial:{
			allowNull: true,
			type: DataTypes.NUMBER,
		},
		userId:{
			allowNull: true,
			type: DataTypes.UUID,
		},
	},
);

/*Project.belongsTo(User,{
	foreignKey:'userId',
	as:'user'
});
*/


export default Project;
