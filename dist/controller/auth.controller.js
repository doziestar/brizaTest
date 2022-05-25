"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const user_model_1 = require("model/user.model");
class AuthController {
    async signup(req, res, next) {
        try {
            if ((0, class_validator_1.IsEmpty)(req.body.email) || (0, class_validator_1.IsEmpty)(req.body.password)) {
                return res.status(400).json({
                    message: 'Email and password are required',
                });
            }
            let user = await user_model_1.User.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (user)
                throw new Error('User already exists');
            user = await user_model_1.User.create(req.body);
            const token = await user.generateToken();
            res.status(201).json({
                message: 'User created successfully',
                token,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const user = await user_model_1.User.findOne({
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
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new AuthController();
