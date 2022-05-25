import bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';
import { IProfile, IUser } from '../interface/user.interface';
import sequelize from '../utils/db';

class User extends Model implements IUser {
	generateToken(): Promise<string> {
		throw new Error('Method not implemented.');
	}
	comparePassword(password: string): Promise<boolean> {
		throw new Error('Method not implemented.');
	}
	public id!: string;
	public name!: string;
	public email!: string;
	public password!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'users',
		sequelize,
		paranoid: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (user: IUser) => {
				const salt = await bcrypt.genSalt(10);
				user.password = await bcrypt.hash(user.password, salt);
			},
			// create profile after create user
			afterCreate: async (user: IUser) => {
				await Profile.create({
					userId: user.id,
					firstName: '',
					lastName: '',
					phone: '',
				});
			},
		},
	}
);

class Profile extends Model implements IProfile {
	public userId!: string;
	public firstName!: string;
	public lastName!: string;
	public phone!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Profile.init(
	{
		userId: {
			type: DataTypes.UUIDV4,
			allowNull: false,
			unique: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'profiles',
		sequelize,
		paranoid: true,
		timestamps: true,
	}
);

User.hasOne(Profile, {
	foreignKey: 'userId',
	sourceKey: 'id',
});

Profile.belongsTo(User, {
	foreignKey: 'userId',
	targetKey: 'id',
});

export { User, Profile };
