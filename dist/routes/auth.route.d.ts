import { Routes } from '../interface/routes.interface';
declare class IndexRoute implements Routes {
    path: string;
    router: any;
    private authController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
