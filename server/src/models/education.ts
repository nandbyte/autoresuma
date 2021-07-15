
// /models/education.ts
import User from './user';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface EducationAttributes{
	id: string;
	certificateName: string;
	passingYear: number;
	result: number;
	institution: string;
	serial:number;
	userId: string;
}

interface EducationCreationAttributes extends Optional<EducationAttributes,'id'>{}

interface EducationInstance extends Model<EducationAttributes,EducationCreationAttributes>,
EducationAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Education = sequelize.define<EducationInstance>(
	'Education',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		certificateName:{
			allowNull: true,
			type:DataTypes.TEXT,
		},
		passingYear:{
			allowNull: true,
			type:  DataTypes.TEXT
		},
		result:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		institution:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		serial:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		userId:{
			allowNull: false,

			type: DataTypes.UUID,
		},
	},
);

/*Education.belongsTo(User,{
	foreignKey:'userId',
	as:'users'
});*/


export default Education;
