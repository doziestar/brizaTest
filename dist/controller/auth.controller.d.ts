import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    signup(req: Request, res: Response, next: NextFunction): Promise<any>;
    login(req: Request, res: Response, next: NextFunction): Promise<any>;
}
declare const _default: AuthController;
export default _default;
