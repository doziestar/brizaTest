import express from 'express';

export interface Routes {
	path: string;
	router: express.Router;
	// method: string;
	// action: string;
	// middlewares?: any[];
	// controller: any;
	// schema?: any;
	// route: string;
}
