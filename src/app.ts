process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import { Routes } from './interface/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
// import sequelize from '@utils/db';
import { logger, stream } from './utils/logger';

class App {
	public app: express.Application;
	public port: string | number;
	public env: string;

	constructor(routes: Routes[]) {
		this.app = express();
		this.port = process.env.PORT || 3000;
		this.env = process.env.NODE_ENV || 'development';
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
		this.initializeErrorHandling();
		this.initializeDatabase();
	}

	public listen() {
		this.app.listen(this.port, () => {
			logger.info(`=================================`);
			logger.info(`======= ENV: ${this.env} =======`);
			logger.info(`🚀 App listening on the port ${this.port}`);
			logger.info(`=================================`);
		});
	}

	public getServer() {
		return this.app;
	}

	private initializeMiddlewares() {
		this.app.use(morgan(config.get('log.format'), { stream }));
		this.app.use(
			cors({
				origin: config.get('cors.origin'),
				credentials: config.get('cors.credentials'),
			})
		);
		this.app.use(hpp());
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cookieParser());
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/api/v1', route.router);
		});
	}

	private async initializeDatabase() {
		// sequelize
		// 	.authenticate()
		// 	.then(() => {
		// 		logger.info('🚀 Database connected');
		// 	})
		// 	.catch((err) => {
		// 		logger.error('🚨 Database connection error: ' + err);
		// 	});
		// const isDev = this.env === 'development';
		// await sequelize.sync({ alter: isDev });
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}
}

export default App;
