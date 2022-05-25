import IndexController from '../controller/index.controller';
import { Routes } from '../interface/routes.interface';
declare class IndexRoute implements Routes {
    path: string;
    router: any;
    indexController: IndexController;
    constructor();
    private initializeRoutes;
}
export default IndexRoute;
