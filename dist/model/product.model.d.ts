import { Model } from 'sequelize';
import { IProduct } from '../interface/product.interface';
declare class Product extends Model implements IProduct {
    name: string;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}
export default Product;
