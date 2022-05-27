"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
const user_model_1 = require("../model/user.model");
const db_1 = tslib_1.__importDefault(require("../utils/db"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    paranoid: true,
});
user_model_1.User.hasMany(Product, {
    foreignKey: 'userId',
    as: 'products',
});
Product.belongsTo(user_model_1.User, {
    foreignKey: 'userId',
    as: 'user',
});
exports.default = Product;
