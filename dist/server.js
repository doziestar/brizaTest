"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';
require("dotenv/config");
const app_1 = tslib_1.__importDefault(require("./app"));
// import AuthRoute from '@/routes/auth.route';
const index_route_1 = tslib_1.__importDefault(require("./routes/index.route"));
// import { PolicyRoutes } from '@/routes/policy.route';
// import UsersRoute from '@/routes/users.route';
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
(0, validateEnv_1.default)();
const app = new app_1.default([
    new index_route_1.default(),
    // new AuthRoute(),
    // new PolicyRoutes(),
    // new UsersRoute(),
]);
console.log('Server is running on port: ', process.env.PORT);
app.listen();
/**
Todo:
- Write index test case
- push to heroku
 */
