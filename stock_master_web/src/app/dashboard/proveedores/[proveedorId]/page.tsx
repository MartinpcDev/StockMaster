import { Loading } from '@/app/components/common/Loading';
import { EditProveedorForm } from '@/app/components/proveedores/EditProveedorForm';
import { extractCustomCookie } from '@/app/utils/cookies';
import { api } from '@/app/utils/http-config';
import { Suspense } from 'react';

export default async function EditProveedorPage({
	params
}: {
	params: Promise<{ proveedorId: string }>;
}) {
	const id = (await params).proveedorId;
	const token = await extractCustomCookie('token');
	const proveedor = await api.get(`/proveedores/${id}`, {
		headers: { Authorization: `Bearer ${token.toString()}` }
	});

	return (
		<>
			<Suspense fallback={<Loading />}>
				<EditProveedorForm
					proveedor={proveedor.data}
					token={token.toString()}
					id={id}
				/>
			</Suspense>
		</>
	);
}
