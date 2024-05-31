import Image from 'next/image';
import React from 'react';
import styles from './logo.module.scss';
interface ScienceLogoProps {
	className?: string;
}

const ScienceLogo: React.FC<ScienceLogoProps> = ({ className }) => {
	return (
		<div className={`${styles.logoContainer} ${className} relative`}>
			<Image
				src="/assets/logo/mainLogo.png"
				alt="ScienceLogo"
				layout="fill"
				objectFit="cover"
				className={styles.customImage}
			></Image>
		</div>
	);
};

export default ScienceLogo;
