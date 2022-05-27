"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const product_controller_1 = tslib_1.__importDefault(require("../controller/product.controller"));
class ProductRoute {
    constructor() {
        this.path = '/products/';
        this.router = (0, express_1.Router)();
        this.productController = new product_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.productController.getAll);
        this.router.post(`${this.path}:id`, this.productController.getOne);
        this.router.post(`${this.path}`, this.productController.create);
        this.router.put(`${this.path}:id`, this.productController.update);
        this.router.delete(`${this.path}:id`, this.productController.delete);
    }
}
exports.default = ProductRoute;
