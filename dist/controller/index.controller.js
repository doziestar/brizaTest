"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
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
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = IndexController;
