import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
	title: 'Star Wars Guide',
	description: 'Star Wars Guide Project'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased text-white`}>
				<div className='stars' />
				<div className='twinkling' />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
