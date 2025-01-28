'use client';

import { Proveedor, ProveedorFormType } from '@/app/models/proveedor.model';
import { api } from '@/app/utils/http-config';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ErrorMessage } from '../common/ErrorMessage';

interface EditProveedorFormProps {
	proveedor: Proveedor;
	token: string;
	id: string;
}

export const EditProveedorForm: React.FC<EditProveedorFormProps> = ({
	proveedor,
	token,
	id
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ProveedorFormType>();
	const router = useRouter();

	const onSubmit = handleSubmit(async data => {
		try {
			await api.put(`/proveedores/${id}`, data, {
				headers: { Authorization: `Bearer ${token}` }
			});
			toast.success('Proveedor Editado Satisfactoriamente');
			router.push('/dashboard/proveedores');
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.error);
			}
		}
	});

	return (
		<>
			{proveedor && (
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
							defaultValue={proveedor.nombre}
							{...register('nombre', { required: 'El nombre es requerido' })}
						/>
						{errors.nombre?.message && (
							<ErrorMessage message={errors.nombre.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='direccion'
							className='block mb-2 text-sm font-medium text-white'>
							Direccion
						</label>
						<input
							type='text'
							id='direccion'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={proveedor.direccion}
							{...register('direccion', {
								required: 'La direccion es requerida'
							})}
						/>
						{errors.direccion?.message && (
							<ErrorMessage message={errors.direccion.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='telefono'
							className='block mb-2 text-sm font-medium text-white'>
							Telefono
						</label>
						<input
							type='tel'
							id='telefono'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={proveedor.telefono}
							{...register('telefono', {
								required: 'El telefono es requerido'
							})}
						/>
						{errors.telefono?.message && (
							<ErrorMessage message={errors.telefono.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-white'>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={proveedor.email}
							{...register('email', { required: 'El email es requerido' })}
						/>
						{errors.email?.message && (
							<ErrorMessage message={errors.email.message} />
						)}
					</div>
					<button
						type='submit'
						className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
						Editar Proveedor
					</button>
				</form>
			)}
		</>
	);
};
