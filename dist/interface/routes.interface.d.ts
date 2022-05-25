import express from 'express';
export interface Routes {
    path: string;
    router: express.Router;
}
