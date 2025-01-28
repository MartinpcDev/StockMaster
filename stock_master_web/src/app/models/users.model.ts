export interface User {
	id: number;
	nombre: string;
	email: string;
	username: string;
	role: string;
	createdAt: string;
}

export type UserFormsType = Omit<User, 'id' | 'createdAt'> & {
	password: string;
};

export const userRole = ['USER', 'ADMIN'];
