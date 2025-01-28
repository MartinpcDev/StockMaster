import type { Metadata } from 'next';
import { montserrat } from '@/app/utils/fonts';
import { Toaster } from 'sonner';
import { SiderbarButton } from '@/app/components/sidebar/SiderbarButton';
import { Sidebar } from '@/app/components/sidebar/Sidebar';

export const metadata: Metadata = {
	title: 'StockMaster Dashboard',
	description: 'tu sistema de inventario'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} antialiased`}>
				<Toaster position='top-right' richColors />
				<SiderbarButton />
				<Sidebar />
				<section className='p-4 sm:ml-64 h-screen'>
					<div className='flex flex-col justify-center p-4 border-2 rounded-lg border-gray-700 bg-gray-950 h-full'>
						{children}
					</div>
				</section>
			</body>
		</html>
	);
}
