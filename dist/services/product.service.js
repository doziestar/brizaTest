// import { IProduct } from '../interface/product.interface';
// import Product from '../model/product.model';
// export default class ProductService {
// 	public async getAll(): Promise<IProduct[]> {
// 		return await Product.findAll();
// 	}
// 	public async getOne(id: string): Promise<IProduct> {
// 		return await Product.findOne({
// 			where: {
// 				id,
// 			},
// 		});
// 	}
// 	public async create(product: IProduct): Promise<IProduct> {
// 		return await Product.create(product);
// 	}
// 	public async update(id: string, product: IProduct): Promise<IProduct> {
// 		return await Product.update(product, {
// 			where: {
// 				id,
// 			},
// 		});
// 	}
// 	public async delete(id: string): Promise<IProduct> {
// 		return await Product.destroy({
// 			where: {
// 				id,
// 			},
// 		});
// 	}
// }
