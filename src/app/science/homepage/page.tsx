'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from './styles.module.scss';

const font = Nunito({ subsets: ['latin'] });

const HomePage = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<html lang="en">
			<body className={font.className}>
				<div className={`${styles.logoContainer}`}>
					<Image
						src="/assets/logo/mainLogo.png"
						alt="Logo"
						layout="fill"
						objectFit="cover"
					></Image>
				</div>
				<div className="flex w-full h-screen">
					<div className="relative flex-1 h-full">
						<div className={`${styles.homepage_text}`}>OYUN</div>
						<Image
							src="/images/science/homepage/1.png"
							alt="OYUN"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="relative flex-1 h-full">
						<div className={`${styles.homepage_text}`}>EĞİTİM</div>
						<Image
							src="/images/science/homepage/2.png"
							alt="EĞİTİM"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="relative flex-1 h-full">
						<div className={`${styles.homepage_text}`}>YARIŞMA</div>
						<Image
							src="/images/science/homepage/3.png"
							alt="YARIŞMA"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
			</body>
		</html>
	);
};

export default HomePage;
