import { ProveedorForm } from '@/app/components/proveedores/ProveedorForm';
import { extractCustomCookie } from '@/app/utils/cookies';

export default async function NuevoProveedorPage({}) {
	const token = await extractCustomCookie('token');
	return (
		<>
			<ProveedorForm token={token.toString()} />
		</>
	);
}
