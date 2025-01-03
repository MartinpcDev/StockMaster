import { Route, Switch } from 'wouter';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';

function App() {
	return (
		<Switch>
			<Route path='/' component={LoginPage} />
			<ProtectedRoute path='/dashboard' component={DashboardPage} />
		</Switch>
	);
}

export default App;
