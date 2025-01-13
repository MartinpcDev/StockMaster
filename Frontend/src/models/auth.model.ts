export interface AuthResponse {
	token: string;
}

export interface RegisterResponse {
	message: string;
}

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
