import type { Metadata } from 'next';
import { montserrat } from '@/utils/fonts';
import { Toaster } from 'sonner';
import { SiderbarButton } from '@/components/sidebar/SiderbarButton';
import { Sidebar } from '@/components/sidebar/Sidebar';

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
				{children}
			</body>
		</html>
	);
}
