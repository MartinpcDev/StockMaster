'use client';

import { Product } from '@/app/models/product.model';
import { extractCustomCookie } from '@/app/utils/cookies';
import { dateFormat } from '@/app/utils/dateFormat';
import { api } from '@/app/utils/http-config';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface TableProps {
	products: Product[];
}

export const ProductTable: React.FC<TableProps> = ({ products }) => {
	const [data, setData] = useState<Product[]>(products);

	useEffect(() => {
		setData(products);
	}, [products]);

	const deletePost = async (id: number) => {
		const token = await extractCustomCookie('token');
		api
			.delete(`/products/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => {
				toast.success(res.data.message);
				setData(prevState => prevState.filter(product => product.id !== id));
			})
			.catch(error => {
				if (error instanceof AxiosError) {
					toast.error(error.response?.data.error);
				}
			});
	};

	return (
		<>
			<div className='relative overflow-x-auto'>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Nombre
							</th>
							<th scope='col' className='px-6 py-3'>
								Descripcion
							</th>
							<th scope='col' className='px-6 py-3'>
								Precio
							</th>
							<th scope='col' className='px-6 py-3'>
								stock
							</th>
							<th scope='col' className='px-6 py-3'>
								categoria
							</th>
							<th scope='col' className='px-6 py-3'>
								Fecha de Ingreso
							</th>
							<th scope='col' className='px-6 py-3'></th>
							<th scope='col' className='px-6 py-3'></th>
						</tr>
					</thead>
					<tbody>
						{data.map(product => (
							<tr
								key={product.id}
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{product.nombre}
								</th>
								<td className='px-6 py-4'>{product.descripcion}</td>
								<td className='px-6 py-4'>{product.precio}</td>
								<td className='px-6 py-4'>{product.stock}</td>
								<td className='px-6 py-4'>{product.categoria}</td>
								<td className='px-6 py-4'>
									{dateFormat(new Date(product.fechaIngreso))}
								</td>
								<td className='px-6 py-4'>
									<Link
										href={`/dashboard/products/${encodeURIComponent(
											product.id
										)}`}
										className='font-medium text-yellow-400 hover:underline'>
										Editar
									</Link>
								</td>
								<td className='px-6 py-4'>
									<button
										onClick={() => deletePost(product.id)}
										className='font-medium text-red-400 hover:underline'>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
