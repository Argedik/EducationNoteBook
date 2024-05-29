import Image from 'next/image';
import React from 'react';
import styles from './logo.module.scss';

const ScienceLogo = () => {
	return (
		<div className={`${styles.logoContainer}`}>
			<Image
				src="/assets/logo/mainLogo.png"
				alt="ScienceLogo"
				layout="fill"
				objectFit="cover"
			></Image>
		</div>
	);
};

export default ScienceLogo;
