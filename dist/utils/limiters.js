"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountLimiter = exports.apiLimiter = void 0;
const tslib_1 = require("tslib");
const express_rate_limit_1 = tslib_1.__importDefault(require("express-rate-limit"));
exports.apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
exports.createAccountLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: 'Too many accounts created from this IP, please try again after an hour',
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
