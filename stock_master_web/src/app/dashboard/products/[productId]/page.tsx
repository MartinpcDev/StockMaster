import { Loading } from '@/app/components/common/Loading';
import { EditProductForm } from '@/app/components/products/EditProductForm';
import { extractCustomCookie } from '@/app/utils/cookies';
import { api } from '@/app/utils/http-config';
import { Suspense } from 'react';

export default async function EditProductPage({
	params
}: {
	params: Promise<{ productId: string }>;
}) {
	const id = (await params).productId;
	const token = (await extractCustomCookie('token')).toString();
	const product = await api.get(`/products/${id}`, {
		headers: { Authorization: `Bearer ${token.toString()}` }
	});
	const proveedores = await api.get('/proveedores', {
		headers: { Authorization: `Bearer ${token}` }
	});
	return (
		<>
			<Suspense fallback={<Loading />}>
				<EditProductForm
					product={product.data}
					token={token}
					id={id}
					proveedores={proveedores.data.proveedores}
				/>
			</Suspense>
		</>
	);
}
