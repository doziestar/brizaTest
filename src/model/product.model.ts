import { DataTypes, Model } from 'sequelize';
import { IProduct } from '../interface/product.interface';
import { User } from '../model/user.model';
import sequelize from '../utils/db';

class Product extends Model implements IProduct {
	public name!: string;
	public price!: number;
	public quantity!: number;
	public createdAt!: Date;
	public updatedAt!: Date;
}

Product.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			autoIncrement: true,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Product',
		tableName: 'products',
		timestamps: true,
		paranoid: true,
	}
);

User.hasMany(Product, {
	foreignKey: 'userId',
	as: 'products',
});

Product.belongsTo(User, {
	foreignKey: 'userId',
	as: 'user',
});

export default Product;
