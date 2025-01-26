export interface Proveedor {
	id: number;
	nombre: string;
	direccion: string;
	telefono: string;
	email: string;
}

export type ProveedorFormType = Omit<Proveedor, 'id'>;
