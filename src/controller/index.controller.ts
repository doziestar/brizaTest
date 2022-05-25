import { NextFunction, Request, Response } from 'express';

class IndexController {
	public index = (req: Request, res: Response, next: NextFunction): void => {
		try {
			res.status(200).json({
				message: 'Welcome To Briza!',
				author: 'Chidozie C. Okafor',
				version: '1.0.0',
				date: new Date().toLocaleDateString(),
				time: new Date().toLocaleTimeString(),
				email: 'chidosiky2015@gmail.com',
				github: 'github.com/doziestar',
				twitter: 'twitter.com/dozie7',
				linkedin: 'linkedin.com/in/dozie7',
			});
		} catch (error) {
			next(error);
		}
	};
}

export default IndexController;
