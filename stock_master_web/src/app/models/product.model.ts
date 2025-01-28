import { Proveedor } from './proveedor.model';

export interface Product {
	id: number;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	categoria: string;
	fechaIngreso: string;
	proveedor: Proveedor;
}

type ProductForm = Omit<Product, 'id' | 'fechaIngreso'>;

export type ProductTypeForm = ProductForm & {
	proveedorId: number;
};

export const productCategory = [
	'ELECTRONICOS',
	'ALIMENTOS',
	'HOGAR',
	'VESTIMENTA',
	'DEPORTES'
];

export interface ProductData {
	products: Product[];
	page: number;
	size: number;
	total: number;
}
