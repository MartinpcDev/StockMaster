import { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Redirect, Route } from 'wouter';

interface ProtectedRouteProps {
	path: string;
	component: FC;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	path,
	component: Component
}) => {
	const { isAuthenticated } = useAuth();
	return (
		<Route
			path={path}
			component={() => (isAuthenticated ? <Component /> : <Redirect to='/' />)}
		/>
	);
};
