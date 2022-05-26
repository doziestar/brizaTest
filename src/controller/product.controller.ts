import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interface/product.interface';
import ProductModel from '../model/product.model';

class ProductController {
	async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const products: IProduct[] = await ProductModel.findAll();
			res.status(200).json({
				message: 'Products retrieved successfully',
				products,
			});
		} catch (error) {
			next(error);
		}
	}

	async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const product: IProduct = await ProductModel.findOne({
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json({
				message: 'Product retrieved successfully',
				product,
			});
		} catch (error) {
			next(error);
		}
	}

	async create(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const product: IProduct = await ProductModel.create(req.body);
			res.status(201).json({
				message: 'Product created successfully',
				product,
			});
		} catch (error) {
			next(error);
		}
	}

	async update(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const product = await ProductModel.update(req.body, {
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json({
				message: 'Product updated successfully',
				product,
			});
		} catch (error) {
			next(error);
		}
	}

	async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const product = await ProductModel.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json({
				message: 'Product deleted successfully',
				product,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default ProductController;
