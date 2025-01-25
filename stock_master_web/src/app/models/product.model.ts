export interface Product {
	id: number;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	categoria: string;
	fechaIngreso: string;
}

type ProductForm = Omit<Product, 'id'>;
