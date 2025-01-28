'use client';

import { UserFormsType, userRole } from '@/app/models/users.model';
import { api } from '@/app/utils/http-config';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ErrorMessage } from '../common/ErrorMessage';

export const UsersForm: React.FC = ({}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<UserFormsType>();
	const router = useRouter();

	const onSubmit = handleSubmit(async data => {
		try {
			const response = await api.post('/auth/register', data);
			toast.success(response.data.message);
			router.push('/dashboard/users');
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.error);
			}
		}
	});
	return (
		<>
			<form onSubmit={onSubmit} className='w-1/3 min-w-96 mx-auto'>
				<div className='mb-5'>
					<label
						htmlFor='nombre'
						className='block mb-2 text-sm font-medium text-white'>
						Nombre
					</label>
					<input
						type='text'
						id='nombre'
						className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						placeholder='lucas alfonso pereira cartagena'
						{...register('nombre', { required: 'El nombre es requerido' })}
					/>
					{errors.nombre?.message && (
						<ErrorMessage message={errors.nombre.message} />
					)}
				</div>
				<div className='mb-5'>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-white'>
						Email
					</label>
					<input
						type='text'
						id='email'
						className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						{...register('email', {
							required: 'El email es requerido'
						})}
					/>
					{errors.email?.message && (
						<ErrorMessage message={errors.email.message} />
					)}
				</div>
				<div className='mb-5'>
					<label
						htmlFor='username'
						className='block mb-2 text-sm font-medium text-white'>
						Username
					</label>
					<input
						type='text'
						id='username'
						className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						{...register('username', { required: 'El username es requerido' })}
					/>
					{errors.username?.message && (
						<ErrorMessage message={errors.username.message} />
					)}
				</div>
				<div className='mb-5'>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-white'>
						Password
					</label>
					<input
						type='text'
						id='password'
						className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						{...register('password', { required: 'El password es requerido' })}
					/>
					{errors.password?.message && (
						<ErrorMessage message={errors.password.message} />
					)}
				</div>
				<div className='mb-5'>
					<label
						htmlFor='role'
						className='block mb-2 text-sm font-medium text-white'>
						Seleccione el Rol
					</label>
					<select
						id='role'
						defaultValue='USER'
						className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						{...register('role', {
							required: 'El role es requerido'
						})}>
						<option value='' disabled>
							Seleccione un rol
						</option>
						{userRole.map((rol, index) => (
							<option key={index} value={rol}>
								{rol}
							</option>
						))}
					</select>
				</div>
				<button
					type='submit'
					className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
					Crear Usuario
				</button>
			</form>
		</>
	);
};
