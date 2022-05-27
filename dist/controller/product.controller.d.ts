import { NextFunction, Request, Response } from 'express';
declare class ProductController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    getOne(req: Request, res: Response, next: NextFunction): Promise<void>;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default ProductController;
