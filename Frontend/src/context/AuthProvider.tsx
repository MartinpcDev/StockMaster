import { FC, ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
