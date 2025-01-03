import { AuthResponse, LoginRequest } from '../models/user-model';
import { api } from './conexionApi';

export async function login(loginRequest: LoginRequest) {
	const response = await api.post<AuthResponse>('/auth/login', loginRequest);
	return response.data.token;
}
