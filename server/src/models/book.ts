// /models/book.ts
import Author from './author';
import {DataTypes, Model,Optional} from 'sequelize';
import { sequelize } from '../config/db.config';



interface BookAttributes{
	id: string;
	title: string;
	numberOfPapers: number;
	authorId: string;
}

interface BookCreationAttributes extends Optional<BookAttributes,'id'>{}

interface BookInstance extends Model<BookAttributes,BookCreationAttributes>,
BookAttributes{
	createdAt?:Date;
	updatedAt?:Date;
}

const Book = sequelize.define<BookInstance>(
	'Book',
	{
		id:{
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique:true,
		},
		title:{
			allowNull: true,
			type:DataTypes.TEXT,
		},
		numberOfPapers:{
			allowNull: true,
			type: DataTypes.TEXT,
		},
		authorId:{
			allowNull: true,
			type: DataTypes.UUID,
		},
	},
);

Book.belongsTo(Author,{
	foreignKey:'authorId',
	as:'author'
});



export default Book;
