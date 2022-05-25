import { Router } from 'express';
import AuthController from '../controller/auth.controller';
import { Routes } from '../interface/routes.interface';

class IndexRoute implements Routes {
	public path = '/auth/';
	public router = Router();
	private authController = AuthController;

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}signup`, this.authController.signup);
		this.router.post(`${this.path}login`, this.authController.login);
	}
}

export default IndexRoute;
