

// /models/experience.ts
//import User from './user';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface ExperienceAttributes{
	id: string;
	designation: string;
	workplace: string;
	location: string;
	dateFrom: number;
	dateTo: number;
	description: string;
	serial:number;
	userId: string;
}

interface ExperienceCreationAttributes extends Optional<ExperienceAttributes,'id'>{}

interface ExperienceInstance extends Model<ExperienceAttributes,ExperienceCreationAttributes>,
ExperienceAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Experience = sequelize.define<ExperienceInstance>(
	'Experience',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		workplace:{
			allowNull: true,
			type:DataTypes.TEXT,
		},
		location:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		dateFrom:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		dateTo:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		designation:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		description:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		serial:{
			allowNull: true,
			type: DataTypes.INTEGER,
		},
		userId:{
			allowNull: true,
			type: DataTypes.UUID,
		},
	},
);

/*Experience.belongsTo(User,{
	foreignKey:'userId',
	as:'user'
});
*/


export default Experience;
