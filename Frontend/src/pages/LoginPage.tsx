import { LogoIcon } from '../components/icons/LogoIcon';
import { LoginForm } from '../components/login/LoginForm';

export const LoginPage: React.FC = () => {
	return (
		<>
			<div className='container min-h-screen w-full mx-auto flex flex-row space-x-48 items-center justify-center space-y-5'>
				<div className='text-center'>
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-5xl'>Stock Master</h1>
						<LogoIcon className='size-48' />
					</div>
					<p className='text-pretty text-2xl'>
						Tu administracion de productos jamas fue tan facil
					</p>
				</div>
				<LoginForm />
			</div>
		</>
	);
};
