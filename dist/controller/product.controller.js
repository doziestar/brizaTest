"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const product_model_1 = tslib_1.__importDefault(require("../model/product.model"));
class ProductController {
    async getAll(req, res, next) {
        try {
            const products = await product_model_1.default.findAll();
            res.status(200).json({
                message: 'Products retrieved successfully',
                products,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const product = await product_model_1.default.findOne({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json({
                message: 'Product retrieved successfully',
                product,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const product = await product_model_1.default.create(req.body);
            res.status(201).json({
                message: 'Product created successfully',
                product,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const product = await product_model_1.default.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json({
                message: 'Product updated successfully',
                product,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            const product = await product_model_1.default.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json({
                message: 'Product deleted successfully',
                product,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ProductController;
