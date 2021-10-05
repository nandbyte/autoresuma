import { DataTypes, Model,Optional } from "sequelize";
import {sequelize} from '../config/db.config';

import Book from './book';


interface AuthorAttributes{
	id: string;
	firstName : string;
	lastName : string;
	email: string;
};

/*
we have to decide the AuthorCreationAttributes to
tell Sequelize and typescript that the propterty id,
in that case is optional to be passed at creation time.
 */

interface AuthorCreationAttributes extends Optional<AuthorAttributes,'id'>{}

interface AuthorInstance extends Model<AuthorAttributes,AuthorCreationAttributes>,
AuthorAttributes{
	createdAt?: Date;
	updatedAt?: Date;
}

const Author = sequelize.define<AuthorInstance>(
	'Author',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey:true,
			type:DataTypes.UUID,
			unique:true,
		},
		firstName:{
			allowNull: true,
			type: DataTypes.TEXT,
		},

		lastName:{
			allowNull: false,
			type: DataTypes.TEXT,
		},
		email:{
			allowNull: true,
			type:DataTypes.TEXT,
		},
	}
);

Author.hasMany(Book,{
	/*can omit the source key property since by default sequelize will use the primary key defined in the model*/

	sourceKey: 'id',
	foreignKey: 'authorId',
	as: 'books',
});
export default Author;
