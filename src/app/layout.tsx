import { Nunito } from 'next/font/google';
import './globals.scss';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Blog',
	description: 'Next.js starter app',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
