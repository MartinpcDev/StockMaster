import { Loading } from '@/app/components/common/Loading';
import { ProductTable } from '@/app/components/products/ProductTable';
import { extractCustomCookie } from '@/app/utils/cookies';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function ProductsPage() {
	const token = (await extractCustomCookie('token')).toString();

	return (
		<>
			<div className='flex justify-end'>
				<Link
					href={'/dashboard/products/nuevoProducto'}
					type='button'
					className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors'>
					Agregar Producto
				</Link>
			</div>
			<Suspense fallback={<Loading />}>
				<ProductTable token={token} />
			</Suspense>
		</>
	);
}
