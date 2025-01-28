import { Loading } from '@/app/components/common/Loading';
import { ProductForm } from '@/app/components/products/ProductForm';
import { extractCustomCookie } from '@/app/utils/cookies';
import { api } from '@/app/utils/http-config';
import { Suspense } from 'react';
export default async function NewProductpage() {
	const token = (await extractCustomCookie('token')).toString();
	const proveedores = await api.get('/proveedores?size=50', {
		headers: { Authorization: `Bearer ${token}` }
	});
	return (
		<>
			<Suspense fallback={<Loading />}>
				<ProductForm proveedores={proveedores.data.proveedores} token={token} />
			</Suspense>
		</>
	);
}
