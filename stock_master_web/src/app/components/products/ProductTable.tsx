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
	token: string;
}

export const ProductTable: React.FC<TableProps> = ({ token }) => {
	const [data, setData] = useState<Product[]>([]);
	const [page, setPage] = useState<number>(0);
	const [total, setTotal] = useState<number>(1);
	const [size, setSize] = useState<number>(0);
	const [totalPages, setTotalPages] = useState<number>(0);

	useEffect(() => {
		async function getData() {
			try {
				const response = await api.get(`/products?page=${page}`, {
					headers: { Authorization: `Bearer ${token}` }
				});
				setData(response.data.productos);
				setPage(response.data.page);
				setSize(response.data.size);
				setTotal(response.data.total);
				setTotalPages(Math.ceil(total / size));
			} catch (error) {
				if (error instanceof AxiosError) {
					toast.error(error.response?.data.error);
				}
			}
		}
		getData();
	}, [page, token, size, total]);

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

	const handleNextPage = () => {
		if (page < totalPages - 1) {
			setPage(prevPage => prevPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (page > 0) {
			setPage(prevPage => prevPage - 1);
		}
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
				<div className='flex justify-center items-center my-5'>
					<button
						onClick={handlePreviousPage}
						disabled={page === 0}
						className='flex items-center justify-center px-3 h-8 text-sm font-medium border  rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'>
						Previous
					</button>
					<button
						onClick={handleNextPage}
						disabled={page === totalPages}
						className='flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium border rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'>
						Next
					</button>
				</div>
			</div>
		</>
	);
};
