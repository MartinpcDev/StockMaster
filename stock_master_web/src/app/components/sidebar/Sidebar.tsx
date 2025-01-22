'use client';
import { deleteCustomCookie } from '@/app/utils/cookies';
import { DashboardIcon } from './icons/DashboardIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { ProductsIcon } from './icons/ProductsIcon';
import { ProveedorIcon } from './icons/ProveedorIcon';
import { UserIcon } from './icons/UserIcon';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Sidebar: React.FC = ({}) => {
	const router = useRouter();
	const logout = () => {
		deleteCustomCookie('token')
			.then(() => {
				toast.success('Sesion Cerrada Correctamente');
				router.push('/');
			})
			.catch(err => toast.error(err.message));
	};
	return (
		<>
			<aside
				id='default-sidebar'
				className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						<li>
							<Link
								href={'/dashboard'}
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<DashboardIcon />
								<span className='ms-3'>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								href={'/dashboard/proveedores'}
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<ProveedorIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>
									Proveedores
								</span>
							</Link>
						</li>
						<li>
							<Link
								href={'/dashboard/users'}
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<UserIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>Users</span>
							</Link>
						</li>
						<li>
							<Link
								href={'/dashboard/products'}
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<ProductsIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>Productos</span>
							</Link>
						</li>
						<li>
							<button
								onClick={logout}
								className='flex justify-start text-start p-2 rounded-lg text-white hover:bg-gray-700 group w-full'>
								<LogoutIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>
									Cerrar Sesion
								</span>
							</button>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};
