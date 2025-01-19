'use client';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../common/ErrorMessage';
import { api } from '@/utils/http-config';
import { AxiosError } from 'axios';
import { setCustomCookies } from '@/utils/cookies';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface LoginData {
	username: string;
	password: string;
}

export const LoginForm: React.FC = ({}) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginData>();

	const onSubmit = handleSubmit(async data => {
		try {
			const response = await api.post('/auth/login', data);
			await setCustomCookies('token', response.data.token);
			toast.success('Inicio de Sesion Exitosa');
			router.push('/dashboard');
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.error);
			}
		}
	});

	return (
		<>
			<form onSubmit={onSubmit} className='space-y-4 md:space-y-6'>
				<div>
					<label htmlFor='username' className='block mb-2 text-sm font-medium'>
						Tu usuario
					</label>
					<input
						type='text'
						id='username'
						className='input-form'
						placeholder='name@company.com'
						{...register('username', { required: 'El usuario es requerido' })}
					/>
					{errors.username?.message && (
						<ErrorMessage message={errors.username.message} />
					)}
				</div>
				<div>
					<label htmlFor='password' className='block mb-2 text-sm font-medium'>
						Contraseña
					</label>
					<input
						type='password'
						id='password'
						placeholder='••••••••'
						className='input-form'
						{...register('password', {
							required: 'La contraseña es requerida'
						})}
					/>
					{errors.password?.message && (
						<ErrorMessage message={errors.password.message} />
					)}
				</div>
				<button type='submit' className='btn-blue'>
					Ingresar
				</button>
			</form>
		</>
	);
};
