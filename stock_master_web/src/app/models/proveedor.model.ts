export interface Proveedor {
	id: number;
	nombre: string;
	direccion: string;
	telefono: string;
	email: string;
}

type ProveedorForm = Omit<Proveedor, 'id'>;
