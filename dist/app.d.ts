import express from 'express';
import { Routes } from './interface/routes.interface';
declare class App {
    app: express.Application;
    port: string | number;
    env: string;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeDatabase;
    private initializeErrorHandling;
}
export default App;
