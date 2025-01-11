import { Route, Switch } from 'wouter';
import { LoginPage } from './pages/LoginPage';
import { RedirectionRoute } from './router/RedirectionRoute';
import { ProtectedRoute } from './router/ProtectedRoute';
import { DashboardPage } from './pages/DashboardPage';
import { AuthProvider } from './context/AuthProvider';

export const RootApp: React.FC = () => {
	return (
		<AuthProvider>
			<Switch>
				<Route path={'/'} component={LoginPage} />
				<ProtectedRoute path={'/dashboard'} component={DashboardPage} />
				<Route component={RedirectionRoute} />
			</Switch>
		</AuthProvider>
	);
};
