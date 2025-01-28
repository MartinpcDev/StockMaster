import { Loading } from '@/app/components/common/Loading';
import { ProveedorTable } from '@/app/components/proveedores/ProveedorTable';
import { extractCustomCookie } from '@/app/utils/cookies';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function ProveedorPage({}) {
	const token = (await extractCustomCookie('token')).toString();

	return (
		<>
			<div className='flex justify-end'>
				<Link
					href={'/dashboard/proveedores/nuevoProveedor'}
					type='button'
					className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors'>
					Agregar Proveedor
				</Link>
			</div>
			<Suspense fallback={<Loading />}>
				<ProveedorTable token={token} />
			</Suspense>
		</>
	);
}
