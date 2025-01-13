import { FC, ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';
import { loginService } from '../api/auth.service';
import { LoginRequest } from '../models/auth.model';
import { AxiosError } from 'axios';

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		!!localStorage.getItem('token')
	);
	const [isError, setIsError] = useState<string>();

	const login = async (request: LoginRequest) => {
		try {
			const response = await loginService(request);
			localStorage.setItem('token', response);
			setIsAuthenticated(true);
		} catch (error) {
			if (error instanceof AxiosError) {
				const errorResponse = error.response?.data;
				setIsError(errorResponse);
				console.error('Error Login in', errorResponse);
			}
			console.error(error);
			setIsAuthenticated(false);
		}
	};
	const logout = () => {
		localStorage.removeItem('token');
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, isError }}>
			{children}
		</AuthContext.Provider>
	);
};
