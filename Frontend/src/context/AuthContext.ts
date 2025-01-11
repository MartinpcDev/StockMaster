import { createContext } from 'react';

interface AuthContextType {
	isAuthenticated: boolean;
	login: VoidFunction;
	logout: VoidFunction;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);
