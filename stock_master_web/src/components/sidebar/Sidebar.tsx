import { DashboardIcon } from './icons/DashboardIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { ProductsIcon } from './icons/ProductsIcon';
import { ProveedorIcon } from './icons/ProveedorIcon';
import { UserIcon } from './icons/UserIcon';

export const Sidebar: React.FC = ({}) => {
	return (
		<>
			<aside
				id='default-sidebar'
				className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'>
				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						<li>
							<a
								href='#'
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<DashboardIcon />
								<span className='ms-3'>Dashboard</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<ProveedorIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>
									Proveedores
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<UserIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>Users</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<ProductsIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>Productos</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group'>
								<LogoutIcon />
								<span className='flex-1 ms-3 whitespace-nowrap'>
									Cerrar Sesion
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
};
