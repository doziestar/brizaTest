import { Routes } from '../interface/routes.interface';
declare class ProductRoute implements Routes {
    path: string;
    router: any;
    private productController;
    constructor();
    private initializeRoutes;
}
export default ProductRoute;
