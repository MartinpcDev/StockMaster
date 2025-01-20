import { ProductTable } from '@/components/products/ProductTable';
import { extractCustomCookie } from '@/utils/cookies';
import { api } from '@/utils/http-config';

export default async function DashboardPage({}) {
	const token = await extractCustomCookie('token');
	const products = await api.get('/products', {
		headers: { Authorization: `Bearer ${token}` }
	});
	return (
		<>
			<section className='p-4 sm:ml-64 h-screen'>
				<div className='p-4 border-2 rounded-lg border-gray-700 bg-gray-950 h-full'>
					<ProductTable products={products.data.productos} />
				</div>
			</section>
		</>
	);
}
