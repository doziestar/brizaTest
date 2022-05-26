import { Router } from 'express';
import ProductController from '../controller/product.controller';
import { Routes } from '../interface/routes.interface';

class ProductRoute implements Routes {
	public path = '/products/';
	public router = Router();
	private productController = new ProductController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, this.productController.getAll);
		this.router.post(`${this.path}:id`, this.productController.getOne);
		this.router.post(`${this.path}`, this.productController.create);
		this.router.put(`${this.path}:id`, this.productController.update);
		this.router.delete(`${this.path}:id`, this.productController.delete);
	}
}

export default ProductRoute;
