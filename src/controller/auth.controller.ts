import { IsEmpty } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { IUser } from 'interface/user.interface';
import { User } from 'model/user.model';

class AuthController {
	async signup(req: Request, res: Response, next: NextFunction) {
		try {
			if (IsEmpty(req.body.email) || IsEmpty(req.body.password)) {
				return res.status(400).json({
					message: 'Email and password are required',
				});
			}
			const user: IUser = await User.create(req.body);
			const token = await user.generateToken();
			res.status(201).json({
				message: 'User created successfully',
				token,
			});
		} catch (error) {
			next(error);
		}
	}

	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const user: IUser = await User.findOne({
				where: {
					email: req.body.email,
				},
			});
			if (!user) {
				return res.status(404).json({
					message: 'User not found',
				});
			}
			const isMatch = await user.comparePassword(req.body.password);
			if (!isMatch) {
				return res.status(401).json({
					message: 'Invalid password',
				});
			}
			const token = await user.generateToken();
			res.status(200).json({
				message: 'User logged in successfully',
				token,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new AuthController();
