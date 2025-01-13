import { ProductsPageResponse } from '../models/products.model';
import { api } from './http.config';

export interface Params {
	page?: number;
	size?: number;
	category?: string;
	proveedorId?: number;
}

export async function getProducts(
	token: string,
	options?: Params
): Promise<ProductsPageResponse> {
	const response = await api.get<ProductsPageResponse>('/products', {
		params: {
			category: options?.category,
			proveedorId: options?.proveedorId,
			page: options?.page,
			size: options?.size
		},
		headers: { Authorization: `Bearer ${token}` }
	});
	return response.data;
}
