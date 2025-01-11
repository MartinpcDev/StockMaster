import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface AuthContextType {
	isAuthenticated: boolean;
	login: VoidFunction;
	logout: VoidFunction;
}

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
