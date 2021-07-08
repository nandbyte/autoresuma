
import { DataTypes, Model,Optional } from "sequelize";
import { sequelize } from "../config/db.config";



interface UserAttributes{
	id: string;
	firstName : string;
	lastName : string;
	email: string;
	completed: boolean;

};

/*
we have to decide the AuthorCreationAttributes to
tell Sequelize and typescript that the propterty id,
in that case is optional to be passed at creation time.
 */

interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}

interface UserInstance extends Model<UserAttributes,UserCreationAttributes>,
UserAttributes{
	createdAt?: Date;
	updatedAt?: Date;
}

const User = sequelize.define<UserInstance>(
	'User',
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
		completed:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}
);

/*User.hasMany(Todo,{
	//can omit the source key property since by default sequelize will use the primary key defined in the model

	sourceKey: 'id',
	foreignKey: 'userId',
	as: 'todos',
});*/
export default User;
