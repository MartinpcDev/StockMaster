import { createContext } from 'react';
import { LoginRequest } from '../models/auth.model';

interface AuthContextType {
	isAuthenticated: boolean;
	login: (req: LoginRequest) => Promise<void>;
	logout: VoidFunction;
	isError: string | undefined;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);
