export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
	generateToken(): Promise<string>;
	comparePassword(password: string): Promise<boolean>;
}

export interface IProfile {
	userId: string;
	firstName: string;
	lastName: string;
	phone: string;
}
