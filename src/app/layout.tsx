import { Nunito } from 'next/font/google';
import './globals.scss';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/navigation';
import { GetServerSideProps } from 'next';

config.autoAddCss = false;

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Blog',
	description: 'Next.js starter app',
};

interface RootLayoutProps {
	children: React.ReactNode;
	pathname: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	// URL yolunu context parametresinden alıyoruz
	const { url } = context.req;

	// Bu bilgiyi props olarak komponente aktarıyoruz
	return {
		props: { pathname: url },
	};
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, pathname }) => {
	// '/science/homepage' yolunu kontrol eder
	const isHomepage = pathname === '/science/homepage';

	return (
		<html lang="en">
			<body className={font.className}>
				{/* Eğer 'science/homepage' sayfası değilse, section içerisinde children render edilir */}
				{!isHomepage && (
					<section className="max-w-screen-xl mx-auto">{children}</section>
				)}
				{/* Eğer 'science/homepage' sayfası ise, direkt children render edilir */}
				{isHomepage && children}
				<Navbar />
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
