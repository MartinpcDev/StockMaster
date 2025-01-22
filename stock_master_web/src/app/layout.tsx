import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from '@/app/utils/fonts';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
	title: 'StockMaster',
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
				{children}
			</body>
		</html>
	);
}
