import { Product } from '@/models/product.model';
import { dateFormat } from '@/utils/dateFormat';

interface TableProps {
	products: Product[];
}

export const ProductTable: React.FC<TableProps> = ({ products }) => {
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
						</tr>
					</thead>
					<tbody>
						{products.map(product => (
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
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
