

import { DataTypes, Model,Optional } from "sequelize";
import { sequelize } from "../config/db.config";


interface BioAttributes{
	id: string;
	firstName : string;
	lastName : string;
	address: string;
	zip: string;
	country: string;
	jobTitle: string;
	githubLink: string;
	linkedInLink: string;
	userId: string;

};

/*
we have to decide the AuthorCreationAttributes to
tell Sequelize and typescript that the propterty id,
in that case is optional to be passed at creation time.
 */

interface BioCreationAttributes extends Optional<BioAttributes,'id'>{}

interface BioInstance extends Model<BioAttributes,BioCreationAttributes>,
BioAttributes{
	createdAt?: Date;
	updatedAt?: Date;
}

const Bio = sequelize.define<BioInstance>(
	'Bio',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey:true,
			type:DataTypes.UUID,
			unique:true,
		},


		firstName:{
			allowNull: false,
			type: DataTypes.TEXT,
		},

		lastName:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		address:{
			allowNull: true,
			type:DataTypes.TEXT,
		},

		zip:{
			allowNull : true,
			type: DataTypes.TEXT,
		},
		country:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		jobTitle:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		githubLink:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		linkedInLink:{
			allowNull: true,
			type: DataTypes.TEXT
		},
		userId:{
			allowNull: false,
			autoIncrement: false,
			type: DataTypes.UUID,

		}
	}
);

export default Bio;
