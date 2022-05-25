"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.User = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const sequelize_1 = require("sequelize");
const db_1 = tslib_1.__importDefault(require("../utils/db"));
class User extends sequelize_1.Model {
    generateToken() {
        throw new Error('Method not implemented.');
    }
    comparePassword(password) {
        throw new Error('Method not implemented.');
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize: db_1.default,
    paranoid: true,
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt_1.default.genSalt(10);
            user.password = await bcrypt_1.default.hash(user.password, salt);
        },
        // create profile after create user
        afterCreate: async (user) => {
            await Profile.create({
                userId: user.id,
                firstName: '',
                lastName: '',
                phone: '',
            });
        },
    },
});
class Profile extends sequelize_1.Model {
}
exports.Profile = Profile;
Profile.init({
    userId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'profiles',
    sequelize: db_1.default,
    paranoid: true,
    timestamps: true,
});
User.hasOne(Profile, {
    foreignKey: 'userId',
    sourceKey: 'id',
});
Profile.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id',
});
