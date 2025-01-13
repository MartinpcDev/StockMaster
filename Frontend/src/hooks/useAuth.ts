import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginRequest } from '../models/auth.model';

interface AuthContextType {
	isAuthenticated: boolean;
	login: (req: LoginRequest) => Promise<void>;
	logout: VoidFunction;
	isError: string | undefined;
}

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
