import User from './user';
import { DataTypes,Model,Optional } from "sequelize";
import { sequelize } from "../config/db.config";

interface TodoAttributes{
	id: string;
	title: string;
	completed: boolean;
	userId:string;
}

interface TodoCreationAttributes extends Optional<TodoAttributes,'id'>{}

interface TodoInstance extends Model<TodoAttributes,TodoCreationAttributes>,

TodoAttributes{
	createdAt?: Date;
	updatedAt?: Date;
}

const Todo = sequelize.define<TodoInstance>(
	'Todo',
	{
		id:{
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		title:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		userId:{
			allowNull: true,
			type:DataTypes.UUIDV4,
		},
	}
);

Todo.belongsTo(User,{
	foreignKey: 'userId',
	as:'user'
})


export default Todo;
