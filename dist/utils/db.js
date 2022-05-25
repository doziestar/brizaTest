"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = tslib_1.__importDefault(require("config"));
const sequelize_1 = require("sequelize");
const env = process.env.NODE_ENV || 'production';
console.log(`ENV: ${env}`);
let sequelize;
if (env === 'production') {
    // sequelize = new Sequelize(config.get('database.name'), config.get('database.user'), config.get('database.password'), {
    //   dialect: 'postgres',
    //   host: config.get('database.host'),
    //   dialectOptions: {
    //     ssl: true,
    //   },
    // });
    sequelize = new sequelize_1.Sequelize(config_1.default.get('database.url'), {
        dialect: 'postgres',
        dialectOptions: {
            ssl: true,
            rejectUnauthorized: false,
        },
    });
}
else {
    console.log(config_1.default.get('db'));
    sequelize = new sequelize_1.Sequelize(config_1.default.get('db'), {
        dialect: 'postgres',
    });
}
exports.default = sequelize;
