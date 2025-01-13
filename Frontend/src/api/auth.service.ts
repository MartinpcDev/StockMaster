import {
	AuthResponse,
	LoginRequest,
	RegisterRequest,
	RegisterResponse
} from '../models/auth.model';
import { api } from './http.config';

export async function loginService(request: LoginRequest): Promise<string> {
	const response = await api.post<AuthResponse>('/auth/login', request);
	return response.data.token;
}

export async function registerService(
	request: RegisterRequest
): Promise<string> {
	const response = await api.post<RegisterResponse>('/auth/register', request);
	return response.data.message;
}
