'use client';

import { Proveedor } from '@/app/models/proveedor.model';
import { extractCustomCookie } from '@/app/utils/cookies';
import { api } from '@/app/utils/http-config';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProveedorTableProps {
	proveedores: Proveedor[];
}

export const ProveedorTable: React.FC<ProveedorTableProps> = ({
	proveedores
}) => {
	const [data, setData] = useState<Proveedor[]>(proveedores);

	const deletePost = async (id: number) => {
		const token = await extractCustomCookie('token');
		api
			.delete(`/proveedores/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => {
				toast.success(res.data.message);
				setData(prevState =>
					prevState.filter(proveedor => proveedor.id !== id)
				);
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
								Direccion
							</th>
							<th scope='col' className='px-6 py-3'>
								Telefono
							</th>
							<th scope='col' className='px-6 py-3'>
								Email
							</th>
							<th scope='col' className='px-6 py-3'></th>
							<th scope='col' className='px-6 py-3'></th>
						</tr>
					</thead>
					<tbody>
						{data.map(proveedor => (
							<tr
								key={proveedor.id}
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{proveedor.nombre}
								</th>
								<td className='px-6 py-4'>{proveedor.direccion}</td>
								<td className='px-6 py-4'>{proveedor.telefono}</td>
								<td className='px-6 py-4'>{proveedor.email}</td>
								<td className='px-6 py-4'>
									<Link
										href={`/dashboard/proveedores/${encodeURIComponent(
											proveedor.id
										)}`}
										className='font-medium text-yellow-400 hover:underline'>
										Editar
									</Link>
								</td>
								<td className='px-6 py-4'>
									<button
										onClick={() => deletePost(proveedor.id)}
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
