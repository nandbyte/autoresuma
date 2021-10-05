// /models/template.ts


import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface TemplateAttributes{
	id: string;
	title: string;
	htmlData: string;

	userId: string;
}

interface TemplateCreationAttributes extends Optional<TemplateAttributes,'id'>{}

interface TemplateInstance extends Model<TemplateAttributes,TemplateCreationAttributes>,
TemplateAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Template = sequelize.define<TemplateInstance>(
	'Template',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		title:{
			allowNull:false,
			type: DataTypes.TEXT,
		},
		htmlData:{
			allowNull: true,
			type:DataTypes.TEXT,
		},

		userId:{
			allowNull: true,
			type: DataTypes.UUID,
		}
	},
);




export default Template;
