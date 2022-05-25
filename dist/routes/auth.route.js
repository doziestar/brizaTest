"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_controller_1 = tslib_1.__importDefault(require("../controller/auth.controller"));
class IndexRoute {
    constructor() {
        this.path = '/auth/';
        this.router = (0, express_1.Router)();
        this.authController = auth_controller_1.default;
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}signup`, this.authController.signup);
        this.router.post(`${this.path}login`, this.authController.login);
    }
}
exports.default = IndexRoute;
