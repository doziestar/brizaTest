import { Model } from 'sequelize';
import { IProfile, IUser } from '../interface/user.interface';
declare class User extends Model implements IUser {
    generateToken(): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
    id: string;
    name: string;
    email: string;
    password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
declare class Profile extends Model implements IProfile {
    userId: string;
    firstName: string;
    lastName: string;
    phone: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export { User, Profile };
