import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProductsPageResponse } from '../models/products.model';
import { getProducts } from '../api/product.service';
import { ErrorResponse } from '../models/error.model';
import { AxiosError } from 'axios';

export const DashboardPage: React.FC = () => {
	const { logout } = useAuth();
	const [productPage, setProductPage] = useState<ProductsPageResponse>();
	const [error, setError] = useState<ErrorResponse>();
	const token: string = localStorage.getItem('token')!;

	useEffect(() => {
		getProducts(token, { proveedorId: 2 })
			.then(products => setProductPage(products))
			.catch(err => {
				if (err instanceof AxiosError) {
					setError(err.response?.data);
				}
			});
	}, [token]);

	return (
		<>
			<h1>DashboardPage</h1>
			<button onClick={logout} className='p-2 bg-red-500 text-white rounded'>
				Logout
			</button>
			{productPage?.productos.map(product => (
				<h1 key={product.id}>{product.nombre}</h1>
			))}
			{error && <span>{error.message}</span>}
		</>
	);
};
