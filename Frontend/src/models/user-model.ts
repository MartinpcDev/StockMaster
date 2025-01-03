export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterRequest {
	nombre: string;
	email: string;
	username: string;
	password: string;
}

export interface AuthResponse {
	token: string;
}
