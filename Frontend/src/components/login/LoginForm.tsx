import { useForm } from 'react-hook-form';
import { CustomButton } from './CustomButton';
import { useLocation } from 'wouter';
import { useAuth } from '../../hooks/useAuth';

interface LoginRequest {
	username: string;
	password: string;
}

export const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginRequest>();

	const [, setLocation] = useLocation();
	const { login } = useAuth();

	const onSubmit = handleSubmit(data => {
		console.log(data);
		login();
		setLocation('/dashboard');
	});

	return (
		<>
			<form
				onSubmit={onSubmit}
				className='w-1/3 rounded-lg p-8 flex flex-col mt-10 md:mt-0 border-2 border-gray-300 transition-all'>
				<h2 className='text-gray-300 text-lg font-medium title-font mb-5'>
					Sign Up
				</h2>
				<div className='relative mb-4'>
					<label htmlFor='username' className='leading-7 text-sm text-gray-300'>
						Username
					</label>
					<input
						type='text'
						id='username'
						className='text-white w-full bg-transparent rounded border border-gray-300 focus:border-secondary focus:ring-2 ring-opacity-85 focus:ring-secondary focus:ring-opacity-100 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						placeholder='Ingrese el username'
						{...register('username', { required: 'El username es requerido' })}
						autoComplete='username'
					/>
					{errors.username && (
						<span className='text-red-400'>{errors.username.message}</span>
					)}
				</div>
				<div className='relative mb-4'>
					<label htmlFor='password' className='leading-7 text-sm text-gray-300'>
						Password
					</label>
					<input
						type='password'
						id='password'
						className='text-white w-full bg-transparent rounded border border-gray-300 focus:border-secondary focus:ring-2 ring-opacity-85 focus:ring-secondary focus:ring-opacity-100 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						placeholder='Ingrese el password'
						{...register('password', { required: 'El password es requerido' })}
						autoComplete='current-password'
					/>
					{errors.password && (
						<span className='text-red-400'>{errors.password.message}</span>
					)}
				</div>
				<CustomButton text='Submit' />
			</form>
		</>
	);
};
