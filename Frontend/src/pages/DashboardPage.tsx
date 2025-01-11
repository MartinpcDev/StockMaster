import { useAuth } from '../hooks/useAuth';

export const DashboardPage: React.FC = () => {
	const { logout } = useAuth();
	return (
		<>
			<h1>DashboardPage</h1>
			<button onClick={logout} className='p-2 bg-red-500 text-white rounded'>
				Logout
			</button>
		</>
	);
};
