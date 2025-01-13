import { ProveedorOnly } from './proveedor.model';

export interface ProductsPageResponse {
	productos: ProductResponse[];
	page: number;
	size: number;
	total: number;
}

export interface ProductResponse {
	id: number;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	categoria: Category;
	fechaIngreso: Date;
	proveedor: ProveedorOnly;
}

export enum Category {
	ELECTRONICOS,
	ALIMENTOS,
	HOGAR,
	VESTIMENTA,
	DEPORTES
}
