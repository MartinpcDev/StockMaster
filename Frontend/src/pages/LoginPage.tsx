import { LoginForm } from '../components/login/LoginForm';

export const LoginPage: React.FC = () => {
	return (
		<>
			<div className='container min-h-screen w-full mx-auto flex flex-col items-center justify-center'>
				<LoginForm />
			</div>
		</>
	);
};
