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
	const { isError, login } = useAuth();

	const onSubmit = handleSubmit(data => {
		console.log(isError);
		login(data);
		setLocation('/dashboard');
	});

	return (
		<>
			<form
				onSubmit={onSubmit}
				className='w-1/3 rounded-lg bg-secondary p-8 flex flex-col mt-10 md:mt-0 border-2 border-gray-300 transition-all text-parrafos border-opacity-75 bg-card'>
				<h2 className='text-lg font-medium title-font mb-5 text-center'>
					Sign Up
				</h2>
				<div className='relative mb-4 space-y-2'>
					<label htmlFor='username' className='leading-4 text-sm font-bold'>
						Username
					</label>
					<input
						type='text'
						id='username'
						className='w-full bg-transparent border-primary rounded border focus:border-parrafo focus:ring-2 ring-opacity-85 focus:ring-secondary focus:ring-opacity-100 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						placeholder='Ingrese el username'
						{...register('username', { required: 'El username es requerido' })}
						autoComplete='username'
					/>
					{errors.username && (
						<span className='text-rojo'>{errors.username.message}</span>
					)}
				</div>
				<div className='relative mb-4 space-y-2'>
					<label htmlFor='password' className='leading-7 text-sm font-bold'>
						Password
					</label>
					<input
						type='password'
						id='password'
						className='w-full bg-transparent rounded border border-primary focus:border-parrafo focus:ring-2 ring-opacity-85 focus:ring-secondary focus:ring-opacity-100 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						placeholder='Ingrese el password'
						{...register('password', { required: 'El password es requerido' })}
						autoComplete='current-password'
					/>
					{errors.password && (
						<span className='text-rojo'>{errors.password.message}</span>
					)}
				</div>
				<CustomButton text='Submit' />
			</form>
		</>
	);
};
