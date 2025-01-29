'use client';

import {
	Product,
	productCategory,
	ProductTypeForm
} from '@/app/models/product.model';
import { api } from '@/app/utils/http-config';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ErrorMessage } from '../common/ErrorMessage';
import { Proveedor } from '@/app/models/proveedor.model';

interface EditProductFormProps {
	product: Product;
	proveedores: Proveedor[];
	token: string;
	id: string;
}

export const EditProductForm: React.FC<EditProductFormProps> = ({
	product,
	token,
	proveedores,
	id
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ProductTypeForm>();
	const router = useRouter();

	const onSubmit = handleSubmit(async data => {
		try {
			await api.put(`/products/${id}`, data, {
				headers: { Authorization: `Bearer ${token}` }
			});
			toast.success('Producto Editado Satisfactoriamente');
			router.push('/dashboard/products');
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.error);
			}
		}
	});

	return (
		<>
			{product && (
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
							defaultValue={product.nombre}
							{...register('nombre', { required: 'El nombre es requerido' })}
						/>
						{errors.nombre?.message && (
							<ErrorMessage message={errors.nombre.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='descripcion'
							className='block mb-2 text-sm font-medium text-white'>
							Descripcion
						</label>
						<input
							type='text'
							id='descripcion'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={product.descripcion}
							{...register('descripcion', {
								required: 'La descripcion es requerida'
							})}
						/>
						{errors.descripcion?.message && (
							<ErrorMessage message={errors.descripcion.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='precio'
							className='block mb-2 text-sm font-medium text-white'>
							Precio
						</label>
						<input
							type='number'
							id='precio'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={product.precio}
							{...register('precio', { required: 'El precio es requerido' })}
						/>
						{errors.precio?.message && (
							<ErrorMessage message={errors.precio.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='stock'
							className='block mb-2 text-sm font-medium text-white'>
							Stock
						</label>
						<input
							type='number'
							id='stock'
							className='mb-2 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							defaultValue={product.stock}
							{...register('stock', { required: 'El stock es requerido' })}
						/>
						{errors.stock?.message && (
							<ErrorMessage message={errors.stock.message} />
						)}
					</div>
					<div className='mb-5'>
						<label
							htmlFor='categoria'
							className='block mb-2 text-sm font-medium text-white'>
							Seleccione una categoria
						</label>
						<select
							id='categoria'
							defaultValue={product.categoria}
							className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							{...register('categoria', {
								required: 'La categoria es requerida'
							})}>
							<option value='' disabled>
								Seleccione una categoria
							</option>
							{productCategory.map((category, index) => (
								<option key={index} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div className='mb-5'>
						<label
							htmlFor='proveedor'
							className='block mb-2 text-sm font-medium text-white'>
							Seleccione un Proveedor
						</label>
						<select
							id='proveedor'
							defaultValue={product.proveedor.id}
							className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
							{...register('proveedorId', {
								required: 'El proveedor es requerido'
							})}>
							<option value='' disabled>
								Seleccione un Proveedor
							</option>
							{proveedores.map(proveedor => (
								<option key={proveedor.id} value={proveedor.id}>
									{proveedor.nombre}
								</option>
							))}
						</select>
					</div>
					<button
						type='submit'
						className='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
						Editar Producto
					</button>
				</form>
			)}
		</>
	);
};
